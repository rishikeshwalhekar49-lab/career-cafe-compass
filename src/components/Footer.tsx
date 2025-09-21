import { Coffee, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-coffee-dark text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-warm-orange rounded-xl">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Career Café</h3>
                <p className="text-sm text-cream/80">Your Career Journey</p>
              </div>
            </div>
            <p className="text-cream/70 text-sm">
              Empowering Indian students with personalized career guidance and educational insights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-cream mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-cream/70 hover:text-cream transition-colors">Career Dashboard</Link></li>
              <li><Link to="/roadmap" className="text-cream/70 hover:text-cream transition-colors">Roadmap</Link></li>
              <li><Link to="/quizzes" className="text-cream/70 hover:text-cream transition-colors">Quizzes & Tests</Link></li>
              <li><Link to="/timeline" className="text-cream/70 hover:text-cream transition-colors">Timeline Tracker</Link></li>
              <li><Link to="/resume-builder" className="text-cream/70 hover:text-cream transition-colors">Resume Builder</Link></li>
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h4 className="font-semibold text-cream mb-4">Tools</h4>
            <ul className="space-y-2">
              <li><Link to="/career-comparison" className="text-cream/70 hover:text-cream transition-colors">Career Comparison</Link></li>
              <li><Link to="/community" className="text-cream/70 hover:text-cream transition-colors">Community Connect</Link></li>
              <li><Link to="/faqs" className="text-cream/70 hover:text-cream transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-cream mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-warm-orange" />
                <a href="mailto:careercafe@bus.in" className="text-cream/70 hover:text-cream transition-colors text-sm">
                  careercafe@bus.in
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-warm-orange" />
                <span className="text-cream/70 text-sm">+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-warm-orange" />
                <span className="text-cream/70 text-sm">India</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h5 className="font-medium text-cream mb-3">Follow Us</h5>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-warm-orange rounded-lg flex items-center justify-center hover:bg-warm-orange/80 transition-colors">
                  <Facebook className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-8 h-8 bg-warm-orange rounded-lg flex items-center justify-center hover:bg-warm-orange/80 transition-colors">
                  <Twitter className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-8 h-8 bg-warm-orange rounded-lg flex items-center justify-center hover:bg-warm-orange/80 transition-colors">
                  <Instagram className="w-4 h-4 text-white" />
                </a>
                <a href="#" className="w-8 h-8 bg-warm-orange rounded-lg flex items-center justify-center hover:bg-warm-orange/80 transition-colors">
                  <Linkedin className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-cream/60 text-sm">
            © 2024 Career Café. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-cream/60 hover:text-cream text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-cream/60 hover:text-cream text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-cream/60 hover:text-cream text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}