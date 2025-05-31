import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Komponen header dengan navigasi
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Deteksi scroll untuk mengubah ukuran header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang', href: '#about' },
    { name: 'Pengalaman', href: '#experience' },
    { name: 'Proyek', href: '#project' },
    { name: 'Filosofi', href: '#philosophy' },
    { name: 'Keterampilan', href: '#skills' },
    { name: 'Kontak', href: '#contact' },
  ];

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.header
      className={`header ${isScrolled ? 'py-2' : 'py-3 sm:py-4'}`}
      variants={headerVariants}
      initial="initial"
      animate="animate"
    >
      <div className="container flex items-center justify-between">
        <a href="/" className="text-[#EF4444] text-sm sm:text-base font-bold">
          I Komang Agus Tri Astawan
        </a>
        <nav className="hidden sm:flex space-x-4">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </nav>
        <div className="sm:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hamburger flex flex-col justify-between h-5"
            aria-label="Toggle menu"
          >
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
            <span className="hamburger-line"></span>
          </button>
        </div>
      </div>
      {isOpen && (
        <nav className="nav-menu sm:hidden">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="nav-link block py-2 text-center"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </nav>
      )}
    </motion.header>
  );
};

export default Header;