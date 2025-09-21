import { useState } from "react";
import { FileText, Download, Copy, User, GraduationCap, Award, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ResumeData {
  personalInfo: {
    name: string;
    email: string;
    phone: string;
    address: string;
    objective: string;
  };
  education: Array<{
    institution: string;
    degree: string;
    year: string;
    percentage: string;
  }>;
  skills: string[];
  achievements: string[];
}

const resumeTemplates = [
  {
    id: "10th-pass",
    title: "10th Pass Student",
    description: "Perfect for students who have completed 10th grade"
  },
  {
    id: "12th-pass",
    title: "12th Pass Student", 
    description: "Ideal for 12th grade graduates"
  },
  {
    id: "college",
    title: "College Student",
    description: "For undergraduate and graduate students"
  }
];

export default function ResumeBuilder() {
  const [activeTab, setActiveTab] = useState("info");
  const [resumeData, setResumeData] = useState<ResumeData>({
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      address: "",
      objective: ""
    },
    education: [{ institution: "", degree: "", year: "", percentage: "" }],
    skills: [],
    achievements: []
  });

  const updatePersonalInfo = (field: string, value: string) => {
    setResumeData(prev => ({
      ...prev,
      personalInfo: { ...prev.personalInfo, [field]: value }
    }));
  };

  const addEducation = () => {
    setResumeData(prev => ({
      ...prev,
      education: [...prev.education, { institution: "", degree: "", year: "", percentage: "" }]
    }));
  };

  const updateEducation = (index: number, field: string, value: string) => {
    setResumeData(prev => ({
      ...prev,
      education: prev.education.map((edu, i) => 
        i === index ? { ...edu, [field]: value } : edu
      )
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-hero py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-coffee rounded-2xl mb-6">
            <FileText className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold text-primary mb-4">Resume Builder</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create a professional resume that stands out. Choose from our templates designed specifically for Indian students.
          </p>
        </div>

        {/* Why Resume Matters */}
        <Card className="mb-8 shadow-soft">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Why Your Resume Matters</CardTitle>
            <CardDescription>
              A well-crafted resume is your first impression with potential employers and educational institutions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-warm-orange rounded-xl flex items-center justify-center mx-auto mb-3">
                  <User className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-primary mb-2">First Impression</h3>
                <p className="text-sm text-muted-foreground">Your resume is often the first thing employers see</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-warm-orange rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Showcase Skills</h3>
                <p className="text-sm text-muted-foreground">Highlight your achievements and capabilities</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-warm-orange rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Career Growth</h3>
                <p className="text-sm text-muted-foreground">Opens doors to better opportunities</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Templates */}
        <Card className="mb-8 shadow-soft">
          <CardHeader>
            <CardTitle className="text-xl text-primary">Choose Your Template</CardTitle>
            <CardDescription>Select a template that matches your educational background</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {resumeTemplates.map((template) => (
                <Card key={template.id} className="cursor-pointer hover:shadow-warm transition-all duration-300 border-2 hover:border-warm-orange">
                  <CardContent className="p-4 text-center">
                    <GraduationCap className="w-8 h-8 text-warm-orange mx-auto mb-3" />
                    <h3 className="font-semibold text-primary mb-2">{template.title}</h3>
                    <p className="text-sm text-muted-foreground">{template.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Resume Builder Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Build Your Resume</CardTitle>
              <CardDescription>Fill in your details step by step</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="info">Personal</TabsTrigger>
                  <TabsTrigger value="education">Education</TabsTrigger>
                  <TabsTrigger value="skills">Skills</TabsTrigger>
                  <TabsTrigger value="achievements">Awards</TabsTrigger>
                </TabsList>

                <TabsContent value="info" className="space-y-4 mt-6">
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        value={resumeData.personalInfo.name}
                        onChange={(e) => updatePersonalInfo("name", e.target.value)}
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={resumeData.personalInfo.email}
                        onChange={(e) => updatePersonalInfo("email", e.target.value)}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={resumeData.personalInfo.phone}
                        onChange={(e) => updatePersonalInfo("phone", e.target.value)}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        value={resumeData.personalInfo.address}
                        onChange={(e) => updatePersonalInfo("address", e.target.value)}
                        placeholder="City, State, PIN Code"
                      />
                    </div>
                    <div>
                      <Label htmlFor="objective">Career Objective</Label>
                      <Textarea
                        id="objective"
                        value={resumeData.personalInfo.objective}
                        onChange={(e) => updatePersonalInfo("objective", e.target.value)}
                        placeholder="Write a brief career objective..."
                        rows={3}
                      />
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="education" className="space-y-4 mt-6">
                  {resumeData.education.map((edu, index) => (
                    <div key={index} className="space-y-4 p-4 border rounded-lg">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Institution</Label>
                          <Input
                            value={edu.institution}
                            onChange={(e) => updateEducation(index, "institution", e.target.value)}
                            placeholder="School/College name"
                          />
                        </div>
                        <div>
                          <Label>Degree/Class</Label>
                          <Input
                            value={edu.degree}
                            onChange={(e) => updateEducation(index, "degree", e.target.value)}
                            placeholder="10th/12th/B.Tech etc."
                          />
                        </div>
                        <div>
                          <Label>Year</Label>
                          <Input
                            value={edu.year}
                            onChange={(e) => updateEducation(index, "year", e.target.value)}
                            placeholder="2023"
                          />
                        </div>
                        <div>
                          <Label>Percentage/CGPA</Label>
                          <Input
                            value={edu.percentage}
                            onChange={(e) => updateEducation(index, "percentage", e.target.value)}
                            placeholder="85% or 8.5 CGPA"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                  <Button onClick={addEducation} variant="outline" className="w-full">
                    Add Education
                  </Button>
                </TabsContent>

                <TabsContent value="skills" className="mt-6">
                  <div className="space-y-4">
                    <Label>Skills (one per line)</Label>
                    <Textarea
                      placeholder="Programming&#10;Communication&#10;Leadership&#10;Problem Solving"
                      rows={6}
                    />
                  </div>
                </TabsContent>

                <TabsContent value="achievements" className="mt-6">
                  <div className="space-y-4">
                    <Label>Achievements & Awards (one per line)</Label>
                    <Textarea
                      placeholder="School topper in Mathematics&#10;Winner of Science Fair 2023&#10;Certificate in Computer Programming"
                      rows={6}
                    />
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Resume Preview */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Resume Preview</CardTitle>
              <CardDescription>See how your resume will look</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-white p-6 rounded-lg border min-h-[600px]">
                <div className="text-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-2">
                    {resumeData.personalInfo.name || "Your Name"}
                  </h2>
                  <div className="text-gray-600 space-y-1">
                    <p>{resumeData.personalInfo.email || "your.email@example.com"}</p>
                    <p>{resumeData.personalInfo.phone || "+91 XXXXX XXXXX"}</p>
                    <p>{resumeData.personalInfo.address || "City, State, PIN Code"}</p>
                  </div>
                </div>

                {resumeData.personalInfo.objective && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 border-b">Career Objective</h3>
                    <p className="text-gray-700 text-sm">{resumeData.personalInfo.objective}</p>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2 border-b">Education</h3>
                  {resumeData.education.map((edu, index) => (
                    <div key={index} className="mb-3">
                      <div className="flex justify-between">
                        <span className="font-medium">{edu.degree || "Degree"}</span>
                        <span className="text-gray-600">{edu.year || "Year"}</span>
                      </div>
                      <div className="text-gray-700">{edu.institution || "Institution"}</div>
                      {edu.percentage && (
                        <div className="text-gray-600 text-sm">Score: {edu.percentage}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex space-x-4">
                <Button className="flex-1 bg-gradient-coffee hover:shadow-warm transition-all duration-300">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </Button>
                <Button variant="outline" className="flex-1">
                  <Copy className="w-4 h-4 mr-2" />
                  Copy Text
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}