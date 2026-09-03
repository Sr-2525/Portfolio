import { useState, useEffect } from 'react'

const navItems = [
  { id: 'hero', label: 'Cover' },
  { id: 'about', label: 'Who I Am' },
  { id: 'journey', label: 'My Journey' },
  { id: 'skills', label: 'My Skill Set' },
  { id: 'strengths', label: 'My Strengths' },
  { id: 'projects', label: 'Recent Work' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'beyond', label: 'Beyond the Desk' },
  { id: 'goals', label: 'What I\'s Next' },
  { id: 'contact', label: 'Let\'s Connect' },
]

function SidebarNav() {
  const [activeId, setActiveId] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveId(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <aside className="portfolio-sidebar">
      <div className="sidebar-header">
        <h2>Sreethika R.</h2>
        <p>Software Engineer</p>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`nav-item ${activeId === item.id ? 'active' : ''}`}
          >
            {item.label}
          </button>
        ))}
      </nav>

      <div className="sidebar-footer">
        <span>© 2026 Portfolio</span>
      </div>
    </aside>
  )
}

export default SidebarNav