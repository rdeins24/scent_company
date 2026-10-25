import { products, productCategories } from "../data/products";
import { getSegments } from "./content";

// Intervalul de suprafață (m²) tipic fiecărui segment; recomandările se fac după acoperirea maximă a produsului.
const segmentAreas = {
  "aromatizare-hoteluri": [400, 1000],
  "aromatizare-clinici": [30, 200],
  "aromatizare-fitness": [500, 2000],
  "aromatizare-showroom-auto": [800, 2000],
  "aromatizare-retail": [100, 900],
  "aromatizare-restaurante": [30, 500],
};

const fitsArea = (product, [min, max]) =>
  product.category !== "Casă și birou" && product.coverageM2Max >= min && product.coverageM2Max <= max;

const SPEC_LABELS = [
  ["coverage", "Acoperire"],
  ["capacity", "Capacitate"],
  ["consumption", "Consum de parfum"],
  ["dimensions", "Dimensiuni"],
  ["power", "Alimentare"],
  ["control", "Control"],
  ["mounting", "Montaj"],
];

// Rândurile tabelului de specificații; câmpurile lipsă nu se afișează
export const specRows = (product) =>
  SPEC_LABELS.filter(([key]) => product[key]).map(([key, label]) => ({ label, value: product[key] }));

// Varianta serializabilă (pentru getStaticProps) a unui produs, pentru carduri
export const toCard = ({ slug, name, category, coverage, images }) => ({
  slug,
  name,
  category,
  coverage: coverage || null,
  image: images[0],
});

export const categoryId = (category) =>
  category.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-");

const inCategory = (product, category) =>
  product.category === category || (product.extraCategories || []).includes(category);

export const productsByCategory = () =>
  productCategories.map((category) => ({
    category,
    id: categoryId(category),
    products: products.filter((p) => inCategory(p, category)).map(toCard),
  }));

export const recommendedProducts = (segmentSlug, limit = 3) => {
  const area = segmentAreas[segmentSlug];
  if (!area) return [];
  return products
    .filter((p) => fitsArea(p, area))
    .sort((a, b) => b.coverageM2Max - a.coverageM2Max)
    .slice(0, limit)
    .map(toCard);
};

// Segmentele pentru care produsul are o acoperire potrivită
export const suitableSegments = (product, locale) =>
  getSegments(locale)
    .filter((s) => segmentAreas[s.slug] && fitsArea(product, segmentAreas[s.slug]))
    .map(({ slug, navLabel }) => ({ slug, navLabel }));
