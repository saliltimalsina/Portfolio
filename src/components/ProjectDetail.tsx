import type { Project } from '../data/projects'

interface Props {
  project: Project
  onClose: () => void
}

function renderMockup(sectionIdx: number, projectId: number) {
  const isDark = projectId === 2 || projectId === 3
  const a = isDark ? 'rgba(255,255,255,' : 'rgba(20,10,50,'
  if (sectionIdx % 2 === 0) {
    return (
      <div style={{ display: 'flex', gap: '14px', width: '100%', height: '100%', padding: '28px' }}>
        <div style={{ width: '154px', background: `${a}.09)`, borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ height: '20px', background: `${a}.18)`, borderRadius: '6px', width: '55%', marginBottom: '6px' }} />
          {[80, 60, 75, 50, 70, 62].map((w, i) => (
            <div key={i} style={{ height: '8px', background: `${a}.12)`, borderRadius: '4px', width: `${w}%` }} />
          ))}
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <div style={{ height: '9px', background: `${a}.18)`, borderRadius: '4px', width: '100px' }} />
            <div style={{ height: '9px', background: `${a}.1)`, borderRadius: '4px', width: '66px' }} />
          </div>
          <div style={{ flex: 1, background: `${a}.07)`, borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', gap: '10px', flex: 1 }}>
              <div style={{ flex: 2, background: `${a}.12)`, borderRadius: '8px' }} />
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[1, 2, 3].map(i => (
                  <div key={i} style={{ flex: 1, background: `${a}.09)`, borderRadius: '8px' }} />
                ))}
              </div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              {[70, 48, 82].map((w, i) => (
                <div key={i} style={{ height: '7px', background: `${a}.12)`, borderRadius: '4px', width: `${w}%` }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div style={{ padding: '28px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', width: '100%', height: '100%' }}>
      {[1, 2, 3, 4, 5, 6].map(i => (
        <div key={i} style={{ background: `${a}.09)`, borderRadius: '12px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '8px', opacity: i > 5 ? 0.4 : 1 }}>
          <div style={{ height: '26px', width: '26px', borderRadius: '8px', background: `${a}.2)`, marginBottom: '4px' }} />
          <div style={{ height: '7px', background: `${a}.18)`, borderRadius: '4px', width: '75%' }} />
          <div style={{ height: '7px', background: `${a}.1)`, borderRadius: '4px', width: '55%' }} />
          <div style={{ height: '7px', background: `${a}.07)`, borderRadius: '4px', width: '65%' }} />
        </div>
      ))}
    </div>
  )
}

export default function ProjectDetail({ project, onClose }: Props) {
  const handleClose = () => {
    onClose()
    window.scrollTo(0, 0)
  }

  return (
    <div className="detail-overlay">
      <div className="detail-inner">
        <div className="detail-crumb">
          <button className="detail-back" onClick={handleClose}>← Back</button>
          <span className="detail-crumb-label">
            {project.client} · {project.category} · {project.date}
          </span>
        </div>

        <div className="detail-hero">
          <h1>{project.title}</h1>
          <p>{project.intro}</p>
          {project.docsUrl && (
            <a
              className="detail-docs-link"
              href={project.docsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
              View full documentation →
            </a>
          )}
        </div>

        {project.sections.map((sec, i) => (
          <div key={i} className="detail-section" style={{ animationDelay: `${.1 + i * .12}s` }}>
            <div className="detail-section-text">
              <div className="detail-label">{sec.label}</div>
              <h2>{sec.title}</h2>
              <p>{sec.body}</p>
            </div>
            <div
              className="detail-mockup"
              style={!sec.mockupImg ? { background: sec.mockupBg } : undefined}
            >
              {Array.isArray(sec.mockupImg)
                ? <div className={`detail-mockup-multi detail-mockup-multi--${sec.mockupLayout ?? 'landscape'}`}>
                    {sec.mockupImg.map((src, j) => (
                      <img key={j} src={src} alt={`${sec.title} ${j + 1}`} className="detail-mockup-multi-img" />
                    ))}
                  </div>
                : sec.mockupImg
                  ? <img src={sec.mockupImg} alt={sec.title} className="detail-mockup-img" />
                  : renderMockup(i, project.id)
              }
            </div>
          </div>
        ))}

        <div className="detail-footer-nav">
          <button className="detail-back-bottom" onClick={handleClose}>
            ← Back to portfolio
          </button>
        </div>
      </div>
    </div>
  )
}
