import { useEffect } from "preact/hooks";

export default function TableOfContentsIsland() {
  useEffect(() => {
    const offset = 90;

    const links = Array.from(
      document.querySelectorAll<HTMLAnchorElement>("a.toc-link[data-target]")
    );

    const sections = links
      .map((l) => document.getElementById(l.dataset.target!))
      .filter(Boolean) as HTMLElement[];

    function setActive(id: string) {
      links.forEach((link) => {
        const active = link.dataset.target === id;

        link.classList.toggle("border-blue-900", active);
        link.classList.toggle("text-blue-900", active);
        link.classList.toggle("border-gray-200", !active);
        link.classList.toggle("text-gray-600", !active);
      });
    }

    function scrollToTarget(id: string) {
      const target = document.getElementById(id);
      if (!target) {
        return;
      }

      const top = target.getBoundingClientRect().top + window.scrollY - offset;

      window.scrollTo({ top });
      if (id !== window.location.hash.substring(1)) {
        history.replaceState(null, "", `#${id}`);
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-40% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((s) => observer.observe(s));

    function handleClick(e: MouseEvent) {
      e.preventDefault();

      const link = e.currentTarget as HTMLAnchorElement;
      const id = link.dataset.target!;

      link.closest("details")?.removeAttribute("open");

      scrollToTarget(id);
    }

    links.forEach((link) => link.addEventListener("click", handleClick));

    return () => {
      observer.disconnect();
      links.forEach((link) => link.removeEventListener("click", handleClick));
    };
  }, []);

  return null;
}
