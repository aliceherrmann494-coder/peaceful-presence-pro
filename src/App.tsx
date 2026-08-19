import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { lazyPage } from "@/lib/prefetch";
import Index from "./pages/Index.tsx";

const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const CacauTherapy = lazyPage("/terapia/terapia-do-cacau");
const AuricularTherapy = lazyPage("/terapia/auriculoterapia");
const BarrasTherapy = lazyPage("/terapia/barras-de-access");
const ReikiTherapy = lazyPage("/terapia/reiki");
const SistemicaTherapy = lazyPage("/terapia/autoconstelacao-sistemica");
const TherapyDetail = lazy(() => import("./pages/TherapyDetail.tsx"));
const IntegratedTherapies = lazyPage("/terapias-integradas");
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.tsx"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy.tsx"));
const TermsOfUse = lazy(() => import("./pages/TermsOfUse.tsx"));
const SaisDeBanho = lazyPage("/produto/sais-de-banho");
const SpraysTerapeuticos = lazyPage("/produto/sprays-terapeuticos");
const SabonetesTerapeuticos = lazyPage("/produto/sabonetes-terapeuticos");

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
          <Suspense
            fallback={
              <div
                className="min-h-screen bg-background flex items-center justify-center"
                aria-busy="true"
                aria-live="polite"
              >
                <p className="font-sans text-sm tracking-wide text-muted-foreground">Carregando…</p>
              </div>
            }
          >
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/terapias-integradas" element={<IntegratedTherapies />} />
            <Route path="/terapia/terapia-do-cacau" element={<CacauTherapy />} />
            <Route path="/terapia/auriculoterapia" element={<AuricularTherapy />} />
            <Route path="/terapia/barras-de-access" element={<BarrasTherapy />} />
            <Route path="/terapia/reiki" element={<ReikiTherapy />} />
            <Route path="/terapia/autoconstelacao-sistemica" element={<SistemicaTherapy />} />
            <Route path="/terapia/:slug" element={<TherapyDetail />} />
            <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
            <Route path="/politica-de-cookies" element={<CookiePolicy />} />
            <Route path="/produto/sais-de-banho" element={<SaisDeBanho />} />
            <Route path="/produto/sprays-terapeuticos" element={<SpraysTerapeuticos />} />
            <Route path="/produto/sabonetes-terapeuticos" element={<SabonetesTerapeuticos />} />
            <Route path="/termos-de-uso" element={<TermsOfUse />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
