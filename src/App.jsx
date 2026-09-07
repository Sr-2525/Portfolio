import SidebarNav from './components/SidebarNav'
import AnimatedSlide from './components/AnimatedSlide'
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
        <div id="hero"><AnimatedSlide variant="scaleFade"><Hero /></AnimatedSlide></div>
        <div id="about"><AnimatedSlide variant="slideLeft"><About /></AnimatedSlide></div>
        <div id="projects"><AnimatedSlide variant="slideLeft"><Projects /></AnimatedSlide></div>
        <div id="skills"><AnimatedSlide variant="blurFade"><Skills /></AnimatedSlide></div>
        <div id="journey"><AnimatedSlide variant="fadeSlide"><Journey /></AnimatedSlide></div>
        <div id="strengths"><AnimatedSlide variant="scaleFade"><Strengths /></AnimatedSlide></div>
        <div id="achievements"><AnimatedSlide variant="fadeSlide"><Achievements /></AnimatedSlide></div>
        <div id="beyond"><AnimatedSlide variant="blurFade"><Beyond /></AnimatedSlide></div>
        <div id="goals"><AnimatedSlide variant="scaleFade"><Goals /></AnimatedSlide></div>
        <div id="contact"><AnimatedSlide variant="fadeSlide"><Contact /></AnimatedSlide></div>
      </div>
    </div>
  )
}

export default App