
import React from 'react';
import { ShoppingCart, Briefcase, Truck, ArrowRight } from 'lucide-react';

const DemoSection = () => {
  const scenarios = [
    {
      title: "У меня розничный магазин",
      icon: ShoppingCart,
      description: "Управление товарами, продажами и клиентами",
      features: ["Касса", "Склад", "Аналитика"]
    },
    {
      title: "Я оказываю услуги",
      icon: Briefcase,
      description: "Планирование услуг и работа с заказчиками",
      features: ["Записи", "CRM", "Отчеты"]
    },
    {
      title: "У меня дистрибуция",
      icon: Truck,
      description: "Логистика и управление поставками",
      features: ["Логистика", "Партнеры", "Закупки"]
    }
  ];

  const demoCards = [
    {
      title: "Раньше:",
      subtitle: "казак в отчетах.",
      color: "bg-red-50 border-red-200"
    },
    {
      title: "Сейчас:",
      subtitle: "автоматизирука за секунды.",
      color: "bg-green-50 border-green-200"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            ЖИВЫЕ ДЕМО-<br />
            <span className="text-blue-600">СЦЕНАРИИ</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 animate-slide-in-right">
            {scenarios.map((scenario, index) => (
              <div 
                key={index}
                className="group bg-white border-2 border-gray-200 rounded-2xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                      <scenario.icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {scenario.title}
                    </h3>
                    <p className="text-gray-600 mb-3">{scenario.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {scenario.features.map((feature, featureIndex) => (
                        <span 
                          key={featureIndex}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-6 animate-slide-in-left">
            {demoCards.map((card, index) => (
              <div 
                key={index}
                className={`${card.color} border-2 rounded-2xl p-8 hover:scale-105 transition-all duration-300`}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-gray-700 mb-6">{card.subtitle}</p>
                
                <div className="space-y-3">
                  <div className="h-2 bg-white/60 rounded-full">
                    <div className={`h-2 rounded-full w-3/4 ${index === 0 ? 'bg-red-400' : 'bg-green-400'} animate-pulse`} />
                  </div>
                  <div className="h-2 bg-white/60 rounded-full">
                    <div className={`h-2 rounded-full w-1/2 ${index === 0 ? 'bg-red-400' : 'bg-green-400'}`} />
                  </div>
                  <div className="h-2 bg-white/60 rounded-full">
                    <div className={`h-2 rounded-full w-2/3 ${index === 0 ? 'bg-red-400' : 'bg-green-400'}`} />
                  </div>
                </div>
                
                {index === 1 && (
                  <div className="mt-6 bg-white rounded-lg p-4 shadow-sm">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Экономия времени:</span>
                      <span className="font-semibold text-green-600">85%</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
