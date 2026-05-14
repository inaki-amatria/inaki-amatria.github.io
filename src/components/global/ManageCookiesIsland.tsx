import type { Lang } from "@i18n/config.ts";
import { useTranslations } from '@i18n/ui.ts';

const COOKIE_KEY = "cookie_consent";

interface Props {
  lang: Lang,
  class?: string;
}

export default function ManageCookiesIsland({ lang, class: className = "" }: Props) {
  const t = useTranslations(lang);

  function resetConsent(e: Event) {
    e.preventDefault();
    localStorage.removeItem(COOKIE_KEY);
    window.dispatchEvent(new Event("cookieConsentUpdated"));
  }

  return (
    <span onClick={resetConsent} class={`${className} cursor-pointer`}>
      {t("ManageCookiesIsland.title")}
    </span>
  );
}
