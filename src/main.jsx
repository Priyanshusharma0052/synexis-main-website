import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './app.css'
import './motion.css'
import './legacy.css'
import './interior-style.css'
import './synexis-brand.css'
import './synexis-live.css'
import './capability-line.css'
import './software-lines.css'
import './technology-cards.css'
import './visible-cards.css'
import './premium-motion.css'

const services = [
  ['01', 'Web development', 'High-performing websites, e-commerce stores, WordPress builds and custom web applications.'],
  ['02', 'Digital marketing', 'SEO, Google Ads, content, conversion optimisation, analytics and clear reporting.'],
  ['03', 'Social media', 'Content systems and campaigns that make your brand worth following.'],
  ['04', 'Graphic design', 'Identity, social creative, presentations and visual systems that stay consistent.'],
  ['05', 'Application development', 'Mobile and web applications designed around real customer and team workflows.'],
  ['06', 'Lead generation', 'Landing pages and paid journeys designed to turn attention into useful enquiries.'],
]

const projects = [
  { type: 'Web development', title: 'A more confident digital first impression.', image: 'https://synexis.in/wp-content/uploads/2026/04/web-development-services.webp', copy: 'A conversion-led website experience built around the questions customers actually ask.' },
  { type: 'Digital marketing', title: 'From activity to a plan that compounds.', image: 'https://synexis.in/wp-content/uploads/2026/02/marketing-agency.webp', copy: 'A focused search and content direction that makes marketing easier to understand and improve.' },
  { type: 'Synexis brand', title: 'A visual system with something to say.', image: 'https://synexis.in/wp-content/uploads/2026/02/synexis-technologies-best-digital-marketing-company-in-dehradun.jpeg', copy: 'A distinctive identity and repeatable campaign language for a growing business.' },
]

const plans = {
  website: ['Website growth sprint', 'We map your customer journey, clarify your message, and create a conversion-focused website plan.'],
  visibility: ['Visibility growth plan', 'We identify practical search, content and campaign opportunities to bring the right people closer.'],
  brand: ['Brand clarity workshop', 'We define the positioning, visual language and content direction that makes you unmistakable.'],
}

const industries = [
  ['Education', '⌁'], ['Manufacturing', '▰'], ['Logistics', '⌬'], ['Technology', '◈'],
  ['Healthcare', '✚'], ['E-commerce', '▣'], ['Energy', '◉'], ['Government', '⌂'],
]

