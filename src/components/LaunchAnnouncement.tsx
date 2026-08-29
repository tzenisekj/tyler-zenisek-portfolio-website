import { useState } from 'react'

export default function LaunchAnnouncement() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  const handleViewProject = () => {
    document.getElementById('balisong-flipping-center')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="relative flex flex-col sm:flex-row sm:items-center gap-4 px-6 py-5 mb-5 bg-linear-to-r from-yellow-900/40 to-amber-800/30 border-2 border-yellow-500/60 rounded-xl shadow-lg shadow-yellow-950/40">
      <button
        onClick={() => setVisible(false)}
        aria-label="Close"
        className="absolute top-3 right-3 text-gray-500 hover:text-gray-300 transition-colors"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="flex items-center gap-2 pr-6">
        <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 animate-pulse shrink-0" />
        <span className="text-yellow-300 text-base sm:text-lg font-bold whitespace-nowrap">
          🚀 Balisong Flipping Center is live
        </span>
      </div>

      <div className="flex items-center gap-3 pr-6 sm:pr-8">
        <a
          href="https://www.balisongflippingcenter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-[#0b0a1e] text-sm font-bold rounded-full transition-colors duration-200"
        >
          Visit the App
        </a>
        <button
          onClick={handleViewProject}
          className="px-4 py-2 border border-yellow-500 hover:border-yellow-400 text-yellow-300 hover:text-yellow-200 text-sm font-bold rounded-full transition-colors duration-200"
        >
          View the Project
        </button>
      </div>
    </div>
  )
}
