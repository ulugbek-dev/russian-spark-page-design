
import React from 'react';
import { Check, Star, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Pricing = () => {
  const plans = [
    {
      name: "Стартовый",
      price: "2,990",
      period: "/месяц",
      description: "Для малого бизнеса",
      features: [
        "До 3 пользователей",
        "Базовая CRM",
        "Складской учет",
        "Отчеты",
        "Email поддержка"
      ],
      popular: false,
      color: "border-gray-200 hover:border-blue-300"
    },
    {
      name: "Бизнес",
      price: "7,990",
      period: "/месяц", 
      description: "Для растущих компаний",
      features: [
        "До 15 пользователей",
        "Полная CRM + ERP",
        "Интеграции",
        "Аналитика",
        "Приоритетная поддержка",
        "Мобильное приложение"
      ],
      popular: true,
      color: "border-blue-500 ring-2 ring-blue-200"
    },
    {
      name: "Корпоративный",
      price: "19,990",
      period: "/месяц",
      description: "Для крупных организаций",
      features: [
        "Безлимитные пользователи",
        "Все модули",
        "API доступ",
        "Персональный менеджер",
        "SLA 99.9%",
        "Кастомизация"
      ],
      popular: false,
      color: "border-purple-300 hover:border-purple-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            ЦЕНЫ И <span className="text-blue-600">ТАРИФЫ</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите подходящий план для вашего бизнеса
          </p>
          <div className="mt-8 inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full">
            <Zap className="h-4 w-4 mr-2" />
            <span className="font-medium">Первый месяц — бесплатно!</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in border-2 ${plan.color}`}
              style={{animationDelay: `${index * 0.2}s`}}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium inline-flex items-center">
                    <Star className="h-4 w-4 mr-1 fill-current" />
                    Популярный
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500 ml-1">₽{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full py-3 text-lg transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                }`}
              >
                {plan.popular ? 'Начать сейчас' : 'Выбрать план'}
              </Button>

              {index === 1 && (
                <div className="mt-4 text-center">
                  <span className="text-sm text-green-600 font-medium">
                    Экономия 2 месяца при годовой оплате
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12 space-y-4">
          <p className="text-gray-600">
            Нужен индивидуальный план? <a href="#" className="text-blue-600 hover:underline font-medium">Свяжитесь с нами</a>
          </p>
          <div className="inline-flex items-center space-x-6 text-sm text-gray-500">
            <span>✓ Без скрытых платежей</span>
            <span>✓ Отмена в любое время</span>
            <span>✓ Миграция данных бесплатно</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
