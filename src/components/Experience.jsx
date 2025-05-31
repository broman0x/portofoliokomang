import React from 'react';
import { motion } from 'framer-motion';

// Komponen Pengalaman Kerja
const Experience = () => {
  const experienceList = [
    {
      title: 'Asisten Apoteker',
      company: 'Apotekku',
      period: '2022-2023',
      description:
        'Membantu meracik obat sesuai dengan resep dokter. Melakukan penyerahan produk kepada pasien. Membantu Apoteker dalam melakukan pembukuan, pendataan mengenai stok obat maupun alat kesehatan.',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: 'easeOut' },
    },
  };

  return (
    <section id="experience" className="mb-10 sm:mb-14">
      <h2 className="section-title">Pengalaman Kerja</h2>
      <div className="flex justify-center">
        <div className="w-full max-w-md">
          {experienceList.map((exp, index) => (
            <motion.div
              key={index}
              className="card mx-auto"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, boxShadow: '0 0 15px rgba(239, 68, 68, 0.5)' }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
            >
              <h3 className="text-base sm:text-lg font-semibold text-[#EF4444] mb-2">{exp.title}</h3>
              <p className="text-[#94A3B8] text-xs sm:text-sm">
                {exp.company} | {exp.period}
              </p>
              <p className="text-[#F1F5F9] mt-3 text-xs sm:text-sm">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;