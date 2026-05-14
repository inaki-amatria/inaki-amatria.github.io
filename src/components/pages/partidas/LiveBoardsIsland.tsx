import { useEffect, useState } from "preact/hooks";

import type { Lang } from "@i18n/config.ts";
import { useTranslations } from "@i18n/ui.ts";

import LiveBoardIsland from "./LiveBoardIsland.tsx";
import type { Game, Round } from "./LiveBoardIsland.tsx";

const TOURNAMENT_ID = "GGjvzgTh";
const POLL_INTERVAL = 5000;

interface Props {
  lang: Lang;
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export default function LiveBoardsIsland({ lang }: Props) {
  const t = useTranslations(lang);

  const [rounds, setRounds] = useState<Round[]>([]);
  const [currentRound, setCurrentRound] = useState<Round | null>(null);
  const [games, setGames] = useState<Game[]>([]);
  const [isLoadingRound, setIsLoadingRound] = useState(true);

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://lichess.org/api/broadcast/${TOURNAMENT_ID}`,
      );
      const data = await res.json();

      await sleep(300 + Math.random() * 400);

      setRounds(data.rounds);
      setCurrentRound(data.rounds[0]);
    })();
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
        class="bg-white text-gray-600 text-base rounded-full px-4 py-2 shadow-md w-fit"
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
              {t('LiveBoardsIsland.round')} {i + 1}
            </option>
          ))
        ) : (
          <option>{t('LiveBoardsIsland.loadingRounds')}</option>
        )}
      </select>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoadingRound ? (Array.from({ length: 6 }).map((_, i) => (
          <LiveBoardIsland
            lang={lang}
            key={`skeleton-${i}`}
            game={{ id: `skeleton-${i}` }}
            round={currentRound!}
            index={i}
            mode="skeleton"
          />
        ))) : (games.map((game, i) => (
          <LiveBoardIsland
            lang={lang}
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
