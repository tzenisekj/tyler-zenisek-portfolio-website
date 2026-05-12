const skillGroups = [
  {
    category: 'Languages',
    primary: ['JavaScript', 'TypeScript', 'Java'],
    familiar: ['Python', 'C++'],
  },
  {
    category: 'Frameworks & Libraries',
    primary: ['React', 'Spring Boot'],
    familiar: ['Redux', 'Android SDK'],
  },
  {
    category: 'Cloud & DevOps',
    primary: ['Docker', 'AWS EC2', 'AWS ECR', 'GitHub Actions', 'CI/CD'],
    familiar: ['Amazon S3', 'Ansible'],
  },
  {
    category: 'Data & APIs',
    primary: ['MongoDB', 'MySQL', 'REST APIs', 'JWT', 'OAuth2'],
    familiar: ['Firebase', 'WebSockets'],
  },
  {
    category: 'Tools & Practices',
    primary: ['Git', 'Agile / Scrum', 'SDLC', 'Linux', 'MVC'],
    familiar: ['Jira', 'Postman', 'Swagger'],
  },
]

import FadeIn from './FadeIn'

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 bg-[#0b0a1e]">
      <div className="max-w-6xl mx-auto px-6">
        <FadeIn>
        <div className="text-center mb-10 md:mb-16">
          <p className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Technologies & Tools</h2>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-indigo-900/40 text-indigo-300 text-xs rounded-md border border-indigo-700">Tag</span>
              <span className="text-gray-500 text-xs">Primary</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-0.5 bg-[#1a1838] text-gray-400 text-xs rounded-md border border-[#332f6e]">Tag</span>
              <span className="text-gray-500 text-xs">Familiar</span>
            </div>
          </div>
        </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => (
            <FadeIn key={group.category} delay={i * 80}>
            <div
              className="bg-[#0f0e28] border border-[#2a2855] rounded-xl p-6 hover:border-indigo-900 transition-colors duration-300 h-full"
            >
              <h3 className="text-sm font-semibold text-indigo-400 tracking-widest uppercase mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.primary.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-indigo-900/40 text-indigo-300 text-sm rounded-md border border-indigo-700"
                  >
                    {skill}
                  </span>
                ))}
                {group.familiar.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#1a1838] text-gray-400 text-sm rounded-md border border-[#332f6e]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
