const experiences = [
  {
    title: 'Independent Full-Stack Developer',
    company: 'Balisong Flipping Center',
    location: 'Remote',
    period: 'January 2021 – Present',
    bullets: [
      'Architected and shipped a full-stack community platform from scratch, accumulating 2000+ commits across 40+ implemented features.',
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
      'Delegated and completed 20+ user stories in a multi-team environment, resulting in a complete Android application used as a prototype system by 200+ individuals.',
      'Collaborated with the backend team to diagnose and resolve WebSocket/Bluetooth data sync bugs, increasing workflow velocity week over week.',
    ],
    skills: ['Android Development', 'Java', 'Threads', 'WebSockets', 'AWS Lambda', 'Security', 'Databases', 'Git'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Work History</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gray-800 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={exp.title + exp.company}
                className={`relative grid md:grid-cols-2 gap-8 ${i % 2 === 0 ? '' : 'md:direction-rtl'}`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 top-6 -translate-x-1/2 w-3 h-3 rounded-full bg-blue-400 border-2 border-gray-950 z-10" />

                <div className={i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12'}>
                  <p className="text-blue-400 text-sm font-medium mb-1">{exp.period}</p>
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <p className="text-gray-400">
                    {exp.company}
                    {exp.location && <span className="text-gray-600"> · {exp.location}</span>}
                  </p>
                </div>

                <div className={i % 2 === 0 ? 'md:pl-12' : 'md:col-start-1 md:row-start-1 md:pr-12 md:text-right'}>
                  <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
                    <ul className="space-y-3 mb-4">
                      {exp.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-gray-400 text-sm">
                          <span className="text-blue-400 mt-0.5 shrink-0">›</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                    {exp.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-800">
                        {exp.skills.map((s) => (
                          <span key={s} className="px-2 py-1 bg-gray-800 text-gray-400 text-xs rounded border border-gray-700">
                            {s}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
