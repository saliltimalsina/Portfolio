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

function App() {
  const carRef = useRef<HTMLDivElement>(null)
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const [showAbout, setShowAbout] = useState(false)
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

  const autoScrollPaused = useRef(false)
  const autoScrollRaf = useRef<number>(0)
  const autoScrollPos = useRef(0)

  useEffect(() => {
    const car = carRef.current
    if (!car) return
    autoScrollPos.current = 0

    const tick = () => {
      if (!autoScrollPaused.current) {
        autoScrollPos.current += 0.5
        const maxScroll = car.scrollWidth - car.clientWidth
        if (autoScrollPos.current >= maxScroll) autoScrollPos.current = 0
        car.scrollLeft = autoScrollPos.current
      }
      autoScrollRaf.current = requestAnimationFrame(tick)
    }
    autoScrollRaf.current = requestAnimationFrame(tick)

    let resumeTimeout: ReturnType<typeof setTimeout>
    const pause = () => {
      autoScrollPaused.current = true
      clearTimeout(resumeTimeout)
      resumeTimeout = setTimeout(() => {
        autoScrollPos.current = car.scrollLeft
        autoScrollPaused.current = false
      }, 2500)
    }

    car.addEventListener('mouseenter', pause)
    car.addEventListener('touchstart', pause, { passive: true })
    return () => {
      cancelAnimationFrame(autoScrollRaf.current)
      clearTimeout(resumeTimeout)
      car.removeEventListener('mouseenter', pause)
      car.removeEventListener('touchstart', pause)
    }
  }, [])

  const sc = (d: number) => {
    autoScrollPaused.current = true
    const car = carRef.current
    if (!car) return
    car.scrollBy({ left: d * 220, behavior: 'smooth' })
    setTimeout(() => { autoScrollPos.current = car.scrollLeft }, 400)
  }

  const handleCarScroll = () => {
    const car = carRef.current
    if (!car) return
    const dots = document.querySelectorAll('.dot')
    const i = Math.min(Math.round(car.scrollLeft / (car.scrollWidth / dots.length)), dots.length - 1)
    dots.forEach((dot, j) => dot.classList.toggle('on', j === i))
  }

  const scrollToDot = (i: number) => {
    const car = carRef.current
    if (!car) return
    const cardW = car.offsetWidth / 2 + 8
    car.scrollTo({ left: i * cardW, behavior: 'smooth' })
  }

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
        <a className={`nl${activeNav === 'about' ? ' active' : ''}`} href="#" onClick={e => { e.preventDefault(); setShowAbout(true); setActiveNav('about') }}>About</a>
        <span className="nav-divider"/>
        <a className="nl nav-resume" href="https://drive.google.com/file/d/1i-e1tOKSXCM44YU-40x83a5_oOVcI9Lr/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Resume ↗</a>
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
                  <img src="/mockups/Telvox/Tel.png" alt="Telvox" className="thumb-img" />
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
                  <img src={PROJECTS[0].cardImg} alt="ClearPath Factory Portal" className="thumb-img" />
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
                  <img src={PROJECTS[1].cardImg} alt="TransferNet" className="thumb-img" />
                </div>
              </div>
              <div className="card-body">
                <h3>{PROJECTS[1].title}</h3>
                <div className="card-meta">{PROJECTS[1].client} · {PROJECTS[1].date}</div>
                <p>{PROJECTS[1].intro}</p>
              </div>
            </div>

            {/* Card 4 — OCCS */}
            <div className="card rv" onClick={() => { setActiveProject(5); setActiveNav('work') }}>
              <div className="thumb">
                <div className="thumb-inner">
                  <img src={PROJECTS[5].cardImg} alt="OCCS" className="thumb-img" style={{ objectPosition: 'center' }} />
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
                  <img src={PROJECTS[3].cardImg} alt="Skathi" className="thumb-img" />
                </div>
              </div>
              <div className="card-body">
                <h3>Skathi — App & Web Platform</h3>
                <div className="card-meta">Product Design · April 2026</div>
                <p>Designed the complete Skathi experience across iOS and web — a music platform built for South Asian listeners covering streaming, beats licensing, artist booking, events, and a merch shop.</p>
              </div>
            </div>

            {/* Card 6 — Flowbite */}
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
            </div>

          </div>
        </div>
      </main>

      {/* MORE WORK */}
      <div className="more" id="about">
        <div className="wrap">
          <h2 className="sec-title rv">Explore more of my work</h2>
          <p className="more-desc rv">These were my recent highlights. If you'd like to see my broader journey across industrial design, automobile design, product visualizations, and illustrations, explore my full portfolio on Behance.</p>
          <a href="#" className="go-link rv">↗ Go to Behance</a>
          <div className="car-wrap rv">
            <button className="arr-btn arr-l" onClick={() => sc(-1)}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <div className="car" ref={carRef} onScroll={handleCarScroll}>
              <div className="c-card" style={{ background: 'linear-gradient(135deg,#18182e,#28285a)' }}>
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '72px', height: '72px', background: 'linear-gradient(135deg,#e03030,#b01010)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(200,30,30,.3)' }}>
                    <div style={{ width: '36px', height: '10px', background: 'rgba(255,255,255,.9)', borderRadius: '5px' }}></div>
                  </div>
                </div>
                <span className="label">Jio Device</span>
              </div>
              <div className="c-card" style={{ background: 'linear-gradient(135deg,#0d1828,#0d2848)' }}>
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '46px', height: '96px', background: 'linear-gradient(180deg,#2a4a8a,#1a3268)', borderRadius: '23px 23px 8px 8px', boxShadow: '0 6px 20px rgba(30,70,180,.3)' }}>
                    <div style={{ margin: '14px auto 0', width: '18px', height: '18px', borderRadius: '50%', background: 'linear-gradient(135deg,#4a80c8,#2a60a8)' }}></div>
                    <div style={{ margin: '8px auto 0', width: '28px', height: '5px', background: 'rgba(90,150,255,.3)', borderRadius: '3px' }}></div>
                    <div style={{ margin: '5px auto 0', width: '28px', height: '5px', background: 'rgba(90,150,255,.2)', borderRadius: '3px' }}></div>
                  </div>
                </div>
                <span className="label">Product Design</span>
              </div>
              <div className="c-card" style={{ background: 'linear-gradient(135deg,#22102e,#3a1858)' }}>
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <div style={{ width: '26px', height: '76px', background: 'linear-gradient(180deg,#b830d8,#8018b0)', borderRadius: '13px', opacity: .9 }}></div>
                  <div style={{ width: '26px', height: '58px', background: 'linear-gradient(180deg,#7830d8,#5010b0)', borderRadius: '13px', opacity: .7, marginTop: '18px' }}></div>
                  <div style={{ width: '26px', height: '66px', background: 'linear-gradient(180deg,#d83070,#a81050)', borderRadius: '13px', opacity: .8, marginTop: '10px' }}></div>
                </div>
                <span className="label">Illustrations</span>
              </div>
              <div className="c-card" style={{ background: 'linear-gradient(135deg,#18221a,#243826)' }}>
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '110px', height: '64px', background: 'linear-gradient(135deg,#3a7a3e,#286030)', borderRadius: '8px', overflow: 'hidden', position: 'relative' }}>
                    <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 28% 55%,rgba(100,200,110,.25),transparent)' }}></div>
                    <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '38%', background: 'rgba(0,0,0,.25)' }}></div>
                  </div>
                </div>
                <span className="label">Auto Design</span>
              </div>
              <div className="c-card" style={{ background: 'linear-gradient(135deg,#281e10,#3e2e18)' }}>
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: '90px', height: '68px', background: 'linear-gradient(135deg,#78604a,#5a4230)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ width: '52px', height: '40px', background: 'rgba(255,200,150,.12)', borderRadius: '4px', border: '1px solid rgba(255,200,150,.18)' }}></div>
                  </div>
                </div>
                <span className="label">Visualizations</span>
              </div>
            </div>
            <button className="arr-btn arr-r" onClick={() => sc(1)}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
            <div className="dots">
              {[0, 1, 2, 3, 4].map(i => (
                <div key={i} className={`dot${i === 0 ? ' on' : ''}`} onClick={() => scrollToDot(i)}></div>
              ))}
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
        <p style={{ marginTop: '4px', fontSize: '11px', color: '#AAA' }}>© Salil Timalsina · 2025</p>
      </footer>
    </>
  )
}

export default App
