import { useEffect, useRef, useState } from 'react'
import { useInView } from '../hooks/useInView'

interface Props {
  value: string
  label: string
  delay?: number
}

function parseValue(value: string) {
  const numeric = parseInt(value.replace(/,/g, '').replace(/\D/g, '')) || 0
  const suffix = value.replace(/[\d,]/g, '')
  return { numeric, suffix }
}

function formatNumber(n: number): string {
  return n >= 1000 ? n.toLocaleString() : String(n)
}

export default function StatCounter({ value, label, delay = 0 }: Props) {
  const { ref, viewState } = useInView(0.3)
  const [count, setCount] = useState(0)
  const rafRef = useRef<number | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const { numeric: target, suffix } = parseValue(value)

  useEffect(() => {
    const cleanup = () => {
      if (timerRef.current) clearTimeout(timerRef.current)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }

    if (viewState === 'visible') {
      timerRef.current = setTimeout(() => {
        const duration = 1500
        const startTime = performance.now()
        const animate = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setCount(Math.round(eased * target))
          if (progress < 1) rafRef.current = requestAnimationFrame(animate)
        }
        rafRef.current = requestAnimationFrame(animate)
      }, delay)
    } else {
      cleanup()
      setCount(0)
    }

    return cleanup
  }, [viewState, target, delay])

  const visibilityClass =
    viewState === 'visible'
      ? 'opacity-100 translate-y-0'
      : viewState === 'above'
      ? 'opacity-0 -translate-y-16'
      : 'opacity-0 translate-y-16'

  return (
    <div
      ref={ref}
      style={{ transitionDelay: viewState === 'visible' ? `${delay}ms` : '0ms' }}
      className={`transition-all duration-1000 ease-out ${visibilityClass} bg-[#1a1838] rounded-xl p-6 border border-[#332f6e] text-center`}
    >
      <p className="text-3xl font-bold text-indigo-400 mb-1">
        {formatNumber(count)}{suffix}
      </p>
      <p className="text-sm text-gray-500">{label}</p>
    </div>
  )
}
