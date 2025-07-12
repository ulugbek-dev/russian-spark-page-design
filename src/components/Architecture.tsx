
import React from 'react';
import { Database, Cloud, Shield, Zap, Globe, Users } from 'lucide-react';

const Architecture = () => {
  const integrations = [
    { name: "API", icon: Zap, color: "text-yellow-600 bg-yellow-100" },
    { name: "Cloud", icon: Cloud, color: "text-blue-600 bg-blue-100" },
    { name: "Security", icon: Shield, color: "text-green-600 bg-green-100" },
    { name: "Database", icon: Database, color: "text-purple-600 bg-purple-100" },
    { name: "Global", icon: Globe, color: "text-orange-600 bg-orange-100" },
    { name: "Teams", icon: Users, color: "text-pink-600 bg-pink-100" }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            АРХИТЕКТУРА<br />
            <span className="text-blue-600">И ИНТЕГРАЦИИ</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Современная облачная платформа с надежными интеграциями
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="bg-white rounded-3xl shadow-xl p-8 animate-scale-in">
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4">
                {Array.from({length: 9}).map((_, i) => (
                  <div 
                    key={i}
                    className="aspect-square bg-gray-100 rounded-lg animate-pulse"
                    style={{animationDelay: `${i * 0.1}s`}}
                  />
                ))}
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Модулей активно</span>
                  <span className="font-semibold">12/15</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                  <div className="bg-blue-600 h-2 rounded-full w-4/5 animate-pulse" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative animate-slide-in-left">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-purple-100 rounded-3xl transform rotate-1 opacity-50" />
            <div className="relative bg-white rounded-3xl shadow-xl p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                  <Database className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Центральная система</h3>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {integrations.map((integration, index) => (
                  <div 
                    key={index}
                    className="group flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-all duration-300 cursor-pointer"
                  >
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${integration.color} group-hover:scale-110 transition-transform`}>
                      <integration.icon className="h-5 w-5" />
                    </div>
                    <span className="font-medium text-gray-700">{integration.name}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium">Все системы работают</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Architecture;
