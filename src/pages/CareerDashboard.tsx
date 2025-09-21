import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Users, Target, FileText, GitBranch, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const educationQuotes = [
  "Education is the most powerful weapon which you can use to change the world. - Nelson Mandela",
  "The beautiful thing about learning is that no one can take it away from you. - B.B. King",
  "Education is not preparation for life; education is life itself. - John Dewey",
  "The more that you read, the more things you will know. The more that you learn, the more places you'll go. - Dr. Seuss",
  "Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Gandhi"
];

const stats = [
  { icon: Users, label: "Lives Impacted", value: "50,000+" },
  { icon: Target, label: "Decisions Made", value: "25,000+" },
  { icon: TrendingUp, label: "Careers Reshaped", value: "15,000+" },
];

const founders = [
  {
    name: "Anand Kumar",
    role: "Education Reformer",
    description: "Founder of Super 30, helping underprivileged students achieve their dreams.",
    image: "/api/placeholder/150/150"
  },
  {
    name: "Shakuntala Devi",
    role: "Mathematical Genius",
    description: "The Human Computer who inspired millions to pursue mathematics.",
    image: "/api/placeholder/150/150"
  }
];

export default function CareerDashboard() {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % educationQuotes.length);
    }, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section with Dynamic Quote */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <div className="mb-8 p-6 bg-card rounded-2xl shadow-soft max-w-4xl mx-auto">
            <blockquote className="text-lg md:text-xl italic text-foreground leading-relaxed">
              "{educationQuotes[currentQuote]}"
            </blockquote>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
            Welcome to <span className="bg-gradient-coffee bg-clip-text text-transparent">Career Café</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Your one-stop personalized career and education advisor. Discover your path, build your future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-gradient-coffee hover:shadow-warm transition-all duration-300">
              <Link to="/resume-builder">
                <FileText className="w-5 h-5 mr-2" />
                Resume Builder
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="hover:bg-coffee-light transition-all duration-300">
              <Link to="/career-comparison">
                <GitBranch className="w-5 h-5 mr-2" />
                Career Comparison
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:shadow-warm transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-coffee rounded-xl mb-4">
                    <stat.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History & Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">The Story of Indian Education</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              India has a rich heritage of education dating back thousands of years. From ancient universities like 
              Nalanda and Takshashila to modern institutions, education has always been the cornerstone of progress. 
              Today, Career Café continues this legacy by helping students navigate the complex landscape of modern 
              career choices with personalized guidance and data-driven insights.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-primary mb-4">How Career Café Helps</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-warm-orange rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-muted-foreground">Personalized career roadmaps based on your aptitude and interests</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-warm-orange rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-muted-foreground">Comprehensive timeline tracking for admissions and scholarships</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-warm-orange rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-muted-foreground">Interactive quizzes to discover your strengths and preferences</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-warm-orange rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <span className="text-muted-foreground">Community support and expert guidance</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-cream rounded-2xl p-8 shadow-soft">
              <BookOpen className="w-16 h-16 text-primary mb-4 mx-auto" />
              <h4 className="text-xl font-semibold text-primary mb-2 text-center">Start Your Journey</h4>
              <p className="text-muted-foreground text-center mb-6">
                Take our comprehensive quiz to get personalized recommendations
              </p>
              <Button asChild className="w-full">
                <Link to="/quizzes">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-primary text-center mb-12">Inspired by Legends</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <Card key={index} className="hover:shadow-warm transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-24 h-24 bg-gradient-coffee rounded-full mx-auto mb-4 flex items-center justify-center">
                    <div className="w-20 h-20 bg-coffee-light rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">{founder.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{founder.name}</h3>
                  <p className="text-warm-orange font-medium mb-3">{founder.role}</p>
                  <p className="text-muted-foreground text-sm">{founder.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}