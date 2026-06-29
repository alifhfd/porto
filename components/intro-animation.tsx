'use client'

import { useEffect, useState } from 'react'

const LINES = [
  { text: 'Hello, and welcome',  delay: 0 },
  { text: 'to my portfolio',     delay: 900 },
  { text: 'alifhfd_',            delay: 1800 },
]

const CURSOR_BLINK_END   = 3400   // stop blinking cursor
const HOLD_DURATION      = 900    // hold after last line fully typed
const FADE_OUT_START     = CURSOR_BLINK_END + HOLD_DURATION
const UNMOUNT_DELAY      = FADE_OUT_START + 700  // after CSS fade completes

interface Props {
  onDone: () => void
}

export function IntroAnimation({ onDone }: Props) {
  // Which lines are visible and how many chars
  const [chars, setChars] = useState<number[]>([0, 0, 0])
  const [visibleLines, setVisibleLines] = useState<boolean[]>([false, false, false])
  const [cursorLine, setCursorLine] = useState(0)     // which line has the cursor
  const [showCursor, setShowCursor] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = []

    LINES.forEach((line, li) => {
      // Show line (slide in)
      timers.push(setTimeout(() => {
        setVisibleLines(prev => { const n = [...prev]; n[li] = true; return n })
        setCursorLine(li)

        // Type each character
        for (let ci = 0; ci <= line.text.length; ci++) {
          timers.push(setTimeout(() => {
            setChars(prev => { const n = [...prev]; n[li] = ci; return n })
          }, ci * 55))
        }
      }, line.delay))
    })

    // Stop cursor blink
    timers.push(setTimeout(() => setShowCursor(false), CURSOR_BLINK_END))

    // Fade out overlay
    timers.push(setTimeout(() => setFadeOut(true), FADE_OUT_START))

    // Unmount
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
      {/* subtle radial glow behind text */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 45% at 50% 50%, oklch(0.62 0.13 200 / 0.08) 0%, transparent 70%)',
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
