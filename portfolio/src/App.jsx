import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { Services } from './components/Services';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="site-wrapper">
      <Header />
      <main id="main-content">
        <Hero />
        <SelectedWork />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
