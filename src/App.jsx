import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Experience from './components/Experience'
import About from './components/About'
import Contact from './components/Contact'
import ProjectDetail from './components/ProjectDetail'

function Home() {
  return (
    <>
      <main>
        <Hero />
        <Work />
        <Experience />
        <About />
      </main>
      <Contact />
    </>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<ProjectDetail />} />
      </Routes>
    </div>
  )
}

export default App
