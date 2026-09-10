import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Experience from './components/Experience'
import About from './components/About'
import Contact from './components/Contact'
import ProjectDetail from './components/ProjectDetail'
import AllProjects from './components/AllProjects'

// Scroll to the hash target on navigation (e.g. a "← Back" link to /#work),
// or to the top when moving to a plain route.
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0)
      return
    }
    const id = hash.slice(1)
    const jump = () => {
      const el = document.getElementById(id)
      if (!el) return false
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
      return true
    }
    let tries = 0
    const attempt = () => {
      if (jump()) {
        // re-align once late-loading images / layout have settled
        setTimeout(jump, 350)
      } else if (tries++ < 20) {
        requestAnimationFrame(attempt)
      }
    }
    requestAnimationFrame(attempt)
  }, [pathname, hash])
  return null
}

function Home() {
  return (
    <>
      <main>
        <Hero />
        <Work />
        <Experience />
        <About />
      </main>
      {/* last card → 48 → banner */}
      <Contact className="mt-6" />
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollManager />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<AllProjects />} />
        <Route path="/work/:slug" element={<ProjectDetail />} />
      </Routes>
    </div>
  )
}

export default App
