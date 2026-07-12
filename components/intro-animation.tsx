'use client'

import { useEffect, useState } from 'react'

const LINES = [
  { text: 'Hello, and welcome',  delay: 0 },
  { text: 'to my portfolio',     delay: 900 },
  { text: 'alifhfd_',            delay: 1800 },
]

const CURSOR_BLINK_END = 3400
const HOLD_DURATION    = 900
const FADE_OUT_START   = CURSOR_BLINK_END + HOLD_DURATION
const UNMOUNT_DELAY    = FADE_OUT_START + 700

interface Props {
  onDone: () => void
}

export function IntroAnimation({ onDone }: Props) {
  const [chars, setChars] = useState<number[]>([0, 0, 0])
  const [visibleLines, setVisibleLines] = useState<boolean[]>([false, false, false])
  const [cursorLine, setCursorLine] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []

    LINES.forEach((line, li) => {
      timers.push(setTimeout(() => {
        setVisibleLines(prev => { const n = [...prev]; n[li] = true; return n })
        setCursorLine(li)
        for (let ci = 0; ci <= line.text.length; ci++) {
          timers.push(setTimeout(() => {
            setChars(prev => { const n = [...prev]; n[li] = ci; return n })
          }, ci * 55))
        }
      }, line.delay))
    })

    timers.push(setTimeout(() => setShowCursor(false), CURSOR_BLINK_END))
    timers.push(setTimeout(() => setFadeOut(true), FADE_OUT_START))
    timers.push(setTimeout(() => onDone(), UNMOUNT_DELAY))

    return () => timers.forEach(clearTimeout)
  }, [onDone])

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
      style={{
        transition: 'opacity 700ms cubic-bezier(0.4,0,0.2,1)',
        opacity: fadeOut ? 0 : 1,
        pointerEvents: fadeOut ? 'none' : 'all',
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 45% at 50% 50%, color-mix(in oklch, var(--primary) 8%, transparent) 0%, transparent 70%)',
        }}
      />
      <div className="relative flex flex-col gap-3 px-6">
        {LINES.map((line, li) => {
          const isLast = li === LINES.length - 1
          const isCurrent = li === cursorLine
          return (
            <div
              key={li}
              style={{
                transition: 'opacity 400ms ease, transform 400ms cubic-bezier(0.16,1,0.3,1)',
                opacity: visibleLines[li] ? 1 : 0,
                transform: visibleLines[li] ? 'translateY(0)' : 'translateY(10px)',
              }}
            >
              <span
                className={
                  isLast
                    ? 'font-mono text-3xl sm:text-5xl font-black tracking-tight text-primary'
                    : 'font-mono text-2xl sm:text-4xl font-semibold tracking-tight text-foreground/80'
                }
              >
                {line.text.slice(0, chars[li])}
                {isCurrent && showCursor && (
                  <span
                    className="inline-block w-[2px] sm:w-[3px] h-[1em] align-middle ml-1 bg-primary"
                    style={{ animation: 'introBlink 0.7s step-end infinite' }}
                  />
                )}
              </span>
            </div>
          )
        })}
      </div>
      <style>{`
        @keyframes introBlink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
      `}</style>
    </div>
  )
}