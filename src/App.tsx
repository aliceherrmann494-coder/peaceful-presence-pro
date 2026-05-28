import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import TherapyDetail from "./pages/TherapyDetail.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import CookiePolicy from "./pages/CookiePolicy.tsx";
import TermsOfUse from "./pages/TermsOfUse.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/terapia/:slug" element={<TherapyDetail />} />
          <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
          <Route path="/politica-de-cookies" element={<CookiePolicy />} />
          <Route path="/termos-de-uso" element={<TermsOfUse />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
