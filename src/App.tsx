import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import CareerDashboard from "./pages/CareerDashboard";
import ResumeBuilder from "./pages/ResumeBuilder";
import CareerComparison from "./pages/CareerComparison";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background flex flex-col">
          <Header />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<CareerDashboard />} />
              <Route path="/resume-builder" element={<ResumeBuilder />} />
              <Route path="/career-comparison" element={<CareerComparison />} />
              <Route path="/roadmap" element={<div className="p-8 text-center">Roadmap feature coming soon!</div>} />
              <Route path="/quizzes" element={<div className="p-8 text-center">Quizzes feature coming soon!</div>} />
              <Route path="/timeline" element={<div className="p-8 text-center">Timeline Tracker coming soon!</div>} />
              <Route path="/community" element={<div className="p-8 text-center">Community Connect coming soon!</div>} />
              <Route path="/faqs" element={<div className="p-8 text-center">FAQs coming soon!</div>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
