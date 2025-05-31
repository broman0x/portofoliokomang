import React from 'react';
import { motion } from 'framer-motion';
import { FaXTwitter } from 'react-icons/fa6';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Experience from './components/Experience.jsx';
import Project from './components/Project.jsx';
import Philosophy from './components/Philosophy.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';

// Komponen utama aplikasi
const App = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  return (
    <div className="min-h-screen bg-[#333333]">
      <Header />
      <motion.main
        className="container mx-auto px-4 sm:py-14"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.section variants={sectionVariants}>
          <About />
        </motion.section>
        <motion.section variants={sectionVariants}>
          <Experience />
        </motion.section>
        <motion.section variants={sectionVariants}>
          <Project />
        </motion.section>
        <motion.section variants={sectionVariants}>
          <Philosophy />
        </motion.section>
        <motion.section variants={sectionVariants}>
          <Skills />
        </motion.section>
        <motion.section variants={sectionVariants}>
          <Contact />
        </motion.section>
      </motion.main>
      <footer className="bg-[#333333] text-[#FFFFFF] text-center py-6">
        <div className="container">
          <p className="text-xs mb-3">© 2025 Mksigyt. Hak Cipta Dilindungi.</p>
          <motion.a
            href="https://x.com/mksigyt"
            className="footer-link"
            aria-label="Kunjungi profil Twitter Mksigyt"
            whileHover={{
              scale: 1.2,
              color: '#E2E8F0',
              textShadow: '0 0 8px rgba(226, 232, 240, 0.8)',
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="text-xl sm:text-2xl mx-auto" />
          </motion.a>
        </div>
      </footer>
    </div>
  );
};

export default App;
