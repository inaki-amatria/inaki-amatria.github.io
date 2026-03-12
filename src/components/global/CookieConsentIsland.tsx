import { useState, useEffect } from "preact/hooks";

const COOKIE_KEY = "cookie_consent";

export default function CookieConsentIsland() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) {
      setVisible(true);
    }

    function onUpdate() {
      const stored = localStorage.getItem(COOKIE_KEY);
      if (!stored) {
        setVisible(true);
      }
    }
    window.addEventListener("cookieConsentUpdated", onUpdate);
    return () => window.removeEventListener("cookieConsentUpdated", onUpdate);
  }, []);

  function accept() {
    localStorage.setItem(COOKIE_KEY, "accepted");
    setVisible(false);
    window.dispatchEvent(new Event("cookieConsentUpdated"));
  }

  function decline() {
    localStorage.setItem(COOKIE_KEY, "declined");
    setVisible(false);
    window.dispatchEvent(new Event("cookieConsentUpdated"));
  }

  if (!visible) {
    return null;
  }

  return (
    <div class="fixed bottom-6 right-6 z-20 w-[calc(100%-3rem)] max-w-sm">
      <div class="card flex flex-col gap-4 p-6">
        {/* Header */}
        <div class="flex flex-col gap-4">
          <p class="text-blue-900 text-lg font-bold">🍪 Este sitio usa cookies</p>
          <p class="text-gray-600">
            Solo usamos cookies necesarias para recordar tus preferencias y para mostrar mapas interactivos si aceptas.
          </p>
          <p class="text-gray-600"><a href="/cookies" class="inline-link">
            Más información
          </a>.</p>
        </div>

        {/* Botones */}
        <div class="flex gap-2">
          <button
            onClick={decline}
            class="flex-1 button-secondary"
          >
            Rechazar
          </button>
          <button
            onClick={accept}
            class="flex-1 button-primary"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}