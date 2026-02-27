import { useEffect, useState } from "preact/hooks";

import LiveBoardIsland from "./LiveBoardIsland.tsx";

import type { Game, Round } from "./LiveBoardIsland.tsx";

const TOURNAMENT_ID = "GGjvzgTh";
const POLL_INTERVAL = 5000;

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default function LiveBoardsIsland() {
  const [rounds, setRounds] = useState<Round[]>([]);
  const [currentRound, setCurrentRound] = useState<Round | null>(null);
  const [games, setGames] = useState<Game[]>([]);
  const [isLoadingRound, setIsLoadingRound] = useState(true);

  useEffect(() => {
    async function init() {
      const res = await fetch(
        `https://lichess.org/api/broadcast/${TOURNAMENT_ID}`,
      );
      const data = await res.json();

      await sleep(300 + Math.random() * 400);

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

      await sleep(300 + Math.random() * 400);

      setGames(data.games);
      setIsLoadingRound(false);

      timeout = window.setTimeout(poll, POLL_INTERVAL);
    }

    poll();

    return () => clearTimeout(timeout);
  }, [currentRound]);

  return (
    <div class="flex flex-col gap-4">
      <select
        class="bg-white text-gray-600 text-base rounded-full px-4 py-2 shadow-md h-fit w-fit"
        value={currentRound?.id}
        onChange={(e) => {
          const r = rounds.find(r => r.id === e.currentTarget.value);
          if (r) {
            setCurrentRound(r);
            setGames([]);
            setIsLoadingRound(true);
          }
        }}
      >
        {currentRound ? (
          rounds.map((r, i) => (
            <option value={r.id}>
              Ronda {i + 1}
            </option>
          ))
        ) : (
          <option>Cargando rondas...</option>
        )}
      </select>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        {isLoadingRound ? (Array.from({ length: 6 }).map((_, i) => (
          <LiveBoardIsland
            key={`skeleton-${i}`}
            game={{ id: `skeleton-${i}` }}
            round={currentRound!}
            index={i}
            mode="skeleton"
          />
        ))) : (games.map((game, i) => (
          <LiveBoardIsland
            key={game.id}
            game={game}
            round={currentRound!}
            index={i}
          />
        )))}
      </div>
    </div>
  );
}
