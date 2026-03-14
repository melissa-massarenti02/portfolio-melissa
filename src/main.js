import './style.css'
import { Hero, About, Education, ExperienceSkills, Projects, Passions, Contact, Footer } from './components.js'
import { translations } from './i18n.js'

const app = document.querySelector('#app')
const langBtn = document.querySelector('#lang-toggle')

let currentLanguage = 'it'

const renderApp = () => {
  const t = translations[currentLanguage]

  // Update Nav
  document.querySelector('.nav-links').innerHTML = `
    <li><a href="#home" class="active">${t.nav.home}</a></li>
    <li><a href="#about">${t.nav.about}</a></li>
    <li><a href="#experience">${t.nav.experience}</a></li>
    <li><a href="#projects">${t.nav.projects}</a></li> <li><a href="#experience">${t.nav.experience}</a></li>
    <li><a href="#passions">${t.nav.passions}</a></li>
    <li><a href="#contact">${t.nav.contact}</a></li>
  `

  // Render Sections
  app.innerHTML = `
    ${Hero(t)}
    ${About(t)}
    ${Education(t)}
    ${ExperienceSkills(t)}
    ${Passions(t)}
    ${Contact(t)}
    ${Footer(t)}
  `

  langBtn.innerText = currentLanguage === 'it' ? 'EN' : 'IT'

  attachListeners()
}

const attachListeners = () => {
  // 1. Reveal Animations (Enhanced)
  const revealElements = document.querySelectorAll('[data-reveal]')
  const revealOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
      }
    })
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  })
  revealElements.forEach(el => revealOnScroll.observe(el))

  // 2. Custom Cursor Logic
  const cursor = document.querySelector('.custom-cursor')
  if (cursor) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    })

    const hoverables = document.querySelectorAll('a, button, .magnetic, .skill-category')
    hoverables.forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hover'))
      el.addEventListener('mouseleave', () => cursor.classList.remove('hover'))
    })
  }

  // 3. Magnetic Buttons
  const magneticEls = document.querySelectorAll('.magnetic')
  magneticEls.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const { left, top, width, height } = el.getBoundingClientRect()
      const x = (e.clientX - left - width / 2) * 0.35
      const y = (e.clientY - top - height / 2) * 0.35
      el.style.transform = `translate(${x}px, ${y}px)`
    })
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(0, 0)'
    })
  })

  // 6. Global Parallax Controller
  const root = document.documentElement
  window.addEventListener('mousemove', (e) => {
    // Standardize coordinates relative to center
    const x = (e.clientX - window.innerWidth / 2)
    const y = (e.clientY - window.innerHeight / 2)
    root.style.setProperty('--mx', `${x}px`)
    root.style.setProperty('--my', `${y}px`)
  })

  window.addEventListener('scroll', () => {
    root.style.setProperty('--scroll', `${window.scrollY}px`)
  })

  // 4. Header Scroll Effect
  const header = document.querySelector('header')
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled')
    } else {
      header.classList.remove('scrolled')
    }
  })

  // 5. Scroll Progress
  const progressBar = document.querySelector('.scroll-progress')
  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = (window.scrollY / totalHeight) * 100
    if (progressBar) progressBar.style.width = progress + '%'
  })
}

langBtn.addEventListener('click', () => {
  currentLanguage = currentLanguage === 'it' ? 'en' : 'it'
  renderApp()
})

// Initial Render
renderApp()

// Active Link Tracking (Global)
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section')
  const navLinks = document.querySelectorAll('.nav-links a')
  let current = ''
  sections.forEach(section => {
    const sectionTop = section.offsetTop
    if (pageYOffset >= (sectionTop - 200)) {
      current = section.getAttribute('id')
    }
  })
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href').includes(current))
  })
})
