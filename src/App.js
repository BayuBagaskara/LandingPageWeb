import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Home from './components/Home';
import Profile from './components/Profile';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Home />
      <Profile />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;