import { useEffect, useRef, useState } from 'preact/hooks';

import type { ComponentChildren } from 'preact';

interface Section {
  id: string;
  title: string;
}

interface TableOfContentsIslandProps {
  children?: ComponentChildren;
}

export default function TableOfContentsIsland({ children }: TableOfContentsIslandProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sections, setSections] = useState<Section[]>([]);

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }

    const headings = Array.from(
      containerRef.current.querySelectorAll<HTMLHeadingElement>("h2")
    );

    const sections: Section[] = headings.map((h, idx) => {
      let id = h.id;
      if (!id) {
        id = h.textContent?.trim().replace(/\s+/g, "-").toLowerCase() || `heading-${idx}`;
        h.id = id;
      }
      return { id, title: h.textContent?.trim() || "" };
    }).filter(section => section.id && section.title);

    setSections(sections);
  });

  return (
    <div class="flex flex-col lg:flex-row gap-8">
      <div ref={containerRef} class="flex-1">
        {children}
      </div>

      <aside class="hidden lg:block sticky top-12 max-w-xs self-start">
        <nav class="flex flex-col gap-2 border-l-2 border-blue-900 pl-4">
          {sections.map(section => (
            <a
              key={section.id}
              href={`#${section.id}`}
              class="link text-sm"
            >
              {section.title}
            </a>
          ))}
        </nav>
      </aside>
    </div>
  );
}