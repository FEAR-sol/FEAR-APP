import React, { useState, useEffect } from 'react';
import LoadingPage from './LoadingPage';
import DotGrid from './DotGrid';
import ClickSpark from './ClickSpark';
import Navbar from './Navbar';
import Hero from './Hero';
import AITools from './AITools';
import Services from './Services';
import BeforeWeBegin from './BeforeWeBegin';
import Projects from './Projects';
import FAQ from './FAQ';
import Contact from './Contact';
import Footer from './Footer';
import Chatbot from './Chatbot';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingPage onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <ClickSpark
      sparkColor='#3B82F6'
      sparkSize={12}
      sparkRadius={20}
      sparkCount={8}
      duration={500}
    >
      <div className="app">
        <DotGrid
          dotSize={5}
          gap={20}
          baseColor="#1F2937"
          activeColor="#3B82F6"
          proximity={180}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
          className="background"
        />
        <Navbar />
        <Hero />
        <AITools />
        <Services />
        <Projects />
        <BeforeWeBegin />
        <FAQ />
        <Contact />
        <Footer />
        <Chatbot />
      </div>
    </ClickSpark>
  );
}

export default App;
