const projects = [
  {
    title: 'Balisong Flipping Center',
    status: 'In Progress — functioning test server with daily additions',
    year: null,
    featured: true,
    description:
      'A full-stack community platform for the balisong flipping hobby. Architected and shipped with 40+ use cases and 9000+ commits, featuring JWT/OAuth2 authentication, microserviced backend, and fully automated deployment pipelines.',
    highlights: [
      'Architected full-stack web app covering 40+ use cases with 9000+ commits',
      'Implemented JWT and OAuth2 authentication for secure user management',
      'Built containerized Java/Spring Boot microservices with MongoDB, deployed to AWS EC2',
      'Established end-to-end CI/CD pipeline using GitHub Actions, Ansible, and Docker with images stored in AWS ECR',
    ],
    tech: ['TypeScript', 'React', 'Redux', 'Spring Boot', 'MongoDB', 'Docker', 'AWS EC2', 'AWS ECR', 'GitHub Actions', 'Ansible', 'JWT', 'OAuth2', 'Tailwind CSS'],
    liveUrl: 'http://ec2-23-22-127-77.compute-1.amazonaws.com/',
    githubUrl: 'https://github.com/BalisongFlippingHub',
  },
  {
    title: 'QuizMaster — Lewis University Capstone',
    status: 'Completed',
    year: '2024',
    featured: false,
    description:
      'A React/Firebase quiz application built as a senior capstone at Lewis University. Led a scrum team through full SDLC ownership, automating CI/CD pipelines and eliminating 13 database-related bugs — delivered on schedule with 1,000+ commits.',
    highlights: [
      'Accumulated 1,000+ commits across the full project lifecycle',
      'Led a scrum team of multiple developers, delegating and owning 23+ user stories',
      'Automated build and deployment pipelines (CI/CD), cutting manual release effort significantly',
      'Eliminated 13 database-related bugs through systematic diagnosis and testing',
      'Delivered on schedule with full SDLC ownership from planning through deployment',
    ],
    tech: ['React', 'Firebase', 'CI/CD', 'AWS', 'Agile', 'NoSQL', 'Git'],
    liveUrl: 'https://quizmaster-c66a2.web.app/',
    githubUrl: null,
  },
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

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Things I've Built</h2>
        </div>

        <div className="space-y-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className={`bg-gray-800 rounded-2xl border overflow-hidden ${
                project.featured
                  ? 'border-blue-700 shadow-lg shadow-blue-950/50'
                  : 'border-gray-700'
              }`}
            >
              {project.featured && (
                <div className="bg-blue-600 px-6 py-2 flex items-center gap-2">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="text-white text-xs font-semibold tracking-wider uppercase">Featured Project</span>
                </div>
              )}

              <div className="p-5 sm:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                      <span
                        className={`text-xs font-semibold px-2 py-1 rounded-full ${
                          project.status.startsWith('In Progress')
                            ? 'bg-yellow-900/50 text-yellow-400 border border-yellow-700'
                            : 'bg-green-900/50 text-green-400 border border-green-700'
                        }`}
                      >
                        {project.status}
                      </span>
                      {project.year && (
                        <span className="text-gray-400 text-sm">— {project.year}</span>
                      )}
                    </div>
                    <p className="text-gray-400 leading-relaxed max-w-2xl">{project.description}</p>
                  </div>

                  <div className="flex gap-3 shrink-0">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white text-sm font-medium rounded-lg transition-colors"
                      >
                        <GitHubIcon />
                        Source
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-medium rounded-lg transition-colors"
                      >
                        <ExternalLinkIcon />
                        Live App
                      </a>
                    )}
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {project.highlights.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-gray-400 text-sm">
                      <span className="text-blue-400 mt-1 shrink-0">›</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 bg-gray-900 text-gray-400 text-xs rounded-md border border-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {project.featured && (
                  <a
                    href="https://github.com/tzenisekj"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-gray-500 hover:text-blue-400 text-xs transition-colors duration-200"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    View my full commit history on GitHub →
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
