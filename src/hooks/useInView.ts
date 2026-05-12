import { useEffect, useRef, useState } from 'react'

export type ViewState = 'below' | 'visible' | 'above'

export function useInView(threshold = 0.04) {
  const ref = useRef<HTMLDivElement>(null)
  const [viewState, setViewState] = useState<ViewState>('below')

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setViewState('visible')
        } else {
          setViewState(entry.boundingClientRect.top < 0 ? 'above' : 'below')
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, viewState }
}
