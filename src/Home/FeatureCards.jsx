import React from 'react';
import { Mic, FileText, BookOpen, Brain, Users, Trophy, ChevronRight, Zap } from 'lucide-react';

const primaryColor = 'text-orange-600';
const primaryBgLight = 'bg-orange-50';
const primaryHoverBg = 'hover:bg-orange-50';
const primaryHoverText = 'group-hover:text-orange-700';

const FeatureCards = () => {
  const features = [
    {
      icon: Mic,
      title: "AI Speaking Evaluation",
      description: "Get instant feedback on pronunciation, fluency, and vocabulary with our advanced AI technology.",
      stats: "98% Accuracy",
    },
    {
      icon: FileText,
      title: "Writing Assessment",
      description: "Submit your essays for detailed evaluation with band score predictions and improvement suggestions.",
      stats: "24h Feedback",
    },
    {
      icon: BookOpen,
      title: "Comprehensive Courses",
      description: "Structured learning paths covering all IELTS modules with video lessons and practice exercises.",
      stats: "500+ Lessons",
    },
    {
      icon: Brain,
      title: "Adaptive Learning",
      description: "AI-powered personalized study plans that adapt to your strengths and weaknesses.",
      stats: "Smart AI",
    },
    {
      icon: Users,
      title: "Live Classes",
      description: "Interactive sessions with IELTS experts and peer learning in small group settings.",
      stats: "Expert Teachers",
    },
    {
      icon: Trophy,
      title: "Mock Tests",
      description: "Full-length simulated tests with real-time scoring and detailed performance analytics.",
      stats: "Band 9 Ready",
    }
  ];

  return (
    <div className='w-full min-h-[90vh] bg-white py-20 px-4 lg:px-8'>
      <div className='text-center max-w-4xl mx-auto mb-16 lg:mb-20'>
        <div className={`inline-flex items-center space-x-2 ${primaryBgLight} ${primaryColor} px-4 py-2 rounded-full text-sm font-semibold mb-4`}>
          <Zap className='w-4 h-4' />
          <span>Core Features</span>
        </div>
        <h2 className='text-4xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight'>
          Everything You Need to <span className={primaryColor}>Ace IELTS</span>
        </h2>
        <p className='text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed'>
          Our comprehensive suite of tools and features is designed to help you achieve your target band score efficiently.
        </p>
      </div>

      <div className='max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className={`group relative bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300 ${primaryHoverBg} cursor-pointer`}
              >
                
                <div className={`inline-flex p-3 rounded-xl ${primaryBgLight} ${primaryColor} mb-4 transition-transform duration-300 group-hover:bg-orange-100`}>
                  <IconComponent className='w-6 h-6' />
                </div>

                <div>
                  <h3 className={`text-xl font-bold text-gray-900 mb-2 tracking-tight ${primaryHoverText}`}>
                    {feature.title}
                  </h3>
                  <p className='text-gray-600 mb-4 leading-normal text-base'>
                    {feature.description}
                  </p>
                  
                  <div className='flex items-center justify-between pt-2'>
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${primaryColor} ${primaryBgLight}`}>
                      {feature.stats}
                    </span>
                    
                    <div className='flex items-center space-x-1'>
                      <span className={`text-sm font-semibold ${primaryColor} opacity-90 transition-opacity duration-200`}>Learn More</span>
                      <ChevronRight className={`w-4 h-4 ${primaryColor} transition-transform duration-300 group-hover:translate-x-1`} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeatureCards;