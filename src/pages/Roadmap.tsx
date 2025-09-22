import { useState, useEffect } from "react";
import { MapPin, BookOpen, Target, Award, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const streams = {
  science: {
    name: "Science",
    color: "bg-blue-500",
    careers: [
      {
        name: "Engineering",
        cutoff: "75-90% in 12th",
        exams: "JEE Main, JEE Advanced",
        medium: "English/Hindi",
        facilities: "Lab, Library, Hostel",
        placement: "80-95%"
      },
      {
        name: "Medical",
        cutoff: "85-95% in 12th",
        exams: "NEET UG",
        medium: "English",
        facilities: "Hospital, Lab, Library",
        placement: "90-100%"
      },
      {
        name: "Research",
        cutoff: "70-85% in 12th",
        exams: "GATE, NET",
        medium: "English",
        facilities: "Research Labs, Library",
        placement: "70-85%"
      },
      {
        name: "Data Science",
        cutoff: "70-80% in 12th",
        exams: "Entrance Tests",
        medium: "English",
        facilities: "Computer Labs, Internet",
        placement: "85-95%"
      }
    ]
  },
  commerce: {
    name: "Commerce",
    color: "bg-green-500",
    careers: [
      {
        name: "Chartered Accountant",
        cutoff: "60-75% in 12th",
        exams: "CA Foundation, Intermediate, Final",
        medium: "English/Hindi",
        facilities: "Library, Study Rooms",
        placement: "90-95%"
      },
      {
        name: "Company Secretary",
        cutoff: "60-70% in 12th",
        exams: "CS Foundation, Executive, Professional",
        medium: "English",
        facilities: "Library, Computer Lab",
        placement: "80-90%"
      },
      {
        name: "MBA",
        cutoff: "50-60% in Graduation",
        exams: "CAT, MAT, XAT",
        medium: "English",
        facilities: "Case Study Rooms, Library",
        placement: "85-95%"
      },
      {
        name: "Business Analytics",
        cutoff: "60-75% in 12th",
        exams: "Entrance Tests",
        medium: "English",
        facilities: "Computer Labs, Internet",
        placement: "80-90%"
      }
    ]
  },
  arts: {
    name: "Arts",
    color: "bg-orange-500",
    careers: [
      {
        name: "Law",
        cutoff: "50-70% in 12th",
        exams: "CLAT, AILET, LSAT",
        medium: "English/Hindi",
        facilities: "Library, Moot Court",
        placement: "70-85%"
      },
      {
        name: "Journalism",
        cutoff: "50-65% in 12th",
        exams: "IIMC Entrance, JMI",
        medium: "English/Hindi/Regional",
        facilities: "Media Lab, Library",
        placement: "60-80%"
      },
      {
        name: "Psychology",
        cutoff: "55-70% in 12th",
        exams: "DU Entrance, BHU",
        medium: "English",
        facilities: "Psychology Lab, Library",
        placement: "65-80%"
      },
      {
        name: "Civil Services",
        cutoff: "50-60% in Graduation",
        exams: "UPSC CSE",
        medium: "English/Hindi",
        facilities: "Library, Study Rooms",
        placement: "1-2% selection"
      }
    ]
  }
};

export default function Roadmap() {
  const [selectedStream, setSelectedStream] = useState<string>("");
  const [progress, setProgress] = useState<{[key: string]: boolean}>({});
  const [recommendedStream, setRecommendedStream] = useState<string>("");
  
  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      fetchRecommendedStream();
    }
  }, [user]);

  const fetchRecommendedStream = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('quiz_results')
        .select('recommended_stream')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (!error && data?.recommended_stream) {
        setRecommendedStream(data.recommended_stream);
        if (!selectedStream) {
          setSelectedStream(data.recommended_stream);
        }
      }
    } catch (error) {
      console.error('Error fetching recommended stream:', error);
    }
  };

  const handleMilestoneToggle = (careerName: string) => {
    setProgress(prev => ({
      ...prev,
      [careerName]: !prev[careerName]
    }));
  };

  const selectedStreamData = selectedStream ? streams[selectedStream as keyof typeof streams] : null;

  return (
    <div className="min-h-screen bg-gradient-hero py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-coffee rounded-2xl mb-6">
            <MapPin className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold text-primary mb-4">Personalized Career Roadmap</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Get a customized roadmap based on your interests and academic background
          </p>
        </div>

        {/* Stream Selection */}
        <Card className="mb-8 shadow-soft">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Select Your Stream</CardTitle>
            <CardDescription>
              {recommendedStream 
                ? `Based on your quiz results, we recommend the ${recommendedStream.charAt(0).toUpperCase() + recommendedStream.slice(1)} stream`
                : "Choose your academic stream to see personalized career paths"
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recommendedStream && (
                <div className="flex items-center space-x-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-green-700 font-medium">
                    Recommended: {recommendedStream.charAt(0).toUpperCase() + recommendedStream.slice(1)} Stream
                  </span>
                </div>
              )}
              <Select onValueChange={setSelectedStream} value={selectedStream}>
                <SelectTrigger className="max-w-md">
                  <SelectValue placeholder="Select your stream" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="science">Science Stream</SelectItem>
                  <SelectItem value="commerce">Commerce Stream</SelectItem>
                  <SelectItem value="arts">Arts Stream</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Roadmap Display */}
        {selectedStreamData && (
          <Card className="shadow-soft">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-2xl text-primary flex items-center space-x-3">
                  <div className={`w-4 h-4 rounded-full ${selectedStreamData.color}`}></div>
                  <span>{selectedStreamData.name} Stream Roadmap</span>
                </CardTitle>
                <CardDescription>Interactive career milestones and requirements</CardDescription>
              </div>
              <Button className="bg-gradient-coffee hover:shadow-warm transition-all duration-300">
                <Download className="w-4 h-4 mr-2" />
                Export PDF
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {selectedStreamData.careers.map((career, index) => (
                  <Card 
                    key={career.name} 
                    className={`relative border-2 transition-all duration-300 hover:shadow-warm ${
                      progress[career.name] ? 'border-green-500 bg-green-50/50' : 'border-border'
                    }`}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg text-primary flex items-center space-x-2">
                          <Target className="w-5 h-5" />
                          <span>{career.name}</span>
                        </CardTitle>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => handleMilestoneToggle(career.name)}
                          className={`w-6 h-6 rounded-full p-0 ${
                            progress[career.name] 
                              ? 'bg-green-500 text-white hover:bg-green-600' 
                              : 'border-2 border-gray-300 hover:border-primary'
                          }`}
                        >
                          {progress[career.name] && '✓'}
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 gap-3">
                        <div className="flex items-center space-x-2">
                          <BookOpen className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">Cut-off:</span>
                          <Badge variant="secondary">{career.cutoff}</Badge>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Award className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">Exams:</span>
                          <span className="text-sm text-muted-foreground">{career.exams}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                          <span className="text-sm font-medium">Medium:</span>
                          <span className="text-sm text-muted-foreground">{career.medium}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                          <span className="text-sm font-medium">Facilities:</span>
                          <span className="text-sm text-muted-foreground">{career.facilities}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                          <span className="text-sm font-medium">Placement:</span>
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            {career.placement}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Progress Summary */}
              <div className="mt-8 p-4 bg-card rounded-lg border">
                <h3 className="text-lg font-semibold text-primary mb-2">Progress Summary</h3>
                <p className="text-muted-foreground">
                  {Object.values(progress).filter(Boolean).length} of {selectedStreamData.careers.length} milestones completed
                </p>
                <div className="w-full bg-muted rounded-full h-2 mt-3">
                  <div 
                    className="bg-gradient-coffee h-2 rounded-full transition-all duration-500"
                    style={{
                      width: `${(Object.values(progress).filter(Boolean).length / selectedStreamData.careers.length) * 100}%`
                    }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {!selectedStream && (
          <Card className="shadow-soft">
            <CardContent className="flex flex-col items-center justify-center py-12">
              <MapPin className="w-16 h-16 text-muted-foreground mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">Ready to Start Your Journey?</h3>
              <p className="text-muted-foreground text-center max-w-md">
                Select your academic stream above to discover personalized career paths and track your progress
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}