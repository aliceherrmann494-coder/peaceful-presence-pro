import { lazy, type ComponentType, type LazyExoticComponent } from "react";

const loaders = {
  "/terapia/terapia-do-cacau": () => import("@/pages/CacauTherapy"),
  "/terapia/auriculoterapia": () => import("@/pages/AuricularTherapy"),
  "/terapia/barras-de-access": () => import("@/pages/BarrasTherapy"),
  "/terapia/reiki": () => import("@/pages/ReikiTherapy"),
  "/terapia/autoconstelacao-sistemica": () => import("@/pages/SistemicaTherapy"),
  "/terapias-integradas": () => import("@/pages/IntegratedTherapies"),
  "/produto/sais-de-banho": () => import("@/pages/SaisDeBanho"),
  "/produto/sprays-terapeuticos": () => import("@/pages/SpraysTerapeuticos"),
  "/produto/sabonetes-terapeuticos": () => import("@/pages/SabonetesTerapeuticos"),
};

export type PrefetchPath = keyof typeof loaders;

const warmed = new Set<string>();

export function lazyPage(path: PrefetchPath): LazyExoticComponent<ComponentType> {
  return lazy(loaders[path]);
}

export function prefetchPath(path: string) {
  const load = loaders[path as PrefetchPath];
  if (!load || warmed.has(path)) return;
  warmed.add(path);
  void load();
}

export function prefetchContentPages() {
  if (typeof window === "undefined") return;

  const paths = Object.keys(loaders);
  let i = 0;

  const runNext = () => {
    if (i >= paths.length) return;
    prefetchPath(paths[i]);
    i += 1;
    window.setTimeout(runNext, 280);
  };

  const ric = window.requestIdleCallback;
  if (typeof ric === "function") {
    ric(runNext, { timeout: 2500 });
  } else {
    window.setTimeout(runNext, 1000);
  }
}
