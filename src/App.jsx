import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Footer from './Components/Footer';

const App = () => {
  return (
    <div className="font-prompt text-gray-400">
      <div className="min-h-screen md:pt-4 md:px-6">
        <Navbar />
        <div className="scroll-smooth mt-16">
          <Home id="home" />
          <About id="about" />
          <Services id="services" />
          <Contact id="contact" />
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App