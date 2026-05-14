import {type Lang, languages} from './config.ts';

export function getPath(lang: Lang, path = ''): string {
  return `/${lang}${path ? `/${path}` : ''}`;
}

export function staticLangPaths() {
  return Object.keys(languages).map(lang => ({params: {lang}}));
}
