'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, ArrowLeft } from 'lucide-react'

const navLinks = [
  { label: 'About',          href: '/#about'          },
  { label: 'Skills',         href: '/#skills'         },
  { label: 'Projects',       href: '/#projects'       },
  { label: 'Experience',     href: '/#experience'     },
  { label: 'Certifications', href: '/#certifications' },
  { label: 'Contact',        href: '/#contact'        },
]

export function Navbar() {
  const [scrolled,  setScrolled]  = useState(false)
  const [menuOpen,  setMenuOpen]  = useState(false)
  const [activeSection, setActive] = useState('hero')
  const pathname = usePathname()

  const isHome        = pathname === '/'
  const isProjectPage = pathname.startsWith('/projects/')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!isHome) return
    const ids = ['hero','about','skills','projects','experience','certifications','contact']
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }),
      { rootMargin: '-40% 0px -55% 0px' }
    )
    ids.forEach(id => { const el = document.getElementById(id); if (el) obs.observe(el) })
    return () => obs.disconnect()
  }, [isHome])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    if (!isHome || !href.includes('#')) return
    document.getElementById(href.split('#')[1])?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
      scrolled ? 'bg-background border-b border-border' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">

        {/* Left */}
        <div className="flex items-center gap-4">
          {isProjectPage && (
            <Link href="/" className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft size={14} /> Back
            </Link>
          )}
          <Link href="/" className="text-lg font-black tracking-tight text-foreground hover:text-primary transition-colors">
            ALIFHFD<span className="text-primary">.</span>
          </Link>
        </div>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => {
            const id     = link.href.replace('/#', '')
            const active = isHome && activeSection === id
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => handleNav(link.href)}
                className={`text-sm font-medium transition-colors ${
                  active ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Mobile */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden p-1.5 text-foreground">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
            {navLinks.map(link => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => handleNav(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
