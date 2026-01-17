'use client'

import { motion } from 'framer-motion'
import { Shield, Target, Eye } from 'lucide-react'

export function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: "Kepatuhan Regulasi",
      description: "Fokus pada metode yang legal dan sesuai aturan BPJS Kesehatan untuk menjaga reputasi klinik."
    },
    {
      icon: Target,
      title: "Berorientasi pada KBK",
      description: "Kami tidak hanya menambah kuantitas, tapi kualitas (poin angka kontak dan rasio rujukan) melalui edukasi Mobile JKN."
    },
    {
      icon: Eye,
      title: "Transparansi & Validasi",
      description: "Setiap data peserta yang didapat bisa divalidasi langsung oleh klinik secara real-time."
    }
  ]

  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-slate-950 dark:text-white mb-6">
            Mengapa Memilih Kami?
          </h2>
          <p className="text-slate-700 dark:text-slate-300 text-lg max-w-3xl mx-auto">
            Kami hadir sebagai mitra strategis yang memahami kompleksitas dunia kesehatan dan regulasi BPJS
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:shadow-lg dark:hover:border-blue-500/30 transition-all duration-300 group"
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 dark:group-hover:bg-blue-500/20 transition-colors">
                <feature.icon className="w-8 h-8 text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-slate-950 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}