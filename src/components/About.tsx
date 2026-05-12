export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">About Me</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
              Building reliable software from backend to browser
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                I got into software engineering because I like building things that actually work —
                under real conditions, with real users. I'm based in the Chicagoland area, and I graduated
                cum laude from Lewis University with a B.S. in Computer Science, but most of what
                I know came from shipping code, breaking things, and figuring out why.
              </p>
              <p>
                My approach is end-to-end ownership. I'm not satisfied handing off a feature once
                the code is written — I want to understand how it deploys, how it scales, and how
                it fails. That mindset pushed me toward backend architecture, cloud infrastructure,
                and DevOps, where the gap between "works on my machine" and "works in production" lives.
              </p>
              <p>
                Outside of work I build for the same reason I got into this field — because a problem
                exists that no one has solved well. The Balisong Flipping Center started as a side
                project to give a tight-knit hobby community a real platform. It turned into a production-grade platform with a microserviced backend and a fully
                automated deployment pipeline — because once I start building, I don't stop until it's done right.
              </p>
            </div>

            <a
              href="/Tyler_Zenisek_Resume.pdf"
              download
              className="mt-8 inline-flex items-center gap-2 px-6 py-2.5 border border-blue-600 hover:border-blue-400 text-blue-400 hover:text-blue-300 font-semibold rounded-lg transition-colors duration-200 text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </a>

            <div className="mt-4 bg-green-900/20 border border-green-800 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shrink-0" />
                <span className="text-green-300 text-sm font-semibold">Currently open to full-time software engineering roles.</span>
              </div>
              <p className="text-green-300 text-sm leading-relaxed">
                I'm eager to bring my backend, cloud, and full-stack experience to a collaborative team.
                If you think I'd be a good fit, I'd love to connect —{' '}
                <a href="#contact" className="underline underline-offset-2 hover:text-green-200 transition-colors">
                  reach out anytime
                </a>.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Commits Shipped', value: '10,000+' },
                { label: 'Apps in Production', value: '2' },
                { label: 'Features Built', value: '40+' },
                { label: 'Years Experience', value: '4+' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-gray-800 rounded-xl p-6 border border-gray-700 text-center"
                >
                  <p className="text-3xl font-bold text-blue-400 mb-1">{stat.value}</p>
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
              <p className="text-xs font-semibold text-gray-500 tracking-widest uppercase mb-4">Core Stack</p>
              <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-3">
                {[
                  { name: 'Java',        slug: 'java'       },
                  { name: 'Spring Boot', slug: 'spring'     },
                  { name: 'Docker',      slug: 'docker'     },
                  { name: 'AWS',         slug: 'aws'        },
                  { name: 'React',       slug: 'react'      },
                  { name: 'TypeScript',  slug: 'typescript' },
                ].map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center gap-1.5 group">
                    <img
                      src={`https://skillicons.dev/icons?i=${tech.slug}&theme=dark`}
                      alt={tech.name}
                      className="w-8 h-8 opacity-70 group-hover:opacity-100 transition-opacity duration-200"
                    />
                    <span className="text-gray-600 text-[10px] font-medium group-hover:text-gray-400 transition-colors duration-200">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-800 border border-gray-700 rounded-xl p-5">
              <p className="text-xs font-semibold text-gray-500 tracking-widest uppercase mb-4">Find Me Online</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="https://github.com/tzenisekj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-gray-900 hover:bg-gray-700 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white text-sm font-medium rounded-lg transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  See My Code
                </a>
                <a
                  href="https://linkedin.com/in/tyler-zenisek/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-blue-900/30 hover:bg-blue-900/50 border border-blue-800 hover:border-blue-600 text-blue-400 hover:text-blue-300 text-sm font-medium rounded-lg transition-all duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
