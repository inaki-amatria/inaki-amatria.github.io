import { useEffect, useRef } from "preact/hooks";
import { Chessground } from "@lichess-org/chessground";

import type { Api } from "@lichess-org/chessground/api";
import type { Key } from "@lichess-org/chessground/types";

import "./LiveBoardIsland.css";

export interface Round {
  id: string;
  slug: string;
  url: string;
}

export interface Player {
  name?: string;
  title?: string;
  rating?: number;
}

export interface Game {
  id: string;
  fen?: string;
  lastMove?: string;
  check?: "+" | "#";
  players?: Player[];
  status?: string;
}

function parseLastMove(move?: string): Key[] | undefined {
  if (!move || move.length < 4) {
    return;
  }
  return [move.slice(0, 2), move.slice(2, 4)] as Key[];
}

function sideToMove(fen: string): "white" | "black" | undefined {
  // FEN: "pieces side castling enpassant halfmove fullmove"
  const parts = fen.split(" ");
  if (parts.length < 2) {
    return;
  }
  return parts[1] === "w" ? "white" : "black";
}

function chessgroundCheck(
  fen?: string,
  check?: "+" | "#",
): "white" | "black" | undefined {
  if (!fen || !check) {
    return;
  }
  return sideToMove(fen);
}

export default function LiveBoard({
  game,
  round,
  index,
  mode = "live",
}: {
  game: Game;
  round: Round;
  index: number;
  mode?: "live" | "skeleton";
}) {
  const boardRef = useRef<HTMLDivElement>(null);
  const cgRef = useRef<Api | null>(null);

  useEffect(() => {
    if (mode === "skeleton" || !boardRef.current) {
      return;
    }

    cgRef.current = Chessground(boardRef.current, {
      fen: game.fen,
      viewOnly: true,
      coordinates: false,
      check: chessgroundCheck(game.fen, game.check),
    });

    return () => {
      cgRef.current?.destroy();
      cgRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (mode === "skeleton" || !cgRef.current || !game.fen) {
      return;
    }

    cgRef.current.set({
      fen: game.fen,
      lastMove: parseLastMove(game.lastMove),
      check: chessgroundCheck(game.fen, game.check),
    });
  }, [game.fen, game.lastMove]);

  const white = game.players?.[0];
  const black = game.players?.[1];

  const finished = game.status && game.status !== "*";

  return (
    <div
      class={[
        "flex flex-col bg-white rounded-3xl shadow-lg gap-4 p-4",
        mode === "skeleton" && "animate-pulse",
      ].join(" ")}
    >
      <span class="text-sm font-bold uppercase tracking-widest text-blue-900">
        Mesa {index + 1}
      </span>

      {/* Black */}
      <div class="flex items-center justify-between gap-4">
        <h3 class="flex-1 truncate text-gray-600">
          <span class="text-blue-900 font-bold">
            {mode === "skeleton" ? "" : black?.title}
          </span>{" "}
          {mode === "skeleton" ? "Negro" : black?.name ?? "Negro"}
        </h3>
        <span class="text-blue-900">
          {mode === "skeleton" ? "0" : black?.rating ?? 0}
        </span>
      </div>

      {/* Board */}
      <div class="relative aspect-square bg-gray-50 rounded-lg overflow-hidden shadow-inner">
        {mode === "skeleton" ? (
          <div class="w-full h-full bg-gray-200" />
        ) : (
          <div ref={boardRef} class="w-full h-full" />
        )}
        {mode === "live" && (
          <div
            class={[
              "absolute inset-0 bg-blue-900/20 flex items-center justify-center z-20 transition-opacity duration-500",
              finished ? "opacity-100" : "opacity-0 pointer-events-none",
            ].join(" ")}
          >
            <span class="text-6xl font-bold text-white drop-shadow-lg">
              {game.status?.replace("-", " - ")}
            </span>
          </div>
        )}
      </div>

      {/* White */}
      <div class="flex items-center justify-between gap-4">
        <h3 class="flex-1 truncate text-gray-600">
          <span class="text-blue-900 font-bold">
            {mode === "skeleton" ? "" : white?.title}
          </span>{" "}
          {mode === "skeleton" ? "Blanco" : white?.name ?? "Blanco"}
        </h3>
        <span class="text-blue-900">
          {mode === "skeleton" ? "0" : white?.rating ?? 0}
        </span>
      </div>

      <a
        class="link text-xs self-end"
        href={mode === "skeleton" ? "#" : `${round.url}/${game.id}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver en Lichess
      </a>
    </div>
  );
}
