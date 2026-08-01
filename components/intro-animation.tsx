'use client'

import { useEffect, useState } from 'react'
import { Terminal, TypingAnimation, AnimatedSpan } from '@/components/magicui/terminal'

const FADE_OUT_START = 3800
const UNMOUNT_DELAY  = FADE_OUT_START + 600

export function IntroAnimation({ onDone }: { onDone: () => void }) {
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const t: ReturnType<typeof setTimeout>[] = []
    t.push(setTimeout(() => setFadeOut(true), FADE_OUT_START))
    t.push(setTimeout(() => onDone(),          UNMOUNT_DELAY))
    return () => t.forEach(clearTimeout)
  }, [onDone])

  return (
    <div
      className="fixed inset-0 z-[9999] bg-background flex items-center justify-center px-6"
      style={{ opacity: fadeOut ? 0 : 1, transition: 'opacity 600ms ease', pointerEvents: fadeOut ? 'none' : 'all' }}
    >
      <Terminal>
        <TypingAnimation delay={0} duration={50}>
          &gt; whoami
        </TypingAnimation>

        <AnimatedSpan delay={900} className="text-primary">
          ✔ Alief Hafid Sidiq
        </AnimatedSpan>
        <AnimatedSpan delay={1200} className="text-muted-foreground">
          ✔ Data Analyst & Business Management
        </AnimatedSpan>

        <TypingAnimation delay={1900} duration={50} className="text-muted-foreground">
          &gt; loading portfolio...
        </TypingAnimation>

        <TypingAnimation delay={2800} duration={60} className="text-primary font-bold">
          Welcome to alifhfd_
        </TypingAnimation>
      </Terminal>
    </div>
  )
}