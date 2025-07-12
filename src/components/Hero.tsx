
import React, { useEffect, useState } from 'react';
import { Play, ArrowRight, BarChart3, Users, Settings } from 'lucide-react';
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
            <div className="grid grid-cols-2 gap-4">
              <div 
                className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-white/20"
                style={{ transform: `translateY(${scrollY * -0.02}px)` }}
              >
                <BarChart3 className="h-8 w-8 text-blue-600 mb-4" />
                <div className="space-y-2">
                  <div className="h-2 bg-blue-100 rounded-full">
                    <div className="h-2 bg-blue-600 rounded-full w-3/4 animate-pulse" />
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-2 bg-gray-400 rounded-full w-1/2" />
                  </div>
                </div>
              </div>
              
              <div 
                className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 mt-8 border border-white/20"
                style={{ transform: `translateY(${scrollY * 0.02}px)` }}
              >
                <Users className="h-8 w-8 text-purple-600 mb-4" />
                <div className="flex space-x-2">
                  <div className="w-6 h-6 bg-purple-200 rounded-full" />
                  <div className="w-6 h-6 bg-blue-200 rounded-full" />
                  <div className="w-6 h-6 bg-green-200 rounded-full" />
                </div>
              </div>
              
              <div 
                className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 -mt-4 border border-white/20"
                style={{ transform: `translateY(${scrollY * 0.03}px)` }}
              >
                <Settings className="h-8 w-8 text-green-600 mb-4" />
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Active</span>
                    <span className="text-green-600">●</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Tasks</span>
                    <span>12</span>
                  </div>
                </div>
              </div>
              
              <div 
                className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-white/20"
                style={{ transform: `translateY(${scrollY * -0.01}px)` }}
              >
                <div className="w-8 h-8 bg-orange-100 rounded-lg mb-4 flex items-center justify-center">
                  <div className="w-4 h-4 bg-orange-600 rounded" />
                </div>
                <div className="space-y-1">
                  <div className="h-1 bg-gray-100 rounded" />
                  <div className="h-1 bg-gray-100 rounded w-3/4" />
                  <div className="h-1 bg-gray-100 rounded w-1/2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
