import React, { useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import NewHome from './NewHome'
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
import './media-fallback.css'
import './studio-experience.css'
import './signal-system.css'
import './cinematic-direction.css'

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

const disciplines = [
  ['S', 'Strategy', 'A clear direction before a single screen is designed.'],
  ['C', 'Creative', 'Brand systems and content that give ideas a memorable shape.'],
  ['T', 'Technology', 'Fast, reliable builds that work beautifully in real life.'],
  ['G', 'Growth', 'Search, campaigns and measurement made useful and accountable.'],
]

const outcomes = [
  ['01', 'Discover', 'Find the clearest opportunity in your customer journey.'],
  ['02', 'Design', 'Turn it into a compelling, usable digital experience.'],
  ['03', 'Deploy', 'Launch with strong foundations for speed and visibility.'],
  ['04', 'Develop', 'Learn from real behaviour and keep moving forward.'],
]

const storyChapters = [
  ['01', 'See the signal', 'We start with the real questions: who are you trying to reach, what slows them down, and what would make the next step feel obvious?'],
  ['02', 'Shape the system', 'We turn insight into a connected website, brand, campaign or application—where every decision has a job to do.'],
  ['03', 'Keep the momentum', 'After launch, we measure the right behaviour, learn quickly and improve the work with purpose.'],
]

const deliverables = [
  ['Web experiences', 'Strategy, UX/UI, conversion pages, e-commerce, content structure and high-performance builds.'],
  ['Growth systems', 'Search strategy, paid campaigns, landing pages, analytics, reporting and lead journeys.'],
  ['Brand presence', 'Positioning, identity, campaign creative, social content and clear communication systems.'],
]

function SignalField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return undefined
    const pointer = { x: -999, y: -999 }
    const dots = Array.from({ length: 54 }, (_, index) => ({
      x: (index * 73 % 1000) / 1000,
      y: (index * 149 % 1000) / 1000,
      speed: 0.00015 + (index % 7) * 0.00004,
      size: 1.4 + (index % 4) * 0.55,
    }))
    let frame = 0
    let animation = 0
    const draw = () => {
      const rect = canvas.getBoundingClientRect()
      const ratio = Math.min(window.devicePixelRatio || 1, 2)
      const width = Math.max(1, rect.width)
      const height = Math.max(1, rect.height)
      if (canvas.width !== width * ratio || canvas.height !== height * ratio) {
        canvas.width = width * ratio
        canvas.height = height * ratio
        context.setTransform(ratio, 0, 0, ratio, 0, 0)
      }
      frame += 1
      context.clearRect(0, 0, width, height)
      const glow = context.createRadialGradient(width * .68, height * .4, 0, width * .68, height * .4, width * .72)
      glow.addColorStop(0, 'rgba(65, 123, 255, .25)')
      glow.addColorStop(.45, 'rgba(111, 69, 255, .12)')
      glow.addColorStop(1, 'rgba(1, 3, 21, 0)')
      context.fillStyle = glow
      context.fillRect(0, 0, width, height)
      const points = dots.map((dot, index) => {
        const time = frame * dot.speed
        return { x: ((dot.x + time + Math.sin(time * 8 + index) * .025) % 1) * width, y: ((dot.y + Math.cos(time * 7 + index) * .025 + 1) % 1) * height, size: dot.size, index }
      })
      points.forEach((point, index) => {
        for (let next = index + 1; next < points.length; next += 1) {
          const other = points[next]
          const distance = Math.hypot(point.x - other.x, point.y - other.y)
          if (distance < width * .145) {
            context.strokeStyle = `rgba(144, 116, 255, ${.2 * (1 - distance / (width * .145))})`
            context.lineWidth = .7
            context.beginPath(); context.moveTo(point.x, point.y); context.lineTo(other.x, other.y); context.stroke()
          }
        }
        const pull = Math.hypot(point.x - pointer.x, point.y - pointer.y)
        context.fillStyle = pull < 120 ? '#c5ff8c' : (point.index % 9 === 0 ? '#b291ff' : '#75a9ff')
        context.beginPath(); context.arc(point.x, point.y, pull < 120 ? point.size * 1.9 : point.size, 0, Math.PI * 2); context.fill()
      })
      const scanX = (frame % 520) / 520 * (width + 140) - 70
      context.fillStyle = 'rgba(190, 255, 132, .07)'
      context.fillRect(scanX, 0, 2, height)
      animation = window.requestAnimationFrame(draw)
    }
    const move = (event) => { const box = canvas.getBoundingClientRect(); pointer.x = event.clientX - box.left; pointer.y = event.clientY - box.top }
    canvas.addEventListener('pointermove', move)
    canvas.addEventListener('pointerleave', () => { pointer.x = -999; pointer.y = -999 })
    animation = window.requestAnimationFrame(draw)
    return () => { window.cancelAnimationFrame(animation); canvas.removeEventListener('pointermove', move) }
  }, [])

  return <canvas ref={canvasRef} className="signal-field" aria-label="Interactive Synexis signal visual" role="img" />
}

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

  if (loading) return <div className="loader"><div className="loader-symbol">S</div><p>Synexis Technologies</p><span /></div>
  const [planTitle, planCopy] = plans[plan]

  return <><div className="cursor-spotlight" aria-hidden="true"/><div className="software-lines" aria-hidden="true"><span className="software-label label-one">SYSTEM / ONLINE</span><span className="software-label label-two">SYNC / 100%</span><i/><i/><i/><i/></div><div className="interior-lines" aria-hidden="true"><i/><i/><i/></div>
    <div className="progress" style={{ transform: `scaleX(${progress / 100})` }} />
    <header className="header"><a className="brand" href="#top"><i>S</i>synexis<span>.</span></a><button className="menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>{menuOpen ? 'Close ×' : 'Menu +'}</button><nav className={menuOpen ? 'open' : ''}><div className="nav-dropdown"><button type="button">Services <b>+</b></button><div className="nav-panel">{services.map(([, title]) => <a href="#services" onClick={() => setMenuOpen(false)} key={title}>{title}<span>↗</span></a>)}</div></div><a href="#about" onClick={() => setMenuOpen(false)}>About</a><a href="#work" onClick={() => setMenuOpen(false)}>Work</a><a href="#process" onClick={() => setMenuOpen(false)}>Process</a><a href="#insights" onClick={() => setMenuOpen(false)}>Insights</a><a className="button mini" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk ↗</a></nav></header>
    <main id="top">
      <section className="hero shell signal-hero"><div className="hero-copy"><p className="eyebrow">DEHRADUN · INDIA · EVERYWHERE ONLINE</p><h1>Digital work that <em>moves</em> like your business does.</h1><p>Synexis turns complex ideas into clear, high-performing digital systems—built to be noticed, understood and acted on.</p><div className="actions"><a className="button" href="#contact">Start a conversation ↗</a><a className="underlink" href="#work">Enter the signal ↓</a></div><small><b /> A thoughtful reply within one business day</small></div><div className="hero-image live-video signal-stage"><SignalField/><div className="signal-tag tag-one">STRATEGY / ONLINE</div><div className="signal-tag tag-two">CREATIVE / LINKED</div><div className="signal-tag tag-three">TECH / ACTIVE</div><div className="hero-stat"><span>LIVE SYNEXIS SIGNAL</span><strong>Ideas,<br/>in motion.</strong></div><div className="scroll-film-ui" aria-hidden="true"><span>INTERACTIVE SIGNAL FIELD</span><i/><b>Move to explore</b></div><div className="hero-orbit" /></div></section>
      <section className="marquee marquee-single" aria-label="Synexis capabilities"><div className="marquee-track"><span>Strategy <b>✦</b> Design <b>✦</b> Technology <b>✦</b> Growth</span></div></section>
      <section className="intro shell"><div><p className="eyebrow">WHAT WE DO</p><h2>Your business has a story worth <em>finding.</em></h2></div><p>The right digital presence makes it easier for people to understand, trust and choose you. We bring strategy, design, technology and marketing together to make that happen.</p></section>
      <section className="experience-shell" aria-label="How Synexis brings expertise together"><div className="shell experience-grid"><div className="experience-intro"><p className="eyebrow">ONE CONNECTED PROCESS</p><h2>Different skills.<br/><em>One</em> clear outcome.</h2><p>Every specialist works around the same customer journey. That means better decisions, smoother execution and digital work that feels connected from the first click.</p><a className="underlink" href="#contact">Bring your next idea to the table ↗</a></div><div className="discipline-orbit">{disciplines.map(([initial, title, copy], index) => <article className={`discipline discipline-${index + 1}`} key={title}><span>{initial}</span><div><small>0{index + 1}</small><h3>{title}</h3><p>{copy}</p></div></article>)}<div className="orbit-core"><b>ST</b><span>SYNCED<br/>THINKING</span></div><i className="orbit-ring ring-one"/><i className="orbit-ring ring-two"/></div></div></section>
      <section className="impact-strip"><div className="impact-track"><span>Clear strategy</span><b>→</b><span>Built with care</span><b>→</b><span>Ready to grow</span><b>→</b><span>Made for people</span><b>→</b><span>Clear strategy</span><b>→</b></div></section>
      <section className="services shell motion-section" id="services">{services.map(([number, title, copy]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p><a href="#contact">Explore this service <b>↗</b></a></article>)}</section>
      <section className="legacy-proof shell"><div className="legacy-image"><img src="https://synexis.in/wp-content/uploads/2026/06/synexis-technologies-about.webp" alt="Synexis Technologies brand visual"/><span>Synexis / rooted in real work</span></div><div className="legacy-copy"><p className="eyebrow">ROOTED IN REAL WORK</p><h2>A local team with a wider <em>view.</em></h2><p>Based at Doon IT Park in Dehradun, Synexis brings strategy, technology and creative thinking together for businesses that want their digital presence to work harder.</p><div className="technology-list"><span><img src="https://synexis.in/wp-content/uploads/2025/06/html-icons-syenxis-technologies.png" alt="HTML"/><b>HTML</b></span><span><img src="https://synexis.in/wp-content/uploads/2025/06/wordpress-icon-syenxis-technologies.png" alt="WordPress"/><b>WordPress</b></span><span><img src="https://synexis.in/wp-content/uploads/2025/06/google-ads-syenxis-technologies.png" alt="Google Ads"/><b>Google Ads</b></span><span><img src="https://synexis.in/wp-content/uploads/2025/06/shopify-logo.png" alt="Shopify"/><b>Shopify</b></span><span><img src="https://synexis.in/wp-content/uploads/2025/06/meta-synexis-technologies.png" alt="Meta"/><b>Meta</b></span><span><img src="https://synexis.in/wp-content/uploads/2025/06/ahref-logo-synexis-technologies.png" alt="Ahrefs"/><b>Ahrefs</b></span></div><a className="underlink" href="#contact">Talk to the team ↗</a></div></section>
      <section className="brand-details"><div className="shell"><div className="detail-heading"><p className="eyebrow">THE SYNEXIS DIFFERENCE</p><h2>Serious about results.<br/><em>Easy</em> to work with.</h2></div><div className="detail-grid"><article><span>01</span><h3>Customized strategies</h3><p>Every solution is shaped around your business goals, audience and growth stage.</p></article><article><span>02</span><h3>Results-driven approach</h3><p>We focus on the outcomes that matter: quality leads, visibility and sustainable growth.</p></article><article><span>03</span><h3>Transparent communication</h3><p>Clear progress, direct answers and reporting that makes sense without the jargon.</p></article><article><span>04</span><h3>Modern tools, human thinking</h3><p>We use current technology and practical insight to give your business a useful edge.</p></article></div></div></section>
      <section className="command-center shell motion-section"><div className="command-copy"><p className="eyebrow">YOUR GROWTH, MADE VISIBLE</p><h2>One clearer view of what is <em>working.</em></h2><p>Good digital work should never feel like a black box. Every Synexis project is designed around an understandable path from attention to action—and a practical way to improve it.</p><ul>{['A website with a job to do','Campaigns connected to customer intent','Reporting made for decisions, not dashboards'].map((item) => <li key={item}><b>✦</b>{item}</li>)}</ul><a href="#contact" className="underlink">Build your growth system ↗</a></div><div className="signal-console" aria-label="Illustration of a Synexis growth dashboard"><div className="console-top"><span><b/> System active</span><small>LIVE / DEHRADUN</small></div><div className="console-metrics"><div><small>Qualified signals</small><strong>+38<span>%</span></strong><i/></div><div><small>Experience score</small><strong>94<span>/100</span></strong><i/></div></div><div className="console-chart"><span>Growth signal</span><svg viewBox="0 0 540 180" role="img" aria-label="Rising growth line"><defs><linearGradient id="signalGradient" x1="0" x2="1"><stop stopColor="#8356ff"/><stop offset="1" stopColor="#bcff83"/></linearGradient></defs><path d="M0 153 C55 136 71 142 116 116 S185 122 224 82 S290 109 336 62 S410 80 450 38 S505 51 540 10" fill="none" stroke="url(#signalGradient)" strokeWidth="5"/><path d="M0 153 C55 136 71 142 116 116 S185 122 224 82 S290 109 336 62 S410 80 450 38 S505 51 540 10 V180 H0Z" fill="url(#signalGradient)" opacity=".12"/></svg><b className="chart-beacon"/></div><div className="console-feed"><span>01 / Strategy aligned</span><span>02 / Experience launched</span><span>03 / Insight received</span></div></div></section>
      <section className="outcome-path motion-section"><div className="shell"><div className="path-heading"><p className="eyebrow">FROM IDEA TO IMPACT</p><h2>A better system for making <em>progress.</em></h2><p>We bring the right disciplines together at the right moment, so your project stays focused from the first conversation to the next opportunity.</p></div><div className="outcome-grid">{outcomes.map(([number, title, copy]) => <article key={number}><span>{number}</span><i>↘</i><h3>{title}</h3><p>{copy}</p></article>)}</div></div></section>
      <section className="storyline"><div className="shell"><div className="storyline-intro"><p className="eyebrow">THE SYNEXIS WAY</p><h2>Less noise. More <em>forward</em> motion.</h2><p>Digital work is often presented as a list of deliverables. We see it as one connected story: understand the opportunity, make the right thing, then make it better.</p></div><div className="chapter-list">{storyChapters.map(([number, title, copy]) => <article key={number}><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div><b>↘</b></article>)}</div></div></section>
      <section className="deliverable-suite shell"><div className="suite-heading"><p className="eyebrow">WHAT ACTUALLY SHIPS</p><h2>Built around the work your business needs <em>next.</em></h2></div><div className="deliverable-grid">{deliverables.map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><div className="suite-icon">{['⌘', '↗', '✦'][index]}</div><h3>{title}</h3><p>{copy}</p><a href="#contact">Explore the approach <b>↗</b></a></article>)}</div><p className="suite-note"><b>●</b> One accountable team across strategy, creative, technology and growth.</p></section>
      <section className="editorial" id="work"><div className="shell editorial-head"><p className="eyebrow">SELECTED THINKING</p><h2>Design that earns attention.<br/><em>Thinking</em> that earns trust.</h2></div><div className="project-rail">{projects.map((project, index) => <button className="project-card" key={project.title} onClick={() => setSelectedProject(project)}><img src={project.image} alt=""/><span>0{index + 1} / {project.type}</span><h3>{project.title}</h3><b>View story ↗</b></button>)}</div></section>
      <section className="finder"><div className="shell finder-grid"><div><p className="eyebrow">FIND YOUR NEXT STEP</p><h2>What does your business need <em>most</em> right now?</h2><p>Choose the outcome that matters. We’ll point you toward a practical place to begin.</p></div><div className="finder-box"><div className="finder-tabs">{Object.keys(plans).map((key, index) => <button className={plan === key ? 'active' : ''} key={key} onClick={() => setPlan(key)}><span>0{index + 1}</span>{key === 'website' ? 'A website that converts' : key === 'visibility' ? 'More qualified visibility' : 'A stronger brand presence'}</button>)}</div><div className="finder-answer"><small>A GOOD STARTING POINT</small><h3>{planTitle}</h3><p>{planCopy}</p><a className="button" href="#contact">Discuss this direction ↗</a></div></div></div></section>
      <section className="process"><div className="shell"><p className="eyebrow">HOW WE WORK</p><h2>A simple process.<br/>No mysterious <em>middle.</em></h2><div className="steps">{[['01','Listen','We get close to your goals, challenges and customers.'],['02','Make a plan','We set priorities and agree what success looks like.'],['03','Build and launch','We create carefully and communicate clearly through delivery.'],['04','Learn and improve','We measure what matters and make the next move smarter.']].map(([n,t,c])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{c}</p></article>)}</div></div></section>
      <section className="momentum shell"><div className="momentum-card"><div className="momentum-copy"><p className="eyebrow">BUILT FOR MOMENTUM</p><h2>More than a launch.<br/>A useful <em>next move.</em></h2><p>Launch is where the learning begins. We help teams improve the content, campaigns and experiences that matter once real people start using them.</p><a className="button" href="#contact">Plan the next move ↗</a></div><div className="momentum-map" aria-hidden="true"><span className="map-node node-a">01<small>Discover</small></span><span className="map-node node-b">02<small>Build</small></span><span className="map-node node-c">03<small>Learn</small></span><i/><i/><i/></div></div></section>
      <section className="industries shell"><p className="eyebrow">INDUSTRIES WE SERVE</p><h2>We partner with every kind of industry to deliver the <em>best possible result.</em></h2><div className="industry-card-grid">{industries.map(([name, icon], index)=><article className="industry-card" key={name}><span className="industry-number">0{index + 1}</span><b className="industry-icon" aria-hidden="true">{icon}</b><h3>{name}</h3><p>Digital strategy designed around your business.</p></article>)}</div></section>
      <section className="insights shell" id="insights"><div className="section-title"><div><p className="eyebrow">FRESH THINKING</p><h2>Useful ideas, minus the <em>noise.</em></h2></div><a className="underlink" href="#contact">Read our insights ↗</a></div><div className="articles">{['How to build a digital presence that earns trust before the first call','Your website should make the next step feel obvious','Better marketing begins with clearer questions'].map((title,index)=><article className="insight-card" key={title}><span>{['Growth · 6 min','Web · 5 min','Strategy · 7 min'][index]}</span><h3>{title}</h3><a href="#contact">Read article <b>↗</b></a></article>)}</div></section>
      <section className="faq shell"><div><p className="eyebrow">QUESTIONS, ANSWERED</p><h2>Clear answers before we even <em>talk.</em></h2></div><div>{[['Do you redesign existing websites?','Yes. We review the current experience and rebuild it around modern design, mobile use, performance and search visibility.'],['How long does a website project take?','It depends on scope. A focused business website can take a few weeks; e-commerce sites and custom applications need more planning.'],['Will we own the finished website and code?','Yes. Once delivered, the website content, design and code belong to you.'],['Do you offer hosting and maintenance?','Yes. We can help keep the site secure, fast and reliably available.']].map(([q,a])=><details key={q}><summary>{q}<b>+</b></summary><p>{a}</p></details>)}</div></section>
      <section className="contact" id="contact"><div className="shell contact-grid"><div><p className="eyebrow">START HERE</p><h2>Tell us what you are trying to <em>change.</em></h2><p>Whether you need a clearer website, a more focused marketing plan, or simply a good conversation about what comes next—we would like to hear from you.</p><a href="tel:+918527397361">+91 85273 97361 ↗</a><a href="tel:+919557210583">+91 95572 10583 ↗</a><a href="mailto:synexistechnologies@gmail.com">synexistechnologies@gmail.com ↗</a></div><form onSubmit={(e)=>{e.preventDefault();const data=new FormData(e.currentTarget);const subject=`Synexis enquiry: ${data.get('service') || 'New project'}`;const body=`Name: ${data.get('name')}\nEmail: ${data.get('email')}\nService: ${data.get('service')}\n\nProject details:\n${data.get('message')}`;window.location.href=`mailto:synexistechnologies@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;setSubmitted(true)}}><label>Your name<input name="name" required placeholder="How should we call you?"/></label><label>Work email<input name="email" type="email" required placeholder="you@company.com"/></label><label>What can we help with?<select name="service"><option>Choose a starting point</option><option>Website development</option><option>Digital marketing</option><option>Brand & creative</option><option>Application development</option></select></label><label>Tell us a little more<textarea name="message" rows="3" placeholder="A goal, challenge or good idea is enough to start."/></label><button className="button">Send your note ↗</button>{submitted && <small className="success">Your email app is ready with your enquiry. Send it and we’ll be in touch shortly.</small>}</form></div></section>
    </main><a className="floating" href="#contact">Let’s make<br/>something good <b>↗</b></a><footer><div className="shell footer-rich"><div><a className="brand" href="#top"><i>S</i>synexis<span>.</span></a><p>Thoughtful digital work for businesses ready to move forward.</p><a href="mailto:synexistechnologies@gmail.com">synexistechnologies@gmail.com</a></div><div><b>Explore</b><a href="#about">About Synexis</a><a href="#work">Selected work</a><a href="#insights">Insights</a><a href="#contact">Contact</a></div><div><b>Capabilities</b>{services.slice(0,4).map(([, title]) => <a href="#services" key={title}>{title}</a>)}</div><div><b>Visit or call</b><span>Doon IT Park<br/>Dehradun, Uttarakhand</span><a href="tel:+918527397361">+91 85273 97361</a><small>© {new Date().getFullYear()} Synexis Technologies</small></div></div></footer>
    {selectedProject && <div className="modal" role="dialog" aria-modal="true"><button className="modal-close" onClick={()=>setSelectedProject(null)}>×</button><img src={selectedProject.image} alt=""/><div><small>{selectedProject.type}</small><h2>{selectedProject.title}</h2><p>{selectedProject.copy}</p><a className="button" href="#contact" onClick={()=>setSelectedProject(null)}>Start a similar project ↗</a></div></div>}
  </>
}

createRoot(document.getElementById('root')).render(<NewHome />)
