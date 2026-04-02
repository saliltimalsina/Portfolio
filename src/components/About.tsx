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
                <img className="sq-chip-img" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=120&q=80" alt="hiking trail" />
              </span>{' '}
              <span className="sq-hl sq-hl--green">hiking somewhere I shouldn't be</span>,
              or logging runs on{' '}
              <a href="https://strava.com" className="sq-chip-link sq-strava-pill" target="_blank" rel="noopener noreferrer">
                <img className="sq-chip-img" src="https://images.unsplash.com/photo-1571008887538-b36bb32f4571?w=120&q=80" alt="running" />
                <span className="sq-strava-label">Strava <span className="sq-arr">↗</span></span>
              </a>{' '}
              trying to convince myself I'm consistent.
            </p>

            <p>
              I read{' '}
              <span className="sq-chip">
                <img className="sq-chip-img" src="https://images.unsplash.com/photo-1612178537253-bccd437b730e?w=120&q=80" alt="manga" />
              </span>{' '}
              <span className="sq-hl sq-hl--purple">Vagabond</span> for the philosophy, watch{' '}
              <span className="sq-chip">
                <img className="sq-chip-img" src="https://images.unsplash.com/photo-1635805737707-575885ab0820?w=120&q=80" alt="JoJo" />
              </span>{' '}
              <span className="sq-hl sq-hl--purple">JoJo</span> for the chaos, and loop{' '}
              <span className="sq-chip">
                <img className="sq-chip-img" src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=120&q=80" alt="music" />
              </span>{' '}
              <span className="sq-hl sq-hl--teal">Radiohead, Tool, and Jeff Buckley</span> like it's a personality trait.
            </p>

            <p>
              Also:{' '}
              <span className="sq-chip">
                <img className="sq-chip-img" src="https://images.unsplash.com/photo-1547153760-18fc86324498?w=120&q=80" alt="UFC" />
              </span>{' '}
              <span className="sq-hl sq-hl--red">UFC</span> for reality checks,{' '}
              <span className="sq-chip">
                <img className="sq-chip-img" src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=120&q=80" alt="F1" />
              </span>{' '}
              <span className="sq-hl sq-hl--amber">F1</span> for strategy — both remind me design is just controlled chaos.
            </p>

            <p>
              And yes —{' '}
              <span className="sq-chip">
                <img className="sq-chip-img" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=120&q=80" alt="gaming" />
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

      </div>

      <footer className="ab-page-footer">
        <div className="footer-blobs">
          <div className="footer-blob fb1"/>
          <div className="footer-blob fb2"/>
          <div className="footer-blob fb3"/>
        </div>
        <p>Crafted with intent for humans</p>
        <p style={{ marginTop: '4px', fontSize: '11px', color: '#AAA' }}>© Salil Timalsina · 2025</p>
      </footer>
    </div>
  )
}
