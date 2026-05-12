import { useInView } from '../hooks/useInView'

type Direction = 'up' | 'left' | 'right'

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: Direction
}

function getHiddenClass(direction: Direction, state: 'below' | 'above'): string {
  if (direction === 'left') return 'opacity-0 -translate-x-24'
  if (direction === 'right') return 'opacity-0 translate-x-24'
  return state === 'above' ? 'opacity-0 -translate-y-16' : 'opacity-0 translate-y-16'
}

export default function FadeIn({ children, className = '', delay = 0, direction = 'up' }: FadeInProps) {
  const { ref, viewState } = useInView()

  const visibilityClass =
    viewState === 'visible'
      ? 'opacity-100 translate-y-0 translate-x-0'
      : getHiddenClass(direction, viewState)

  return (
    <div
      ref={ref}
      style={{ transitionDelay: viewState === 'visible' ? `${delay}ms` : '0ms' }}
      className={`transition-all duration-1000 ease-out ${visibilityClass} ${className}`}
    >
      {children}
    </div>
  )
}
