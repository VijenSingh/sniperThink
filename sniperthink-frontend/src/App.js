import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import Insights from './components/Insights';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="scroll-smooth">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Insights />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;