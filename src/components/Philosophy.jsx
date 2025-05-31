import React from 'react';
import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <section id="philosophy" className="mb-16 sm:mb-20">
      <h2 className="section-title text-center">Filosofi & Tujuan Profesional</h2>
      <motion.div
        className="card"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h3 className="text-base sm:text-lg font-semibold text-white mb-2">Filosofi Saya</h3>
        <p className="text-gray-200 leading-relaxed text-sm sm:text-base">
          Saya menjunjung tinggi prinsip bahwa setiap interaksi dengan pasien adalah peluang untuk memberikan edukasi, kepercayaan, dan perlindungan terhadap risiko pengobatan. Kolaborasi lintas profesi, integritas ilmiah, dan empati adalah fondasi dari praktik kefarmasian yang bermutu.
        </p>
        <h3 className="text-base sm:text-lg font-semibold text-white mt-4 mb-2">Tujuan Karier</h3>
        <ul className="list-disc list-inside text-gray-200 space-y-1.5 text-sm sm:text-base">
          <li>Saya menjunjung tinggi prinsip bahwa setiap interaksi dengan pasien adalah peluang untuk memberikan edukasi, kepercayaan, dan perlindungan terhadap risiko pengobatan. Kolaborasi lintas profesi, integritas ilmiah, dan empati adalah fondasi dari praktik kefarmasian yang bermutu</li>
          <li>Mengembangkan kompetensi klinis dan teknis secara berkelanjutan, selaras dengan perkembangan ilmu farmasi dan teknologi kesehatan</li>
          <li>Menjadi mitra profesional bagi tenaga kesehatan lainnya dalam sistem pelayanan kesehatan, khususnya dalam pengelolaan terapi obat dan promosi kesehatan</li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Philosophy;