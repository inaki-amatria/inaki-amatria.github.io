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
      <div class="bg-white rounded-3xl shadow-2xl p-6 flex flex-col gap-4">
        {/* Header */}
        <div class="flex flex-col gap-4">
          <p class="text-blue-900 text-lg font-bold">🍪 Este sitio usa cookies</p>
          <p class="text-gray-600">
            Solo usamos cookies necesarias para recordar tus preferencias y para mostrar mapas interactivos si aceptas.
          </p>
          <a href="/cookies" class="link">
            Más información.
          </a>
        </div>

        {/* Botones */}
        <div class="flex gap-2">
          <button
            onClick={decline}
            class="flex-1 button button-secondary cursor-pointer"
          >
            Rechazar
          </button>
          <button
            onClick={accept}
            class="flex-1 button button-primary cursor-pointer"
          >
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}