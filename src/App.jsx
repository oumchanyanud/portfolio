import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Experience from './components/Experience'
import About from './components/About'
import Contact from './components/Contact'
import ProjectDetail from './components/ProjectDetail'
import AllProjects from './components/AllProjects'

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
