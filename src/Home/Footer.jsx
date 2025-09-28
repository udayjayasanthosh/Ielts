import React from 'react';
import {
  MessageCircle,
  Mail,
  Phone,
  ChevronRight,
  AppWindow,
  Globe,
} from 'lucide-react';

const Footer = () => {
  const accentColor = 'text-orange-600';

  return (
    <footer className="w-full bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 mb-10">

          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">

              <div className={`text-xl font-bold ${accentColor}`}>
                IELTS-Ai
              </div>
            </div>
            <p className="text-gray-600 mb-6 text-sm leading-relaxed">
              Your AI-powered IELTS preparation partner. We help students achieve their dream band scores.
            </p>

            <div className="flex items-center space-x-3">
              <a href="#" aria-label="Chat" className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors border border-gray-200">
                <MessageCircle className={`w-4 h-4 text-gray-700 hover:${accentColor}`} />
              </a>
              <a href="#" aria-label="Email" className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors border border-gray-200">
                <Mail className={`w-4 h-4 text-gray-700 hover:${accentColor}`} />
              </a>
              <a href="#" aria-label="Phone" className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-orange-100 transition-colors border border-gray-200">
                <Phone className={`w-4 h-4 text-gray-700 hover:${accentColor}`} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-base font-bold text-gray-900 mb-4">Features</h4>
            <ul className="space-y-3">
              {['AI Speaking Test', 'Writing Evaluation', 'Mock Tests', 'Live Classes', 'Progress Tracking', 'Study Materials'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors flex items-center group">
                    <ChevronRight className={`w-4 h-4 mr-2 ${accentColor} transform group-hover:translate-x-0.5 transition-transform`} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-3">
              {['Blog', 'IELTS Guide', 'Success Stories', 'Webinars', 'Vocabulary', 'Templates'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors flex items-center group">
                    <ChevronRight className={`w-4 h-4 mr-2 ${accentColor} transform group-hover:translate-x-0.5 transition-transform`} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-base font-bold text-gray-900 mb-4">Legal & Support</h4>
            <ul className="space-y-3">
              {['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service', 'FAQ', 'Sitemap'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-600 text-sm hover:text-gray-900 transition-colors flex items-center group">
                    <ChevronRight className={`w-4 h-4 mr-2 ${accentColor} transform group-hover:translate-x-0.5 transition-transform`} />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
