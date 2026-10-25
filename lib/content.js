import segmentsRo from "../content/ro/segments";
import postsRo from "../content/ro/blog";
import homeRo from "../content/ro/home";

// Conținutul pe limbi. Pentru rusă: se adaugă content/ru/* aici și "ru" în i18n.locales (next.config.js).
const segmentsByLocale = { ro: segmentsRo };
const postsByLocale = { ro: postsRo };
const homeByLocale = { ro: homeRo };

export const getHome = (locale = "ro") => homeByLocale[locale] || homeRo;

export const getSegments = (locale = "ro") => segmentsByLocale[locale] || segmentsRo;
export const getSegment = (slug, locale) => getSegments(locale).find((s) => s.slug === slug);

export const getPosts = (locale = "ro") => postsByLocale[locale] || postsRo;
export const getPost = (slug, locale) => getPosts(locale).find((p) => p.slug === slug);
