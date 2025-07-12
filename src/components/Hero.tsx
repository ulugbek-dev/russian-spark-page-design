
import React from 'react';
import { Play, ArrowRight, BarChart3, Users, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 px-4 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full opacity-30 animate-pulse" />
      <div className="absolute bottom-20 left-20 w-32 h-32 bg-purple-100 rounded-full opacity-40 animate-bounce" />
      
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
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
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
              >
                Попробовать бесплатно
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-gray-300 hover:border-blue-500 px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
              >
                <Play className="mr-2 h-5 w-5" />
                Видео тур
              </Button>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
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
              
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mt-8">
                <Users className="h-8 w-8 text-purple-600 mb-4" />
                <div className="flex space-x-2">
                  <div className="w-6 h-6 bg-purple-200 rounded-full" />
                  <div className="w-6 h-6 bg-blue-200 rounded-full" />
                  <div className="w-6 h-6 bg-green-200 rounded-full" />
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 -mt-4">
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
              
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
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
