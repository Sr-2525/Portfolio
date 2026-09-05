import { Routes, Route, useLocation } from 'react-router-dom'
import AnimatedSlide from './components/AnimatedSlide'
import Hero from './components/Hero'
import About from './components/About'
import Strengths from './components/Strengths'
import Contact from './components/Contact'
// ... import your other components as well

function App() {
  const location = useLocation()

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<AnimatedSlide variant="scaleFade"><Hero /></AnimatedSlide>} />
      <Route path="/about" element={<AnimatedSlide variant="slideLeft"><About /></AnimatedSlide>} />
      <Route path="/strengths" element={<AnimatedSlide variant="blurFade"><Strengths /></AnimatedSlide>} />
      <Route path="/contact" element={<AnimatedSlide variant="fadeSlide"><Contact /></AnimatedSlide>} />
    </Routes>
  )
}

export default App