'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar } from 'lucide-react'

export function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-3xl md:text-5xl font-black text-white dark:text-white leading-tight">
            Siap Mengakselerasi Pertumbuhan Kapitasi Klinik Anda?
          </h2>

          <p className="text-xl text-white dark:text-white max-w-2xl mx-auto leading-relaxed">
            Mari diskusikan strategi yang tepat untuk meningkatkan performa KBK klinik Anda dengan pendekatan yang aman, legal, dan berkelanjutan.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={() => window.open('https://wa.me/6282310690095')}
              className="group px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-5 h-5" />
              Jadwalkan Konsultasi Strategis
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>

            <div className="text-white flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Responsif dalam 1 jam</span>
            </div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap justify-center items-center gap-6 pt-8 border-t border-blue-500/30"
          >
            <div className="flex items-center gap-2 text-white">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm">100% Legal & Sesuai Regulasi</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm">Data Real-time</span>
            </div>
            <div className="flex items-center gap-2 text-white">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="text-sm">Garansi Kepuasan</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}