
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import DemoSection from '../components/DemoSection';
import Architecture from '../components/Architecture';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <DemoSection />
      <Architecture />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
