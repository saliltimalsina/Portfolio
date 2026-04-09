import { useEffect, useRef, useState } from 'react'

const PROCESS = [
  { n: '01', t: 'Observe',  d: 'I start with patterns, not opinions.' },
  { n: '02', t: 'Simplify', d: 'Reduce until only the essential remains.' },
  { n: '03', t: 'Test',     d: 'Reality > assumptions (learned the hard way).' },
  { n: '04', t: 'Iterate',  d: 'Nothing is final.' },
]


export default function About() {
  const photoRef = useRef<HTMLDivElement>(null)
  const maskRef  = useRef<HTMLDivElement>(null)
  const easterRef = useRef<HTMLSpanElement>(null)
  const [easterVisible, setEasterVisible] = useState(false)
  const [imgLoaded, setImgLoaded] = useState(false)

  // Debounced hover for blog cards — prevents edge-flicker when rotating cards shift hit-area
  useEffect(() => {
    const stage = document.querySelector('.bt-stage') as HTMLElement | null
    if (!stage) return
    const windows = Array.from(stage.querySelectorAll('.bt-window'))
    const timers = new Map<Element, ReturnType<typeof setTimeout>>()
    const cleanup: Array<() => void> = []

    windows.forEach((win, idx) => {
      const val = String(idx + 1)
      const onEnter = () => {
        const t = timers.get(win)
        if (t) { clearTimeout(t); timers.delete(win) }
        stage.dataset.hover = val
      }
      const onLeave = () => {
        const t = setTimeout(() => {
          if (stage.dataset.hover === val) delete stage.dataset.hover
          timers.delete(win)
        }, 150)
        timers.set(win, t)
      }
      win.addEventListener('mouseenter', onEnter)
      win.addEventListener('mouseleave', onLeave)
      cleanup.push(() => {
        win.removeEventListener('mouseenter', onEnter)
        win.removeEventListener('mouseleave', onLeave)
      })
    })

    return () => {
      cleanup.forEach(fn => fn())
      timers.forEach(t => clearTimeout(t))
    }
  }, [])

  useEffect(() => {
    const area = photoRef.current
    const mask = maskRef.current
    if (!area || !mask) return
    let rafId = 0, tx = 0, ty = 0, cx = 0, cy = 0
    let easterTimer: ReturnType<typeof setTimeout> | null = null

    const onMove = (e: MouseEvent) => {
      const r = area.getBoundingClientRect()
      tx = e.clientX - r.left; ty = e.clientY - r.top
    }
    const loop = () => {
      cx += (tx - cx) * 0.12; cy += (ty - cy) * 0.12
      mask.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%) rotate(${(tx - cx) * 0.4}deg) scale(${1 + Math.sin(cx * 0.05) * 0.05})`
      rafId = requestAnimationFrame(loop)
    }
    const onEnter = () => {
      mask.style.opacity = '1'
      loop()
      easterTimer = setTimeout(() => setEasterVisible(true), 1500)
    }
    const onLeave = () => {
      mask.style.opacity = '0'
      cancelAnimationFrame(rafId)
      if (easterTimer) clearTimeout(easterTimer)
      setEasterVisible(false)
    }
    area.addEventListener('mousemove', onMove)
    area.addEventListener('mouseenter', onEnter)
    area.addEventListener('mouseleave', onLeave)
    return () => {
      area.removeEventListener('mousemove', onMove)
      area.removeEventListener('mouseenter', onEnter)
      area.removeEventListener('mouseleave', onLeave)
      cancelAnimationFrame(rafId)
      if (easterTimer) clearTimeout(easterTimer)
    }
  }, [])

  return (
    <div className="detail-overlay about-page">
      <div className="about-inner">

        {/* ── HEADLINE ─────────────────────────────────────── */}
        <h1 className="ab-headline">
          I design things people<br/>
          actually enjoy using —<br/>
          not just tolerate.
        </h1>

        {/* ── PHOTO ────────────────────────────────────────── */}
        <div className="ab-photo-outer" ref={photoRef}>
          {/* Inner clip — keeps photo inside border-radius */}
          <div className="ab-photo-inner">
            {!imgLoaded && <div className="ab-photo-shimmer" />}
            <img
              src="/about/salil-mountain.jpg"
              alt="Salil"
              className={`ab-photo${imgLoaded ? ' loaded' : ''}`}
              onLoad={() => setImgLoaded(true)}
            />
          </div>
          {/* ゴ symbols — top-right, bleed outside image */}
          <span className="menacing-go" style={{ top: '-18px', right: '52px',  fontSize: '2.2rem', ['--gi' as string]: 0 } as React.CSSProperties}>ゴ</span>
          <span className="menacing-go" style={{ top:  '14px', right: '-14px', fontSize: '2.8rem', ['--gi' as string]: 1 } as React.CSSProperties}>ゴ</span>
          <span className="menacing-go" style={{ top:  '64px', right: '-28px', fontSize: '2.5rem', ['--gi' as string]: 2 } as React.CSSProperties}>ゴ</span>
          <span className="menacing-go" style={{ top:  '30px', right:  '18px', fontSize: '1.6rem', ['--gi' as string]: 3 } as React.CSSProperties}>ゴ</span>
          {/* JoJo easter egg text */}
          <span
            ref={easterRef}
            className={`ab-easter-egg${easterVisible ? ' visible' : ''}`}
          >
            "KONO DIO DA! ..."
          </span>
          {/* Mask cursor — lives outside the clipping inner div */}
          <div className="jojo-cursor" ref={maskRef}>
            <img src="/about/jojo-mask.png" alt="" />
          </div>
        </div>

        {/* ── BIO ──────────────────────────────────────────── */}
        <p className="ab-bio">
          I think in systems, sketch in chaos,
          and obsess over the tiny details
          most people never notice — but always feel.
        </p>

        {/* ── PROCESS — side by side ───────────────────────── */}
        <h2 className="ab-section-title">Process, but not boring</h2>
        <div className="ab-think-grid">
          <div className="ab-process">
            {PROCESS.map(s => (
              <div key={s.n} className="ab-process-row">
                <span className="ab-process-n">[{s.n}]</span>
                <div>
                  <div className="ab-process-t">{s.t}</div>
                  <div className="ab-process-d">{s.d}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="ab-sketch-wrap">
            <img src="/about/sketch.png" alt="Design thinking illustration" className="ab-sketch-img" />
          </div>
        </div>

        {/* ── SIDE QUESTS ──────────────────────────────────── */}
        <div className="sq-wrap">
          <h2 className="sq-headline">What I do when I'm not<br/>overthinking pixels</h2>

          <div className="sq-prose">
            <p>
              When I'm not designing, I'm probably{' '}
              <span className="sq-chip">
                <img className="sq-chip-img" src="/sq/hiking.png" alt="hiking" />
              </span>{' '}
              <span className="sq-hl sq-hl--green">hiking somewhere I shouldn't be</span>,
              or logging runs on{' '}
              <a href="https://strava.com" className="sq-chip-link sq-strava-pill" target="_blank" rel="noopener noreferrer">
                <img className="sq-chip-img" src="/sq/running.png" alt="running" />
                <span className="sq-strava-label sq-strava-label--orange">Strava <span className="sq-arr">↗</span></span>
              </a>{' '}
              trying to convince myself I'm consistent.
            </p>

            <p>
              I read{' '}
              <span className="sq-chip">
                <img className="sq-chip-img" src="/sq/vagabond.png" alt="Vagabond" />
              </span>{' '}
              <span className="sq-hl sq-hl--purple">Vagabond</span> for the philosophy, watch{' '}
              <span className="sq-chip">
                <img className="sq-chip-img" src="https://i.pinimg.com/originals/e6/1c/54/e61c541a6e262c678ec0bb5a1cf74c90.gif" alt="JoJo" />
              </span>{' '}
              <span className="sq-hl sq-hl--purple">JoJo</span> for the chaos, and loop{' '}
              <span className="sq-chip">
                <img className="sq-chip-img" src="/sq/music.png" alt="music" />
              </span>{' '}
              <span className="sq-hl sq-hl--teal">Radiohead, Tool, and Jeff Buckley</span> like it's a personality trait.
            </p>

            <p>
              Also:{' '}
              <span className="sq-chip">
                <img className="sq-chip-img" src="/sq/ufc.png" alt="UFC" />
              </span>{' '}
              <span className="sq-hl sq-hl--red">UFC</span> for reality checks,{' '}
              <span className="sq-chip">
                <img className="sq-chip-img" src="/sq/f1.png" alt="F1" />
              </span>{' '}
              <span className="sq-hl sq-hl--amber">F1</span> for strategy — both remind me design is just controlled chaos.
            </p>

            <p>
              And yes —{' '}
              <span className="sq-chip">
                <img className="sq-chip-img" src="/sq/gaming.png" alt="gaming" />
              </span>{' '}
              <span className="sq-hl sq-hl--purple">I game</span>.
              Valorant (bad aim). CS2 (trying). Minecraft (peaceful mode).
            </p>
          </div>

          {/* Spotify pill */}
          <a
            href="https://open.spotify.com/user/31lqf62ns5hdz2ucc6ny54dqtfqi/playlists"
            target="_blank"
            rel="noopener noreferrer"
            className="sq-spotify"
          >
            <div className="sq-sp-icon">
              <svg viewBox="0 0 24 24" fill="#fff">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
              </svg>
            </div>
            <div className="sq-sp-txt">
              <span>What I've been looping lately</span>
              <span>Playlists &amp; vibes I'm on lately</span>
            </div>
            <div className="sq-waveform">
              <span/><span/><span/><span/><span/><span/>
            </div>
          </a>
        </div>

        {/* ── BLOG / OPEN TABS ─────────────────────────────── */}
        <div className="bt-section">
          <div className="bt-header">
            <h2 className="bt-headline">Open tabs in my brain</h2>
          </div>

          <div className="bt-stage">
            <div className="bt-window bt-w1">
              <div className="bt-bar">
                <span className="bt-dot bt-dot--red"/><span className="bt-dot bt-dot--yellow"/><span className="bt-dot bt-dot--green"/>
                <span className="bt-filename">ai-is-not-the-enemy.txt</span>
              </div>
              <div className="bt-body">
                <span className="bt-tag bt-tag--green">AI × Design</span>
                <img className="bt-thumb" src="https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=500&q=75" alt="AI and design" />
                <p className="bt-title">AI co-designers in UX workflows</p>
                <p className="bt-desc">Not replacing — reshaping how we think and iterate.</p>
                <p className="bt-quip">"Tools change. Thinking matters."</p>
                <div className="bt-footer">
                  <a href="#" className="bt-cta">Dive in <span className="bt-arr">↗</span></a>
                </div>
              </div>
            </div>

            <div className="bt-window bt-w2">
              <div className="bt-bar">
                <span className="bt-dot bt-dot--red"/><span className="bt-dot bt-dot--yellow"/><span className="bt-dot bt-dot--green"/>
                <span className="bt-filename">lorem-ipsum-is-bad.md</span>
              </div>
              <div className="bt-body">
                <span className="bt-tag bt-tag--purple">Thought</span>
                <img className="bt-thumb" src="/blog-lorem-ipsum.png" alt="Stop using Lorem Ipsum" />
                <p className="bt-title">Stop using Lorem Ipsum</p>
                <p className="bt-desc">If the content is fake, the design is just guessing.</p>
                <p className="bt-quip">"Design starts with meaning."</p>
                <div className="bt-footer">
                  <a href="https://mantraideas.com/stop-using-lorem-ipsum/" target="_blank" rel="noopener noreferrer" className="bt-cta">Read the thought <span className="bt-arr">↗</span></a>
                </div>
              </div>
            </div>

            <div className="bt-window bt-w3">
              <div className="bt-bar">
                <span className="bt-dot bt-dot--red"/><span className="bt-dot bt-dot--yellow"/><span className="bt-dot bt-dot--green"/>
                <span className="bt-filename">north-nepal.log</span>
              </div>
              <div className="bt-body">
                <span className="bt-tag bt-tag--amber">Trek / Life</span>
                <img className="bt-thumb" src="https://images.unsplash.com/photo-1542224566-6e85f2e6772f?w=500&q=75" alt="mountain trekking Nepal" />
                <p className="bt-title">Adventures in North Nepal</p>
                <p className="bt-desc">Altitude, silence, and perspective shifts you don't get on screens.</p>
                <p className="bt-quip">"This one's offline."</p>
                <div className="bt-footer">
                  <a href="#" className="bt-cta">Worth your 2 mins <span className="bt-arr">↗</span></a>
                </div>
              </div>
            </div>
          </div>

          {/* <p className="bt-endline">I don't write often — only when something sticks.</p> */}
        </div>

      </div>

      <footer className="ab-page-footer">
        <div className="footer-blobs">
          <div className="footer-blob fb1"/>
          <div className="footer-blob fb2"/>
          <div className="footer-blob fb3"/>
        </div>
        <p>Crafted with intent for humans</p>
        <p style={{ marginTop: '4px', fontSize: '11px', color: '#AAA' }}>© Salil Timalsina</p>
      </footer>
    </div>
  )
}
