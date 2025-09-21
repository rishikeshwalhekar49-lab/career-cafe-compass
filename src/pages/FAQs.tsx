import { HelpCircle, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    category: "Getting Started",
    questions: [
      {
        question: "What is Career Café and how can it help me?",
        answer: "Career Café is a comprehensive career guidance platform designed specifically for Indian students. We provide personalized roadmaps, quizzes to discover your interests, timeline tracking for important dates, and a supportive community to help you make informed career decisions."
      },
      {
        question: "Do I need to create an account to use Career Café?",
        answer: "While you can browse some features without an account, creating one unlocks personalized recommendations, progress tracking, and access to our community features. Registration is free and takes just a few minutes."
      },
      {
        question: "Is Career Café suitable for students from all streams?",
        answer: "Absolutely! We cater to students from Science, Commerce, and Arts streams. Our platform provides specific guidance and resources for each stream, ensuring relevant and targeted career advice."
      }
    ]
  },
  {
    category: "Features & Tools",
    questions: [
      {
        question: "How accurate are the career quiz results?",
        answer: "Our quizzes are designed by education experts and psychologists to provide meaningful insights into your interests, strengths, and personality traits. While they're highly indicative, we recommend using them as a starting point for deeper self-reflection and research."
      },
      {
        question: "Can I download my roadmap and resume?",
        answer: "Yes! Both the personalized roadmap and resume builder offer PDF export functionality. You can download, print, or share these documents as needed for your academic and career planning."
      },
      {
        question: "How often is the timeline tracker updated?",
        answer: "We update our timeline tracker regularly with the latest admission dates, scholarship deadlines, and exam schedules. Our team monitors official notifications from universities and exam bodies to ensure accuracy."
      }
    ]
  },
  {
    category: "Academic Guidance",
    questions: [
      {
        question: "Which stream should I choose after 10th grade?",
        answer: "The choice depends on your interests, career goals, and academic strengths. Take our Interest Discovery Quiz and Strengths Assessment to get personalized recommendations. Consider factors like your favorite subjects, career aspirations, and future study plans."
      },
      {
        question: "What are the cut-offs for top colleges?",
        answer: "Cut-offs vary by college, course, and year. Our roadmap feature provides indicative cut-off ranges for various institutions. For the most current information, always check the official college websites and our timeline tracker."
      },
      {
        question: "How do I prepare for entrance exams?",
        answer: "Start with understanding the exam pattern and syllabus. Create a study schedule, practice with previous years' papers, and consider joining coaching if needed. Our community also shares study tips and resources."
      }
    ]
  },
  {
    category: "Career Planning",
    questions: [
      {
        question: "How do I choose between multiple career options?",
        answer: "Use our Career Comparison tool to analyze different careers side-by-side. Consider factors like your interests, market demand, salary prospects, work-life balance, and growth opportunities. Seek guidance from professionals in those fields."
      },
      {
        question: "Is it too late to change my career path?",
        answer: "It's never too late! Many successful professionals have changed career paths. Assess your current situation, identify transferable skills, and create a transition plan. Our community includes many who've successfully made career changes."
      },
      {
        question: "How important are extracurricular activities for career development?",
        answer: "Very important! Extracurriculars develop soft skills, leadership abilities, and make you a well-rounded candidate. They're especially valuable for competitive admissions and job applications."
      }
    ]
  },
  {
    category: "Technical Support",
    questions: [
      {
        question: "I'm having trouble accessing certain features. What should I do?",
        answer: "First, try refreshing your browser or clearing your cache. If the problem persists, check your internet connection. For continued issues, contact our support team at careercafe@bus.in with details about the specific feature and error message."
      },
      {
        question: "Can I use Career Café on my mobile phone?",
        answer: "Yes! Career Café is fully responsive and works seamlessly on smartphones, tablets, and desktops. You can access all features from any device with an internet connection."
      },
      {
        question: "How do I reset my quiz results?",
        answer: "You can retake any quiz at any time. Simply go to the Quizzes section and click on the quiz you want to retake. Your new results will replace the previous ones in your profile."
      }
    ]
  }
];

export default function FAQs() {
  return (
    <div className="min-h-screen bg-gradient-hero py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-coffee rounded-2xl mb-6">
            <HelpCircle className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about Career Café and career planning
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqs.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">{category.category}</CardTitle>
                <CardDescription>
                  Common questions about {category.category.toLowerCase()}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border rounded-lg px-4"
                    >
                      <AccordionTrigger className="text-left hover:no-underline hover:text-primary">
                        <span className="font-medium">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pt-2 pb-4">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Still Need Help Section */}
        <Card className="mt-12 shadow-soft">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">Still Need Help?</CardTitle>
            <CardDescription>
              Can't find what you're looking for? Our support team is here to help!
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-card rounded-lg border">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <HelpCircle className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Email Support</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Get detailed help via email
                </p>
                <Button variant="outline" size="sm">
                  careercafe@bus.in
                </Button>
              </div>
              
              <div className="p-4 bg-card rounded-lg border">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ChevronDown className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Community Support</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Ask questions in our WhatsApp group
                </p>
                <Button variant="outline" size="sm">
                  Join Community
                </Button>
              </div>
              
              <div className="p-4 bg-card rounded-lg border">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <HelpCircle className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Expert Guidance</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Schedule a one-on-one session
                </p>
                <Button variant="outline" size="sm">
                  Book Session
                </Button>
              </div>
            </div>
            
            <div className="pt-6 border-t">
              <p className="text-sm text-muted-foreground mb-4">
                Our support team typically responds within 24 hours
              </p>
              <Button className="bg-gradient-coffee hover:shadow-warm transition-all duration-300">
                Contact Support Team
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}