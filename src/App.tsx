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
import Roadmap from "./pages/Roadmap";
import Quizzes from "./pages/Quizzes";
import Timeline from "./pages/Timeline";
import Community from "./pages/Community";
import FAQs from "./pages/FAQs";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import Profile from "./pages/Profile";

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
              <Route path="/roadmap" element={<Roadmap />} />
              <Route path="/quizzes" element={<Quizzes />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/community" element={<Community />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/profile" element={<Profile />} />
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
