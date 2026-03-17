import { useState, useEffect } from "preact/hooks";

const COOKIE_KEY = "cookie_consent";

export interface Props {
  src: string;
  class?: string;
  iframeClass?: string;
}

export default function MapIsland({ src, class: className = "", iframeClass = "w-full h-full" }: Props) {
  const [consent, setConsent] = useState<"accepted" | "declined" | null>(null);

  useEffect(() => {
    function onUpdate() {
      setConsent((localStorage.getItem(COOKIE_KEY) as "accepted" | "declined") ?? null);
    }
    onUpdate();
    window.addEventListener("cookieConsentUpdated", onUpdate);
    return () => window.removeEventListener("cookieConsentUpdated", onUpdate);
  }, []);

  return (
    <div class={`overflow-hidden bg-blue-50 rounded-3xl shadow-lg ${className}`}>
      {consent === "accepted" ? (
        <iframe
          src={src}
          class={iframeClass}
          style="border:0;"
          title="Mapa de Google Maps"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      ) : (
        <div class="w-full h-full min-h-48 bg-blue-50 flex flex-col items-center justify-center gap-4 p-6 text-center">
          <div class="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
            <svg class="w-6 h-6 text-blue-900" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>
          <div class="flex flex-col gap-2">
            <p class="text-blue-900 font-bold">Mapa desactivado</p>
            <p class="text-gray-600 text-sm max-w-xs">
              Para ver el mapa interactivo acepta las cookies.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
