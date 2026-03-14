export const Hero = (t) => `
  <section id="home" class="hero">
    <div class="scroll-progress"></div>
    <div class="custom-cursor"></div>
    <div class="container">
      <div class="hero-content" data-reveal="left">
        <span class="hero-pretitle">${t.hero.pretitle}</span>
        <h1>${t.hero.title}</h1>
        <p>${t.hero.description}</p>
        <div class="hero-cta">
          <a href="#experience" class="btn btn-primary magnetic">${t.hero.cta}</a>
        </div>
      </div>
    </div>
  </section>
`;

export const About = (t) => `
  <section id="about" class="section section-about">
    <div class="container">
      <h2 class="section-title" data-reveal>${t.about.title}</h2>
      <div class="about-top">
        <div class="about-image" data-reveal="zoom">
          <img src="${import.meta.env.BASE_URL}assets/melissa.jpg" alt="Melissa Massarenti">
        </div>
        <div class="languages-box glass-card" data-reveal="right">
          <h3>${t.about.langTitle}</h3>
          <ul class="lang-list custom-list">
            <li><strong>Italiano:</strong> ${t.about.it}</li>
            <li><strong>Inglese:</strong> ${t.about.en}</li>
            <li><strong>Francese:</strong> ${t.about.fr}</li>
          </ul>
        </div>
      </div>
      <div class="about-text" data-reveal>
        <p>${t.about.text}</p>
      </div>
    </div>
  </section>
`;

export const Education = (t) => `
  <section id="education" class="section">
    <div class="container">
      <h2 class="section-title" data-reveal>${t.education.title}</h2>
      <div class="timeline">
        ${t.education.items.map((item) => `
          <div class="timeline-item" data-reveal="left">
            <div class="edu-logo-box">
              <img src="${import.meta.env.BASE_URL}assets/${item.logo}" alt="Logo" class="edu-logo">
            </div>
            <div class="edu-content">
              <span class="date">${item.date}</span>
              <h3>${item.title}</h3>
              <p class="institution">${item.institution}</p>
              <p class="details">${item.details}</p>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>
`;

export const ExperienceSkills = (t) => `
  <section id="experience" class="section">
    <div class="container">
      <h2 class="section-title" data-reveal>${t.skills.title}</h2>
      <div class="skills-grid">
        <div class="skill-category glass-card" data-reveal="zoom">
          <h3>Web & CMS</h3>
          <ul class="custom-list">
            <li>HTML5 / CSS3 / JavaScript</li>
            <li>PHP / J-Query / Angular</li>
            <li>Bootstrap / WordPress</li>
          </ul>
        </div>
        <div class="skill-category glass-card" data-reveal="zoom">
          <h3>Software & Data</h3>
          <ul class="custom-list">
            <li>Python / Java</li>
            <li>C / C++</li>
            <li>SQL / MySQL / Git</li>
          </ul>
        </div>
        <div class="skill-category glass-card" data-reveal="zoom">
          <h3>Hardware & Systems</h3>
          <ul class="custom-list">
            <li>Arduino / IoT</li>
            <li>Linux / Virtual Machines</li>
            <li>Wireshark / Network Engineering</li>
          </ul>
        </div>
      </div>

      <div class="logo-slider" data-reveal>
        <div class="logo-track">
          <!-- Slide duplicates for infinite scroll -->
          <div class="slide"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5"></div>
          <div class="slide"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3"></div>
          <div class="slide"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS"></div>
          <div class="slide"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python"></div>
          <div class="slide"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java"></div>
          <div class="slide"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git"></div>
          <div class="slide"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" alt="WordPress"></div>
          <div class="slide"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" alt="Arduino"></div>
          <div class="slide"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux"></div>
          <div class="slide"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP"></div>
          
          <div class="slide"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML5"></div>
          <div class="slide"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS3"></div>
          <div class="slide"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS"></div>
          <div class="slide"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python"></div>
          <div class="slide"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java"></div>
          <div class="slide"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" alt="Git"></div>
          <div class="slide"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" alt="WordPress"></div>
          <div class="slide"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" alt="Arduino"></div>
          <div class="slide"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux"></div>
          <div class="slide"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" alt="PHP"></div>
        </div>
      </div>
    </div>
  </section>
