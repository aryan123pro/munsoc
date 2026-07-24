import { useEffect, useRef, useState } from 'react'
import profilePhoto from './assets/aryan-profile.png'
import cs50Certificate from '../CS50 CERTIFICATE.jpeg'
import cyberCertificate from '../CYBER CERTIFICATE.jpeg'
import './App.css'

const LINKEDIN_URL = 'https://www.linkedin.com/in/aryan-doifode-711345356/'
const GITHUB_URL = 'https://github.com/aryan123pro'

const projects = [
  {
    title: 'FutureRead',
    number: '01',
    summary:
      'An AI-powered spiritual guide that pairs tarot and palm-reading experiences with thoughtful, polished interaction design.',
    stack: ['Flask', 'GPT-4', 'GSAP', 'PostgreSQL'],
    highlightLabel: 'Watch walkthrough',
    highlightUrl: 'https://youtu.be/bWpEVO86TAdk',
    codeUrl: 'https://github.com/aryan123pro/FutureRead',
  },
  {
    title: 'Z-Lang',
    number: '02',
    summary:
      'A Gen-Z dictionary built as my CS50x final project, with a searchable public language library and a review flow for submitted slang.',
    stack: ['Flask', 'Python', 'SQLite', 'Responsive UI'],
    highlightLabel: 'Open live project',
    highlightUrl: 'https://z-lang.onrender.com',
    codeUrl: 'https://github.com/aryan123pro/Z-Lang',
  },
]

const newAgeMetrics = [
  { value: '6', label: 'courses managed' },
  { value: '16', label: 'active users' },
  { value: '16', label: 'course accesses' },
  { value: '₹1L+', label: 'course revenue' },
]

const chapters = [
  {
    eyebrow: '01 / My contribution to MUNSoc',
    title: 'How can I contribute to MUNSoc?',
    copy: 'How can a person Like me help MUNSoc reach one step Ahead of their Goal? First of all I do NOT BELEIVE IN Goals lets dive in deep',
    deliverables: [
      'Goal is target when acheived triggers our Brains Reward System',
      'I am not here interviewing to get rewarded. I am here to LEARN and to build a continous reward system for life',
      'I am ready to take upon the biggest tasks and work with them non stop until I get the result I acheive for example this website',
    ],
  },
  {
    eyebrow: '02 / Mumbai MUN',
    title: 'How can I be a Part MUMBAI MUN?',
    copy: 'I Beleive I have necessary skills that can act as a foundation to build big systems which can be used to handle and manage active participants due to the Leaarning Management System i built I aldready hold certain experiences prior hand',
    deliverables: [
      'I am able to spot vulnerabilities in a web application by looking at the code of a web application (in Flask back-end for now)'
    ],
  },
  {
    eyebrow: '03 / Why do I?',
    title: 'Why do I want to Join MUNSoc',
    copy: 'A wiseman once said that a person should know how to build or sell. If one knows both they are unstoppable.',
    deliverables: [
      'Wise words said by Naval Ravikant',
      'Personally I beleive this as management and sales are as essential as technology in a business',
      'MUNSoc provides and helps me to build a path where i learn effortless communication skills and technical skills as well!',
    ],
  },
  {
    eyebrow: '04 / What i want to work on',
    title: 'MUNSoc APPLICATION',
    copy: 'as MUNSoc is the only comitee who have their native application on app store and playstore.',
    deliverables: [
      'I want to help building it to the next level by learning and implementing',
      'I have got Ideas like adding agentic and generative AI to the application.',
    ],
  },
  {
    eyebrow: '05 / SDG',
    title: 'I as a person hold the responsibility to care for our community',
    copy: '',
    deliverables: [
      'This is a way to do what is meaningful for the soceity and the world',
      'To be held accountable on the actions of what people do and improve them 1% every day.',
    ],
  },
]

const proofCards = [
  'CS50x by Harvard',
  'Product Development Intern, Experiment Labs',
  'React, Tailwind, Node.js and Azure AI',
  'Flask, Supabase, PostgreSQL and Cloudinary',
]

const certificates = [
  {
    title: 'CS50x: Introduction to Computer Science',
    issuer: 'Harvard University',
    image: cs50Certificate,
  },
  {
    title: 'Introduction to Cyber Attacks',
    issuer: 'New York University',
    image: cyberCertificate,
  },
]

