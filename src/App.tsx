import { Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import ScrollProgress from './components/ScrollProgress'
import ScrollToTop from './components/ScrollToTop'
import Home from './components/Home'
import BalisongDetail from './components/BalisongDetail'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0b0a1e] text-gray-100 overflow-x-hidden">
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/balisong" element={<BalisongDetail />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
