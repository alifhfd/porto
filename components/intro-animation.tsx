'use client'

import { useEffect, useState } from 'react'

const LINES = [
  { text: 'Hello, and welcome', delay: 0    },
  { text: 'to my portfolio',    delay: 900  },
  { text: 'alifhfd_',           delay: 1800 },
]

const FADE_OUT_START = 3400 + 900
const UNMOUNT_DELAY  = FADE_OUT_START + 600

export function IntroAnimation({ onDone }: { onDone: () => void }) {
  const [chars,   setChars]   = useState([0, 0, 0])
  const [visible, setVisible] = useState([false, false, false])
  const [cursor,  setCursor]  = useState(0)
  const [showCur, setShowCur] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const t: ReturnType<typeof setTimeout>[] = []

    LINES.forEach((line, li) => {
      t.push(setTimeout(() => {
        setVisible(p => { const n=[...p]; n[li]=true; return n })
        setCursor(li)
        for (let ci = 0; ci <= line.text.length; ci++) {
          t.push(setTimeout(() => {
            setChars(p => { const n=[...p]; n[li]=ci; return n })
          }, ci * 52))
        }
      }, line.delay))
    })

    t.push(setTimeout(() => setShowCur(false), 3400))
    t.push(setTimeout(() => setFadeOut(true),  FADE_OUT_START))
    t.push(setTimeout(() => onDone(),           UNMOUNT_DELAY))

    return () => t.forEach(clearTimeout)
  }, [onDone])

  return (
    <div
      className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
      style={{ opacity: fadeOut ? 0 : 1, transition: 'opacity 600ms ease', pointerEvents: fadeOut ? 'none' : 'all' }}
    >
      <div className="flex flex-col gap-2 px-6">
        {LINES.map((line, li) => (
          <div
            key={li}
            style={{
              opacity: visible[li] ? 1 : 0,
              transform: visible[li] ? 'none' : 'translateY(8px)',
              transition: 'opacity 350ms ease, transform 350ms ease',
            }}
          >
            <span className={li === LINES.length - 1
              ? 'font-mono text-3xl sm:text-5xl font-black text-primary'
              : 'font-mono text-2xl sm:text-4xl font-bold text-foreground'
            }>
              {line.text.slice(0, chars[li])}
              {li === cursor && showCur && (
                <span className="inline-block w-0.5 h-[1em] align-middle ml-1 bg-primary"
                  style={{ animation: 'blink 0.7s step-end infinite' }} />
              )}
            </span>
          </div>
        ))}
      </div>
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </div>
  )
}
