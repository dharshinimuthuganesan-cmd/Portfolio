import { useEffect, useState } from "react";
import "./App.css";

function App() {
const [darkMode, setDarkMode] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);

useEffect(() => {
document.body.classList.toggle("dark", darkMode);
}, [darkMode]);

const projects = [
{
title: "DailyDesk",
icon: "📅",
description:
"A productivity application with calculator, to-do list, calendar, QR generator and notes.",
tech: ["React", "JavaScript", "CSS"],
github: "#",
demo: "#",
},
{
title: "GluGuard",
icon: "💧",
description:
"An Arduino-based IV glucose monitoring project that provides an alert when the glucose level becomes low.",
tech: ["Arduino", "Arduino IDE", "Embedded"],
github: "#",
demo: "#",
},
{
title: "Portfolio Website",
icon: "💻",
description:
"A responsive portfolio website created to showcase skills, education, projects and achievements.",
tech: ["React", "CSS", "JavaScript"],
github: "#",
demo: "#",
},
];

const skills = [
{ name: "HTML", percentage: 90 },
{ name: "CSS", percentage: 85 },
{ name: "JavaScript", percentage: 80 },
{ name: "React", percentage: 75 },
{ name: "Python", percentage: 70 },
{ name: "Git & GitHub", percentage: 80 },
];

const education = [
{
year: "2023 - 2027",
title: "B.E(Computer Science and Engineering)",
college: "Anna University",
description:
"Currently pursuing undergraduate education with an interest in programming, web development and technology.",
},
{
year: "2021 - 2023",
title: "Higher Secondary Education",
college: "Sri Ram Nallamani Higher secondary School",
description:
"Completed higher secondary education with an interest in computer science and mathematics.",
},
];

const certificates = [
"Full Stack Development Certification",
"UIUX Certification",
"Artificial Intelligence Certification",
"Git & GitHub Certification",
];

const closeMenu = () => {
setMenuOpen(false);
};

