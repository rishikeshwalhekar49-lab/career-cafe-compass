import { useState } from "react";
import { GitBranch, Download, TrendingUp, Users, Briefcase, GraduationCap, DollarSign, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const careers = [
  {
    id: "software-engineer",
    name: "Software Engineer",
    category: "Technology",
    overview: "Design, develop, and maintain software applications and systems",
    eligibility: "B.Tech/B.E. in Computer Science, MCA, or equivalent",
    entranceExams: "JEE Main, JEE Advanced, GATE, Company-specific tests",
    topColleges: "IIT Delhi, IIT Bombay, IIIT Hyderabad, VIT, SRM",
    recruiters: "Google, Microsoft, Amazon, TCS, Infosys",
    salaryIndia: "₹4-25 LPA",
    salaryAbroad: "$70,000 - $200,000",
    growth: "Excellent - High demand globally",
    workNature: "Problem-solving, coding, team collaboration",
    pros: ["High salary potential", "Global opportunities", "Creative work"],
    cons: ["Continuous learning required", "Long hours", "Sedentary work"]
  },
  {
    id: "doctor",
    name: "Doctor (MBBS)",
    category: "Healthcare",
    overview: "Diagnose, treat, and prevent illnesses and medical conditions",
    eligibility: "12th with PCB, NEET qualification",
    entranceExams: "NEET UG, AIIMS, JIPMER",
    topColleges: "AIIMS Delhi, CMC Vellore, AFMC, JIPMER",
    recruiters: "Government hospitals, Private hospitals, NGOs",
    salaryIndia: "₹6-50 LPA",
    salaryAbroad: "$200,000 - $400,000",
    growth: "Excellent - Always in demand",
    workNature: "Patient care, diagnosis, emergency response",
    pros: ["Social respect", "Job security", "Helping people"],
    cons: ["Long study duration", "High stress", "Work-life balance issues"]
  },
  {
    id: "ca",
    name: "Chartered Accountant",
    category: "Finance",
    overview: "Handle financial accounts, auditing, taxation, and business advisory",
    eligibility: "12th pass, CA Foundation, Intermediate, Final",
    entranceExams: "CA Foundation, CA Intermediate, CA Final",
    topColleges: "Self-study or coaching institutes",
    recruiters: "Big 4 firms, Banks, MNCs, Government",
    salaryIndia: "₹6-40 LPA",
    salaryAbroad: "$60,000 - $150,000",
    growth: "Very Good - Essential for businesses",
    workNature: "Analysis, auditing, tax planning, consulting",
    pros: ["High earning potential", "Respected profession", "Diverse opportunities"],
    cons: ["Intensive study", "Work pressure during peak seasons", "Long hours"]
  },
  {
    id: "lawyer",
    name: "Lawyer",
    category: "Legal",
    overview: "Represent clients, provide legal advice, and handle court proceedings",
    eligibility: "LLB (3 years) or BA LLB (5 years)",
    entranceExams: "CLAT, AILET, LSAT India",
    topColleges: "NLS Bangalore, NLSIU, NALSAR Hyderabad",
    recruiters: "Law firms, Corporate legal departments, Government",
    salaryIndia: "₹3-30 LPA",
    salaryAbroad: "$60,000 - $300,000",
    growth: "Good - Growing legal awareness",
    workNature: "Research, client interaction, court appearances",
    pros: ["Intellectual stimulation", "Social impact", "Independence"],
    cons: ["Irregular income initially", "High competition", "Stressful profession"]
  }
];

const comparisonCategories = [
  { key: "overview", label: "Overview", icon: Briefcase },
  { key: "eligibility", label: "Eligibility", icon: GraduationCap },
  { key: "entranceExams", label: "Entrance Exams", icon: Users },
  { key: "topColleges", label: "Top Colleges", icon: TrendingUp },
  { key: "recruiters", label: "Top Recruiters", icon: Briefcase },
  { key: "salaryIndia", label: "Salary (India)", icon: DollarSign },
  { key: "salaryAbroad", label: "Salary (Abroad)", icon: DollarSign },
  { key: "growth", label: "Growth Opportunities", icon: TrendingUp },
  { key: "workNature", label: "Nature of Work", icon: Clock },
];

export default function CareerComparison() {
  const [selectedCareers, setSelectedCareers] = useState<string[]>([]);

  const handleCareerSelect = (careerId: string, position: number) => {
    const newSelection = [...selectedCareers];
    newSelection[position] = careerId;
    setSelectedCareers(newSelection);
  };

  const getSelectedCareer = (position: number) => {
    const careerId = selectedCareers[position];
    return careers.find(c => c.id === careerId);
  };

  return (
    <div className="min-h-screen bg-gradient-hero py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-coffee rounded-2xl mb-6">
            <GitBranch className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold text-primary mb-4">Career Comparison</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Compare different career paths side by side to make informed decisions about your future.
          </p>
        </div>

        {/* Career Selection */}
        <Card className="mb-8 shadow-soft">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Select Careers to Compare</CardTitle>
            <CardDescription>Choose up to 2 careers for detailed comparison</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-primary mb-2">Career 1</label>
                <Select onValueChange={(value) => handleCareerSelect(value, 0)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select first career" />
                  </SelectTrigger>
                  <SelectContent>
                    {careers.map((career) => (
                      <SelectItem key={career.id} value={career.id}>
                        {career.name} ({career.category})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-2">Career 2</label>
                <Select onValueChange={(value) => handleCareerSelect(value, 1)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select second career" />
                  </SelectTrigger>
                  <SelectContent>
                    {careers.map((career) => (
                      <SelectItem key={career.id} value={career.id}>
                        {career.name} ({career.category})
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Comparison Table */}
        {selectedCareers.length > 0 && (
          <Card className="shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-2xl text-primary">Career Comparison</CardTitle>
                <CardDescription>Detailed side-by-side comparison</CardDescription>
              </div>
              <Button className="bg-gradient-coffee hover:shadow-warm transition-all duration-300">
                <Download className="w-4 h-4 mr-2" />
                Export PDF
              </Button>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-border">
                      <th className="text-left py-4 px-2 font-semibold text-primary">Category</th>
                      {[0, 1].map((position) => {
                        const career = getSelectedCareer(position);
                        return (
                          <th key={position} className="text-left py-4 px-4 font-semibold text-primary min-w-[300px]">
                            {career ? (
                              <div>
                                <div className="text-lg">{career.name}</div>
                                <div className="text-sm text-muted-foreground font-normal">{career.category}</div>
                              </div>
                            ) : (
                              `Career ${position + 1}`
                            )}
                          </th>
                        );
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonCategories.map((category, index) => (
                      <tr key={category.key} className={index % 2 === 0 ? "bg-card" : "bg-background"}>
                        <td className="py-4 px-2 font-medium text-primary">
                          <div className="flex items-center space-x-2">
                            <category.icon className="w-4 h-4" />
                            <span>{category.label}</span>
                          </div>
                        </td>
                        {[0, 1].map((position) => {
                          const career = getSelectedCareer(position);
                          return (
                            <td key={position} className="py-4 px-4 text-muted-foreground">
                              {career ? (
                                <div>
                                  {category.key === "pros" ? (
                                    <ul className="list-disc list-inside space-y-1">
                                      {career.pros.map((pro, i) => (
                                        <li key={i} className="text-sm">{pro}</li>
                                      ))}
                                    </ul>
                                  ) : category.key === "cons" ? (
                                    <ul className="list-disc list-inside space-y-1">
                                      {career.cons.map((con, i) => (
                                        <li key={i} className="text-sm">{con}</li>
                                      ))}
                                    </ul>
                                  ) : (
                                    career[category.key as keyof typeof career]
                                  )}
                                </div>
                              ) : (
                                "-"
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pros and Cons Section */}
              {selectedCareers.some(Boolean) && (
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[0, 1].map((position) => {
                    const career = getSelectedCareer(position);
                    if (!career) return null;

                    return (
                      <div key={position}>
                        <h3 className="text-lg font-semibold text-primary mb-4">{career.name} - Pros & Cons</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <Card className="border-green-200 bg-green-50/50">
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm text-green-700">Pros</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0">
                              <ul className="space-y-2">
                                {career.pros.map((pro, i) => (
                                  <li key={i} className="text-sm text-green-600 flex items-start">
                                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                    {pro}
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                          <Card className="border-red-200 bg-red-50/50">
                            <CardHeader className="pb-3">
                              <CardTitle className="text-sm text-red-700">Cons</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-0">
                              <ul className="space-y-2">
                                {career.cons.map((con, i) => (
                                  <li key={i} className="text-sm text-red-600 flex items-start">
                                    <span className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                    {con}
                                  </li>
                                ))}
                              </ul>
                            </CardContent>
                          </Card>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}