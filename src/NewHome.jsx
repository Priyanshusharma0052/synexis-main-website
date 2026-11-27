import { useState } from 'react'

const services = [
  ['01', 'Digital marketing', 'SEO, paid media, content and reporting organised around customer intent.', '/digital-marketing'],
  ['02', 'Web development', 'Fast, responsive websites and e-commerce experiences made to do a job.', '/web-development'],
  ['03', 'Social media', 'Content systems and campaigns that give people a reason to follow.', '/social-media'],
  ['04', 'Graphic design', 'Identity, campaign creative and visual systems that stay recognisable.', '/graphic-design'],
  ['05', 'Application development', 'Useful mobile and web products shaped around real workflows.', '/application-development'],
  ['06', 'SEO & lead generation', 'Search visibility and landing journeys that turn attention into enquiries.', '/seo'],
]

const principles = [
  ['Discover', 'Get close to the audience, the ambition and the friction standing in the way.'],
  ['Define', 'Turn the signal into a clear point of view, plan and measurable next step.'],
  ['Design', 'Build the story, system and experience as one connected piece of work.'],
  ['Develop', 'Launch, learn and improve through useful insight rather than guesswork.'],
]

const industries = ['Education', 'Manufacturing', 'Logistics', 'Technology', 'Healthcare', 'E-commerce', 'Real estate', 'Professional services']

const articles = [
  ['Search', 'SEO vs AEO vs GEO: the practical visibility guide for modern businesses'],
  ['Growth', 'A 90-day social media plan that creates momentum, not just activity'],
  ['Technology', 'How to choose an application development partner with confidence'],
]