return ( <div className="app"> <header className="navbar"> <div className="container nav-container"> <a href="#home" className="logo">
DM<span>.</span> </a>


      <nav className={menuOpen ? "nav-links active" : "nav-links"}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#education" onClick={closeMenu}>Education</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>

      <div className="nav-actions">
        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>
    </div>
  </header>

  <main>
    <section className="hero section" id="home">
      <div className="hero-blur blur-one"></div>
      <div className="hero-blur blur-two"></div>

      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-tag">HELLO, I'M</p>

          <h1>
           <span>M</span>Dharshini 
          </h1>

          <h2>
            Frontend Developer &{" "}
            <span className="highlight">Tech Enthusiast</span>
          </h2>

          <p className="hero-description">
            I am a passionate student and aspiring developer who enjoys
            creating responsive, attractive and user-friendly websites
            and applications.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View Projects
            </a>

            <a href="/resume.pdf" download className="secondary-btn">
              Download Resume ↓
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/dharshinimuthuganesan-cmd"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/dharshini-m-92b446378"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>

            <a href="https://mail.google.com/mail/u/1/#inbox">
              Email
            </a>
          </div>
        </div>

        <div className="hero-image-area">
          <div className="image-background"></div>

          <div className="profile-wrapper">
            <img
              src="/profile.jpg"
              alt="Dharshini"
              className="profile-image"
            />

            <div className="experience-card">
              <span>🚀</span>

              <div>
                <strong>Developer</strong>
                <p>Always Learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-heading">
          <p>GET TO KNOW ME</p>
          <h2>
            About <span>Me</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="about-icon">👩‍💻</div>

            <h3>Who Am I?</h3>

            <p>
              I am a student with a strong interest in frontend
              development, programming and practical technology projects.
            </p>

            <p>
              I enjoy learning new technologies and turning ideas into
              useful applications with clean and responsive interfaces.
            </p>
          </div>

          <div className="info-grid">
            <div className="info-card">
              <span>📍</span>
              <p>Location</p>
              <h4>Tamil Nadu, India</h4>
            </div>

            <div className="info-card">
              <span>🎓</span>
              <p>Education</p>
              <h4>Undergraduate Student</h4>
            </div>

            <div className="info-card">
              <span>💼</span>
              <p>Role</p>
              <h4>Frontend Developer</h4>
            </div>

            <div className="info-card">
              <span>🌐</span>
              <p>Languages</p>
              <h4>English & Tamil</h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section education-section" id="education">
      <div className="container">
        <div className="section-heading">
          <p>MY JOURNEY</p>

          <h2>
            Education <span>& Learning</span>
          </h2>
        </div>

        <div className="timeline">
          {education.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-dot"></div>

              <div className="timeline-card">
                <span className="timeline-year">
                  {item.year}
                </span>

                <h3>{item.title}</h3>

                <h4>{item.college}</h4>

                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section skills-section" id="skills">
      <div className="container">
        <div className="section-heading">
          <p>WHAT I KNOW</p>

          <h2>
            Technical <span>Skills</span>
          </h2>
        </div>

        <div className="skills-container">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-top">
                <h3>{skill.name}</h3>
                <span>{skill.percentage}%</span>
              </div>

              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{
                    width: `${skill.percentage}%`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="soft-skills">
          <h3>Additional Skills</h3>

          <div className="skill-tags">
            <span>Problem Solving</span>
            <span>Communication</span>
            <span>Team Work</span>
            <span>Creativity</span>
            <span>Responsive Design</span>
            <span>UI Design</span>
            <span>Debugging</span>
            <span>Time Management</span>
          </div>
        </div>
      </div>
    </section>

    <section className="section project-section" id="projects">
      <div className="container">
        <div className="section-heading">
          <p>MY WORK</p>

          <h2>
            Featured <span>Projects</span>
          </h2>
        </div>

        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={index}>
              <div className="project-image">
                <span>{project.icon}</span>
              </div>

              <div className="project-content">
                <span className="project-number">
                  0{index + 1}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-list">
                  {project.tech.map((technology, techIndex) => (
                    <span key={techIndex}>
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="project-buttons">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo ↗
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="section certificate-section">
      <div className="container">
        <div className="section-heading">
          <p>CONTINUOUS LEARNING</p>

          <h2>
            My <span>Certifications</span>
          </h2>
        </div>

        <div className="certificate-grid">
          {certificates.map((certificate, index) => (
            <div className="certificate-card" key={index}>
              <div className="certificate-icon">
                🏆
              </div>

              <div>
                <p>Certificate</p>
                <h3>{certificate}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section achievement-section">
      <div className="container">
        <div className="section-heading">
          <p>MILESTONES</p>

          <h2>
            Achievements <span>& Activities</span>
          </h2>
        </div>

        <div className="achievement-grid">
          <div className="achievement-card">
            <span>🚀</span>
            <h3>Project Development</h3>
            <p>
              Developed practical projects using React and Arduino.
            </p>
          </div>

          <div className="achievement-card">
            <span>💻</span>
            <h3>Web Development</h3>
            <p>
              Built responsive websites using modern web technologies.
            </p>
          </div>

          <div className="achievement-card">
            <span>📚</span>
            <h3>Continuous Learning</h3>
            <p>
              Regularly learning programming tools and technologies.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="section contact-section" id="contact">
      <div className="container">
        <div className="section-heading">
          <p>LET'S CONNECT</p>

          <h2>
            Contact <span>Me</span>
          </h2>
        </div>

        <div className="contact-container">
          <div className="contact-info">
            <h3>
              Let's build something great together.
            </h3>

            <p>
              I am interested in internships, learning opportunities,
              collaborations and exciting development projects.
            </p>

            <div className="contact-item">
              <span>✉️</span>

              <div>
                <p>Email</p>

                <a href="https://mail.google.com/mail/u/1/#inbox">
                  dharshinimuthuganesan@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-item">
              <span>📱</span>

              <div>
                <p>Phone</p>

                <a href="6381489131">
                  +91 6381489131
                </a>
              </div>
            </div>

            <div className="contact-item">
              <span>📍</span>

              <div>
                <p>Location</p>
                <h4>Tamil Nadu, India</h4>
              </div>
            </div>
          </div>

          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you! Your message form is ready.");
            }}
          >
            <div className="input-group">
              <label>Name</label>

              <input
                type="text"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="input-group">
              <label>Email</label>

              <input
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="input-group">
              <label>Subject</label>

              <input
                type="text"
                placeholder="Enter subject"
                required
              />
            </div>

            <div className="input-group">
              <label>Message</label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                required
              ></textarea>
            </div>

            <button
              className="primary-btn submit-btn"
              type="submit"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  </main>

  <footer className="footer">
    <div className="container footer-container">
      <div>
        <a href="#home" className="logo">
          MD<span>.</span>
        </a>

        <p>
          Designed & developed with ❤️ by M.Dharshini.
        </p>
      </div>

      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <a href="#home" className="top-btn">
        ↑
      </a>
    </div>

    <p className="copyright">
      © {new Date().getFullYear()} M.Dharshini. All rights reserved.
    </p>
  </footer>
</div>

);
}

export default App;