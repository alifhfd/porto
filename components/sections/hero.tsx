'use client'

import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { IntroAnimation } from '@/components/intro-animation'
import { Meteors } from "@/components/meteors";

const TITLES = ['Data Analisis & Visualisasi','ERP & Optimasi Proses Bisnis','Manajemen Bisnis','Manajemen Rantai Pasokan']
const TOOLS  = ['Power BI','SQL','Python','SAP ERP','Excel','Tableau','Data Studio','SPSS']
const STATS  = [
  { value: '3+', label: 'Tahun Pengalaman Kerja' },
  { value: '5+', label: 'Sertifikasi'       },
  { value: '2+', label: 'Project Selesai'   },
]

export function Hero() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayed,  setDisplayed]  = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [showIntro,  setShowIntro]  = useState(false)
  const [visible,    setVisible]    = useState(false)

  useEffect(() => {
    const seen = sessionStorage.getItem('intro_seen')
    if (seen) { setVisible(true) } else { setShowIntro(true) }
  }, [])

  const handleIntroDone = useCallback(() => {
    sessionStorage.setItem('intro_seen', '1')
    setShowIntro(false)
    setTimeout(() => setVisible(true), 60)
  }, [])

  useEffect(() => {
    if (!visible) return
    const current = TITLES[titleIndex]
    let t: ReturnType<typeof setTimeout>
    if (!isDeleting && displayed.length < current.length) {
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 75)
    } else if (!isDeleting && displayed.length === current.length) {
      t = setTimeout(() => setIsDeleting(true), 2200)
    } else if (isDeleting && displayed.length > 0) {
      t = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40)
    } else {
      setIsDeleting(false)
      setTitleIndex(i => (i + 1) % TITLES.length)
    }
    return () => clearTimeout(t)
  }, [displayed, isDeleting, titleIndex, visible])

  return (
    <>
      {showIntro && <IntroAnimation onDone={handleIntroDone} />}

      <section
        id="hero"
        className="relative overflow-hidden min-h-screen flex items-center px-6 pt-14"
        style={{ opacity: visible ? 1 : 0, transition: 'opacity 0.5s ease' }}
      >
        {/* background meteor */}
        <Meteors number={20} />

        <div className="relative z-10 max-w-6xl mx-auto w-full grid gap-16 lg:grid-cols-[1fr_360px] lg:items-center py-20">

          {/* Left */}
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-6">
              Data Analisis & Manajemen Bisnis
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.05] text-foreground">
              Alief Hafid<br />
              <span className="text-primary">Sidiq</span>
            </h1>

            <div className="mt-5 h-8 flex items-center">
              <span className="text-xl sm:text-2xl font-bold text-muted-foreground">
                {displayed}<span className="text-primary animate-pulse">|</span>
              </span>
            </div>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              Lulusan Manajemen Bisnis (2026) dengan pengalaman lebih dari tiga tahun di industri 
              manufaktur farmasi yang diperoleh selama menempuh pendidikan sarjana. 
              Berpengalaman dalam operasional produksi, penimbangan bahan baku, penerapan Good Manufacturing Practices (GMP), 
              pengendalian dokumentasi, koordinasi proses produksi, serta pencapaian target produksi di lingkungan manufaktur 
              yang memiliki standar regulasi tinggi.
            </p>

            {/* Tool badges */}
            <div className="mt-8 flex flex-wrap gap-2">
              {TOOLS.map(t => (
                <span key={t} className="text-xs font-semibold px-3 py-1 border border-border rounded text-muted-foreground">
                  {t}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              
              <a href="#projects"
                onClick={e => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="px-6 py-2.5 bg-primary text-white text-sm font-bold rounded hover:bg-primary/90 transition-colors"
              >
                Lihat Projects
              </a>
              
               <a href="#contact"
                onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                className="px-6 py-2.5 border border-border text-sm font-bold rounded text-foreground hover:border-foreground transition-colors"
              >
                Hubungi Saya
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-10">
              {STATS.map((s, i) => (
                <div key={s.label} className={i > 0 ? 'pl-10 border-l border-border' : ''}>
                  <p className="text-3xl font-black text-primary">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — foto */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-[260px] h-[340px] rounded-lg overflow-hidden border border-border">
              <Image
                src="/images/profil-2.png"
                alt="Alief Hafid Sidiq"
                fill
                className="object-cover object-top"
                priority
              />
              {/* Bottom label */}
              <div className="absolute bottom-0 left-0 right-0 bg-background/90 border-t border-border px-4 py-3">
                <p className="text-sm font-bold text-foreground leading-none">Alief Hafid Sidiq</p>
                <p className="text-xs text-primary mt-1 font-semibold">Open to Work</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}