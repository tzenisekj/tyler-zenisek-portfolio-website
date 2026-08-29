import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import FadeIn from './FadeIn'

const techStack = [
  { layer: 'Frontend', tech: 'React 18, TypeScript, Redux Toolkit, Tailwind CSS, Vite' },
  { layer: 'Backend', tech: 'Java 22/24, Spring Boot 3.2.5, Spring Security, Spring WebSocket/STOMP' },
  { layer: 'Database', tech: 'PostgreSQL 16 (Spring Data JPA + Hibernate 6), Flyway migrations' },
  { layer: 'Auth', tech: 'JWT with 7-day refresh tokens, Google OAuth2' },
  { layer: 'Infrastructure', tech: 'Terraform-provisioned AWS: EC2, S3, CloudFront, Route 53, ACM, ECR, SSM' },
  { layer: 'CI/CD', tech: 'GitHub Actions with OIDC federation (no long-lived AWS credentials)' },
  { layer: 'Containerization', tech: 'Docker (multi-stage builds), Docker Compose on EC2' },
]

const features = [
  'JWT authentication with refresh tokens, plus Google OAuth2 login',
  'Real-time messaging over WebSocket/STOMP, JWT-authenticated on CONNECT',
  'Media uploads (images/video) stored in AWS S3',
  'Community features: posts, profiles, knife collections, and interactions',
  'Interactive API docs via SpringDoc OpenAPI / Swagger UI',
  'Health monitoring via Spring Actuator',
  'Schema migrations managed with Flyway',
]

const screenshots = [
  { src: '/BFC-login.png', caption: 'Sign In' },
  { src: '/BFC-registration.png', caption: 'Account Creation' },
  { src: '/BFC-community-page.png', caption: 'Community Feed' },
  { src: '/BFC-create-post.png', caption: 'Creating a Post' },
  { src: '/BFC-collection-page.png', caption: 'Knife Collection' },
  { src: '/BFC-collection-knife-page.png', caption: 'Knife Detail View' },
  { src: '/BFC-collection-knife-form.png', caption: 'Adding a Knife' },
  { src: '/BFC-profile-page.png', caption: 'User Profile' },
  { src: '/BFC-wiki.png', caption: 'Community Wiki' },
]

const infraNotes = [
  'No load balancer / ASG — a single EC2 instance handles current traffic, with CloudFront providing global edge caching and TLS termination.',
  'No RDS — PostgreSQL runs as a container next to the app on the same instance. Simpler and cheaper at this scale, at the cost of no managed backups/failover.',
  'No Terraform-managed image builds — CI builds and pushes images to ECR; Terraform only provisions the registry and the infrastructure that pulls from it.',
]

function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function FlowBox({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="bg-[#0b0a1e] border border-[#332f6e] rounded-xl px-4 py-3 text-center">
      <p className="text-white text-sm font-semibold">{title}</p>
      {subtitle && <p className="text-gray-500 text-xs mt-0.5">{subtitle}</p>}
    </div>
  )
}

function Arrow({ direction = 'down' }: { direction?: 'down' | 'right' }) {
  return (
    <div className="flex items-center justify-center text-indigo-500 shrink-0">
      {direction === 'down' ? (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      ) : (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      )}
    </div>
  )
}

