import { Navbar }         from '@/components/navbar'
import { Hero }           from '@/components/sections/hero'
import { About }          from '@/components/sections/about'
import { Skills }         from '@/components/sections/skills'
import { Projects }       from '@/components/sections/projects'
import { Experience }     from '@/components/sections/experience'
import { Certifications } from '@/components/sections/certifications'
import { Contact }        from '@/components/sections/contact'
import { Footer }         from '@/components/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="border-t border-border" /><About />
        <div className="border-t border-border" /><Skills />
        <div className="border-t border-border" /><Projects />
        <div className="border-t border-border" /><Experience />
        <div className="border-t border-border" /><Certifications />
        <div className="border-t border-border" /><Contact />
      </main>
      <div className="border-t border-border" />
      <Footer />
    </>
  )
}
