import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Komponen Header
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Tentang', href: '#about' },
    { name: 'Pengalaman', href: '#experience' },
    { name: 'Proyek', href: '#project' },
    { name: 'Filosofi', href: '#philosophy' },
    { name: 'Keterampilan', href: '#skills' },
    { name: 'Kontak', href: '#contact' },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className="header">
      <div className="container flex items-center justify-between">
        <motion.a
          href="#home"
          className="text-[#FFFFFF] text-base sm:text-lg font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          I Komang Agus Tri Astawan
        </motion.a>
        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="hamburger focus:outline-none"
            aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
          >
            <span className={`hamburger-line ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`hamburger-line my-1 ${isOpen ? 'opacity-0' : ''}`}></span>
            <span className={`hamburger-line ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
        <motion.nav
          className={`nav-menu ${isOpen ? 'block' : 'hidden'} sm:block`}
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          <ul className="flex flex-col sm:flex-row sm:space-x-4">
            {navLinks.map((link, index) => (
              <motion.li key={index} variants={linkVariants}>
                <a
                  href={link.href}
                  className="nav-link"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;
