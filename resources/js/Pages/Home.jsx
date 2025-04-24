import React, { useEffect } from 'react';
import { Head } from '@inertiajs/react';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const Home = ({ projects = [] }) => {
  useEffect(() => {
    document.body.classList.add("bg-background", "text-foreground");

    const handleAnchorClick = (e) => {
      const target = e.target;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        if (id) {
          const element = document.getElementById(id);
          if (element) {
            const header = document.querySelector('nav');
            const headerHeight = header ? header.offsetHeight : 0;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
              top: elementPosition - headerHeight,
              behavior: 'smooth',
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.body.classList.remove("bg-background", "text-foreground");
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Head title="Home" />
      <BackToTop />
      <NavBar />
      <Hero />
      <Projects projects={projects} />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
