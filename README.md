# Personal Portfolio

High-performance, component-driven interactive developer portfolio built with React, Vite, Framer Motion, and Tailwind CSS to showcase technical architecture, professional milestones, and engineering projects with a polished editorial aesthetic.

## Overview

Designed from scratch as a high-impact developer portfolio optimized for recruiters. It prioritizes what matters most—immediate project visibility, robust technical problem framing, and fluid navigation—shining a spotlight on full-stack systems like *SafePassage* and *Haritha Connect*.

I architected the portfolio layout flow, engineered custom motion systems and responsive card designs, and configured complete CI/CD deployment pipelines.

## Key Features

* **Prioritized Project Showcase:** Features top-tier engineering projects right at the top of the viewport to capture recruiter interest within the initial 7-second window.
* **Architectural Problem Framing:** Every project card leads with a focused "Hard Problem" or "Core Challenge" callout highlighting deep technical decisions and system bottlenecks solved.
* **Interactive Component-Driven UI:** Built with modular React components, custom responsive grids, and high-contrast editorial typography.
* **Snappier Motion Systems:** Tuned Framer Motion entrance animations and scroll-tracking states for instantaneous, lag-free navigation.
* **Seamless Sidebar & Section Flow:** Synchronized scroll-spy navigation keeping users oriented across all nine portfolio sections.

## Tech Stack

* **Frontend:** React, Vite
* **Motion:** Framer Motion
* **Styling:** Tailwind CSS, Custom Editorial CSS
* **Deployment & Hosting:** Git, GitHub, Vercel CI/CD

## Project Structure

```text
sreethika-portfolio/
├── src/
│   ├── components/
│   │   ├── SidebarNav.jsx      # Synchronized scroll-spy navigation
│   │   ├── AnimatedSlide.jsx   # Optimized viewport entrance motion wrapper
│   │   ├── AnimatedCard.jsx    # Individual card animation wrapper
│   │   ├── Hero.jsx            # Introduction and primary CTAs
│   │   ├── Projects.jsx        # Curated project showcase with technical hooks
│   │   ├── Skills.jsx          # Contextual skill set display
│   │   ├── About.jsx           # Background and identity
│   │   ├── Journey.jsx         # Professional milestones and internships
│   │   ├── Strengths.jsx       # Core problem-solving attributes
│   │   ├── Achievements.jsx    # Certifications and recognitions
│   │   ├── Beyond.jsx          # Personal interests beyond the desk
│   │   ├── Goals.jsx           # Future technical objectives
│   │   └── Contact.jsx         # Professional contact channels
│   ├── App.jsx                 # Main layout structure and section ordering
│   ├── index.css               # Global styling and editorial theme rules
│   └── main.js / main.jsx      # React entry point
├── package.json
└── vite.config.js

```

## Local Setup

1. Clone the repository:
```bash
git clone https://github.com/Sr-2525/sreethika-portfolio.git
cd sreethika-portfolio

```


2. Install dependencies:
```bash
npm install

```


3. Run the development server:
```bash
npm run dev

```



## Notes

This portfolio is continuously refined to reflect current engineering milestones, clean component architecture, and modern full-stack competencies.
