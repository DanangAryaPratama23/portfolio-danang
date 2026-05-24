import Navbar from './components/Navbar'
import Home from './components/Home'
import Education from './components/Education'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Footer from './components/Footer'
import CursorGlow from './components/CursorGlow'
function App() {
  return (
    <div className="bg-slate-950 text-white overflow-x-hidden">

      <CursorGlow />

      <Navbar />

      <Home />

      <Education />

      <Skills />

      <Experience />

      <Projects />

      <Footer />

    </div>
  )
}

export default App