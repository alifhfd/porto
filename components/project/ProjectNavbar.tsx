'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
import { projects } from '@/data/projects'

export function ProjectNavbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [scrolled, setScrolled]         = useState(false)
  const dropdownRef                     = useRef<HTMLDivElement>(null)
  const pathname                        = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Tutup dropdown saat klik di luar
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const currentSlug = pathname.replace('/projects/', '')

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-100 transition-all duration-500 ${
  scrolled
    ? 'bg-background border-b border-border'
    : 'bg-gradient-to-b from-black/75 to-transparent'
}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-14 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-black tracking-tight text-foreground hover:text-primary transition-colors"
        >
          ALIFHFD<span className="text-primary">.</span>
        </Link>

        {/* Right nav */}
        <div className="flex items-center gap-6">
          {/* Home */}
          <Link
            href="/"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </Link>

          {/* Projects dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors ${
                dropdownOpen ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Projects
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
              />
            </button>

            {/* Dropdown menu */}
            {dropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 bg-card border border-border rounded overflow-hidden shadow-xl">
                {projects.map((p, i) => {
                  const isActive = p.slug === currentSlug
                  return (
                    <Link
                      key={p.slug}
                      href={`/projects/${p.slug}`}
                      onClick={() => setDropdownOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 text-sm transition-colors border-b border-border last:border-0 ${
                        isActive
                          ? 'bg-primary/10 text-primary'
                          : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                      }`}
                    >
                      <span className="font-mono text-xs text-primary/50 shrink-0">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-semibold leading-snug">{p.title}</span>
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
