import { useEffect, useRef, useState } from 'react'
import FadeIn from './FadeIn'

const experiences = [
  {
    title: 'Software Engineer (Independent)',
    company: 'Balisong Flipping Center',
    location: 'Remote',
    period: 'January 2021 – Present',
    bullets: [
      'Architected and deployed a production-grade full-stack community platform — 9,000+ commits across 40+ features, currently in pre-launch testing.',
      'Built containerized Java/Spring Boot microservices backed by MongoDB and deployed to AWS EC2, with images stored in AWS ECR.',
      'Implemented JWT and OAuth2 authentication for secure user account management.',
      'Established a fully automated CI/CD pipeline using GitHub Actions, Ansible, and Docker — reducing deployment to a single push.',
    ],
    skills: ['TypeScript', 'React', 'Redux', 'Spring Boot', 'MongoDB', 'Docker', 'AWS EC2', 'AWS ECR', 'GitHub Actions', 'Ansible', 'JWT', 'OAuth2'],
  },
  {
    title: 'Software Engineering Team Lead',
    company: 'Lewis University — Senior Capstone',
    location: 'Romeoville, IL',
    period: 'January 2024 – May 2024',
    bullets: [
      'Led a scrum team of multiple developers through full SDLC ownership — from planning and sprint delegation to deployment.',
      'Delegated and personally completed 23+ user stories across a React/Firebase quiz application delivered on schedule.',
      'Automated CI/CD build and deployment pipelines, cutting manual release effort significantly.',
      'Diagnosed and eliminated 13 database-related bugs through systematic testing and root cause analysis.',
    ],
    skills: ['React', 'Firebase', 'CI/CD', 'AWS', 'Agile / Scrum', 'NoSQL', 'Git', 'SDLC'],
  },
  {
    title: 'Contract Lead Android Developer',
    company: 'Galileo Innovations',
    location: 'Chicago, IL',
    period: 'January 2020 – August 2020',
    bullets: [
      'Owned Android application development end to end within a 4-developer team, collaborating across 3 cross-functional teams.',
      'Diagnosed and resolved critical WebSocket/Bluetooth data sync bugs, improving team development velocity by ~2x.',
      'Delivered the complete prototype on a strict 6-month deadline — application adopted by the U.S. military.',
    ],
    skills: ['Android Development', 'Java', 'Threads', 'WebSockets', 'AWS Lambda', 'Security', 'Databases', 'Git'],
  },
]

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const [lineProgress, setLineProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const windowH = window.innerHeight
      const progress = (windowH - rect.top) / (windowH + rect.height)
      setLineProgress(Math.max(0, Math.min(1, progress)))
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section ref={sectionRef} id="experience" className="py-16 md:py-24 bg-[#0b0a1e]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
        <div className="text-center mb-10 md:mb-16">
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Work History</h2>
        </div>
        </FadeIn>

        <div className="relative">
          {/* Static rail */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[#2a2855] hidden md:block" />
          {/* Scroll-driven blue line */}
          <div
            className="absolute left-0 md:left-1/2 top-0 w-px bg-indigo-500 hidden md:block origin-top"
            style={{ height: `${lineProgress * 100}%`, willChange: 'height' }}
          />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <FadeIn key={exp.title + exp.company} delay={i * 150}>
              <div
                className={`relative grid md:grid-cols-2 gap-8 ${i % 2 === 0 ? '' : 'md:direction-rtl'}`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-indigo-400 border-2 border-[#0b0a1e] z-10" />

                <div className={i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12'}>
                  <p className="text-indigo-400 text-sm font-medium mb-1">{exp.period}</p>
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <p className="text-gray-400">
                    {exp.company}
                    {exp.location && <span className="text-gray-600"> · {exp.location}</span>}
                  </p>
                </div>

                <div className={i % 2 === 0 ? 'md:pl-12' : 'md:col-start-1 md:row-start-1 md:pr-12 md:text-right'}>
                  <div className="bg-[#0f0e28] border border-[#2a2855] rounded-xl p-6">
                    <ul className="space-y-3 mb-4">
                      {exp.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-gray-400 text-sm">
                          <span className="text-indigo-400 mt-0.5 shrink-0">›</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                    {exp.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-[#2a2855]">
                        {exp.skills.map((s) => (
                          <span key={s} className="px-2 py-1 bg-[#1a1838] text-gray-400 text-xs rounded border border-[#332f6e]">
                            {s}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
