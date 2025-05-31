import React from 'react';
import { motion } from 'framer-motion';
import fotoprofil from '../images/fotoprofil.png';

// Komponen Tentang Saya
const About = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  const imageVariants = {
    hover: {
      scale: 1.1,
      rotate: 3,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="about" className="mb-10 sm:mb-14">
      <h2 className="section-title">Tentang Saya</h2>
      <motion.div
        className="card flex flex-col items-start gap-4 sm:gap-6 md:flex-row"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        whileHover={{ scale: 1.03, boxShadow: '0 0 20px rgba(255, 255, 255, 0.5)' }}
      >
        <motion.div
          className="relative w-24 h-24 sm:w-36 sm:h-36"
          variants={imageVariants}
          whileHover="hover"
        >
          <div className="neon-ring"></div>
          <img
            src={fotoprofil}
            alt="I Komang Agus Tri Astawan"
            className="w-full h-full object-cover rounded-full shadow-md"
          />
        </motion.div>
        <div className="text-left">
          <h3 className="text-base sm:text-lg font-semibold text-[#FFFFFF] mb-2">
            I Komang Agus Tri Astawan, S. Farm
          </h3>
          <p className="text-[#E2E8F0] text-xs sm:text-sm leading-relaxed">
            Lulusan S1 Farmasi Klinis dari kampus Universitas Bali Internasional. Saya senang belajar hal baru, mempunyai kesabaran dalam menghadapi masalah. Aktif mengikuti kegiatan sosial dan memiliki pengalaman kerja 1+ tahun dalam bidang kefarmasian.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
