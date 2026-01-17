'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Award, Users, TrendingUp } from 'lucide-react'

export function ConsultantProfile() {
  return (
    <section id="profil" className="py-24 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-slate-950 dark:text-white mb-6">
            Profil Konsultan
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Foto Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
              <div className="relative overflow-hidden rounded-3xl border-2 border-slate-600 shadow-2xl">
                <Image
                  src="/Steven.jpg"
                  alt="Steven One - Strategic Partnership Consultant"
                  width={400}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>

            {/* Achievement Cards */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-slate-800/80 backdrop-blur-sm p-4 rounded-xl border border-slate-700 text-center"
              >
                <Award className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-xs text-slate-400">Data Tervalidasi</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-slate-800/80 backdrop-blur-sm p-4 rounded-xl border border-slate-700 text-center"
              >
                <Users className="w-6 h-6 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">25.000+</div>
                <div className="text-xs text-slate-400">Peserta Termigrasi</div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-slate-800/80 backdrop-blur-sm p-4 rounded-xl border border-slate-700 text-center"
              >
                <TrendingUp className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">100+</div>
                <div className="text-xs text-slate-400">RT/RW Terkoordinasi</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-950 dark:text-white">
                Steven One
              </h3>
              <p className="text-blue-600 dark:text-blue-400 font-semibold text-lg">
                Strategic Partnership Consultant
              </p>
            </div>

            <div className="space-y-4 text-slate-800 dark:text-slate-200 leading-relaxed">
              <p>
                Steven One adalah seorang Strategic Partnership Consultant yang memiliki keahlian mendalam di bidang administrasi jaminan kesehatan. Dengan pemahaman komprehensif mengenai ekosistem JKN dan strategi akuisisi lapangan, Steven berfokus membantu FKTP mencapai pertumbuhan kapitasi yang sehat, stabil, dan berkelanjutan melalui pendekatan digitalisasi layanan.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="space-y-2">
                  <h4 className="text-slate-950 dark:text-white font-bold text-base">Keahlian Utama:</h4>
                  <ul className="text-sm space-y-1 text-slate-800 dark:text-white">
                    <li>• Administrasi JKN</li>
                    <li>• Strategi Akuisisi Lapangan</li>
                    <li>• Digitalisasi Layanan</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-slate-950 dark:text-white font-bold text-base">Fokus Layanan:</h4>
                  <ul className="text-sm space-y-1 text-slate-800 dark:text-white">
                    <li>• Pertumbuhan Kapitasi</li>
                    <li>• Edukasi Mobile JKN</li>
                    <li>• Community Partnership</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}