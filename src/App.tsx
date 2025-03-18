
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import University from "./pages/University";
import TaskForce from "./pages/TaskForce";
import Research from "./pages/Research";
import Founders from "./pages/Founders";
import Investors from "./pages/Investors";
import Nonprofits from "./pages/Nonprofits";
import Academics from "./pages/Academics";
import Contact from "./pages/Contact";

// Create the common client
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/university" element={<University />} />
          <Route path="/task-force" element={<TaskForce />} />
          <Route path="/research" element={<Research />} />
          <Route path="/founders" element={<Founders />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/nonprofits" element={<Nonprofits />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
