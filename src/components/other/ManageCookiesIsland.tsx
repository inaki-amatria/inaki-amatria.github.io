export interface Props {
  class?: string;
}

export default function ManageCookiesIsland({ class: className = "" }: Props) {
  function resetConsent(e: Event) {
    e.preventDefault();
    localStorage.removeItem("cookie_consent");
    window.dispatchEvent(new Event("cookieConsentUpdated"));
  }

  return (
    <a href="#" onClick={resetConsent} class={`${className}`}>
      Gestionar cookies
    </a>
  );
}
