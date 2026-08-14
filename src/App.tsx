import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";

const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const CacauTherapy = lazy(() => import("./pages/CacauTherapy.tsx"));
const AuricularTherapy = lazy(() => import("./pages/AuricularTherapy.tsx"));
const BarrasTherapy = lazy(() => import("./pages/BarrasTherapy.tsx"));
const ReikiTherapy = lazy(() => import("./pages/ReikiTherapy.tsx"));
const SistemicaTherapy = lazy(() => import("./pages/SistemicaTherapy.tsx"));
const TherapyDetail = lazy(() => import("./pages/TherapyDetail.tsx"));
const IntegratedTherapies = lazy(() => import("./pages/IntegratedTherapies.tsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.tsx"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy.tsx"));
const TermsOfUse = lazy(() => import("./pages/TermsOfUse.tsx"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-background" />}>
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
            <Route path="/termos-de-uso" element={<TermsOfUse />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
