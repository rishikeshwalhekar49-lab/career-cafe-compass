import { MessageCircle, Users, Heart, Star, Mail, Instagram, Twitter, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const stats = [
  {
    icon: Users,
    label: "Students Guided",
    value: "50,000+",
    description: "Across India and abroad"
  },
  {
    icon: MessageCircle,
    label: "Success Stories",
    value: "15,000+",
    description: "Dreams turned into reality"
  },
  {
    icon: Heart,
    label: "Lives Impacted",
    value: "100,000+",
    description: "Families and communities"
  },
  {
    icon: Star,
    label: "Expert Mentors",
    value: "500+",
    description: "Industry professionals"
  }
];

const testimonials = [
  {
    name: "Priya Sharma",
    course: "Engineering",
    college: "IIT Delhi",
    message: "Career Café helped me discover my passion for computer science. The roadmap feature was incredibly helpful!",
    rating: 5
  },
  {
    name: "Rahul Gupta",
    course: "CA",
    college: "ICAI",
    message: "The quiz results perfectly matched my interests. Now I'm confidently pursuing chartered accountancy.",
    rating: 5
  },
  {
    name: "Sneha Patel",
    course: "Medicine",
    college: "AIIMS",
    message: "Thanks to the timeline tracker, I never missed any important dates. Currently studying MBBS at AIIMS!",
    rating: 5
  }
];

export default function Community() {
  return (
    <div className="min-h-screen bg-gradient-hero py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-coffee rounded-2xl mb-6">
            <Users className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold text-primary mb-4">Community Connect</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of students and professionals in our supportive community
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card key={index} className="text-center shadow-soft hover:shadow-warm transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-coffee rounded-xl mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-3xl font-bold text-primary">{stat.value}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-semibold text-primary mb-1">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Join Community Card */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center space-x-2">
                <MessageCircle className="w-6 h-6" />
                <span>Join Our WhatsApp Community</span>
              </CardTitle>
              <CardDescription>
                Connect with fellow students, get instant help, and stay updated with the latest opportunities
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-2">What you'll get:</h3>
                <ul className="space-y-2 text-sm text-green-700">
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                    <span>Daily career tips and guidance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                    <span>Scholarship and admission alerts</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                    <span>Peer support and study groups</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                    <span>Expert sessions and webinars</span>
                  </li>
                </ul>
              </div>
              
              <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                <MessageCircle className="w-4 h-4 mr-2" />
                Join WhatsApp Community
              </Button>
              
              <p className="text-xs text-center text-muted-foreground">
                Free to join • 10,000+ active members
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl text-primary flex items-center space-x-2">
                <Mail className="w-6 h-6" />
                <span>Get in Touch</span>
              </CardTitle>
              <CardDescription>
                Have questions? Need personalized guidance? We're here to help!
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 bg-card rounded-lg border">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-primary">Email Support</p>
                    <p className="text-sm text-muted-foreground">careercafe@bus.in</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-3 bg-card rounded-lg border">
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-primary">Response Time</p>
                    <p className="text-sm text-muted-foreground">Within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div>
                <h3 className="font-semibold text-primary mb-3">Follow Us</h3>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" className="p-2">
                    <Instagram className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="p-2">
                    <Twitter className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="p-2">
                    <Facebook className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                <Mail className="w-4 h-4 mr-2" />
                Send us an Email
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Success Stories */}
        <Card className="shadow-soft mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">Success Stories</CardTitle>
            <CardDescription>Hear from students who found their path with Career Café</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-card p-6 rounded-lg border">
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.message}"
                  </p>
                  
                  <div className="border-t pt-4">
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Badge variant="secondary" className="text-xs">
                        {testimonial.course}
                      </Badge>
                      <span className="text-sm text-muted-foreground">
                        {testimonial.college}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Community Guidelines */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="text-2xl text-primary">Community Guidelines</CardTitle>
            <CardDescription>Help us maintain a supportive and positive environment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-primary mb-3">✅ Do's</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Be respectful and supportive to fellow members</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Share genuine experiences and helpful resources</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Ask questions and seek guidance when needed</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Celebrate others' achievements and milestones</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-primary mb-3">❌ Don'ts</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Share unverified information or rumors</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Engage in spam or promotional activities</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Use inappropriate language or behavior</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Discourage or demotivate other members</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}