import type { FunctionalComponent } from "preact";

import type { Lang } from "@i18n/config.ts";
import { useTranslations } from "@i18n/ui.ts";

interface Props {
  lang: Lang;
}

type ContactFormIslandElements = {
  name: HTMLInputElement;
  subject: HTMLInputElement;
  message: HTMLTextAreaElement;
};

type ContactFormIslandElement = HTMLFormElement & {
  elements: ContactFormIslandElements;
};

const ContactFormIsland: FunctionalComponent<Props> = ({ lang }) => {
  const t = useTranslations(lang);

  const sendEmail = (event: Event) => {
    event.preventDefault();

    const form = event.currentTarget as ContactFormIslandElement;

    const name = form.elements.name.value;
    const subject = form.elements.subject.value;
    const message = form.elements.message.value;

    const body = `${t("ContactFormIsland.emailIntro")} ${name}.\n\n${message}\n\n${t("ContactFormIsland.emailOutro")}`;

    const mailto = `mailto:escola@xadrezpontevedra.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailto, "_blank", "noopener,noreferrer");
  };

  return (
    <form class="flex flex-col gap-4" onSubmit={sendEmail}>
      <div class="flex flex-col gap-2">
        <label for="name" class="label ml-1">{t("ContactFormIsland.name")}</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder={t("ContactFormIsland.namePlaceholder")}
          required
          class="border border-gray-200 rounded-xl p-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <div class="flex flex-col gap-2">
        <label for="subject" class="label ml-1">{t("ContactFormIsland.subject")}</label>
        <input
          id="subject"
          type="text"
          name="subject"
          placeholder={t("ContactFormIsland.subjectPlaceholder")}
          required
          class="border border-gray-200 rounded-xl p-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <div class="flex flex-col gap-2">
        <label for="message" class="label ml-1">{t("ContactFormIsland.message")}</label>
        <textarea
          id="message"
          name="message"
          placeholder={t("ContactFormIsland.messagePlaceholder")}
          rows={9}
          required
          class="border border-gray-200 rounded-xl p-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <button type="submit" class="button-primary w-fit">
        {t("ContactFormIsland.submit")}
      </button>

      <p class="text-sm text-gray-600 italic mt-2">
        {t("ContactFormIsland.info")}
      </p>
    </form>
  );
};

export default ContactFormIsland;
