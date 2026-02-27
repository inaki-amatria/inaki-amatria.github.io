import type { FunctionalComponent } from "preact";

type ContactFormIslandElements = {
  name: HTMLInputElement;
  subject: HTMLInputElement;
  message: HTMLTextAreaElement;
};

type ContactFormIslandElement = HTMLFormElement & {
  elements: ContactFormIslandElements;
};

const ContactFormIsland: FunctionalComponent = () => {
  const sendEmail = (event: Event) => {
    event.preventDefault();

    const form = event.currentTarget as ContactFormIslandElement;

    const name = form.elements.name.value;
    const subject = form.elements.subject.value;
    const message = form.elements.message.value;

    const body = `Hola, soy ${name}.\n\n${message}\n\n¡Un saludo! 😊`;

    const mailto = `mailto:escola@xadrezpontevedra.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailto, "_blank", "noopener,noreferrer");
  };

  return (
    <form class="flex flex-col gap-4" onSubmit={sendEmail}>
      <input
        type="text"
        name="name"
        placeholder="Tu nombre"
        required
        class="border border-gray-200 rounded-xl p-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />

      <input
        type="text"
        name="subject"
        placeholder="Asunto"
        required
        class="border border-gray-200 rounded-xl p-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />

      <textarea
        name="message"
        placeholder="Tu mensaje"
        rows={9}
        required
        class="border border-gray-200 rounded-xl p-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
      />

      <button type="submit" class="px-4 py-2 rounded-full font-bold text-base text-center shadow-md transition-all duration-300 hover:ring-2 active:scale-95 bg-blue-900 text-white hover:ring-blue-600/50 hover:shadow-lg w-fit cursor-pointer">
        Enviar mensaje
      </button>
    </form>
  );
};

export default ContactFormIsland;