export default function BalisongDetail() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const lightboxItem = lightboxIndex !== null ? screenshots[lightboxIndex] : null

  const showPrev = () => setLightboxIndex((i) => (i === null ? null : (i - 1 + screenshots.length) % screenshots.length))
  const showNext = () => setLightboxIndex((i) => (i === null ? null : (i + 1) % screenshots.length))

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightboxIndex(null)
      if (e.key === 'ArrowLeft') showPrev()
      if (e.key === 'ArrowRight') showNext()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [lightboxIndex])

  return (
    <div className="pt-24">
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6 cursor-zoom-out"
          onClick={() => setLightboxIndex(null)}
        >
          <p className="absolute top-5 left-1/2 -translate-x-1/2 text-white text-sm sm:text-base font-semibold cursor-default">
            {lightboxItem.caption}
          </p>

          <button
            onClick={() => setLightboxIndex(null)}
            aria-label="Close"
            className="absolute top-5 right-5 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); showPrev() }}
            aria-label="Previous image"
            className="absolute left-3 sm:left-6 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <img
            src={lightboxItem.src}
            alt={lightboxItem.caption}
            className="max-w-full max-h-full object-contain rounded-lg cursor-default"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); showNext() }}
            aria-label="Next image"
            className="absolute right-3 sm:right-6 text-gray-400 hover:text-white transition-colors cursor-pointer"
          >
            <svg className="w-9 h-9" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}

      <section className="py-12 md:py-16 bg-[#0f0e28]">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn>
            <Link
              to="/#projects"
              className="inline-flex items-center gap-1.5 text-gray-500 hover:text-indigo-400 text-sm transition-colors mb-6"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Portfolio
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h1 className="text-3xl md:text-4xl font-bold text-white">Balisong Flipping Center</h1>
              <span className="text-xs font-semibold px-2 py-1 rounded-full bg-yellow-900/50 text-yellow-400 border border-yellow-700">
                In Progress
              </span>
            </div>

            <p className="text-gray-400 leading-relaxed max-w-2xl mb-6">
              A full-stack community platform for balisong flipping enthusiasts to share content, connect with
              other flippers, and showcase their skills — 40+ use cases and 10,000+ commits across a
              React/TypeScript frontend and a Spring Boot backend, with the entire production environment
              provisioned in Terraform.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.balisongflippingcenter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-colors"
              >
                <ExternalLinkIcon />
                Live App
              </a>
              <a
                href="https://github.com/BalisongFlippingCenter"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-[#252354] hover:bg-[#2d2a64] text-gray-300 hover:text-white text-sm font-medium rounded-lg transition-colors"
              >
                <GitHubIcon />
                Source
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={80}>
            <img
              src="/BFC-cover.png"
              alt="Balisong Flipping Center homepage"
              className="w-full aspect-[1636/1255] object-cover rounded-xl border border-[#332f6e] mt-8"
            />
          </FadeIn>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-[#0b0a1e]">
        <div className="max-w-4xl mx-auto px-6 space-y-12">
          <FadeIn>
            <div>
              <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">Architecture</p>
              <div className="bg-[#1a1838] border border-[#332f6e] rounded-xl p-6 md:p-8">
                <div className="flex flex-col items-center gap-3">
                  <FlowBox title="Route 53" subtitle="DNS — apex + www" />
                  <Arrow />
                  <FlowBox title="CloudFront" subtitle="CDN, ACM cert, TLS 1.2+" />
                  <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mt-1">
                    <div className="flex flex-col items-center gap-3">
                      <p className="text-gray-500 text-xs uppercase tracking-wider">default (/*)</p>
                      <Arrow />
                      <FlowBox title="S3" subtitle="Frontend static assets, OAC-only" />
                    </div>
                    <div className="flex flex-col items-center gap-3">
                      <p className="text-gray-500 text-xs uppercase tracking-wider">/api/*</p>
                      <Arrow />
                      <FlowBox title="EC2" subtitle="Spring Boot + Postgres, Docker Compose" />
                    </div>
                  </div>
                  <Arrow />
                  <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <FlowBox title="ECR" subtitle="Backend image registry" />
                    <FlowBox title="SSM Parameter Store" subtitle="/balisong/prod/* secrets" />
                    <FlowBox title="S3" subtitle="App media uploads" />
                  </div>
                </div>
                <p className="text-gray-500 text-xs mt-6 leading-relaxed">
                  The EC2 security group only accepts port 8080 traffic from CloudFront's managed prefix list, so
                  the backend is unreachable except through the CDN. GitHub Actions deploys via two OIDC-federated
                  IAM roles — no long-lived AWS credentials stored in either repo.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={80}>
            <div>
              <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">Tech Stack</p>
              <div className="bg-[#1a1838] border border-[#332f6e] rounded-xl overflow-hidden">
                {techStack.map((row, i) => (
                  <div
                    key={row.layer}
                    className={`flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 px-5 py-3 ${
                      i !== techStack.length - 1 ? 'border-b border-[#332f6e]' : ''
                    }`}
                  >
                    <span className="text-white text-sm font-semibold sm:w-40 shrink-0">{row.layer}</span>
                    <span className="text-gray-400 text-sm">{row.tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={160}>
            <div>
              <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">Key Features</p>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-gray-400 text-sm">
                    <span className="text-indigo-400 mt-1 shrink-0">›</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={240}>
            <div>
              <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">
                Engineering Trade-offs
              </p>
              <div className="bg-[#1a1838] border border-[#332f6e] rounded-xl p-6 space-y-3">
                {infraNotes.map((note) => (
                  <p key={note} className="text-gray-400 text-sm leading-relaxed">
                    {note}
                  </p>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={320}>
            <div>
              <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-4">Product Tour</p>
              <div className="columns-1 sm:columns-2 gap-4">
                {screenshots.map((s, i) => (
                  <div key={s.src} className="break-inside-avoid mb-4">
                    <button
                      onClick={() => setLightboxIndex(i)}
                      className="block w-full cursor-zoom-in"
                      aria-label={`View larger image: ${s.caption}`}
                    >
                      <img
                        src={s.src}
                        alt={s.caption}
                        className="w-full h-auto rounded-xl border border-[#332f6e] hover:border-indigo-500 transition-colors"
                      />
                    </button>
                    <p className="text-gray-500 text-xs mt-2 text-center">{s.caption}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <div className="text-center pt-4">
              <Link
                to="/#projects"
                className="inline-flex items-center gap-1.5 text-gray-500 hover:text-indigo-400 text-sm transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Portfolio
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}
