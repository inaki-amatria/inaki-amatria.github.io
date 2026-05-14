import { useState, useEffect } from "preact/hooks";

import type { Lang } from "@i18n/config.ts";
import { useTranslations } from '@i18n/ui.ts';
import { getPath } from '@i18n/utils.ts';

const COOKIE_KEY = "cookie_consent";

interface Props {
  lang: Lang;
}

export default function CookieConsentIsland({ lang }: Props) {
  const t = useTranslations(lang);

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
          <p class="text-blue-900 text-lg font-bold">🍪 {t("CookieConsentIsland.title")}</p>
          <p class="text-gray-600">{t("CookieConsentIsland.subtitle")}</p>
          <p class="text-gray-600"><a href={getPath(lang, "cookies")} class="inline-link">
            {t("CookieConsentIsland.moreInfo")}
          </a>.</p>
        </div>

        {/* Botones */}
        <div class="flex gap-2">
          <button
            onClick={decline}
            class="flex-1 button-secondary"
          >
            {t("CookieConsentIsland.decline")}
          </button>
          <button
            onClick={accept}
            class="flex-1 button-primary"
          >
            {t("CookieConsentIsland.accept")}
          </button>
        </div>
      </div>
    </div>
  );
}
