import { useState } from "react";
import { Brain, BookOpen, Users, ChevronRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

const quizzes = {
  interest: {
    title: "Interest Discovery Quiz",
    description: "Discover what subjects and activities genuinely interest you",
    icon: Brain,
    questions: [
      {
        question: "What type of activities do you enjoy most?",
        options: [
          { id: "a", text: "Solving mathematical problems", stream: "science" },
          { id: "b", text: "Reading about business and finance", stream: "commerce" },
          { id: "c", text: "Writing stories or essays", stream: "arts" },
          { id: "d", text: "Conducting experiments", stream: "science" }
        ]
      },
      {
        question: "Which subject excites you the most?",
        options: [
          { id: "a", text: "Physics and Chemistry", stream: "science" },
          { id: "b", text: "Economics and Accounts", stream: "commerce" },
          { id: "c", text: "History and Literature", stream: "arts" },
          { id: "d", text: "Mathematics", stream: "science" }
        ]
      },
      {
        question: "What kind of career appeals to you?",
        options: [
          { id: "a", text: "Doctor or Engineer", stream: "science" },
          { id: "b", text: "Business owner or Accountant", stream: "commerce" },
          { id: "c", text: "Lawyer or Journalist", stream: "arts" },
          { id: "d", text: "Researcher or Scientist", stream: "science" }
        ]
      },
      {
        question: "How do you prefer to spend your free time?",
        options: [
          { id: "a", text: "Reading scientific articles", stream: "science" },
          { id: "b", text: "Following market trends", stream: "commerce" },
          { id: "c", text: "Creative writing or art", stream: "arts" },
          { id: "d", text: "Building or fixing things", stream: "science" }
        ]
      },
      {
        question: "What motivates you most?",
        options: [
          { id: "a", text: "Making scientific discoveries", stream: "science" },
          { id: "b", text: "Financial success and growth", stream: "commerce" },
          { id: "c", text: "Helping society and people", stream: "arts" },
          { id: "d", text: "Innovation and technology", stream: "science" }
        ]
      }
    ]
  },
  strengths: {
    title: "Strengths Assessment Quiz",
    description: "Identify your academic strengths and aptitude",
    icon: BookOpen,
    questions: [
      {
        question: "Which is your favorite subject?",
        options: [
          { id: "a", text: "Mathematics", subject: "maths" },
          { id: "b", text: "Science (Physics/Chemistry/Biology)", subject: "science" },
          { id: "c", text: "Social Studies", subject: "social" },
          { id: "d", text: "Computer Science", subject: "computer" }
        ]
      },
      {
        question: "You are best at:",
        options: [
          { id: "a", text: "Logical reasoning and problem-solving", subject: "maths" },
          { id: "b", text: "Understanding natural phenomena", subject: "science" },
          { id: "c", text: "Analyzing historical events", subject: "social" },
          { id: "d", text: "Programming and algorithms", subject: "computer" }
        ]
      },
      {
        question: "Which type of problems do you solve easily?",
        options: [
          { id: "a", text: "Mathematical equations", subject: "maths" },
          { id: "b", text: "Scientific experiments", subject: "science" },
          { id: "c", text: "Essay questions", subject: "social" },
          { id: "d", text: "Coding challenges", subject: "computer" }
        ]
      },
      {
        question: "Your learning style is:",
        options: [
          { id: "a", text: "Step-by-step logical approach", subject: "maths" },
          { id: "b", text: "Hands-on experimentation", subject: "science" },
          { id: "c", text: "Reading and discussion", subject: "social" },
          { id: "d", text: "Learning by doing and coding", subject: "computer" }
        ]
      },
      {
        question: "You excel at:",
        options: [
          { id: "a", text: "Calculations and formulas", subject: "maths" },
          { id: "b", text: "Understanding scientific concepts", subject: "science" },
          { id: "c", text: "Critical thinking and analysis", subject: "social" },
          { id: "d", text: "Technical problem-solving", subject: "computer" }
        ]
      }
    ]
  },
  personality: {
    title: "Personality Assessment Quiz",
    description: "Understand your personality traits for career alignment",
    icon: Users,
    questions: [
      {
        question: "How do you approach new challenges?",
        options: [
          { id: "a", text: "Analyze systematically", trait: "analytical" },
          { id: "b", text: "Think outside the box", trait: "creative" },
          { id: "c", text: "Break down logically", trait: "logical" },
          { id: "d", text: "Rally others to help", trait: "leadership" }
        ]
      },
      {
        question: "In group projects, you usually:",
        options: [
          { id: "a", text: "Research and analyze data", trait: "analytical" },
          { id: "b", text: "Come up with innovative ideas", trait: "creative" },
          { id: "c", text: "Organize and plan tasks", trait: "logical" },
          { id: "d", text: "Lead and coordinate the team", trait: "leadership" }
        ]
      },
      {
        question: "What energizes you most?",
        options: [
          { id: "a", text: "Solving complex problems", trait: "analytical" },
          { id: "b", text: "Creating something new", trait: "creative" },
          { id: "c", text: "Finding efficient solutions", trait: "logical" },
          { id: "d", text: "Inspiring and motivating others", trait: "leadership" }
        ]
      },
      {
        question: "Your ideal work environment is:",
        options: [
          { id: "a", text: "Quiet space for deep thinking", trait: "analytical" },
          { id: "b", text: "Dynamic and inspiring", trait: "creative" },
          { id: "c", text: "Well-organized and structured", trait: "logical" },
          { id: "d", text: "Collaborative and team-oriented", trait: "leadership" }
        ]
      },
      {
        question: "People often describe you as:",
        options: [
          { id: "a", text: "Thoughtful and thorough", trait: "analytical" },
          { id: "b", text: "Imaginative and original", trait: "creative" },
          { id: "c", text: "Systematic and methodical", trait: "logical" },
          { id: "d", text: "Confident and inspiring", trait: "leadership" }
        ]
      }
    ]
  }
};

export default function Quizzes() {
  const [selectedQuiz, setSelectedQuiz] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{[key: number]: string}>({});
  const [results, setResults] = useState<any>(null);

  const startQuiz = (quizKey: string) => {
    setSelectedQuiz(quizKey);
    setCurrentQuestion(0);
    setAnswers({});
    setResults(null);
  };

  const handleAnswer = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: value
    }));
  };

  const nextQuestion = () => {
    const quiz = quizzes[selectedQuiz as keyof typeof quizzes];
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      calculateResults();
    }
  };

  const calculateResults = () => {
    const quiz = quizzes[selectedQuiz as keyof typeof quizzes];
    const scores: {[key: string]: number} = {};
    
    Object.entries(answers).forEach(([questionIndex, answer]) => {
      const question = quiz.questions[parseInt(questionIndex)];
      const selectedOption = question.options.find(opt => opt.id === answer);
      
      if (selectedOption) {
        const key = (selectedOption as any).stream || (selectedOption as any).subject || (selectedOption as any).trait;
        if (key) {
          scores[key] = (scores[key] || 0) + 1;
        }
      }
    });

    const topResult = Object.entries(scores).reduce((a, b) => 
      scores[a[0]] > scores[b[0]] ? a : b
    );

    setResults({
      scores,
      topResult: topResult[0],
      topScore: topResult[1]
    });
  };

  const resetQuiz = () => {
    setSelectedQuiz(null);
    setCurrentQuestion(0);
    setAnswers({});
    setResults(null);
  };

  const getResultMessage = () => {
    if (!results || !selectedQuiz) return "";
    
    const { topResult } = results;
    
    if (selectedQuiz === 'interest') {
      const messages = {
        science: "Science stream suits you best! Consider careers in engineering, medicine, or research.",
        commerce: "Commerce stream aligns with your interests! Explore CA, business, or finance careers.",
        arts: "Arts stream matches your profile! Consider law, journalism, or civil services."
      };
      return messages[topResult as keyof typeof messages] || "";
    }
    
    if (selectedQuiz === 'strengths') {
      const messages = {
        maths: "Mathematics is your strength! Consider engineering, data science, or actuarial science.",
        science: "Science is your forte! Explore medical, research, or biotechnology careers.",
        social: "Social studies suit you! Consider law, civil services, or journalism.",
        computer: "Computer science aligns with you! Explore software engineering or IT careers."
      };
      return messages[topResult as keyof typeof messages] || "";
    }
    
    if (selectedQuiz === 'personality') {
      const messages = {
        analytical: "You're analytical! Consider research, data analysis, or consulting careers.",
        creative: "You're creative! Explore design, marketing, or entrepreneurship.",
        logical: "You're logical! Consider engineering, law, or project management.",
        leadership: "You're a leader! Explore management, politics, or entrepreneurship."
      };
      return messages[topResult as keyof typeof messages] || "";
    }
    
    return "";
  };

  if (selectedQuiz && !results) {
    const quiz = quizzes[selectedQuiz as keyof typeof quizzes];
    const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;
    
    return (
      <div className="min-h-screen bg-gradient-hero py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Card className="shadow-soft">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl text-primary">{quiz.title}</CardTitle>
                <Button variant="ghost" onClick={resetQuiz}>
                  <RotateCcw className="w-4 h-4" />
                </Button>
              </div>
              <Progress value={progress} className="mt-4" />
              <p className="text-sm text-muted-foreground">
                Question {currentQuestion + 1} of {quiz.questions.length}
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-primary">
                  {quiz.questions[currentQuestion].question}
                </h3>
                
                <RadioGroup
                  value={answers[currentQuestion] || ""}
                  onValueChange={handleAnswer}
                  className="space-y-3"
                >
                  {quiz.questions[currentQuestion].options.map((option) => (
                    <div key={option.id} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.id} id={option.id} />
                      <Label 
                        htmlFor={option.id} 
                        className="flex-1 cursor-pointer p-3 rounded-lg border hover:bg-coffee-light transition-colors"
                      >
                        {option.text}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
                
                <div className="flex justify-end">
                  <Button 
                    onClick={nextQuestion} 
                    disabled={!answers[currentQuestion]}
                    className="bg-gradient-coffee hover:shadow-warm transition-all duration-300"
                  >
                    {currentQuestion === quiz.questions.length - 1 ? "Get Results" : "Next Question"}
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (results) {
    return (
      <div className="min-h-screen bg-gradient-hero py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <Card className="shadow-soft">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-primary mb-4">Quiz Results</CardTitle>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-coffee rounded-full mb-4">
                <Brain className="w-8 h-8 text-primary-foreground" />
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Your Top Result: {results.topResult.charAt(0).toUpperCase() + results.topResult.slice(1)}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {getResultMessage()}
                </p>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium text-primary">Detailed Breakdown:</h4>
                {Object.entries(results.scores).map(([key, score]) => (
                  <div key={key} className="flex items-center justify-between p-3 bg-card rounded-lg">
                    <span className="capitalize">{key}</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-muted rounded-full h-2">
                        <div 
                          className="bg-gradient-coffee h-2 rounded-full transition-all duration-500"
                          style={{ width: `${((score as number) / 5) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-muted-foreground">{score as number}/5</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="flex space-x-4 pt-6">
                <Button onClick={resetQuiz} variant="outline" className="flex-1">
                  Take Another Quiz
                </Button>
                <Button className="flex-1 bg-gradient-coffee hover:shadow-warm transition-all duration-300">
                  View Recommended Careers
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-hero py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-coffee rounded-2xl mb-6">
            <Brain className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold text-primary mb-4">Career Quizzes & Tests</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover your interests, strengths, and personality traits to guide your career decisions
          </p>
        </div>

        {/* Quiz Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(quizzes).map(([key, quiz]) => {
            const IconComponent = quiz.icon;
            return (
              <Card key={key} className="shadow-soft hover:shadow-warm transition-all duration-300 cursor-pointer group">
                <CardHeader className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-coffee rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-primary">{quiz.title}</CardTitle>
                  <CardDescription className="text-center">{quiz.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button 
                    onClick={() => startQuiz(key)}
                    className="w-full bg-gradient-coffee hover:shadow-warm transition-all duration-300"
                  >
                    Start Quiz
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-2">
                    5 questions • 3-5 minutes
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Benefits Section */}
        <Card className="mt-12 shadow-soft">
          <CardHeader>
            <CardTitle className="text-2xl text-primary text-center">Why Take Our Quizzes?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Self-Discovery</h3>
                <p className="text-sm text-muted-foreground">
                  Understand your natural inclinations and preferences
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Career Guidance</h3>
                <p className="text-sm text-muted-foreground">
                  Get personalized recommendations based on your results
                </p>
              </div>
              <div>
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Future Planning</h3>
                <p className="text-sm text-muted-foreground">
                  Make informed decisions about your academic and career path
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}