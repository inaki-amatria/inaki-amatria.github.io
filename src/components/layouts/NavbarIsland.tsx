import { useState, useEffect, useRef } from "preact/hooks";

import "./NavbarIsland.css";

const links = [
  { href: "/", label: "Inicio" },
  { href: "/bases", label: "Bases técnicas" },
  { href: "/premios", label: "Premios" },
  { href: "/jugadores", label: "Jugadores" },
  { href: "/partidas", label: "Partidas" },
  { href: "/alojamiento", label: "Alojamiento" },
  { href: "/fotos", label: "Fotos" },
  { href: "/noticias", label: "Noticias" },
  { href: "/contacto", label: "Contacto" },
];

const featuredLinks = [
  { href: "/bases", label: "Bases técnicas" },
  { href: "/premios", label: "Premios" },
  { href: "/jugadores", label: "Jugadores" },
  { href: "/partidas", label: "Partidas" },
];

export default function NavbarIsland() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleNavigate() {
      setOpen(false);
    }
    document.addEventListener("astro:page-load", handleNavigate);
    return () => document.removeEventListener("astro:page-load", handleNavigate);
  }, []);

  return (
    <nav class="flex justify-between items-center gap-8 pt-6 pb-12">
      {/* Logo */}
      <a href="/" class="flex items-center gap-2 flex-shrink-0">
        <svg
          version="1.1"
          viewBox="0 0 99.167999 141.43762"
          class="w-12 h-12 fill-blue-900 flex-none"
        >
          <g transform="translate(-353.46201,-837.0713)">
            <path
              d="m 0,0 c -6.345,-4.46 -7.833,-13.709 -3.413,-18.862 0.781,-0.911 3,-1.803 3.656,-1.364 1.564,1.049 2.87,2.677 1.18,4.998 C -1.958,-10.586 -3.961,-5.659 0,0 m -0.124,-39.424 -1.022,0.126 c -4.858,-11.614 -7.969,-24.051 -16.41,-34.185 6.425,0 12.268,0.044 18.11,-0.021 2.463,-0.027 2.826,1.233 2.583,3.318 -0.693,5.947 -1.269,11.907 -1.895,17.861 -0.452,4.301 -0.911,8.6 -1.366,12.901 m 10.481,16.928 c 2.804,0.254 4.231,0.383 6.006,0.543 -0.078,-1.352 -0.151,-2.615 -0.234,-4.054 -1.295,-0.278 -2.469,-0.798 -3.608,-0.729 -4.817,0.291 -5.725,-2.748 -5.982,-6.576 -0.828,-12.35 2.04,-24.136 5.418,-35.842 0.576,-1.995 1.377,-3.51 4.167,-3.322 0.943,0.064 2.709,-2.295 2.945,-3.735 0.395,-2.401 -0.141,-4.955 -0.314,-7.948 -8.522,-1.124 -17.283,-2.28 -26.046,-3.438 0.014,-0.438 0.028,-0.877 0.042,-1.316 h 29.671 c -2.523,-3.697 -2.723,-5.906 0.942,-7.489 0.874,-0.378 0.794,-2.963 1.42,-5.708 -25.177,6.305 -49.325,5.602 -73.529,1.756 -0.283,0.442 -0.565,0.884 -0.847,1.327 1.758,1.901 3.513,3.805 5.276,5.702 0.363,0.39 1.02,0.708 1.093,1.136 0.82,4.736 5.953,5.585 8.204,9.087 0.583,0.908 2.584,1.06 3.977,1.263 4.754,0.694 9.533,1.22 14.29,1.895 1.225,0.173 2.405,0.661 3.606,1.005 -0.022,0.376 -0.044,0.754 -0.066,1.131 -3.801,0.441 -7.601,0.882 -12.266,1.423 11.635,12.697 18.878,27.083 22.992,43.069 0.215,0.838 0.028,1.781 0.028,3.109 -2.417,-0.589 -4.418,-1.077 -6.419,-1.564 -0.104,0.187 -0.208,0.374 -0.311,0.561 3.407,2.347 6.814,4.692 11.015,7.586 -6.844,0.95 -10.254,4.673 -11.382,11.146 -1.128,6.476 1.5,12.466 6.599,15.041 4.858,2.455 11.81,1.673 15.281,-2.187 6.804,-7.566 5.219,-15.025 -1.968,-22.872"
              transform="matrix(1.3333333,0,0,-1.3333333,419.58467,842.36227)"
            />
          </g>
        </svg>
        <div>
          <span class="block text-blue-900 text-base">Torneo Internacional</span>
          <span class="block label">Ciudad de Pontevedra</span>
        </div>
      </a>

      {/* Enlaces destacados — solo desktop */}
      <div class="hidden md:flex items-center gap-8 flex-shrink-0">
        {featuredLinks.map(({ href, label }) => (
          <a href={href} class="link">
            {label}
          </a>
        ))}
      </div>

      {/* Hamburger + Dropdown */}
      <div ref={ref} class="relative flex-shrink-0">
        <button
          onClick={() => setOpen((v) => !v)}
          class="button-primary"
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          {open ? (
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Dropdown */}
        {open && (
          <div class="absolute right-0 top-full mt-2 z-50 card p-2 min-w-48 flex flex-col animate-fade-in">
            {links.map(({ href, label }) => (
              <a
                href={href}
                class="px-4 py-3 rounded-2xl text-gray-600 hover:bg-blue-50 hover:text-blue-900 transition-colors text-sm duration-300"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
