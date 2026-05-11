const coursework = [
  'Data Structures & Algorithms (Python)',
  'Advanced Data Structures & Algorithms (C++)',
  'Object Oriented Programming (Java)',
  'Relational Databases (SQL)',
  'Advanced GUI Development',
  'Linear Algebra',
  'Discrete Mathematics',
]

export default function Education() {
  return (
    <section id="education" className="py-24 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Education</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Academic Background</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-900/50 border border-blue-700 rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  B.S. in Computer Science
                </h3>
                <p className="text-blue-400 font-medium mb-1">Lewis University</p>
                <p className="text-gray-500 text-sm mb-1">Romeoville, IL</p>
                <p className="text-gray-500 text-sm mb-4">Graduated 2024</p>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-yellow-900/40 border border-yellow-700 text-yellow-400 text-sm rounded-lg font-medium">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Graduated Cum Laude
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-900/50 border border-blue-700 rounded-xl flex items-center justify-center shrink-0">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  A.S. in Software Development
                </h3>
                <p className="text-blue-400 font-medium mb-1">College of DuPage</p>
                <p className="text-gray-500 text-sm mb-1">Glen Ellyn, IL</p>
                <p className="text-gray-500 text-sm">Graduated 2022</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8">
            <h3 className="text-sm font-semibold text-blue-400 tracking-widest uppercase mb-5">
              Relevant Coursework
            </h3>
            <ul className="space-y-2">
              {coursework.map((c) => (
                <li key={c} className="flex items-center gap-3 text-gray-400 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
