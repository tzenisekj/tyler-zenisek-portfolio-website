const skillGroups = [
  {
    category: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Java', 'Python', 'C++'],
  },
  {
    category: 'Frameworks & Libraries',
    skills: ['React', 'Redux', 'Spring Boot', 'Android SDK'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS EC2', 'AWS ECR', 'Amazon S3', 'Docker', 'GitHub Actions', 'Ansible', 'CI/CD'],
  },
  {
    category: 'Data & APIs',
    skills: ['MongoDB', 'MySQL', 'Firebase', 'REST APIs', 'JWT', 'OAuth2', 'WebSockets'],
  },
  {
    category: 'Tools & Practices',
    skills: ['Git', 'Jira', 'Postman', 'Swagger', 'Linux', 'Agile / Scrum', 'SDLC', 'MVC'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Skills</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Technologies & Tools</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-900 transition-colors duration-300"
            >
              <h3 className="text-sm font-semibold text-blue-400 tracking-widest uppercase mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-md border border-gray-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
