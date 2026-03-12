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
      <div class="flex flex-col gap-2">
        <label for="name" class="label ml-1">Nombre</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Tu nombre"
          required
          class="border border-gray-200 rounded-xl p-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <div class="flex flex-col gap-2">
        <label for="subject" class="label ml-1">Asunto</label>
        <input
          id="subject"
          type="text"
          name="subject"
          placeholder="Asunto"
          required
          class="border border-gray-200 rounded-xl p-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <div class="flex flex-col gap-2">
        <label for="message" class="label ml-1">Mensaje</label>
        <textarea
          id="message"
          name="message"
          placeholder="Tu mensaje"
          rows={9}
          required
          class="border border-gray-200 rounded-xl p-3 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
      </div>

      <button type="submit" class="button-primary w-fit">
        Enviar mensaje
      </button>

      <p class="text-sm text-gray-600 italic mt-2">
        Al enviar el mensaje se abrirá una nueva pestaña con tu cliente de correo electrónico.
      </p>
    </form>
  );
};

export default ContactFormIsland;
