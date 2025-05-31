import React from 'react';
import { motion } from 'framer-motion';

// Komponen Proyek Farmasi
const Project = () => {
  const projects = [
    {
      title: 'Skripsi: Hubungan Kewaspadaan terhadap Penyakit Diabetes Mellitus',
      period: '2020 - Desember 2021',
      description:
        'Meneliti hubungan antara kewaspadaan diri dan kepatuhan pasien Diabetes Mellitus Tipe 2 di Puskesmas IV Denpasar Selatan, dengan fokus pada edukasi kesehatan dan pengelolaan penyakit kronis.',
      link: 'https://journal.ummat.ac.id/index.php/farmasi/article/view/17054',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } },
  };

  const buttonVariants = {
    hover: { scale: 1.1, boxShadow: '0 0 12px rgba(255, 255, 255, 0.7)' },
    tap: { scale: 0.9 },
  };

  return (
    <section id="project" className="mb-10 sm:mb-14">
      <h2 className="section-title">Proyek Farmasi</h2>
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              className="card mx-auto"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(255, 255, 255, 0.5)' }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <h3 className="text-base sm:text-lg font-semibold text-[#FFFFFF] mb-2">{proj.title}</h3>
              <p className="text-[#64748B] text-xs sm:text-sm">{proj.period}</p>
              <p className="text-[#E2E8F0] mt-3 text-xs sm:text-sm">{proj.description}</p>
              <motion.a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block bg-[#333333] text-[#FFFFFF] px-5 py-2 rounded-md hover:bg-[#4B5563] transition-all duration-300 font-medium text-xs sm:text-sm shadow-[0_0_8px_rgba(255,255,255,0.3)]"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Lihat Jurnal
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
