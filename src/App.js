import React from 'react'
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import HeroSection from './Components/Section/HeroSection';
import ProjectSection from './Components/Section/ProjectSection';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <ProjectSection />
      <Footer />
    </div>
  );
}

export default App;