`;

export const Projects = (t) => {
  // Accediamo ai dati dentro skills come hai impostato in i18n.js
  const data = t.skills; 

  return `
    <section id="projects" class="section container">
      <h2 class="section-title" data-reveal>${data.projectsTitle}</h2>
      <p style="margin-bottom: 2.5rem; color: var(--text-muted); max-width: 800px;" data-reveal>
        ${data.projectsIntro}
      </p>

      <div class="projects-grid">
        ${data.projects.map(project => `
          <div class="glass-card project-card" data-reveal="zoom">
            <div class="project-content">
              <span class="project-status-badge">${project.status}</span>
              <h3 style="margin-top: 10px; margin-bottom: 15px;">${project.title}</h3>
              <p style="font-size: 0.95rem; margin-bottom: 20px;">${project.description}</p>
              <div class="project-tags">
                ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
              </div>
            </div>
            <p class="project-details-text" style="margin-top: auto; padding-top: 20px; font-size: 0.85rem; opacity: 0.8;">
              ${project.details}
            </p>
          </div>
        `).join('')}
      </div>
    </section>
  `;
};

export const Passions = (t) => `
  <section id="passions" class="section section-passions">
    <div class="container">
      <div class="paddock-header" data-reveal>
        <h2 class="section-title">${t.passions.title}</h2>
        <img src="${import.meta.env.BASE_URL}assets/aci-logo.png" alt="ACI Sport Logo" class="aci-logo">
      </div>
      
      <div class="official-intro">
        <div class="official-grid" style="margin-bottom: 60px;">
          <div class="official-image" data-reveal="left">
            <img src="${import.meta.env.BASE_URL}assets/rally3.jpg" alt="Melissa Official">
          </div>
          <div class="official-text" data-reveal="right">
            <h3 class="accent-text" style="font-size: 1.8rem; margin-bottom: 20px;">${t.passions.storyTitle}</h3>
            <p>${t.passions.storyText}</p>
          </div>
        </div>
      </div>

      <div class="passions-details-grid" style="margin-bottom: 60px;">
        <div class="passions-column glass-card" data-reveal="left">
          <h3 class="accent-text">${t.passions.licensesTitle}</h3>
          <div class="paddock-timeline">
            ${t.passions.licenses.map(lic => `
              <div class="p-timeline-item">
                <span class="p-date">${lic.date}</span>
                <h4>${lic.title}</h4>
              </div>
            `).join('')}
          </div>
        </div>
        
        <div class="passions-column glass-card" data-reveal="right">
          <h3 class="accent-text">${t.passions.competitionsTitle}</h3>
          <ul class="custom-list">
            ${t.passions.competitions.map(comp => `<li>${comp}</li>`).join('')}
          </ul>
        </div>
      </div>

      <div class="management-section glass-card" data-reveal style="margin-bottom: 60px;">
        <h3 class="accent-text" style="font-size: 1.6rem; margin-bottom: 10px;">${t.passions.management.title}</h3>
        <h4 style="font-size: 1.2rem; margin-bottom: 5px;">${t.passions.management.role}</h4>
        <span class="p-date" style="margin-bottom: 20px;">${t.passions.management.period}</span>
        
        <p style="margin-bottom: 30px;">${t.passions.management.text}</p>
        
        <h4 style="margin-bottom: 15px;">${t.passions.management.responsibilitiesTitle}</h4>
        <ul class="custom-list">
          ${t.passions.management.points.map(point => `<li>${point}</li>`).join('')}
        </ul>
      </div>

      <div class="race-slider" data-reveal="zoom">
        <div class="race-track">
          <div class="race-item"><img src="${import.meta.env.BASE_URL}assets/rally2.jpg" alt="Rally Action 1"></div>
          <div class="race-item"><img src="${import.meta.env.BASE_URL}assets/gara.jpg" alt="Melissa Work"></div>
          <div class="race-item"><img src="${import.meta.env.BASE_URL}assets/rally1.jpg" alt="Rally Action 2"></div>
          <div class="race-item"><img src="${import.meta.env.BASE_URL}assets/race4.jpg" alt="Rally Action 3"></div>
          <div class="race-item"><img src="${import.meta.env.BASE_URL}assets/race5.jpg" alt="In action"></div>
          <div class="race-item"><img src="${import.meta.env.BASE_URL}assets/race6.jpg" alt="Rally Action 4"></div>
          <!-- Duplicates -->
          <div class="race-item"><img src="${import.meta.env.BASE_URL}assets/rally2.jpg" alt="Rally Action 1"></div>
          <div class="race-item"><img src="${import.meta.env.BASE_URL}assets/gara.jpg" alt="Melissa Work"></div>
          <div class="race-item"><img src="${import.meta.env.BASE_URL}assets/rally1.jpg" alt="Rally Action 2"></div>
          <div class="race-item"><img src="${import.meta.env.BASE_URL}assets/race4.jpg" alt="Rally Action 3"></div>
          <div class="race-item"><img src="${import.meta.env.BASE_URL}assets/race5.jpg" alt="In action"></div>
          <div class="race-item"><img src="${import.meta.env.BASE_URL}assets/race6.jpg" alt="Rally Action 4"></div>
        </div>
      </div>
    </div>
  </section>
`;

export const Contact = (t) => `
  <section id="contact" class="section section-contact">
    <div class="container">
      <h2 class="section-title" data-reveal>${t.contact.title}</h2>
      <div class="contact-grid">
        <div class="contact-info" data-reveal="left">
          <p>${t.contact.text}</p>
          <a href="mailto:massti2002@gmail.com" class="contact-email magnetic">massti2002@gmail.com</a>
          
          <div class="social-links">
            <a href="https://www.facebook.com/melissa.massarenti" target="_blank" class="social-icon magnetic" aria-label="Facebook">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg" alt="Facebook">
            </a>
            <a href="https://instagram.com/meli_massa02" target="_blank" class="social-icon magnetic" aria-label="Instagram">
              <img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg" alt="Instagram" class="icon-instagram">
            </a>
            <a href="https://www.linkedin.com/in/melissa-massarenti-aa73a7233/" target="_blank" class="social-icon magnetic" aria-label="LinkedIn">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn">
            </a>
            <a href="https://github.com/melissa-massarenti02" target="_blank" class="social-icon magnetic" aria-label="GitHub">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub">
            </a>
          </div>
        </div>
        <form class="contact-form" id="contact-form" data-reveal="right">
          <div class="form-group">
            <input type="text" name="name" placeholder="${t.contact.form.name}" required>
          </div>
          <div class="form-group">
            <input type="email" name="email" placeholder="${t.contact.form.email}" required>
          </div>
          <div class="form-group">
            <textarea name="message" placeholder="${t.contact.form.message}" rows="5" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary magnetic">${t.contact.form.submit}</button>
        </form>
      </div>
    </div>
  </section>
`;

export const Footer = (t) => `
  <footer class="footer">
    <div class="container">
      <p class="footer-text">${t.footer.text}</p>
    </div>
  </footer>
`;

