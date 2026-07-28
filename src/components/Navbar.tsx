import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'
import { projects } from '../data/projects'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

function ChevronDownIcon() {
  return (
    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [mobileProjectsOpen, setMobileProjectsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const location = useLocation()
  const onHome = location.pathname === '/'
  const sectionHref = (href: string) => (onHome ? href : `/${href}`)
  const projectHref = (project: (typeof projects)[number]) =>
    project.detailPath ?? sectionHref(`#${project.slug}`)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8
      if (atBottom) {
        setActiveSection('contact')
        return
      }

      const sectionIds = links.map((l) => l.href.slice(1))
      let current = ''
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 100) {
          current = id
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0b0a1e]/95 backdrop-blur-sm shadow-lg shadow-black/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white tracking-tight">
          Tyler <span className="text-indigo-400">Zenisek</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-2">
            {links.map((l) =>
              l.label === 'Projects' ? (
                <li key={l.href} className="relative group">
                  <a
                    href={sectionHref(l.href)}
                    className={`flex items-center gap-1 text-sm transition-all duration-200 px-3 py-1.5 rounded-md ${
                      onHome && activeSection === l.href.slice(1)
                        ? 'bg-indigo-900/50 text-indigo-400 font-medium'
                        : 'text-gray-400 hover:text-white hover:bg-[#1a1838]'
                    }`}
                  >
                    {l.label}
                    <ChevronDownIcon />
                  </a>

                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-150">
                    <div className="min-w-[240px] bg-[#1a1838] border border-[#332f6e] rounded-lg shadow-lg shadow-black/30 py-2">
                      <a
                        href={sectionHref('#projects')}
                        className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#252354] hover:text-white font-medium"
                      >
                        All Projects
                      </a>
                      <div className="my-1 border-t border-[#332f6e]" />
                      {projects.map((p) =>
                        p.detailPath ? (
                          <Link
                            key={p.slug}
                            to={p.detailPath}
                            className="block px-4 py-2 text-sm text-gray-400 hover:bg-[#252354] hover:text-white"
                          >
                            {p.title}
                          </Link>
                        ) : (
                          <a
                            key={p.slug}
                            href={projectHref(p)}
                            className="block px-4 py-2 text-sm text-gray-400 hover:bg-[#252354] hover:text-white"
                          >
                            {p.title}
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </li>
              ) : (
                <li key={l.href}>
                  <a
                    href={sectionHref(l.href)}
                    className={`text-sm transition-all duration-200 px-3 py-1.5 rounded-md ${
                      onHome && activeSection === l.href.slice(1)
                        ? 'bg-indigo-900/50 text-indigo-400 font-medium'
                        : 'text-gray-400 hover:text-white hover:bg-[#1a1838]'
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              )
            )}
          </ul>
          <div className="w-px h-5 bg-[#332f6e]" />
          <a
            href="/Tyler_Zenisek_Resume.pdf"
            download
            className="inline-flex items-center gap-1.5 text-sm font-semibold px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md transition-colors duration-200"
          >
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-gray-400 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0f0e28] border-t border-[#2a2855] px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map((l) =>
              l.label === 'Projects' ? (
                <li key={l.href}>
                  <div className="flex items-center justify-between">
                    <a
                      href={sectionHref(l.href)}
                      className="text-gray-400 hover:text-white transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      {l.label}
                    </a>
                    <button
                      onClick={() => setMobileProjectsOpen(!mobileProjectsOpen)}
                      aria-label="Toggle project links"
                      className="text-gray-500 hover:text-white p-1"
                    >
                      <span className={`inline-block transition-transform duration-200 ${mobileProjectsOpen ? 'rotate-180' : ''}`}>
                        <ChevronDownIcon />
                      </span>
                    </button>
                  </div>
                  {mobileProjectsOpen && (
                    <ul className="mt-2 ml-4 flex flex-col gap-3 border-l border-[#332f6e] pl-4">
                      {projects.map((p) =>
                        p.detailPath ? (
                          <li key={p.slug}>
                            <Link
                              to={p.detailPath}
                              className="text-gray-500 hover:text-white text-sm transition-colors"
                              onClick={() => setMenuOpen(false)}
                            >
                              {p.title}
                            </Link>
                          </li>
                        ) : (
                          <li key={p.slug}>
                            <a
                              href={projectHref(p)}
                              className="text-gray-500 hover:text-white text-sm transition-colors"
                              onClick={() => setMenuOpen(false)}
                            >
                              {p.title}
                            </a>
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={l.href}>
                  <a
                    href={sectionHref(l.href)}
                    className="text-gray-400 hover:text-white transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              )
            )}
            <li>
              <a
                href="/Tyler_Zenisek_Resume.pdf"
                download
                className="inline-block text-sm font-semibold px-4 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-md transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
