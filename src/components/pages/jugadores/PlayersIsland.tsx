import { useState, useEffect } from "preact/hooks";

const URLS = {
  masters: "https://chess-results.com/tnr1360196.aspx?lan=0&art=0&turdet=YES&flag=30&SNode=S0",
  amateur: "https://chess-results.com/tnr1360195.aspx?lan=0&art=0&turdet=YES&flag=30&SNode=S0",
};

interface Player {
  rank: string;
  title: string;
  name: string;
  elo: string;
  fed: string;
  fideId: string;
}

function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchPlayers(group: "masters" | "amateur"): Promise<Player[]> {
  const targetUrl = encodeURIComponent(URLS[group]);
  const res = await fetch(`https://corsproxy.io/?${targetUrl}`);
  const html = await res.text();

  await sleep(300 + Math.random() * 400);

  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");

  const table = doc.querySelector("table.CRs1");
  if (!table) {
    return [];
  }

  const rows = Array.from(table.querySelectorAll("tr")).slice(1); // skip header

  return rows
    .map((row) => {
      const cells = Array.from(row.querySelectorAll("td"));
      if (cells.length < 7) {
        return null;
      }
      return {
        rank: cells[0]?.textContent?.trim() ?? "",
        title: cells[2]?.textContent?.trim() ?? "",
        name: cells[3]?.textContent?.trim() ?? "",
        fideId: cells[4]?.textContent?.trim() ?? "",
        fed: cells[5]?.textContent?.trim() ?? "",
        elo: cells[6]?.textContent?.trim() ?? "",
      };
    })
    .filter((p): p is Player => p !== null && p.name !== "");
}

export default function PlayersIsland() {
  const [group, setGroup] = useState<"masters" | "amateur">("masters");
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetchPlayers(group)
      .then((data) => {
        setPlayers(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, [group]);

  return (
    <div class="flex flex-col gap-4">
      {/* Selector de grupo */}
      <div class="flex gap-4">
        <button
          onClick={() => setGroup("masters")}
          class={`cursor-pointer ${group === "masters" ? "button-primary" : "button-secondary"}`}
        >
          Grupo A
        </button>
        <button
          onClick={() => setGroup("amateur")}
          class={`cursor-pointer ${group === "amateur" ? "button-primary" : "button-secondary"}`}
        >
          Grupo B
        </button>
      </div>

      {/* Tabla */}
      <div class="card overflow-hidden">
        {/* Cabecera — solo desktop */}
        <div class="hidden sm:grid grid-cols-[3rem_4rem_1fr_5rem_4rem] table-header">
          <span class="table-header-cell">Nº</span>
          <span class="table-header-cell">Tít.</span>
          <span class="table-header-cell">Nombre</span>
          <span class="table-header-cell">ELO</span>
          <span class="table-header-cell">Fed.</span>
        </div>

        {loading && (
          <div class="flex flex-col gap-2 px-6 py-3">
            {Array.from({ length: 10 }).map((_, i) => (
              <div key={i} class="h-8 bg-gray-100 rounded-xl animate-pulse" />
            ))}
          </div>
        )}

        {error && (
          <div class="px-6 py-3 text-gray-600 text-sm">
            No se ha podido cargar la lista de jugadores. Inténtalo más tarde.
          </div>
        )}

        {!loading && !error && players.length === 0 && (
          <div class="px-6 py-3 text-gray-600 text-sm">
            No hay jugadores inscritos todavía.
          </div>
        )}

        {!loading && !error && players.map((player, i) => (
          <div
            key={player.fideId || i}
            class="flex items-center sm:grid sm:grid-cols-[3rem_4rem_1fr_5rem_4rem] px-6 py-3 hover:bg-blue-50 transition-colors"
          >
            <span class="text-blue-900 font-bold text-sm w-8 flex-shrink-0">{player.rank}</span>
            <span class="!hidden sm:!block table-cell">
              {player.title && <span class="text-blue-900 font-bold">{player.title}</span>}
            </span>
            <div class="flex flex-col min-w-0 flex-1">
              <span class="text-gray-600 text-sm truncate">
                {player.title && <span class="text-blue-900 font-bold sm:hidden">{player.title} </span>}
                {player.name}
              </span>
              <span class="text-gray-400 text-xs sm:hidden">{player.fed} · {player.elo}</span>
            </div>
            <span class="!hidden sm:!block table-cell">{player.elo}</span>
            <span class="!hidden sm:!block table-cell">{player.fed}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
