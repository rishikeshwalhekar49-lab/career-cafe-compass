import { useState } from "react";
import { Calendar, GraduationCap, DollarSign, MapPin, Clock, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const admissionData = [
  {
    college: "IIT Delhi",
    course: "B.Tech Computer Science",
    cost: "₹2.5 Lakhs/year",
    location: "New Delhi",
    admissionDate: "June 15, 2024",
    examDate: "April 8, 2024",
    logo: "🎓"
  },
  {
    college: "AIIMS Delhi",
    course: "MBBS",
    cost: "₹1.5 Lakhs/year",
    location: "New Delhi",
    admissionDate: "July 20, 2024",
    examDate: "May 12, 2024",
    logo: "🏥"
  },
  {
    college: "SRCC Delhi",
    course: "B.Com (Hons)",
    cost: "₹50,000/year",
    location: "New Delhi",
    admissionDate: "June 30, 2024",
    examDate: "May 25, 2024",
    logo: "💼"
  },
  {
    college: "NLS Bangalore",
    course: "BA LLB",
    cost: "₹2 Lakhs/year",
    location: "Bangalore",
    admissionDate: "June 10, 2024",
    examDate: "April 20, 2024",
    logo: "⚖️"
  },
  {
    college: "IIM Ahmedabad",
    course: "MBA",
    cost: "₹25 Lakhs total",
    location: "Ahmedabad",
    admissionDate: "June 1, 2024",
    examDate: "November 26, 2023",
    logo: "📊"
  },
  {
    college: "IIMC Delhi",
    course: "Journalism",
    cost: "₹1 Lakh/year",
    location: "New Delhi",
    admissionDate: "July 15, 2024",
    examDate: "June 5, 2024",
    logo: "📰"
  },
  {
    college: "JNU Delhi",
    course: "MA Political Science",
    cost: "₹20,000/year",
    location: "New Delhi",
    admissionDate: "August 1, 2024",
    examDate: "May 30, 2024",
    logo: "🏛️"
  },
  {
    college: "ISB Hyderabad",
    course: "MBA",
    cost: "₹35 Lakhs total",
    location: "Hyderabad",
    admissionDate: "April 15, 2024",
    examDate: "March 1, 2024",
    logo: "🏢"
  },
  {
    college: "NIFT Delhi",
    course: "Fashion Design",
    cost: "₹1.5 Lakhs/year",
    location: "New Delhi",
    admissionDate: "July 10, 2024",
    examDate: "January 14, 2024",
    logo: "✂️"
  },
  {
    college: "XLRI Jamshedpur",
    course: "MBA HRM",
    cost: "₹22 Lakhs total",
    location: "Jamshedpur",
    admissionDate: "May 20, 2024",
    examDate: "January 7, 2024",
    logo: "👥"
  }
];

const scholarshipsIndia = [
  {
    name: "INSPIRE Scholarship",
    institution: "Department of Science & Technology",
    description: "For students pursuing science courses",
    amount: "₹80,000/year",
    eligibility: "Class 12 with 85%+ in Science",
    logo: "🔬"
  },
  {
    name: "National Merit Scholarship",
    institution: "Ministry of Education",
    description: "Merit-based scholarship for all streams",
    amount: "₹12,000/year",
    eligibility: "Class 12 with 80%+ marks",
    logo: "🏆"
  },
  {
    name: "Kishore Vaigyanik Protsahan Yojana",
    institution: "Indian Institute of Science",
    description: "For students with aptitude in research",
    amount: "₹7,000/month + fees",
    eligibility: "Class 12 Science students",
    logo: "🧪"
  },
  {
    name: "Post Matric Scholarship SC/ST",
    institution: "Ministry of Social Justice",
    description: "For SC/ST students pursuing higher education",
    amount: "Up to ₹2 Lakhs/year",
    eligibility: "SC/ST students with 50%+ marks",
    logo: "📚"
  }
];

const scholarshipsAbroad = [
  {
    name: "Fulbright-Nehru Fellowship",
    institution: "United States-India Educational Foundation",
    description: "For PhD and Master's programs in USA",
    amount: "$25,000-$50,000",
    eligibility: "Graduate degree with excellent academics",
    logo: "🇺🇸"
  },
  {
    name: "Chevening Scholarship",
    institution: "UK Government",
    description: "Full scholarship for Master's in UK",
    amount: "Full tuition + living costs",
    eligibility: "Bachelor's degree with work experience",
    logo: "🇬🇧"
  },
  {
    name: "Australia Awards",
    institution: "Australian Government",
    description: "For undergraduate and postgraduate studies",
    amount: "Full tuition + allowances",
    eligibility: "Academic merit and leadership potential",
    logo: "🇦🇺"
  },
  {
    name: "DAAD Scholarship",
    institution: "German Academic Exchange Service",
    description: "For Master's and PhD in Germany",
    amount: "€850-€1,200/month",
    eligibility: "Bachelor's degree with good grades",
    logo: "🇩🇪"
  }
];

const entranceExams = [
  {
    exam: "JEE Main",
    course: "Engineering",
    cost: "₹650",
    location: "Multiple cities",
    college: "NITs, IIITs, State Engineering Colleges",
    logo: "⚙️"
  },
  {
    exam: "NEET UG",
    course: "Medical",
    cost: "₹1,600",
    location: "Multiple cities",
    college: "AIIMS, Government Medical Colleges",
    logo: "🩺"
  },
  {
    exam: "CAT",
    course: "MBA",
    cost: "₹2,300",
    location: "Multiple cities",
    college: "IIMs, Top B-Schools",
    logo: "📈"
  },
  {
    exam: "CLAT",
    course: "Law",
    cost: "₹4,000",
    location: "Multiple cities",
    college: "NLUs, Top Law Schools",
    logo: "⚖️"
  },
  {
    exam: "GATE",
    course: "Engineering/Technology",
    cost: "₹1,700",
    location: "Multiple cities",
    college: "IITs, NITs for M.Tech",
    logo: "🔧"
  },
  {
    exam: "UPSC CSE",
    course: "Civil Services",
    cost: "₹100",
    location: "Multiple cities",
    college: "Government Services",
    logo: "🏛️"
  },
  {
    exam: "CUET",
    course: "Various UG Courses",
    cost: "₹650",
    location: "Multiple cities",
    college: "Central Universities",
    logo: "🎓"
  },
  {
    exam: "XAT",
    course: "MBA",
    cost: "₹2,200",
    location: "Multiple cities",
    college: "XLRI, Top B-Schools",
    logo: "💼"
  },
  {
    exam: "AILET",
    course: "Law",
    cost: "₹3,500",
    location: "New Delhi",
    college: "NLU Delhi",
    logo: "📖"
  },
  {
    exam: "BITSAT",
    course: "Engineering",
    cost: "₹3,400",
    location: "Multiple cities",
    college: "BITS Pilani campuses",
    logo: "💻"
  }
];

export default function Timeline() {
  const [activeTab, setActiveTab] = useState("admissions");
  const [showMoreScholarships, setShowMoreScholarships] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-hero py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-coffee rounded-2xl mb-6">
            <Calendar className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold text-primary mb-4">Timeline Tracker</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with admission dates, scholarship deadlines, and entrance exam schedules
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto">
            <TabsTrigger value="admissions">Admission Dates</TabsTrigger>
            <TabsTrigger value="scholarships">Scholarships</TabsTrigger>
            <TabsTrigger value="exams">Entrance Tests</TabsTrigger>
          </TabsList>

          {/* Admission Dates Tab */}
          <TabsContent value="admissions" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2">College Admission Timeline</h2>
              <p className="text-muted-foreground">Important dates for top colleges and universities</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {admissionData.map((item, index) => (
                <Card key={index} className="shadow-soft hover:shadow-warm transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="text-2xl">{item.logo}</div>
                      <Badge variant="outline" className="text-xs">
                        {item.location}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg text-primary">{item.college}</CardTitle>
                    <CardDescription>{item.course}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <DollarSign className="w-4 h-4 text-green-600" />
                        <span className="text-muted-foreground">Cost:</span>
                      </div>
                      <span className="font-medium">{item.cost}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-blue-600" />
                        <span className="text-muted-foreground">Admission:</span>
                      </div>
                      <span className="font-medium">{item.admissionDate}</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-orange-600" />
                        <span className="text-muted-foreground">Exam:</span>
                      </div>
                      <span className="font-medium">{item.examDate}</span>
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full mt-4">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Scholarships Tab */}
          <TabsContent value="scholarships" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2">Scholarship Opportunities</h2>
              <p className="text-muted-foreground">Financial aid for your educational journey</p>
            </div>

            {/* India Scholarships */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center space-x-2">
                <span>🇮🇳</span>
                <span>Scholarships in India</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {scholarshipsIndia.map((scholarship, index) => (
                  <Card key={index} className="shadow-soft hover:shadow-warm transition-all duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="text-2xl">{scholarship.logo}</div>
                        <Badge className="bg-green-100 text-green-800">
                          {scholarship.amount}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg text-primary">{scholarship.name}</CardTitle>
                      <CardDescription className="text-sm">{scholarship.institution}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground">{scholarship.description}</p>
                      <div className="border-t pt-3">
                        <div className="flex items-center space-x-2 text-sm">
                          <GraduationCap className="w-4 h-4 text-primary" />
                          <span className="font-medium">Eligibility:</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{scholarship.eligibility}</p>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Apply Now
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Abroad Scholarships */}
            <div>
              <h3 className="text-xl font-semibold text-primary mb-4 flex items-center space-x-2">
                <span>🌍</span>
                <span>International Scholarships</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {scholarshipsAbroad.slice(0, showMoreScholarships ? scholarshipsAbroad.length : 4).map((scholarship, index) => (
                  <Card key={index} className="shadow-soft hover:shadow-warm transition-all duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <div className="text-2xl">{scholarship.logo}</div>
                        <Badge className="bg-blue-100 text-blue-800">
                          {scholarship.amount}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg text-primary">{scholarship.name}</CardTitle>
                      <CardDescription className="text-sm">{scholarship.institution}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-sm text-muted-foreground">{scholarship.description}</p>
                      <div className="border-t pt-3">
                        <div className="flex items-center space-x-2 text-sm">
                          <GraduationCap className="w-4 h-4 text-primary" />
                          <span className="font-medium">Eligibility:</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">{scholarship.eligibility}</p>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Learn More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {!showMoreScholarships && (
                <div className="text-center mt-6">
                  <Button 
                    variant="outline" 
                    onClick={() => setShowMoreScholarships(true)}
                    className="bg-gradient-coffee text-primary-foreground hover:shadow-warm transition-all duration-300"
                  >
                    Show More Scholarships
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>

          {/* Entrance Exams Tab */}
          <TabsContent value="exams" className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-primary mb-2">Entrance Examinations</h2>
              <p className="text-muted-foreground">Key exams for your desired career path</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {entranceExams.map((exam, index) => (
                <Card key={index} className="shadow-soft hover:shadow-warm transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="text-2xl">{exam.logo}</div>
                      <Badge variant="secondary">{exam.cost}</Badge>
                    </div>
                    <CardTitle className="text-lg text-primary">{exam.exam}</CardTitle>
                    <CardDescription>{exam.course}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">{exam.location}</span>
                    </div>
                    
                    <div className="border-t pt-3">
                      <p className="text-sm font-medium text-primary">Applicable Colleges:</p>
                      <p className="text-sm text-muted-foreground">{exam.college}</p>
                    </div>
                    
                    <Button variant="outline" size="sm" className="w-full">
                      <Calendar className="w-4 h-4 mr-2" />
                      Exam Schedule
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}