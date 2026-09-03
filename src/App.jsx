import SidebarNav from './components/SidebarNav'
import Hero from './components/Hero'
import About from './components/About'
import Journey from './components/Journey'
import Skills from './components/Skills'
import Strengths from './components/Strengths'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Beyond from './components/Beyond'
import Goals from './components/Goals'
import Contact from './components/Contact'

function App() {
  return (
    <div className="portfolio-container">
      <SidebarNav />
      <div className="portfolio-content">
        <div id="hero"><Hero /></div>
        <div id="about"><About /></div>
        <div id="journey"><Journey /></div>
        <div id="skills"><Skills /></div>
        <div id="strengths"><Strengths /></div>
        <div id="projects"><Projects /></div>
        <div id="achievements"><Achievements /></div>
        <div id="beyond"><Beyond /></div>
        <div id="goals"><Goals /></div>
        <div id="contact"><Contact /></div>
      </div>
    </div>
  )
}

export default App