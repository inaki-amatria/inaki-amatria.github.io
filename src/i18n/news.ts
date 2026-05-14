import Trophies from '@assets/images/Trophies.webp';
import XIIIEditionAlbumCover from '@assets/images/XIIIEditionAlbumCover.webp';
import type {ImageMetadata} from 'astro';

interface NewsEntry {
  slug: string;
  date: Date;
  cover?: ImageMetadata;
}

export const news: NewsEntry[] = [
  {
    slug: 'cierre-xiii-edicion',
    date: new Date('2025-08-02'),
  },
  {
    slug: 'inscripciones-abiertas',
    date: new Date('2026-03-15'),
    cover: XIIIEditionAlbumCover,
  },
  {
    slug: 'premios-xiv-edicion',
    date: new Date('2026-03-16'),
    cover: Trophies,
  },
];
