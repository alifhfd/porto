import { ThemeProvider } from '@/components/theme-provider'
import { StarBackground } from '@/components/star-background'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Skills } from '@/components/sections/skills'
import { Projects } from '@/components/sections/projects'
import { Experience } from '@/components/sections/experience'
import { Certifications } from '@/components/sections/certifications'
import { Contact } from '@/components/sections/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <ThemeProvider>
      <StarBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
