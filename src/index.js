import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <section className='landingPage' id='home'>
    <header>
      <Navbar/>
    </header>
    <main>
      <Hero/>
      <About/>
      <hr className='grad-xl'/>
      <Blog/>
      <hr className='grid-xl'/>
      <Contact/>
    </main>
    <footer>
      <section className='footerContainer'>
        <Footer/>
      </section>
    </footer>
  </section>
);

