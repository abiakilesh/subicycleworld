import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import HeroBrand from "./pages/brands/HeroBrand";
import TrackAndTrailBrand from "./pages/brands/TrackAndTrailBrand";
import CayaBikesBrand from "./pages/brands/CayaBikesBrand";
import Outdoors91Brand from "./pages/brands/Outdoors91Brand";
import StryderBikesBrand from "./pages/brands/StryderBikesBrand";
import TorontoBicyclesBrand from "./pages/brands/TorontoBicyclesBrand";
import CultCycleBrand from "./pages/brands/CultStoreBrand";
import FirefoxBrand from "./pages/brands/FirefoxLifeBrand";
import MultiBrand from "./pages/brands/MultiBrand";
import NotFound from "./pages/NotFound";
import WhatsAppButton from "./components/WhatsAppButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service" element={<Service />} />
          <Route path="/brands/hero" element={<HeroBrand />} />
          <Route path="/brands/track-and-trail" element={<TrackAndTrailBrand />} />
          <Route path="/brands/caya-bikes" element={<CayaBikesBrand />} />
          <Route path="/brands/outdoors-91" element={<Outdoors91Brand />} />
          <Route path="/brands/stryder-bikes" element={<StryderBikesBrand />} />
          <Route path="/brands/toronto-bicycles" element={<TorontoBicyclesBrand />} />
          <Route path="/brands/cult-cycle" element={<CultCycleBrand />} />
          <Route path="/brands/firefox" element={<FirefoxBrand />} />
          <Route path="/brands/multi-brand" element={<MultiBrand />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
