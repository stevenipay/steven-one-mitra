'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "Apa manfaat utama bagi performa KBK Klinik?",
    answer: "Digitalisasi antrean online melalui Mobile JKN yang kami edukasikan ke warga akan meningkatkan poin angka kontak dan rasio rujukan."
  },
  {
    question: "Apakah data peserta yang dipindahkan terjamin keamanannya?",
    answer: "Sangat terjamin. Seluruh proses dilakukan melalui aplikasi resmi BPJS dan kami membantu pendampingan teknis."
  },
  {
    question: "Berapa lama estimasi waktu untuk melihat pertumbuhan kapitasi?",
    answer: "Pertumbuhan mulai terlihat secara administratif pada bulan berjalan, dengan dampak finansial kapitasi yang stabil mulai bulan kedua."
  },
  {
    question: "Bagaimana sistem pelaporan progres lapangannya?",
    answer: "Kami memberikan akses data real-time peserta yang berhasil dimigrasi untuk divalidasi langsung oleh pihak manajemen klinik."
  }
]


export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-24 bg-blue-600/80 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <HelpCircle className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl md:text-4xl font-black text-white dark:text-white">Pertanyaan Umum</h2>
          </div>
          <p className="text-slate-200 dark:text-slate-100 text-lg max-w-2xl mx-auto">
            Jawaban atas pertanyaan yang sering ditanyakan oleh pemilik klinik mengenai layanan kami
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-slate-700/30 transition-colors group"
              >
                <span className="text-white font-bold text-lg group-hover:text-blue-300 transition-colors">
                  {item.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <ChevronDown className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6">
                      <p className="text-slate-200 dark:text-slate-100 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}