import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Research from './components/Research';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatBot from './components/ChatBot';
import AIPage from './components/AIPage';

function App() {
  const [currentPage, setCurrentPage] = useState('portfolio');

  const handleNavigateToAI = () => {
    setCurrentPage('ai');
  };

  const handleNavigateToPortfolio = () => {
    setCurrentPage('portfolio');
  };

  if (currentPage === 'ai') {
    return <AIPage onBackToPortfolio={handleNavigateToPortfolio} />;
  }

  return (
    <div className="App bg-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Research />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
      <ChatBot onNavigateToAI={handleNavigateToAI} />
    </div>
  );
}

export default App;
