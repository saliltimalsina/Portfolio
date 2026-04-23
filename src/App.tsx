import { useEffect, useRef, useState } from 'react'
import './App.css'
import logoSvg from './assets/logo.svg'
import salilImg from './assets/salil.png'
import ui1Img from './assets/ui1.png'
import ui2Img from './assets/ui2.png'
import nepalImg from './assets/nepal.png'
import PROJECTS from './data/projects'
import ProjectDetail from './components/ProjectDetail'
import About from './components/About'
import { Analytics } from '@vercel/analytics/react'


function App() {
  const tickerRef = useRef<HTMLDivElement>(null)
  const [activeProject, setActiveProject] = useState<number | null>(() => {
    const slug = window.location.pathname.replace(/^\//, '')
    if (slug && slug !== 'about') {
      const idx = PROJECTS.findIndex(p => p.slug === slug)
      return idx !== -1 ? idx : null
    }
    return null
  })
  const [showAbout, setShowAbout] = useState(() => {
    return window.location.pathname.replace(/^\//, '') === 'about'
  })
  const [activeNav, setActiveNav] = useState<'home' | 'work' | 'about'>('home')

  useEffect(() => {
    document.body.style.overflow = (activeProject !== null || showAbout) ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [activeProject, showAbout])

  // Scroll-based nav highlight
  useEffect(() => {
    if (showAbout || activeProject !== null) return
    const work = document.getElementById('work')
    const footer = document.querySelector('footer')
    if (!work) return
    let workVisible = false
    let footerVisible = false
    const update = () => {
      if (footerVisible) setActiveNav('home')
      else if (workVisible) setActiveNav('work')
      else setActiveNav('home')
    }
    const ioWork = new IntersectionObserver(entries => {
      entries.forEach(e => { workVisible = e.isIntersecting; update() })
    }, { threshold: 0.15 })
    const ioFooter = new IntersectionObserver(entries => {
      entries.forEach(e => { footerVisible = e.isIntersecting; update() })
    }, { threshold: 0.1 })
    ioWork.observe(work)
    if (footer) ioFooter.observe(footer)
    return () => { ioWork.disconnect(); ioFooter.disconnect() }
  }, [showAbout, activeProject])

  useEffect(() => {
    // Scroll reveal
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in')
          io.unobserve(e.target)
        }
      })
    }, { threshold: 0.12 })
    document.querySelectorAll('.rv').forEach(el => io.observe(el))

    // Pink blob — centered on cursor with smooth lag
    const pink = document.getElementById('pinkBlob') as HTMLElement
    let tX = window.innerWidth * 0.48, tY = 160
    let cX = tX, cY = tY
    let animId: number
    const onMove = (e: MouseEvent) => { tX = e.clientX; tY = e.clientY }
    document.addEventListener('mousemove', onMove)
    const animate = () => {
      cX += (tX - cX) * 0.06
      cY += (tY - cY) * 0.06
      pink.style.left = `${cX - 170}px`
      pink.style.top = `${cY - 170}px`
      animId = requestAnimationFrame(animate)
    }
    animate()

    // Nav hover boosts blob
    const nav = document.getElementById('nav') as HTMLElement
    const onEnter = () => { pink.style.opacity = '.72'; pink.style.scale = '1.2' }
    const onLeave = () => { pink.style.opacity = '.55'; pink.style.scale = '1' }
    nav.addEventListener('mouseenter', onEnter)
    nav.addEventListener('mouseleave', onLeave)

    // Card radial highlight on mousemove
    const cards = document.querySelectorAll('.card')
    const cardHandlers: Array<[Element, EventListener]> = []
    cards.forEach(c => {
      const handler = (e: Event) => {
        const me = e as MouseEvent
        const r = c.getBoundingClientRect();
        (c as HTMLElement).style.setProperty('--mx', `${me.clientX - r.left}px`);
        (c as HTMLElement).style.setProperty('--my', `${me.clientY - r.top}px`)
      }
      c.addEventListener('mousemove', handler)
      cardHandlers.push([c, handler])
    })

    return () => {
      io.disconnect()
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(animId)
      nav.removeEventListener('mouseenter', onEnter)
      nav.removeEventListener('mouseleave', onLeave)
      cardHandlers.forEach(([c, h]) => c.removeEventListener('mousemove', h))
    }
  }, [])

  useEffect(() => {
    const track = tickerRef.current
    if (!track) return

    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) track.classList.add('running')
      })
    }, { threshold: 0 })
    // Observe the bounded wrapper, not the wide track itself
    const wrapper = track.parentElement
    if (wrapper) io.observe(wrapper)

    const pause = () => track.classList.add('paused')
    const resume = () => track.classList.remove('paused')
    track.addEventListener('mouseenter', pause)
    track.addEventListener('mouseleave', resume)

    return () => {
      io.disconnect()
      track.removeEventListener('mouseenter', pause)
      track.removeEventListener('mouseleave', resume)
    }
  }, [])

  useEffect(() => {
    if (activeProject !== null) {
      const slug = PROJECTS[activeProject]?.slug
      if (slug) window.history.pushState({projectIdx: activeProject}, '', `/${slug}`)
    } else if (showAbout) {
      const current = window.location.pathname
      if (current !== '/about') window.history.pushState({}, '', '/about')
    } else {
      const current = window.location.pathname
      if (current !== '/') window.history.pushState({}, '', '/')
    }
  }, [activeProject, showAbout])

  useEffect(() => {
    const slug = window.location.pathname.replace(/^\//, '')
    if (slug === 'about') {
      setShowAbout(true)
    } else if (slug) {
      const idx = PROJECTS.findIndex(p => p.slug === slug)
      if (idx !== -1) setActiveProject(idx)
    }

    const onPop = () => {
      const slug = window.location.pathname.replace(/^\//, '')
      if (slug === 'about') {
        setShowAbout(true)
        setActiveProject(null)
      } else if (slug) {
        const idx = PROJECTS.findIndex(p => p.slug === slug)
        if (idx !== -1) { setActiveProject(idx); setShowAbout(false) }
        else { setActiveProject(null) }
      } else {
        setActiveProject(null)
        setShowAbout(false)
      }
    }
    window.addEventListener('popstate', onPop)
    return () => window.removeEventListener('popstate', onPop)
  }, [])

  return (
    <>
      {/* cursor blob — stays fixed to viewport */}
      <div className="blob pink" id="pinkBlob" style={{position:'fixed',zIndex:0,pointerEvents:'none'}}></div>

      {/* NAV */}
      <nav id="nav">
        <a className="nav-brand" href="#" onClick={e => { e.preventDefault(); setShowAbout(false); setActiveProject(null); setActiveNav('home'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
          <img src={logoSvg} alt="Salil logo" />
        </a>
        <span className="nav-divider"/>
        <a className={`nl${activeNav === 'home' ? ' active' : ''}`} href="#" onClick={e => { e.preventDefault(); setShowAbout(false); setActiveProject(null); setActiveNav('home'); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>Home</a>
        <a className={`nl${activeNav === 'work' ? ' active' : ''}`} href="#work" onClick={e => { e.preventDefault(); setShowAbout(false); setActiveProject(null); setActiveNav('work'); document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' }) }}>Work</a>
        <a className={`nl${activeNav === 'about' ? ' active' : ''}`} href="#" onClick={e => { e.preventDefault(); setActiveProject(null); setShowAbout(true); setActiveNav('about') }}>About</a>
        <span className="nav-divider"/>
        <a className="nl nav-resume" href="https://drive.google.com/file/d/11S9NlhG-QZdl3wJgFpFwh0vbUCUod9BP/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Resume ↗</a>
      </nav>

      {/* HERO */}
      <section className="hero">
        {/* static blobs — only in hero, scroll away with page */}
        <div className="bg-blobs">
          <div className="blob pink-static"></div>
          <div className="blob yellow"></div>
          <div className="blob purple"></div>
        </div>
        <div className="hero-wide">
          <div className="hero-inner">
            <div className="hero-big-text">
              <div className="hl">
                <span className="hl-word">Hi, I'm</span>
                <span className="hl-pill hl-pill--photo">
                  <img src={salilImg} alt="Salil" />
                </span>
                <span className="hl-word">Salil Timalsina,</span>
              </div>
              <div className="hl hl--tight">
                <span className="hl-word">UI/UX Interaction Designer</span>
                <span className="hl-pill hl-pill--ui">
                  <img src={ui1Img} alt="UI design" />
                </span>
                <span className="hl-pill hl-pill--ui">
                  <img src={ui2Img} alt="UI design" />
                </span>
              </div>
              <div className="hl">
                <span className="hl-word">Designing from Nepal</span>
                <span className="hl-pill hl-pill--nepal">
                  <img src={nepalImg} alt="Nepal" />
                </span>
              </div>
            </div>
            <p>UI/UX Designer with 2+ years crafting web and mobile experiences, building scalable design systems (MUI, Flowbite, Untitled), leading end-to-end design, collaborating with clients, and mentoring interns.
</p>
            <div className="actions">
              <a href="https://cal.com/salil-timalsina-a431sp/30min" target="_blank" rel="noopener noreferrer" className="btn">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                Book 1:1 session
              </a>
              <a href="mailto:salil.timalsina@gmail.com" className="btn">Reach out</a>
              <a href="https://www.linkedin.com/in/saliltimalsina/" target="_blank" rel="noopener noreferrer" className="icon-btn" title="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="https://x.com/saliltimalsina" target="_blank" rel="noopener noreferrer" className="icon-btn" title="X">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com/why.salil/" target="_blank" rel="noopener noreferrer" className="icon-btn" title="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WORK */}
      <main id="work">
        <div className="wrap">
          <h2 className="sec-title rv" style={{ marginTop: 0 }}>Explore my work</h2>
          <div className="cards">

            {/* Card 1 — Telvox */}
            <div className="card rv" onClick={() => { setActiveProject(2); setActiveNav('work') }}>
              <div className="thumb">
                <div className="thumb-inner">
                  <img src="/mockups/Telvox/Tel.png" alt="Telvox" className="thumb-img" loading="lazy" />
                </div>
              </div>
              <div className="card-body">
                <h3>Telvox — AI Voice Agent Platform</h3>
                <div className="card-meta">Telvox · April 2026</div>
                <p>Designed a full-stack AI voice agent management platform — from agent builder and telephony campaigns to lead tracking, appointment scheduling, and client billing in one dashboard.</p>
              </div>
            </div>

            {/* Card 2 — ClearPath */}
            <div className="card rv" onClick={() => { setActiveProject(0); setActiveNav('work') }}>
              <div className="thumb">
                <div className="thumb-inner">
                  <img src={PROJECTS[0].cardImg} alt="ClearPath Factory Portal" className="thumb-img" loading="lazy" />
                </div>
              </div>
              <div className="card-body">
                <h3>ClearPath Factory Portal</h3>
                <div className="card-meta">ClearPath · April 2026</div>
                <p>Designed a dual-sided supply chain platform connecting garment factories and buyers with real-time shipment visibility and a prioritised action queue.</p>
              </div>
            </div>

            {/* Card 3 — TransferNet */}
            <div className="card rv" onClick={() => { setActiveProject(1); setActiveNav('work') }}>
              <div className="thumb">
                <div className="thumb-inner">
                  <img src={PROJECTS[1].cardImg} alt="TransferNet" className="thumb-img" loading="lazy" />
                </div>
              </div>
              <div className="card-body">
                <h3>{PROJECTS[1].title}</h3>
                <div className="card-meta">{PROJECTS[1].client} · {PROJECTS[1].date}</div>
                <p>{PROJECTS[1].intro}</p>
              </div>
            </div>

            {/* Card 4 — Jobbicus */}
            <div className="card rv" onClick={() => { setActiveProject(7); setActiveNav('work') }}>
              <div className="thumb">
                <div className="thumb-inner">
                  <img src={PROJECTS[7].cardImg} alt="Jobbicus" className="thumb-img" loading="lazy" />
                </div>
              </div>
              <div className="card-body">
                <h3>Jobbicus — Career Platform</h3>
                <div className="card-meta">Jobbicus · 2025</div>
                <p>Designed a full-featured career platform for job seekers and employers — covering profile setup, a personalised home feed, job posting, proposals, upskilling courses, virtual fairs, and accommodation support.</p>
              </div>
            </div>

            {/* Card 5 — OCCS */}
            <div className="card rv" onClick={() => { setActiveProject(5); setActiveNav('work') }}>
              <div className="thumb">
                <div className="thumb-inner">
                  <img src={PROJECTS[5].cardImg} alt="OCCS" className="thumb-img" style={{ objectPosition: 'center' }} loading="lazy" />
                </div>
              </div>
              <div className="card-body">
                <h3>OCCS — Outbound Call Centre System</h3>
                <div className="card-meta">OCCS / Staie · 2024–2025</div>
                <p>Led UX design on a multi-tenant call centre platform for 300+ clerks — spanning user management, project configuration, live call handling, and reporting across 4,000+ Jira tickets.</p>
              </div>
            </div>

            {/* Card 5 — Skathi */}
            <div className="card rv" onClick={() => { setActiveProject(3); setActiveNav('work') }}>
              <div className="thumb">
                <div className="thumb-inner">
                  <img src={PROJECTS[3].cardImg} alt="Skathi" className="thumb-img" loading="lazy" />
                </div>
              </div>
              <div className="card-body">
                <h3>Skathi — App & Web Platform</h3>
                <div className="card-meta">Product Design · April 2026</div>
                <p>Designed the complete Skathi experience across iOS and web — a music platform built for South Asian listeners covering streaming, beats licensing, artist booking, events, and a merch shop.</p>
              </div>
            </div>

            {/* Card 6 — Flowbite
            <div className="card rv" onClick={() => { setActiveProject(4); setActiveNav('work') }}>
              <div className="thumb">
                <div className="thumb-inner">
                  <div className="thumb-svg" style={{ background: 'linear-gradient(145deg,#f0fdf4,#dcfce7)', display: 'flex', flexDirection: 'column', padding: '16px 20px', gap: '8px', height: '100%' }}>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '4px' }}>
                      <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'linear-gradient(135deg,#22c55e,#16a34a)' }}></div>
                      <div style={{ height: '7px', background: '#86efac', borderRadius: '3px', width: '90px' }}></div>
                    </div>
                    <div style={{ display: 'flex', gap: '8px', flex: 1 }}>
                      {['#bbf7d0','#a7f3d0','#6ee7b7'].map((c, i) => (
                        <div key={i} style={{ flex: 1, background: 'rgba(255,255,255,.75)', borderRadius: '10px', padding: '10px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                          <div style={{ width: '22px', height: '22px', borderRadius: '6px', background: c, marginBottom: '4px' }}></div>
                          <div style={{ height: '5px', background: '#d1fae5', borderRadius: '3px' }}></div>
                          <div style={{ height: '5px', background: '#d1fae5', borderRadius: '3px', width: '70%' }}></div>
                          <div style={{ height: '5px', background: '#d1fae5', borderRadius: '3px', width: '50%' }}></div>
                          <div style={{ flex: 1, background: c, borderRadius: '6px', opacity: .4, marginTop: '4px' }}></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <h3>Flowbite Design System</h3>
                <div className="card-meta">Freelance · 2024</div>
                <p>Built and documented a scalable component library using Flowbite and Tailwind, enabling consistent design across multiple client products.</p>
              </div>
            </div> */}

          </div>
        </div>
      </main>

      {/* MORE WORK */}
      <div className="more" id="about">
        <div className="wrap">
          <h2 className="sec-title rv">Explore more of my work</h2>
          <p className="more-desc rv">These were my recent highlights. If you'd like to see my broader journey across industrial design, automobile design, product visualizations, and illustrations, explore my full portfolio on Behance.</p>
          <a href="https://www.behance.net/saliltimalsina1" target="_blank" rel="noopener noreferrer" className="go-link rv">↗ Go to Behance</a>
          <div className="car-wrap rv">
            <div className="ticker-outer">
              <div className="ticker-track" ref={tickerRef}>
                {/* — set 1 — */}
                <div className="c-card"><img src="/mockups/ticker/t1.png" alt="" loading="lazy" /></div>
                <div className="c-card"><img src="/mockups/ticker/t2.png" alt="" loading="lazy" /></div>
                <div className="c-card"><img src="/mockups/ticker/t3.png" alt="" loading="lazy" /></div>
                <div className="c-card"><img src="/mockups/ticker/t4.png" alt="" loading="lazy" /></div>
                <div className="c-card"><img src="/mockups/ticker/t5.png" alt="" loading="lazy" /></div>
                <div className="c-card"><img src="/mockups/ticker/t6.png" alt="" loading="lazy" /></div>
                <div className="c-card"><img src="/mockups/ticker/t7.png" alt="" loading="lazy" /></div>
                <div className="c-card"><img src="/mockups/ticker/t8.png" alt="" loading="lazy" /></div>
                {/* — set 2 (duplicate for seamless loop) — */}
                <div className="c-card" aria-hidden="true"><img src="/mockups/ticker/t1.png" alt="" loading="lazy" /></div>
                <div className="c-card" aria-hidden="true"><img src="/mockups/ticker/t2.png" alt="" loading="lazy" /></div>
                <div className="c-card" aria-hidden="true"><img src="/mockups/ticker/t3.png" alt="" loading="lazy" /></div>
                <div className="c-card" aria-hidden="true"><img src="/mockups/ticker/t4.png" alt="" loading="lazy" /></div>
                <div className="c-card" aria-hidden="true"><img src="/mockups/ticker/t5.png" alt="" loading="lazy" /></div>
                <div className="c-card" aria-hidden="true"><img src="/mockups/ticker/t6.png" alt="" loading="lazy" /></div>
                <div className="c-card" aria-hidden="true"><img src="/mockups/ticker/t7.png" alt="" loading="lazy" /></div>
                <div className="c-card" aria-hidden="true"><img src="/mockups/ticker/t8.png" alt="" loading="lazy" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* DETAIL PAGE OVERLAY */}
      {activeProject !== null && (
        <ProjectDetail
          key={activeProject}
          project={PROJECTS[activeProject]}
          onClose={() => { setActiveProject(null); setActiveNav('work') }}
        />
      )}

      {/* ABOUT OVERLAY */}
      {showAbout && <About />}

      {/* FOOTER */}
      <footer>
        <div className="footer-blobs">
          <div className="footer-blob fb1"/>
          <div className="footer-blob fb2"/>
          <div className="footer-blob fb3"/>
        </div>
        <p>Crafted with intent for humans</p>
        <p style={{ marginTop: '4px', fontSize: '11px', color: '#AAA' }}>© Salil Timalsina</p>
      </footer>
      <Analytics />
    </>
  )
}

export default App
