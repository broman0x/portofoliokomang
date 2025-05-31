import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const pharmacySkills = [,
    'Teliti, jujur, dan bertanggung jawab',
    'Bekerja sama dengan tim',
    'Menentukan obat yang tepat kepada pasien',
  ];
  const otherSkills = [
    'Komputer Office (Word, Excel, PowerPoint)',
  ];

  return (
    <section id="skills" className="mb-16 sm:mb-20">
      <h2 className="section-title text-center">Keahlian</h2>
      <motion.div
        className="card"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Keahlian Farmasi</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-gray-200">
          {pharmacySkills.map((skill, index) => (
            <motion.li
              key={index}
              className="flex items-center text-sm sm:text-base"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mr-1.5 sm:mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, delay: index * 0.1 }}
              >
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </motion.svg>
              {skill}
            </motion.li>
          ))}
        </ul>
        <h3 className="text-base sm:text-lg font-semibold text-white mt-4 mb-2">Keahlian Tambahan</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-gray-200">
          {otherSkills.map((skill, index) => (
            <motion.li
              key={index}
              className="flex items-center text-sm sm:text-base"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.svg
                className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mr-1.5 sm:mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, delay: index * 0.1 }}
              >
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </motion.svg>
              {skill}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default Skills;