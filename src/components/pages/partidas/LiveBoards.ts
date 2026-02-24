import {Chessground} from '@lichess-org/chessground';
import type {Api} from '@lichess-org/chessground/api';
import type {Key} from '@lichess-org/chessground/types';

/* =======================
 * Types
 * ======================= */

interface Board {
  cg: Api;
  container: HTMLElement;
}

interface Round {
  id: string;
  slug: string;
  url: string;
}

interface Player {
  name?: string;
  title?: string;
  rating?: number;
}

interface Game {
  id: string;
  fen?: string;
  lastMove?: string;
  players?: Player[];
  status?: string;
}

/* =======================
 * Constants & State
 * ======================= */

const TOURNAMENT_ID = 'GGjvzgTh';
const POLL_INTERVAL = 5000;

const activeBoards: Record<string, Board> = {};

let currentRoundId = '';
let currentRoundSlug = '';
let timeoutId: number|undefined;

/* =======================
 * DOM
 * ======================= */

const select =
    document.getElementById('round-select') as HTMLSelectElement | null;
const grid = document.getElementById('broadcast-grid') as HTMLDivElement | null;
const template =
    document.getElementById('board-template') as HTMLTemplateElement | null;

if (!select || !grid || !template) {
  throw new Error('LiveBoards: required DOM elements not found');
}

/* =======================
 * Helpers
 * ======================= */

function resetBoards() {
  grid!.innerHTML = '';
  Object.keys(activeBoards).forEach((id) => delete activeBoards[id]);
}

function parseLastMove(move?: string): Key[]|undefined {
  if (!move || move.length < 4) {
    return;
  }

  return [
    move.slice(0, 2),
    move.slice(2, 4),
  ] as Key[];
}

function createBoard(game: Game, round: Round, index: number) {
  const fragment = template!.content.cloneNode(true) as DocumentFragment;
  const board = fragment.querySelector('.board') as HTMLElement;

  fragment.querySelector('.board-number')!.textContent = `Mesa ${index + 1}`;

  const blackPlayer: Player|undefined =
      game.players && game.players.length == 2 ? game.players[1] : undefined;
  fragment.querySelector('.player-black-title')!.textContent =
      blackPlayer?.title ?? '';
  fragment.querySelector('.player-black-name')!.textContent =
      blackPlayer?.name ?? 'Negro';
  fragment.querySelector('.player-black-rating')!.textContent =
      blackPlayer?.rating?.toString() ?? '0';

  const cgBoard = fragment.querySelector('.cg-board') as HTMLElement;

  const whitePlayer: Player|undefined =
      game.players && game.players.length == 2 ? game.players[0] : undefined;
  fragment.querySelector('.player-white-title')!.textContent =
      whitePlayer?.title ?? '';
  fragment.querySelector('.player-white-name')!.textContent =
      whitePlayer?.name ?? 'Blanco';
  fragment.querySelector('.player-white-rating')!.textContent =
      whitePlayer?.rating?.toString() ?? '0';

  fragment.querySelector<HTMLAnchorElement>('a')!.href =
      `${round.url}/${game.id}`

  grid!.appendChild(fragment);

  activeBoards[game.id] = {
    cg: Chessground(cgBoard, {
      fen: game.fen,
      viewOnly: true,
      coordinates: false,
    }),
    container: board,
  };
}

function updateBoardPosition(board: Board, game: Game) {
  if (!game.fen) {
    return;
  }

  board.cg.set({
    fen: game.fen,
    lastMove: parseLastMove(game.lastMove),
  });

  const overlay =
      board.container.querySelector('.board-overlay') as HTMLElement;
  if (game.status && game.status !== '*') {
    overlay.querySelector('.board-result')!.textContent =
        game.status.replace('-', ' - ');
    overlay.classList.remove('opacity-0');
    overlay.classList.add('pointer-events-auto');
  } else {
    overlay.classList.add('opacity-0');
    overlay.classList.remove('pointer-events-auto');
  }
}

/* =======================
 * Main logic
 * ======================= */

async function initTournament() {
  try {
    const res = await fetch(
        `https://lichess.org/api/broadcast/${TOURNAMENT_ID}`,
    );
    const {rounds}: {rounds: Round[]} = await res.json();

    if (!rounds.length) {
      return;
    }

    select!.innerHTML = rounds
                            .map(
                                (r, i) => `<option value="${r.id}" data-slug="${
                                    r.slug}">Ronda ${i + 1}</option>`,
                                )
                            .join('');

    ({id: currentRoundId, slug: currentRoundSlug} = rounds[0]);
    select!.value = currentRoundId;

    select!.addEventListener('change', () => {
      const option = select!.selectedOptions[0];
      currentRoundId = select!.value;
      currentRoundSlug = option.getAttribute('data-slug') ?? '';
      resetBoards();
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      updateAllBoards();
    });

    updateAllBoards();
  } catch (err) {
    console.error('initTournament failed:', err);
  }
}

async function updateAllBoards() {
  try {
    const res = await fetch(
        `https://lichess.org/api/broadcast/${TOURNAMENT_ID}/${
            currentRoundSlug}/${currentRoundId}`,
    );
    const {games, round}: {games: Game[], round: Round} = await res.json();

    if (grid!.querySelector('.animate-pulse')) {
      grid!.innerHTML = '';
    }

    games.forEach((game, index) => {
      if (!activeBoards[game.id]) {
        createBoard(game, round, index);
      }
      updateBoardPosition(activeBoards[game.id], game);
    });
  } catch (err) {
    console.error('updateAllBoards failed:', err);
  }

  timeoutId = window.setTimeout(updateAllBoards, POLL_INTERVAL);
}

/* =======================
 * Bootstrap
 * ======================= */

initTournament();
