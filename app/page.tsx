import { Navbar }         from '@/components/navbar'
import { Hero }           from '@/components/sections/hero'
import { About }          from '@/components/sections/about'
import { Skills }         from '@/components/sections/skills'
import { Projects }       from '@/components/sections/projects'
import { Experience }     from '@/components/sections/experience'
import { Certifications } from '@/components/sections/certifications'
import { Contact }        from '@/components/sections/contact'
import { Footer }         from '@/components/footer'
import { Reveal }         from '@/components/reveal'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <div className="border-t border-border" />
        <Reveal variant="up"><About /></Reveal>

        <div className="border-t border-border" />
        <Reveal variant="up"><Skills /></Reveal>

        <div className="border-t border-border" />
        <Reveal variant="up"><Projects /></Reveal>

        <div className="border-t border-border" />
        <Reveal variant="up"><Experience /></Reveal>

        <div className="border-t border-border" />
        <Reveal variant="up"><Certifications /></Reveal>

        <div className="border-t border-border" />
        <Reveal variant="up"><Contact /></Reveal>
      </main>
      <div className="border-t border-border" />
      <Footer />
    </>
  )
}