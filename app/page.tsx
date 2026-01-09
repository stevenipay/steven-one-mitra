'use client'

import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { 
  Users, 
  TrendingUp, 
  Zap, 
  ArrowRight, 
  Phone, 
  Mail,
  CheckCircle2
} from 'lucide-react'

// Komponen Counter yang diperbaiki agar tidak macet di angka 0
const Counter = ({ target, label, suffix }: { target: number, label: string, suffix: string }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (inView) {
      let start = 0
      const end = target
      const duration = 2000
      const increment = end / (duration / 16)
      
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      return () => clearInterval(timer)
    }
  }, [inView, target])

  return (
    <div ref={ref} className="text-center">
      <div className="text-5xl md:text-6xl font-black text-blue-500 mb-2">
        {count}{suffix}
      </div>
      <div className="text-slate-400 text-xs font-bold uppercase tracking-widest">{label}</div>
    </div>
  )
}

export default function Home() {
  // Fungsi Scroll Navigasi yang diperbaiki
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      })
    }
  }

  // Data 8 Foto Lengkap (Termasuk sosialisasi-8.jpg)
  const photos = [
    { id: 1, src: '/sosialisasi-1.jpg', title: 'Perizinan Desa dan RT/RW', date: '15 Oktober 2025' },
    { id: 2, src: '/sosialisasi-2.jpg', title: 'Pendataan Warga Kampung Lengah Sari', date: '10 September 2025' },
    { id: 3, src: '/sosialisasi-3.jpg', title: 'Edukasi Mobile JKN', date: '16 Juli 2025' },
    { id: 4, src: '/sosialisasi-4.jpg', title: 'Sosialisasi Acara Ibu-ibu Arisan', date: '7 September 2025' },
    { id: 5, src: '/sosialisasi-5.jpg', title: 'Pengecekan & Edukasi Warga Kampung Kobak', date: '6 September 2025' },
    { id: 6, src: '/sosialisasi-6.jpg', title: 'Pengecekan & Edukasi Masyarakat Pantai HarapanJaya', date: '21 November 2025' },
    { id: 7, src: '/sosialisasi-7.jpg', title: 'Pengecekan & Edukasi Masyarakat Tambun Selatan', date: '22 November 2025' },
    { id: 8, src: '/sosialisasi-8.jpg', title: 'Pengecekan & Edukasi Masyarakat KaliJaya', date: '2 Desember 2025' },
  ]

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Fixed Navbar */}
      <nav className="fixed top-0 w-full z-[100] bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-black tracking-tighter text-[#001E3C]">STEVEN ONE</div>
          <div className="hidden md:flex space-x-8">
            {['home', 'layanan', 'galeri', 'kontak'].map((item) => (
              <button 
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-sm font-bold uppercase tracking-widest text-[#001E3C] hover:text-blue-600 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-40 pb-20 bg-slate-200">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 text-[#001E3C]">
              Solusi Akurat Peningkatan <span className="text-blue-600">Kapitasi.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Membangun kemitraan strategis antara FKTP dengan komunitas masyarakat melalui metode lapangan yang terukur.
            </p>
            <button 
              onClick={() => window.open('https://wa.me/6282310690095')}
              className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg hover:bg-blue-700 transition-all flex items-center gap-3"
            >
              Konsultasi Sekarang <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
          <div className="relative w-full aspect-square max-w-[400px] mx-auto overflow-hidden rounded-[2.5rem] border-[12px] border-white shadow-2xl">
            <Image src="/STEVEN ONE.jpg" alt="Steven One" fill className="object-cover" priority />
          </div>
        </div>
      </section>

      {/* Layanan - Berdasarkan Brosur */}
      <section id="layanan" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
            <Users className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-bold mb-4 text-[#001E3C]">Community Partnership</h3>
            <p className="text-slate-500 text-sm">Membangun kerjasama formal dengan perangkat lingkungan (RT/RW) untuk pembukaan akses sosialisasi.</p>
          </div>
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
            <TrendingUp className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-bold mb-4 text-[#001E3C]">Massive Acquisition</h3>
            <p className="text-slate-500 text-sm">Strategi pendataan Door-to-Door yang efektif menjaring peserta baru secara massal dan akurat.</p>
          </div>
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
            <Zap className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-xl font-bold mb-4 text-[#001E3C]">Digitalisasi JKN</h3>
            <p className="text-slate-500 text-sm">Edukasi aktivasi Mobile JKN dan Antrean Online untuk meningkatkan poin performa (KBK) Klinik.</p>
          </div>
        </div>
      </section>

      {/* Stats Section - DARK MODE */}
      <section className="py-24 bg-[#001E3C]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <Counter target={25000} suffix="+" label="Peserta Teredukasi" />
          <Counter target={100} suffix="+" label="RT/RW Terkoordinasi" />
          <Counter target={98} suffix="%" label="Akurasi Data" />
        </div>
      </section>

      {/* Gallery Section - 8 FOTO LENGKAP */}
      <section id="galeri" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black text-center mb-12 text-[#001E3C]">Dokumentasi Lapangan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {photos.map((photo) => (
              <div key={photo.id} className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-sm">
                <Image 
                  src={photo.src} 
                  alt={photo.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                  <p className="text-white text-xs font-bold uppercase tracking-widest mb-1">{photo.date}</p>
                  <p className="text-white font-bold">{photo.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="kontak" className="py-20 bg-slate-200 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-10 text-[#001E3C]">Informasi Kontak</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="https://wa.me/6282310690095" className="flex items-center justify-center gap-3 px-8 py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-green-700 transition-all">
              <Phone className="w-5 h-5" /> 0823-1069-0095
            </a>
            <div className="flex items-center justify-center gap-3 px-8 py-4 bg-white border border-slate-200 rounded-xl font-bold text-slate-700">
              <Mail className="w-5 h-5 text-blue-600" /> stevenone28@yahoo.co.id
            </div>
          </div>
          <p className="mt-16 text-slate-400 text-xs tracking-widest uppercase">© 2025 Steven One - Strategic Partnership</p>
        </div>
      </footer>
    </div>
  )
}