function App() {
  const [loading, setLoading] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const [plan, setPlan] = useState('website')
  const [selectedProject, setSelectedProject] = useState(null)
  const [progress, setProgress] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 900)
    const updateProgress = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0)
    }
    window.addEventListener('scroll', updateProgress, { passive: true })
    updateProgress()
    return () => { window.clearTimeout(timer); window.removeEventListener('scroll', updateProgress) }
  }, [])

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion) return undefined

    const targets = document.querySelectorAll('.intro, .services article, .legacy-proof, .detail-heading, .detail-grid article, .editorial-head, .project-card, .finder-grid, .steps article, .industries, .articles article, .faq > *, .contact-grid')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.14 })
    targets.forEach((target, index) => {
      target.classList.add('reveal-item')
      target.style.setProperty('--reveal-delay', `${Math.min((index % 4) * 70, 210)}ms`)
      observer.observe(target)
    })

    const spotlight = document.querySelector('.cursor-spotlight')
    const onPointerMove = (event) => {
      spotlight?.style.setProperty('--x', `${event.clientX}px`)
      spotlight?.style.setProperty('--y', `${event.clientY}px`)
    }
    window.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => { observer.disconnect(); window.removeEventListener('pointermove', onPointerMove) }
  }, [loading])

  useEffect(() => {
    const heroVideo = document.querySelector('.live-video video')
    if (!heroVideo) return undefined

    const startVideo = () => {
      heroVideo.muted = true
      heroVideo.play().catch(() => {
        // Browsers may wait until the first user gesture; the native autoplay
        // attribute remains in place and will retry when that happens.
      })
    }

    heroVideo.addEventListener('canplay', startVideo, { once: true })
    startVideo()
    return () => heroVideo.removeEventListener('canplay', startVideo)
  }, [loading])

  if (loading) return <div className="loader"><div className="loader-symbol">S</div><p>Synexis Technologies</p><span /></div>
  const [planTitle, planCopy] = plans[plan]

  return <><div className="cursor-spotlight" aria-hidden="true"/><div className="software-lines" aria-hidden="true"><span className="software-label label-one">SYSTEM / ONLINE</span><span className="software-label label-two">SYNC / 100%</span><i/><i/><i/><i/></div><div className="interior-lines" aria-hidden="true"><i/><i/><i/></div>
    <div className="progress" style={{ transform: `scaleX(${progress / 100})` }} />
    <header className="header"><a className="brand" href="#top"><i>S</i>synexis<span>.</span></a><button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>{menuOpen ? 'Close ×' : 'Menu +'}</button><nav className={menuOpen ? 'open' : ''}><a href="#services" onClick={() => setMenuOpen(false)}>Services</a><a href="#work" onClick={() => setMenuOpen(false)}>Work</a><a href="#insights" onClick={() => setMenuOpen(false)}>Insights</a><a className="button mini" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk ↗</a></nav></header>
    <main id="top">
      <section className="hero shell"><div className="hero-copy"><p className="eyebrow">DEHRADUN · INDIA · EVERYWHERE ONLINE</p><h1>Digital work that feels <em>human</em>—and performs.</h1><p>We help ambitious businesses turn their online presence into clearer stories, better experiences and dependable growth.</p><div className="actions"><a className="button" href="#contact">Start a conversation ↗</a><a className="underlink" href="#work">See our thinking ↓</a></div><small><b /> A thoughtful reply within one business day</small></div><div className="hero-image live-video"><video autoPlay muted loop playsInline poster="https://synexis.in/wp-content/uploads/2025/06/Display-picture-logo-scaled.jpg"><source src="https://synexis.in/wp-content/uploads/2025/05/earth-revolving-1.mp4" type="video/mp4"/></video><div className="hero-stat"><span>ORIGINAL SYNEXIS MOTION</span><strong>Ideas in<br/>constant motion.</strong></div><div className="hero-orbit" /></div></section>
      <section className="marquee marquee-single" aria-label="Synexis capabilities"><div className="marquee-track"><span>Strategy <b>✦</b> Design <b>✦</b> Technology <b>✦</b> Growth</span></div></section>
      <section className="intro shell"><div><p className="eyebrow">WHAT WE DO</p><h2>Your business has a story worth <em>finding.</em></h2></div><p>The right digital presence makes it easier for people to understand, trust and choose you. We bring strategy, design, technology and marketing together to make that happen.</p></section>
      <section className="services shell" id="services">{services.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p><a href="#contact">Explore this service <b>↗</b></a></article>)}</section>
      <section className="legacy-proof shell"><div className="legacy-image"><img src="https://synexis.in/wp-content/uploads/2026/06/synexis-technologies-about.webp" alt="Synexis Technologies brand visual"/><span>Synexis / rooted in real work</span></div><div className="legacy-copy"><p className="eyebrow">ROOTED IN REAL WORK</p><h2>A local team with a wider <em>view.</em></h2><p>Based at Doon IT Park in Dehradun, Synexis brings strategy, technology and creative thinking together for businesses that want their digital presence to work harder.</p><div className="technology-list"><img src="https://synexis.in/wp-content/uploads/2025/06/html-icons-syenxis-technologies.png" alt="HTML"/><img src="https://synexis.in/wp-content/uploads/2025/06/wordpress-icon-syenxis-technologies.png" alt="WordPress"/><img src="https://synexis.in/wp-content/uploads/2025/06/google-ads-syenxis-technologies.png" alt="Google Ads"/><img src="https://synexis.in/wp-content/uploads/2025/06/shopify-logo.png" alt="Shopify"/><img src="https://synexis.in/wp-content/uploads/2025/06/meta-synexis-technologies.png" alt="Meta"/><img src="https://synexis.in/wp-content/uploads/2025/06/ahref-logo-synexis-technologies.png" alt="Ahrefs"/></div><a className="underlink" href="#contact">Talk to the team ↗</a></div></section>
      <section className="brand-details"><div className="shell"><div className="detail-heading"><p className="eyebrow">THE SYNEXIS DIFFERENCE</p><h2>Serious about results.<br/><em>Easy</em> to work with.</h2></div><div className="detail-grid"><article><span>01</span><h3>Customized strategies</h3><p>Every solution is shaped around your business goals, audience and growth stage.</p></article><article><span>02</span><h3>Results-driven approach</h3><p>We focus on the outcomes that matter: quality leads, visibility and sustainable growth.</p></article><article><span>03</span><h3>Transparent communication</h3><p>Clear progress, direct answers and reporting that makes sense without the jargon.</p></article><article><span>04</span><h3>Modern tools, human thinking</h3><p>We use current technology and practical insight to give your business a useful edge.</p></article></div></div></section>
      <section className="editorial" id="work"><div className="shell editorial-head"><p className="eyebrow">SELECTED THINKING</p><h2>Design that earns attention.<br/><em>Thinking</em> that earns trust.</h2></div><div className="project-rail">{projects.map((project, index) => <button className="project-card" key={project.title} onClick={() => setSelectedProject(project)}><img src={project.image} alt=""/><span>0{index + 1} / {project.type}</span><h3>{project.title}</h3><b>View story ↗</b></button>)}</div></section>
      <section className="finder"><div className="shell finder-grid"><div><p className="eyebrow">FIND YOUR NEXT STEP</p><h2>What does your business need <em>most</em> right now?</h2><p>Choose the outcome that matters. We’ll point you toward a practical place to begin.</p></div><div className="finder-box"><div className="finder-tabs">{Object.keys(plans).map((key, index) => <button className={plan === key ? 'active' : ''} key={key} onClick={() => setPlan(key)}><span>0{index + 1}</span>{key === 'website' ? 'A website that converts' : key === 'visibility' ? 'More qualified visibility' : 'A stronger brand presence'}</button>)}</div><div className="finder-answer"><small>A GOOD STARTING POINT</small><h3>{planTitle}</h3><p>{planCopy}</p><a className="button" href="#contact">Discuss this direction ↗</a></div></div></div></section>
      <section className="process"><div className="shell"><p className="eyebrow">HOW WE WORK</p><h2>A simple process.<br/>No mysterious <em>middle.</em></h2><div className="steps">{[['01','Listen','We get close to your goals, challenges and customers.'],['02','Make a plan','We set priorities and agree what success looks like.'],['03','Build and launch','We create carefully and communicate clearly through delivery.'],['04','Learn and improve','We measure what matters and make the next move smarter.']].map(([n,t,c])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}</div></div></section>
      <section className="industries shell"><p className="eyebrow">INDUSTRIES WE SERVE</p><h2>We partner with every kind of industry to deliver the <em>best possible result.</em></h2><div className="industry-card-grid">{industries.map(([name, icon], index)=><article className="industry-card" key={name}><span className="industry-number">0{index + 1}</span><b className="industry-icon" aria-hidden="true">{icon}</b><h3>{name}</h3><p>Digital strategy designed around your business.</p></article>)}</div></section>
      <section className="insights shell" id="insights"><div className="section-title"><div><p className="eyebrow">FRESH THINKING</p><h2>Useful ideas, minus the <em>noise.</em></h2></div><a className="underlink" href="#contact">Read our insights ↗</a></div><div className="articles">{['How to build a digital presence that earns trust before the first call','Your website should make the next step feel obvious','Better marketing begins with clearer questions'].map((title,index)=><article className="insight-card" key={title}><span>{['Growth · 6 min','Web · 5 min','Strategy · 7 min'][index]}</span><h3>{title}</h3><a href="#contact">Read article <b>↗</b></a></article>)}</div></section>
      <section className="faq shell"><div><p className="eyebrow">QUESTIONS, ANSWERED</p><h2>Clear answers before we even <em>talk.</em></h2></div><div>{[['Do you redesign existing websites?','Yes. We review the current experience and rebuild it around modern design, mobile use, performance and search visibility.'],['How long does a website project take?','It depends on scope. A focused business website can take a few weeks; e-commerce sites and custom applications need more planning.'],['Will we own the finished website and code?','Yes. Once delivered, the website content, design and code belong to you.'],['Do you offer hosting and maintenance?','Yes. We can help keep the site secure, fast and reliably available.']].map(([q,a])=><details key={q}><summary>{q}<b>+</b></summary><p>{a}</p></details>)}</div></section>
      <section className="contact" id="contact"><div className="shell contact-grid"><div><p className="eyebrow">START HERE</p><h2>Tell us what you are trying to <em>change.</em></h2><p>Whether you need a clearer website, a more focused marketing plan, or simply a good conversation about what comes next—we would like to hear from you.</p><a href="tel:+918527397361">+91 85273 97361 ↗</a><a href="tel:+919557210583">+91 95572 10583 ↗</a><a href="mailto:synexistechnologies@gmail.com">synexistechnologies@gmail.com ↗</a></div><form onSubmit={(e)=>{e.preventDefault();setSubmitted(true)}}><label>Your name<input required placeholder="How should we call you?"/></label><label>Work email<input type="email" required placeholder="you@company.com"/></label><label>What can we help with?<select><option>Choose a starting point</option><option>Website development</option><option>Digital marketing</option><option>Brand & creative</option><option>Application development</option></select></label><label>Tell us a little more<textarea rows="3" placeholder="A goal, challenge or good idea is enough to start."/></label><button className="button">Send your note ↗</button>{submitted && <small className="success">Thank you—your note is ready to send. We’ll be in touch shortly.</small>}</form></div></section>
    </main><a className="floating" href="#contact">Let’s make<br/>something good <b>↗</b></a><footer><div className="shell"><a className="brand" href="#top"><i>S</i>synexis<span>.</span></a><p>Thoughtful digital work for businesses ready to move forward.</p><small>© {new Date().getFullYear()} Synexis Technologies</small></div></footer>
    {selectedProject && <div className="modal" role="dialog" aria-modal="true"><button className="modal-close" onClick={()=>setSelectedProject(null)}>×</button><img src={selectedProject.image} alt=""/><div><small>{selectedProject.type}</small><h2>{selectedProject.title}</h2><p>{selectedProject.copy}</p><a className="button" href="#contact" onClick={()=>setSelectedProject(null)}>Start a similar project ↗</a></div></div>}
  </>
}

createRoot(document.getElementById('root')).render(<App />)
