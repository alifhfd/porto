'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X, ArrowLeft } from 'lucide-react'

const navLinks = [
  { label: 'About',          href: '/#about' },
  { label: 'Skills',         href: '/#skills' },
  { label: 'Projects',       href: '/#projects' },
  { label: 'Experience',     href: '/#experience' },
  { label: 'Certifications', href: '/#certifications' },
  { label: 'Contact',        href: '/#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()
  const pathname = usePathname()

  const isHome = pathname === '/'
  const isProjectPage = pathname.startsWith('/projects/')

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // IntersectionObserver hanya aktif di home
  useEffect(() => {
    if (!isHome) return
    const ids = ['hero', 'about', 'skills', 'projects', 'experience', 'certifications', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [isHome])

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    if (!href.includes('#')) return

    const hash = href.split('#')[1]
    if (isHome) {
      // Sudah di home — scroll langsung
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    // Kalau di page lain, Link akan navigate ke /#section dan browser handle hash
  }

  const ThemeToggle = () =>
    mounted ? (
      <button
        onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        className="p-2 rounded-lg border border-border bg-background/80 hover:bg-accent transition-colors"
        aria-label="Toggle theme"
      >
        {resolvedTheme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      </button>
    ) : null

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 border-b border-border/70 shadow-xl backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
        {/* Logo / Back button */}
        <div className="flex items-center gap-3">
          {isProjectPage && (
            <Link
              href="/"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mr-1"
            >
              <ArrowLeft size={15} />
              <span className="hidden sm:inline">Beranda</span>
            </Link>
          )}
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors duration-200"
          >
            Alifhfd <span className="text-primary">.</span>
          </Link>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => {
              const sectionId = link.href.replace('/#', '')
              const isActive = isHome && activeSection === sectionId
              return (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={`text-sm transition-colors duration-200 ${
                      isActive
                        ? 'text-primary font-semibold'
                        : 'text-foreground/70 hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            })}
          </ul>
          <ThemeToggle />
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-3">
          <ThemeToggle />
          <button
            className="flex flex-col gap-1.5 p-2 rounded-lg bg-background/90 backdrop-blur-xl border border-border text-foreground shadow-sm"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 pb-4 bg-background/95 backdrop-blur-xl border-t border-border/70">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="block w-full text-sm text-foreground/80 hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  )
}