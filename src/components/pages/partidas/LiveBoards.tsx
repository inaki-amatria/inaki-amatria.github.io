import { useEffect, useState, useRef } from "preact/hooks";
import { Chessground } from "@lichess-org/chessground";
import type { Api } from "@lichess-org/chessground/api";
import type { Key } from "@lichess-org/chessground/types";

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

const TOURNAMENT_ID = "GGjvzgTh";
const POLL_INTERVAL = 5000;

function parseLastMove(move?: string): Key[] | undefined {
  if (!move || move.length < 4) {
    return;
  }
  return [move.slice(0, 2), move.slice(2, 4)] as Key[];
}

function LiveBoard({
  game,
  round,
  index,
}: {
  game: Game;
  round: Round;
  index: number;
}) {
  const boardRef = useRef<HTMLDivElement>(null);
  const cgRef = useRef<Api | null>(null);

  useEffect(() => {
    if (!boardRef.current) {
      return;
    }

    cgRef.current = Chessground(boardRef.current, {
      fen: game.fen,
      viewOnly: true,
      coordinates: false,
    });

    return () => {
      cgRef.current?.destroy();
      cgRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!cgRef.current || !game.fen) {
      return;
    }

    cgRef.current.set({
      fen: game.fen,
      lastMove: parseLastMove(game.lastMove),
    });
  }, [game.fen, game.lastMove]);

  const white = game.players?.[0];
  const black = game.players?.[1];

  const finished = game.status && game.status !== "*";

  return (
    <div class="flex flex-col bg-white rounded-3xl shadow-lg gap-4 p-4">
      <span class="text-xs font-bold uppercase tracking-widest text-blue-900">
        Mesa {index + 1}
      </span>

      {/* Black */}
      <div class="flex items-center justify-between gap-4">
        <h3 class="flex-1 truncate text-gray-600 font-bold font-serif italic">
          <span class="text-blue-900">{black?.title}</span>{" "}
          {black?.name ?? "Negro"}
        </h3>
        <span class="text-blue-900 font-serif font-bold">
          {black?.rating ?? 0}
        </span>
      </div>

      {/* Board */}
      <div class="relative aspect-square bg-gray-50 rounded-lg overflow-hidden shadow-inner">
        <div ref={boardRef} class="w-full h-full" />

        <div
          class={[
            "absolute inset-0 bg-blue-900/20 flex items-center justify-center z-20 transition-opacity duration-500",
            finished ? "opacity-100" : "opacity-0 pointer-events-none",
          ].join(" ")}
        >
          <span class="text-6xl font-bold font-serif text-white drop-shadow-lg">
            {game.status?.replace("-", " - ")}
          </span>
        </div>
      </div>

      {/* White */}
      <div class="flex items-center justify-between gap-4">
        <h3 class="flex-1 truncate text-gray-600 font-bold font-serif italic">
          <span class="text-blue-900">{white?.title}</span>{" "}
          {white?.name ?? "Blanco"}
        </h3>
        <span class="text-blue-900 font-serif font-bold">
          {white?.rating ?? 0}
        </span>
      </div>

      <a
        class="text-xs text-gray-600 hover:text-blue-900 self-end"
        href={`${round.url}/${game.id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver en Lichess
      </a>
    </div>
  );
}

export default function LiveBoards() {
  const [rounds, setRounds] = useState<Round[]>([]);
  const [currentRound, setCurrentRound] = useState<Round | null>(null);
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    async function init() {
      const res = await fetch(
        `https://lichess.org/api/broadcast/${TOURNAMENT_ID}`,
      );
      const data = await res.json();

      setRounds(data.rounds);
      setCurrentRound(data.rounds[0]);
    }

    init();
  }, []);

  useEffect(() => {
    if (!currentRound) {
      return;
    }

    let timeout: number;

    async function poll() {
      const res = await fetch(
        `https://lichess.org/api/broadcast/${TOURNAMENT_ID}/${currentRound!.slug}/${currentRound!.id}`,
      );
      const data = await res.json();

      setGames(data.games);

      timeout = window.setTimeout(poll, POLL_INTERVAL);
    }

    poll();

    return () => clearTimeout(timeout);
  }, [currentRound]);

  return (
    <section class="mb-12">
      <div class="flex flex-col gap-4">
        <h2 class="text-3xl md:text-4xl font-bold text-blue-900">
          Sigue el torneo en directo
        </h2>

        <select
          class="bg-white text-gray-600 text-base rounded-full px-4 py-2 font-bold shadow-md h-fit w-fit"
          value={currentRound?.id}
          onChange={(e) => {
            const r = rounds.find(r => r.id === e.currentTarget.value);
            if (r) {
              setCurrentRound(r);
            }
          }}
        >
          {rounds.length === 0 ? (
            <option>Cargando rondas...</option>
          ) : (
            rounds.map((r, i) => (
              <option value={r.id}>
                Ronda {i + 1}
              </option>
            ))
          )}
        </select>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          {games.map((game, i) => (
            <LiveBoard
              key={game.id}
              game={game}
              round={currentRound!}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