function App(){
  const [progress, setProgress] = useState(0)
  const [storyProgress, setStoryProgress] = useState(0)
  const storyRef = useRef(null)

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight
      setProgress(scrollable > 0 ? window.scrollY / scrollable : 0)

      if (storyRef.current) {
        const rect = storyRef.current.getBoundingClientRect()
        const travel = rect.height - window.innerHeight
        const raw = travel > 0 ? -rect.top / travel : 0
        setStoryProgress(Math.min(1, Math.max(0, raw)))
      }
    }

    updateProgress()
    window.addEventListener('scroll', updateProgress, { passive: true })

    return () => {
      window.removeEventListener('scroll', updateProgress)
    }
  }, [])

  const activeChapter = Math.min(
    chapters.length - 1,
    Math.floor(storyProgress * chapters.length),
  )
  const storyPercent = Math.round(storyProgress * 100)

  return (
    <main
      className="experience"
      style={{
        '--progress': progress,
      }}
    >
      <div className="progress-rail" aria-hidden="true">
        <span style={{ transform: `scaleY(${progress})` }}></span>
      </div>

      <section className="hero-product">
        <div className="ambient-grid" aria-hidden="true"></div>
        <div className="hero-copy">
          <p className="overline">MUNSoc Tech Department Interview</p>
          <h1>Aryan Doifode</h1>
          <p>
            Manifesting to Join MUNSoc<br />
            <b>MORE THAN JUST A SOCIETY,<br />
            NOTHING SHORT OF A FAMILY.</b>
          </p>
          <div className="hero-actions">
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="/aryan-doifode-resume.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
          </div>
        </div>

        <div className="portrait-product" aria-label="Aryan Doifode portrait">
          <div className="halo-ring"></div>
          <div className="photo-orbit">
            <img src={profilePhoto} alt="Aryan Doifode wearing a MUNSociety shirt" />
          </div>
        </div>

        <a className="scroll-hint" href="#story">
          Scroll
        </a>
      </section>

      <section
        className="product-scroll"
        id="story"
        ref={storyRef}
        style={{ '--story-progress': storyProgress }}
      >
       
        <div className="story-stage">
           <pre>
        
        
        
        
        
        
        
        
        
        
        
        </pre>
          <div className="story-visual" aria-hidden="true">
            <div className="munsoc-core">
              <span>MUNSoc</span>
              <strong>Tech</strong>
            </div>
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="orbit orbit-three"></div>
            <div className="story-module module-one">
              <span>Registrations</span>
            </div>
            <div className="story-module module-two">
              <span>Logic</span>
            </div>
            <div className="story-module module-three">
              <span>Building</span>
            </div>
            <div className="story-module module-four">
              <span>BackEnd</span>
            </div>
            <div className="story-progress">
              <span style={{ width: `${storyPercent}%` }}></span>
            </div>
          </div>

          <div className="chapter-stack">
            {chapters.map((chapter, index) => (
              <article
                className={`chapter ${index === activeChapter ? 'is-active' : ''}`}
                key={chapter.title}
                aria-hidden={index !== activeChapter}
              >
                <p className="overline">{chapter.eyebrow}</p>
                <h2>{chapter.title}</h2>
                <p>{chapter.copy}</p>
                <ul className="chapter-deliverables">
                  {chapter.deliverables.map((deliverable) => (
                    <li key={deliverable}>{deliverable}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-section">
        <p className="overline">Selected work</p>
        <h2>Projects with a point of view.</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-card-topline">
                <span>{project.number}</span>
                <span>Independent build</span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <ul className="project-stack" aria-label={`${project.title} tech stack`}>
                {project.stack.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="project-actions">
                <a href={project.highlightUrl} target="_blank" rel="noreferrer">
                  {project.highlightLabel}
                </a>
                <a href={project.codeUrl} target="_blank" rel="noreferrer">
                  View GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="recognition-section">
        <div>
          <p className="overline">Recognition</p>
          <h2>Trusted to build systems people use.</h2>
        </div>
        <article className="recognition-card">
          <p className="recognition-kicker">Commercial website</p>
          <h3>MSCHS Homes</h3>
          <p>
            I built a commercial website for MSCHS Homes and was paid a token
            of appreciation for the work. It gave me a real client brief,
            real feedback, and a live site to stand behind.
          </p>
          <a href="https://www.mschs.homes" target="_blank" rel="noreferrer">
            Visit mschs.homes
          </a>
        </article>
      </section>

      <section className="impact-section">
        <div className="impact-copy">
          <p className="overline">Client impact</p>
          <h2>Built around real courses, real learners, and real revenue.</h2>
          <p>
            For NewAge Aesthetics Institute, I built an institute management
            experience that supports course administration, learners, and
            progress tracking in one place.
          </p>
          <a
            href="https://www.newageaestheticsinstitute.com"
            target="_blank"
            rel="noreferrer"
          >
            Visit NewAge Aesthetics Institute
          </a>
        </div>
        <div className="impact-metrics" aria-label="NewAge Aesthetics Institute outcomes">
          {newAgeMetrics.map((metric) => (
            <div className="impact-metric" key={metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="achievement-section">
        <div className="achievement-copy">
          <p className="overline">Society achievement</p>
          <h2>Work that earned a place in my story.</h2>
          <p>
            I was awarded a token of appreciation by my society to build their portfolio website so Builders coming for redevelopment get a prior idea before joining society meetings and making it easy to communicate on problems.
          </p>
        </div>
        <div className="linkedin-embed">
          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7362168875188170753"
            height="985"
            width="504"
            frameBorder="0"
            allowFullScreen
            title="MUNSociety achievement on LinkedIn"
          ></iframe>
        </div>
      </section>

      <section className="certificates-section">
        <p className="overline">Learning in public</p>
        <h2>Credentials that support the work.</h2>
        <div className="certificate-grid">
          {certificates.map((certificate) => (
            <article className="certificate-card" key={certificate.title}>
              <img src={certificate.image} alt={`${certificate.title} certificate`} />
              <div>
                <p>{certificate.issuer}</p>
                <h3>{certificate.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="closing">
        <p className="overline">Final answer</p>
        <h2>I deserve a place in MUNSoc Tech because I can learn fast, build fast, and care about the product after it goes live.</h2>
        <div className="closing-actions">
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
            View LinkedIn
          </a>
          <a href="/aryan-doifode-resume.pdf" target="_blank" rel="noreferrer">
            Open Resume
          </a>
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            Browse GitHub
          </a>
        </div>
      </section>
    </main>
  )
}

export default App
