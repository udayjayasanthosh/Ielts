import React, { useEffect, useState } from 'react';
import { Zap, Target, BookOpen, Bot, Star } from 'lucide-react';

const Hero = () => {
  const [displayText1, setDisplayText1] = useState('');
  const [displayText2, setDisplayText2] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const text1 = "Unlock Your Potential.";
  const text2 = "Ace the IELTS";

  useEffect(() => {
    setIsVisible(true);

    let index1 = 0;
    const timer1 = setInterval(() => {
      if (index1 <= text1.length) {
        setDisplayText1(text1.slice(0, index1));
        index1++;
      } else {
        clearInterval(timer1);

        setTimeout(() => {
          let index2 = 0;
          const timer2 = setInterval(() => {
            if (index2 <= text2.length) {
              setDisplayText2(text2.slice(0, index2));
              index2++;
            } else {
              clearInterval(timer2);
            }
          }, 100);
        }, 500);
      }
    }, 100);

    return () => {
      clearInterval(timer1);
    };
  }, []);

  return (
    <div className='w-full min-h-[80svh] bg-white flex flex-col lg:flex-row items-center justify-center text-center px-4 lg:px-8 py-10 lg:py-20 relative overflow-hidden'>
      
      <div className={`flex flex-col items-center lg:items-start justify-center text-center lg:text-left max-w-2xl z-10 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className='mb-6 lg:mb-8'>
          <h1 className='text-4xl lg:text-6xl font-bold mb-4 text-zinc-900 leading-tight'>
            <span className='inline-block'>
              {displayText1}
              {displayText1.length < text1.length && (
                <span className='animate-pulse'>|</span>
              )}
            </span>
          </h1>
          <h1 className='text-4xl lg:text-6xl font-bold mb-4 text-orange-600 leading-tight'>
            <span className='inline-block'>
              {displayText2}
              {displayText2.length > 0 && displayText2.length < text2.length && (
                <span className='animate-pulse'>|</span>
              )}
            </span>
          </h1>
        </div>

        <p className='text-lg lg:text-xl mb-8 lg:mb-10 text-zinc-600 leading-relaxed max-w-2xl'>
          Comprehensive course and AI-powered tools for your IELTS success journey
        </p>

        <div className='flex flex-col sm:flex-row gap-4 lg:gap-6'>
          <button className='bg-orange-600 text-white px-8 py-4 rounded-2xl font-semibold hover:bg-orange-700 transform hover:scale-105 transition-all duration-300 shadow-md'>
            Get Started Free
          </button>

          <button 
          className='border-2 border-zinc-300 text-zinc-700 px-8 py-4 rounded-2xl font-semibold hover:border-orange-500 hover:text-orange-600 transform hover:scale-105 transition-all duration-300 bg-white'>
            Watch Demo
          </button>
        </div>

        <div className='flex flex-wrap gap-6 lg:gap-10 mt-10 lg:mt-12 justify-center lg:justify-start'>
          <div className='text-center lg:text-left'>
            <div className='text-2xl lg:text-3xl font-bold text-orange-600 flex items-center justify-center lg:justify-start gap-1'>
               <Target className='w-5 h-5'/> 98%
            </div>
            <div className='text-sm text-zinc-500'>Success Rate</div>
          </div>
          <div className='text-center lg:text-left'>
            <div className='text-2xl lg:text-3xl font-bold text-orange-600 flex items-center justify-center lg:justify-start gap-1'>
               <BookOpen className='w-5 h-5'/> 5K+
            </div>
            <div className='text-sm text-zinc-500'>Students</div>
          </div>
          <div className='text-center lg:text-left'>
            <div className='text-2xl lg:text-3xl font-bold text-orange-600 flex items-center justify-center lg:justify-start gap-1'>
              <Star className='w-5 h-5 fill-orange-500 text-orange-500'/> 4.9
            </div>
            <div className='text-sm text-zinc-500'>Rating</div>
          </div>
        </div>
      </div>

      <div className={`relative z-10 mt-12 lg:mt-0 lg:ml-12 transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className='relative'>
          <img
            src="ilets.jpg" 
            alt="IELTS Success"
            width={600}
            height={600}
            className='rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-500' 
          />

          <div className='absolute -top-3 -right-3 bg-orange-600 text-white px-3 py-1.5 rounded-2xl font-semibold shadow-md flex items-center gap-1'>
            <Target className='w-4 h-4'/> Band 9.0
          </div>

          <div className='absolute -bottom-3 -left-3 bg-zinc-800 text-white px-3 py-1.5 rounded-2xl font-semibold shadow-md flex items-center gap-1'>
            <Bot className='w-4 h-4'/> AI Powered
          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;
