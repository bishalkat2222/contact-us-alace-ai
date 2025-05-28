import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import LogoSection from '@/components/LogoSection';
import Testimonials from '@/components/Testimonials';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen w-full">
      <Navbar />
      <main>
        <Hero />
        <ContactForm />
        <LogoSection />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
