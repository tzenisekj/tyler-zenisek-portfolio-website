import { useEffect, useRef, useState } from 'react'

function buildPools(text: string) {
  const upper = [...new Set(text.split('').filter(c => c >= 'A' && c <= 'Z'))]
  const lower = [...new Set(text.split('').filter(c => c >= 'a' && c <= 'z'))]
  return { upper, lower }
}

function pickRandom(letter: string, pools: ReturnType<typeof buildPools>): string {
  if (letter >= 'A' && letter <= 'Z') return pools.upper[Math.floor(Math.random() * pools.upper.length)]
  if (letter >= 'a' && letter <= 'z') return pools.lower[Math.floor(Math.random() * pools.lower.length)]
  return letter
}

interface Props {
  text: string
  className?: string
  delay?: number
  duration?: number
  charClassName?: (index: number) => string
}

export default function ScrambleText({
  text,
  className = '',
  delay = 0,
  duration = 2000,
  charClassName,
}: Props) {
  const letters = text.split('')
  const pools = buildPools(text)
  const [chars, setChars] = useState<string[]>(() =>
    letters.map(c => (c === ' ' ? ' ' : pickRandom(c, pools)))
  )
  const rafRef = useRef<number | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const start = () => {
      const startTime = performance.now()
      let lastScramble = 0

      const animate = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1)
        const settledCount = Math.floor(progress * letters.length)

        // Only update scrambling characters every 100ms to slow the cycling
        if (now - lastScramble > 220) {
          lastScramble = now
          setChars(
            letters.map((letter, i) => {
              if (letter === ' ') return ' '
              if (i < settledCount) return letter
              return pickRandom(letter, pools)
            })
          )
        }

        if (progress < 1) {
          rafRef.current = requestAnimationFrame(animate)
        } else {
          setChars(letters)
        }
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    timerRef.current = setTimeout(start, delay)

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [text, delay, duration])

  return (
    <span className={className}>
      {chars.map((char, i) => {
        const isSettled = char === letters[i]
        const extraClass = isSettled && charClassName ? charClassName(i) : 'text-gray-500'
        return (
          <span key={i} className={`transition-colors duration-150 ${extraClass}`}>
            {char}
          </span>
        )
      })}
    </span>
  )
}
