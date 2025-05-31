import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="mb-16 sm:mb-20">
      <h2 className="section-title text-center">Kontak Saya</h2>
      <motion.div
        className="card text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <p className="text-gray-200 mb-4 sm:mb-6 text-sm sm:text-base">
          Saya antusias untuk berkolaborasi dengan profesional kesehatan dan organisasi untuk memajukan layanan farmasi. Hubungi saya untuk mendiskusikan peluang yang dapat memberikan dampak nyata!
        </p>
        <motion.a
          href="mailto:komangagustriastawan@gmail.com"
          className="button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          animate={{ boxShadow: ['0 0 0 rgba(96,165,250,0)', '0 0 15px rgba(96,165,250,0.5)', '0 0 0 rgba(96,165,250,0)'], transition: { repeat: Infinity, duration: 2 } }}
        >
          komangagustriastawan@gmail.com
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Contact;