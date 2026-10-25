// Pagina vizitată înainte de cea curentă (navigare client-side cu next/link), folosită de formularul
// de contact ca să știe de pe ce pagină a venit cererea. La o încărcare completă se folosește document.referrer.
let currentPath = null;
let previousPath = null;

export const trackRoute = (path) => {
  if (path === currentPath) return;
  previousPath = currentPath;
  currentPath = path;
};

export const getPreviousPath = () => {
  if (previousPath) return previousPath;
  if (typeof document === "undefined" || !document.referrer) return null;
  try {
    const ref = new URL(document.referrer);
    return ref.origin === window.location.origin ? ref.pathname + ref.search : null;
  } catch {
    return null;
  }
};