export default function NewHome() {
  const [menu, setMenu] = useState(null)
  const [openFaq, setOpenFaq] = useState(0)

  return <div className="site-shell" id="top">
    <div className="site-grid" aria-hidden="true" />
    <header className="site-nav">
      <a className="logo" href="#top"><span>⌁</span> synexis<sup>®</sup></a>
      <nav aria-label="Main navigation">
        <div className="nav-group" onMouseEnter={() => setMenu('services')} onMouseLeave={() => setMenu(null)}>
          <button onClick={() => setMenu(menu === 'services' ? null : 'services')}>Services <b>↘</b></button>
          {menu === 'services' && <div className="mega-menu">{services.map(([, title, copy, href]) => <a href={href} key={title}><strong>{title}</strong><span>{copy}</span><i>↗</i></a>)}</div>}
        </div>
        <div className="nav-group" onMouseEnter={() => setMenu('company')} onMouseLeave={() => setMenu(null)}>
          <button onClick={() => setMenu(menu === 'company' ? null : 'company')}>Company <b>↘</b></button>
          {menu === 'company' && <div className="mega-menu compact"><a href="/about"><strong>About Synexis</strong><span>Our studio, values and direction.</span><i>↗</i></a><a href="#process"><strong>Our approach</strong><span>How good work moves from signal to scale.</span><i>↗</i></a><a href="#industries"><strong>Industries</strong><span>Partners across ambitious sectors.</span><i>↗</i></a></div>}
        </div>
        <a href="/work">Work</a><a href="/insights">Insights</a>
      </nav>
      <a className="button button-small" href="#contact">Let’s talk <span>↗</span></a>
    </header>

    <main>
      <section className="hero">
        <div className="hero-copy reveal-ready">
          <p className="kicker"><i /> DEHRADUN · INDIA · EVERYWHERE ONLINE</p>
          <h1>Digital work<br />with a <em>pulse.</em></h1>
          <p className="hero-lede">Synexis connects strategy, creative thinking and technology to turn an ambitious next move into digital work people can feel.</p>
          <div className="hero-actions"><a className="button" href="#contact">Start a conversation <span>↗</span></a><a className="text-link" href="#story">Explore our world <span>↓</span></a></div>
          <p className="quiet-note"><b /> A thoughtful reply within one business day</p>
        </div>
        <div className="hero-art" role="img" aria-label="Animated Synexis digital signal portal">
          <img src="/media/synexis-signal-portal.png" alt="" />
          <div className="hero-art-gradient" />
          <span className="art-label label-top">SIGNAL / 001</span><span className="art-label label-bottom">SCROLL TO CHANGE THE VIEW</span>
          <span className="orbit orbit-a" /><span className="orbit orbit-b" /><span className="hero-dot" />
        </div>
      </section>

      <section className="ticker" aria-label="Synexis capabilities"><div>Strategy <b>✦</b> Design <b>✦</b> Technology <b>✦</b> Growth <b>✦</b> Strategy <b>✦</b> Design <b>✦</b> Technology <b>✦</b> Growth <b>✦</b></div></section>

      <section className="statement" id="story"><p className="kicker dark"><i /> THE WAY FORWARD</p><h2>Not more digital.<br /><em>More meaningful</em><br />digital.</h2><p>We make the complex feel clear—from the first story someone sees to the systems that keep your business moving after launch.</p></section>

      <section className="chapter chapter-signal">
        <div className="section-intro"><p className="kicker"><i /> ONE CONNECTED STUDIO</p><h2>Every signal<br />has a <em>story.</em></h2><p>Most digital problems are not isolated. Your website, messaging, content and technology should strengthen the same idea—not compete for attention.</p></div>
        <div className="signal-map" aria-label="Synexis disciplines connected by a moving line">
          <svg viewBox="0 0 800 450" preserveAspectRatio="none" aria-hidden="true"><path d="M40 340 C150 340 146 120 290 120 S430 340 540 270 S660 75 770 90" /><path className="signal-dash" d="M40 340 C150 340 146 120 290 120 S430 340 540 270 S660 75 770 90" /></svg>
          {[['01','Strategy','See the right opportunity.'],['02','Creative','Give it a memorable shape.'],['03','Technology','Make it work beautifully.'],['04','Growth','Keep the momentum useful.']].map(([n,title,copy], index) => <article className={`map-card card-${index + 1}`} key={title}><small>{n}</small><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </section>

      <section className="services-section" id="services"><div className="service-heading"><p className="kicker"><i /> WHAT WE BUILD</p><h2>Work with<br /><em>motion built in.</em></h2><p>Choose one capability or bring us the whole challenge. We shape the team and system around what your business needs next.</p></div><div className="service-grid">{services.map(([number,title,copy,href]) => <a href={href} className="service-card" key={title}><span>{number}</span><b>↗</b><h3>{title}</h3><p>{copy}</p><i className="card-pulse" /></a>)}</div></section>

      <section className="case-study"><div className="case-copy"><p className="kicker"><i /> BUILT FOR REAL PEOPLE</p><h2>From a first<br />click to a <em>clearer</em><br />next step.</h2><p>A good digital experience does not only look polished. It removes doubt, earns trust and makes the next action feel natural.</p><a href="/work" className="text-link">See selected thinking <span>↗</span></a></div><div className="case-board"><div className="board-window"><span>synexis / experience system</span><b>01</b><div className="board-lines"><i /><i /><i /></div><div className="board-orb" /></div><aside><small>THE PRINCIPLE</small><strong>Clarity earns the attention that design keeps.</strong></aside></div></section>

      <section className="process" id="process"><div><p className="kicker dark"><i /> A BETTER WAY TO MAKE PROGRESS</p><h2>From signal<br />to <em>scale.</em></h2></div><ol>{principles.map(([title,copy], index) => <li key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div><b>↘</b></li>)}</ol></section>

      <section className="proof-band"><p className="kicker"><i /> OUR TOOLKIT, YOUR ADVANTAGE</p><div className="tool-rail">{[['HTML','⌘'],['WordPress','W'],['Google Ads','△'],['Shopify','S'],['Meta','∞'],['Ahrefs','aH']].map(([name,mark]) => <article key={name}><b>{mark}</b><span>{name}</span></article>)}</div><p className="proof-copy">Modern tools are useful only when they make the work more human: easier to find, understand, use and improve.</p></section>

      <section className="industries" id="industries"><p className="kicker dark"><i /> MANY INDUSTRIES. ONE STANDARD.</p><h2>Built to learn<br />your <em>world.</em></h2><div>{industries.map((industry,index) => <article key={industry}><span>0{index+1}</span><h3>{industry}</h3><b>↗</b></article>)}</div></section>

      <section className="insights" id="insights"><div className="section-row"><div><p className="kicker"><i /> FRESH THINKING</p><h2>Useful ideas.<br /><em>No filler.</em></h2></div><a href="/insights" className="text-link">Explore all insights <span>↗</span></a></div><div className="article-grid">{articles.map(([tag,title], index) => <article key={title}><span>0{index+1} / {tag}</span><h3>{title}</h3><a href="/insights">Read story <b>↗</b></a></article>)}</div></section>

      <section className="faq" id="faq"><div><p className="kicker"><i /> QUESTIONS, ANSWERED</p><h2>Clear answers<br />before we <em>talk.</em></h2></div><div className="faq-list">{[['Can you redesign an existing website?','Yes. We can audit what is working, identify the friction, then build a clearer responsive experience around your customers and business goals.'],['Do you build mobile-ready websites?','Yes. Every website is designed for small and large screens from the start, with performance, accessibility and easy content editing considered throughout.'],['Do you provide marketing after a website launch?','Yes. Synexis provides SEO, Google Ads, social media, content, lead-generation and reporting support, depending on what is useful to your goals.'],['Will we own the finished website and code?','Yes. Once the project is complete, your approved website, content and project files belong to your business.']].map(([question,answer],index) => <article className={openFaq===index?'is-open':''} key={question}><button onClick={() => setOpenFaq(openFaq===index ? -1 : index)}>{question}<b>{openFaq===index?'—':'+'}</b></button>{openFaq===index&&<p>{answer}</p>}</article>)}</div></section>

      <section className="contact" id="contact"><p className="kicker"><i /> THE NEXT CHAPTER IS OPEN</p><h2>Let’s make<br />something <em>move.</em></h2><p>Bring a challenge, an early idea or a clear brief. We will bring the questions, direction and energy to turn it into something real.</p><div><a className="button" href="mailto:synexistechnologies@gmail.com">Start by email <span>↗</span></a><a className="text-link" href="tel:+918527397361">+91 85273 97361 <span>↗</span></a></div></section>
    </main>
    <footer><div className="footer-mark"><a className="logo" href="#top"><span>⌁</span> synexis<sup>®</sup></a><p>Strategy, design, technology and growth for businesses ready to move forward.</p></div><div><b>Explore</b><a href="/about">About</a><a href="/services">Services</a><a href="/work">Work</a><a href="/insights">Insights</a></div><div><b>Connect</b><a href="mailto:synexistechnologies@gmail.com">synexistechnologies@gmail.com</a><a href="tel:+918527397361">+91 85273 97361</a><span>2nd Floor, 44A, Sahastradhara Road<br />Doon IT Park, Dehradun 248001</span></div><small>© {new Date().getFullYear()} Synexis Technologies</small></footer>
  </div>
}
