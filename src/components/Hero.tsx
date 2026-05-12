import FadeIn from './FadeIn'
import ScrambleText from './ScrambleText'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0b0a1e]">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1840_1px,transparent_1px),linear-gradient(to_bottom,#1a1840_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      {/* Radial glow */}
      <div className="absolute inset-0 bg-radial-[at_50%_50%] from-indigo-900/30 via-transparent to-transparent" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24 pb-16 md:pt-0 md:pb-0">
        <FadeIn delay={0}>
        <div className="inline-flex items-start sm:items-center gap-2 px-4 py-1.5 bg-green-900/40 border border-green-700 rounded-full mb-6">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0 mt-1.5 sm:mt-0" />
          <span className="text-green-400 text-sm font-medium text-left">
            Open to Work — Seeking Full-Time Backend or DevOps Roles
            <span className="hidden sm:inline"> · Available Immediately</span>
            <span className="block sm:hidden text-xs text-green-500 text-center">Available Immediately</span>
          </span>
        </div>
        </FadeIn>
        <FadeIn delay={120}>
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4">
          <p className="text-indigo-400 text-base font-semibold tracking-widest uppercase">
            Software Engineer
          </p>
          <span className="text-gray-600 hidden sm:inline">·</span>
          <div className="flex flex-wrap justify-center gap-2">
            {['Web Development', 'Backend', 'Cloud', 'DevOps'].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-[#1a1838] border border-[#332f6e] text-gray-400 text-xs font-medium rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
        </FadeIn>

        <FadeIn delay={240}>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[108px] font-bold mb-3 leading-none tracking-tight">
          <ScrambleText
            text="Tyler Zenisek"
            delay={300}
            duration={2200}
            charClassName={(i) => i >= 6 ? 'text-indigo-400' : 'text-white'}
          />
        </h1>
        <p className="text-gray-500 text-sm mb-8">Chicago, IL · Open to Remote</p>
        </FadeIn>
        <FadeIn delay={360}>
        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-6">
          I pick up unfamiliar codebases fast and start contributing. Whether it's diagnosing
          a production bug, extending an existing service, or integrating a new feature into
          a live system — I focus on understanding how things work before changing them. Experienced
          with Java and Spring Boot microservices, AWS infrastructure, CI/CD pipelines, and React
          frontends. Cum laude CS grad with 10,000+ commits across two production apps.
        </p>
        </FadeIn>

        <FadeIn delay={480}>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-indigo-500 hover:bg-indigo-400 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            See My Work
          </a>
          <a
            href="/Tyler_Zenisek_Resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-indigo-600 hover:border-indigo-400 text-indigo-400 hover:text-indigo-300 font-semibold rounded-lg transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download Resume
          </a>
        </div>
        </FadeIn>

        {/* Contact info row */}
        <FadeIn delay={600}>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
          <div className="relative group/email">
            <a href="https://mail.google.com/mail/?view=cm&to=tzenisekj@gmail.com" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gray-500 hover:text-gray-300 transition-colors text-xs">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </a>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-[#1a1838] border border-[#332f6e] rounded-lg text-white text-sm font-medium whitespace-nowrap shadow-lg opacity-0 group-hover/email:opacity-100 transition-opacity duration-200 pointer-events-none">
              tzenisekj@gmail.com
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#332f6e]" />
            </div>
          </div>
          <span className="hidden sm:inline text-gray-700">·</span>
          <div className="relative group/phone">
            <a href="tel:6307760576"
              className="flex items-center gap-1.5 text-gray-500 hover:text-gray-300 transition-colors text-xs">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Phone
            </a>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-[#1a1838] border border-[#332f6e] rounded-lg text-white text-sm font-medium whitespace-nowrap shadow-lg opacity-0 group-hover/phone:opacity-100 transition-opacity duration-200 pointer-events-none">
              (630) 776-0576
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#332f6e]" />
            </div>
          </div>
          <span className="hidden sm:inline text-gray-700">·</span>
          <div className="relative group/linkedin">
            <a href="https://linkedin.com/in/tyler-zenisek/" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gray-500 hover:text-gray-300 transition-colors text-xs">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-[#1a1838] border border-[#332f6e] rounded-lg text-white text-sm font-medium whitespace-nowrap shadow-lg opacity-0 group-hover/linkedin:opacity-100 transition-opacity duration-200 pointer-events-none">
              linkedin.com/in/tyler-zenisek
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#332f6e]" />
            </div>
          </div>
          <span className="hidden sm:inline text-gray-700">·</span>
          <div className="relative group/github">
            <a href="https://github.com/tzenisekj" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gray-500 hover:text-gray-300 transition-colors text-xs">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              GitHub
            </a>
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-[#1a1838] border border-[#332f6e] rounded-lg text-white text-sm font-medium whitespace-nowrap shadow-lg opacity-0 group-hover/github:opacity-100 transition-opacity duration-200 pointer-events-none">
              github.com/tzenisekj
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-[#332f6e]" />
            </div>
          </div>
        </div>
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
