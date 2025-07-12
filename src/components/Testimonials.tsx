
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Анна Петрова",
      role: "Директор розничной сети",
      company: "Fashion Store",
      rating: 5,
      text: "Внедрили систему за неделю. Теперь видим всю картину бизнеса в реальном времени. Продажи выросли на 35%!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332cabe?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Михаил Сидоров", 
      role: "Руководитель IT-отдела",
      company: "TechSolutions",
      rating: 5,
      text: "Лучшее решение для автоматизации процессов. Команда довольна, клиенты счастливы, отчетность стала прозрачной.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Елена Козлова",
      role: "Владелец бизнеса",
      company: "Beauty Salon",
      rating: 5,
      text: "Система интуитивно понятная. За месяц окупилась полностью. Рекомендую всем предпринимателям!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            ОТЗЫВЫ КЛИЕНТОВ —<br />
            <span className="text-blue-600">ФОРМАТ «СТОРИС»</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Реальные истории успеха от наших клиентов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{animationDelay: `${index * 0.2}s`}}
            >
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 h-8 w-8 text-blue-200" />
                <div className="relative z-10">
                  <div className="flex items-center space-x-4 mb-6">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
                    />
                    <div>
                      <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                      <p className="text-xs text-blue-600 font-medium">{testimonial.company}</p>
                    </div>
                  </div>

                  <div className="flex space-x-1 mb-4">
                    {Array.from({length: testimonial.rating}).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    "{testimonial.text}"
                  </p>

                  <div className="bg-blue-50 rounded-2xl p-4 border border-blue-100">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-600">Результат:</span>
                      <span className="font-bold text-blue-600">
                        {index === 0 ? '+35% продаж' : 
                         index === 1 ? '+60% эффективность' : 
                         'Окупилось за месяц'}
                      </span>
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-2 mt-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-1000 group-hover:w-full"
                        style={{width: index === 0 ? '85%' : index === 1 ? '90%' : '95%'}}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-6 py-3 rounded-full">
            <span className="text-lg font-bold">4.9/5</span>
            <div className="flex space-x-1">
              {Array.from({length: 5}).map((_, i) => (
                <Star key={i} className="h-4 w-4 text-green-600 fill-current" />
              ))}
            </div>
            <span>средняя оценка (200+ отзывов)</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
