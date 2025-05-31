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
    </div>
  );
};

export default App;
