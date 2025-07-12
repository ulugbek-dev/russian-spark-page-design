
import React, { useEffect, useState } from 'react';
import { Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center pt-16">
      {/* Parallax Background Elements */}
      <div className="absolute inset-0">
        {/* Main gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20" />
        
        {/* Animated geometric shapes with parallax */}
        <div 
          className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-100/40 to-blue-200/20 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div 
          className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-purple-100/40 to-pink-100/20 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * -0.2}px)` }}
        />
        <div 
          className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-br from-cyan-100/30 to-blue-100/20 rounded-full blur-2xl"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        />
        
        {/* Floating grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{ 
            transform: `translateY(${scrollY * 0.1}px)`,
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Subtle lines */}
        <div 
          className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-blue-200/20 to-transparent"
          style={{ transform: `translateY(${scrollY * -0.1}px)` }}
        />
        <div 
          className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-purple-200/20 to-transparent"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
      </div>
      
      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div 
            className="space-y-8"
            style={{ transform: `translateY(${scrollY * -0.1}px)` }}
          >
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                ВИДЕТЬ БИЗНЕС<br />
                <span className="text-blue-600">ИЗНУТРИ.</span><br />
                <span className="text-gray-700">УПРАВЛЯТЬ — ЛЕГКО</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-lg">
                ERP-CRM, которая чувствует пульс вашей компании
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Попробовать бесплатно
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-gray-300 hover:border-blue-500 px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                <Play className="mr-2 h-5 w-5" />
                Видео тур
              </Button>
            </div>
          </div>
          
          <div 
            className="relative"
            style={{ transform: `translateY(${scrollY * -0.05}px)` }}
          >
            {/* Laptop Mockup */}
            <div className="relative max-w-4xl mx-auto">
              {/* Laptop Base */}
              <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-8 shadow-2xl transform perspective-1000 rotate-x-12">
                {/* Screen */}
                <div className="bg-white rounded-lg overflow-hidden shadow-inner">
                  {/* Browser Header */}
                  <div className="bg-gray-100 p-3 flex items-center gap-2 border-b">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-white rounded px-3 py-1 text-xs text-gray-500 ml-4">
                      bizflow.app/dashboard
                    </div>
                  </div>
                  
                  {/* CRM Interface */}
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <img 
                      src="/lovable-uploads/d8027224-f83e-4f5e-b334-2f9f23a8e2b6.png"
                      alt="CRM Interface"
                      className="w-full h-full object-cover object-top"
                    />
                    
                    {/* Overlay for better integration */}
                    <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent pointer-events-none"></div>
                  </div>
                </div>
                
                {/* Laptop Keyboard */}
                <div className="mt-2 bg-gray-700 rounded-lg p-4">
                  <div className="grid grid-cols-12 gap-1">
                    {Array.from({ length: 48 }, (_, i) => (
                      <div key={i} className="bg-gray-600 rounded h-2"></div>
                    ))}
                  </div>
                  <div className="mt-2 bg-gray-600 rounded h-8 mx-auto w-32"></div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div 
                className="absolute -top-8 -right-8 w-16 h-16 bg-blue-500/20 rounded-full blur-xl animate-pulse"
                style={{ transform: `translateY(${scrollY * 0.02}px)` }}
              ></div>
              <div 
                className="absolute -bottom-8 -left-8 w-12 h-12 bg-purple-500/20 rounded-full blur-xl animate-pulse"
                style={{ transform: `translateY(${scrollY * -0.03}px)` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
