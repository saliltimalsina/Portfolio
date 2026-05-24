// Post-build prerender: generate per-route HTML files in dist/<slug>/index.html
// Bakes title, meta, OG, canonical, and visible content shadow so Googlebot
// indexes real content without needing to render JS first.

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const DIST = join(ROOT, 'dist')
const ORIGIN = 'https://saliltimalsina.com.np'

const PROJECTS = [
  {
    slug: 'clearpath',
    title: 'ClearPath — Supply Chain Platform',
    client: 'ClearPath',
    date: 'April 2026',
    intro:
      'A dual-sided supply chain platform connecting garment factories and buyers — giving factories a clear action queue and buyers real-time shipment visibility with direct customer impact data.',
    cover: '/mockups/ClearPath/Cover.png',
    keywords: ['supply chain UX', 'B2B platform design', 'garment factory dashboard', 'PO tracking'],
    highlights: [
      'Factory action queue with per-PO progress and urgency',
      'Shipment batch creation, four-stage tracker, QC photo evidence',
      'Buyer customer-impact view with priority scoring across accounts',
      'Editable business-rules engine for fill-rate optimization',
    ],
  },
  {
    slug: 'transfernet',
    title: 'TransferNet — Mobile Money Transfer App',
    client: 'TransferNet',
    date: 'April 2026',
    intro:
      'Designed an end-to-end mobile money transfer app for the Australian diaspora — covering onboarding, identity verification, a live-rate home screen, and a four-step send flow with receipt upload, giving senders full visibility from tap to delivery.',
    cover: '/mockups/TransferNet/Cover.png',
    keywords: ['mobile money app design', 'fintech UX', 'KYC flow', 'remittance app'],
    highlights: [
      'Three-screen welcome and email verification with no dead ends',
      'Full KYC loop: identity, address, proof of residence',
      'Live exchange-rate home screen with sparkline',
      'Five-stage tracking timeline from list to delivery',
    ],
  },
  {
    slug: 'telvox',
    title: 'Telvox — AI Voice Agent Platform',
    client: 'Telvox',
    date: 'April 2026',
    intro:
      'Designed a full-stack AI voice agent management platform — giving businesses a single command centre to build agents, run telephony campaigns, track leads and appointments, and manage client billing from one dashboard.',
    cover: '/mockups/Telvox/Tel.png',
    keywords: ['AI voice agent UX', 'SaaS dashboard design', 'agent builder UI', 'call logs'],
    highlights: [
      'Twelve-KPI overview dashboard for the full operation',
      'Agent config: voice, instructions, knowledge base, tools',
      'Versioned system prompts with one-click rollback',
      'Outbound campaigns, lead tracking, Google Calendar sync, billing',
    ],
  },
  {
    slug: 'skathi',
    title: 'Skathi — Music App & Web Platform',
    client: 'Skathi',
    date: 'April 2026',
    intro:
      'Designed the complete Skathi experience across iOS and web — a music platform built for South Asian listeners. The app covers streaming from onboarding to playback. The web extends into beats licensing, artist booking, studio rental, events, and a merch shop.',
    cover: '/mockups/Skathi/Cover.png',
    keywords: ['music app design', 'streaming UX', 'beats marketplace', 'artist booking platform'],
    highlights: [
      'iOS app: onboarding, genre-filtered home feed, explore, queue, lyrics',
      'Web: artist pages, album detail, beats marketplace with licensing tiers',
      'Event ticketing with checkout, artist + studio booking forms',
      'Merch shop with cart and order management',
    ],
  },
  {
    slug: 'occs',
    title: 'OCCS — Outbound Call Centre System',
    client: 'OCCS / Staie',
    date: '2024–2026',
    intro:
      'Redesigned the clerk-facing side of OCCS — a multi-tenant call centre platform used by 300+ clerks across multiple client companies. The goal was simple: give clerks everything they need on one screen during a live call, and get out of their way the rest of the time.',
    cover: '/mockups/OCCS/OCCS Cover.png',
    keywords: ['call centre software UX', 'enterprise dashboard design', 'multi-tenant SaaS'],
    highlights: [
      'Unified active-call screen replacing fragmented legacy modals',
      'Callbacks dashboard, focus mode, persistent minimised call pill',
      'Live call forwarding with status, in-call callback scheduling',
      'Impact: ~35% faster response, ~30% less manual coordination',
    ],
  },
  {
    slug: 'jobbicus',
    title: 'Jobbicus — Career Platform',
    client: 'Jobbicus',
    date: '2025',
    intro:
      'Designed a full-featured career platform connecting job seekers and employers — covering sign-up and profile setup, a personalised home feed, employer dashboards, job posting, proposals, upskilling courses, virtual hiring fairs, and accommodation support for relocating candidates.',
    cover: '/mockups/Jobbicus/Onboard.png',
    keywords: ['career platform design', 'job board UX', 'employer dashboard', 'mobile onboarding'],
    highlights: [
      'Landing page (desktop + mobile), sign-in/up, mobile onboarding',
      'Personalised home feed with free and subscribed states',
      'Employer dashboard, job posting, proposals, invite candidates',
      'Courses (browse, enrol, progress, quiz), messages, virtual hiring fairs',
    ],
  },
]

const SOCIAL = {
  linkedin: 'https://www.linkedin.com/in/saliltimalsina/',
  x: 'https://x.com/saliltimalsina',
  instagram: 'https://www.instagram.com/why.salil/',
  behance: 'https://www.behance.net/saliltimalsina1',
  email: 'mailto:salil.timalsina@gmail.com',
}

function escapeHtml(s) {
  return s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;')
}

function setMeta(html, selector, value) {
  // selector is the meta tag string (regex-safe) like 'name="description"' or 'property="og:title"'
  const pattern = new RegExp(`(<meta\\s+${selector}\\s+content=)"[^"]*"`, 'i')
  return html.replace(pattern, `$1"${escapeHtml(value)}"`)
}

function setTitle(html, title) {
  return html.replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`)
}

function setCanonical(html, url) {
  return html.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${url}" />`,
  )
}

function replaceContentShadow(html, shadowHtml) {
  // Replace the hidden content shadow div in index.html
  return html.replace(
    /<div aria-hidden="true"[^>]*>[\s\S]*?<\/div>\s*<script type="module"/,
    `<div aria-hidden="true" style="position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden">${shadowHtml}</div>\n    <script type="module"`,
  )
}

function replaceNoscript(html, noscriptHtml) {
  return html.replace(/<noscript>[\s\S]*?<\/noscript>/, `<noscript>${noscriptHtml}</noscript>`)
}

function buildProjectPage(shellHtml, p) {
  const url = `${ORIGIN}/${p.slug}`
  const pageTitle = `${p.title} — Case Study by Salil Timalsina`
  const desc = p.intro

  let html = shellHtml
  html = setTitle(html, pageTitle)
  html = setMeta(html, 'name="description"', desc)
  html = setMeta(html, 'name="keywords"', [
    'Salil Timalsina',
    'Salil',
    'case study',
    p.client,
    p.title,
    ...p.keywords,
    'UI UX designer Nepal',
  ].join(', '))
  html = setMeta(html, 'property="og:title"', pageTitle)
  html = setMeta(html, 'property="og:description"', desc)
  html = setMeta(html, 'property="og:url"', url)
  html = setMeta(html, 'property="og:type"', 'article')
  html = setMeta(html, 'name="twitter:title"', pageTitle)
  html = setMeta(html, 'name="twitter:description"', desc)
  html = setCanonical(html, url)

  const shadow = `
    <h1>${escapeHtml(p.title)} — Case Study by Salil Timalsina</h1>
    <p><strong>Client:</strong> ${escapeHtml(p.client)} · <strong>Date:</strong> ${escapeHtml(p.date)} · <strong>Designer:</strong> Salil Timalsina, UI/UX Interaction Designer.</p>
    <p>${escapeHtml(p.intro)}</p>
    <h2>Highlights</h2>
    <ul>${p.highlights.map(h => `<li>${escapeHtml(h)}</li>`).join('')}</ul>
    <p>Designed by Salil Timalsina. See more case studies at <a href="${ORIGIN}/">Salil Timalsina's portfolio</a>.</p>
  `

  html = replaceContentShadow(html, shadow)
  html = replaceNoscript(html, `
      <h1>${escapeHtml(p.title)} — Case Study by Salil Timalsina</h1>
      <p>${escapeHtml(p.intro)}</p>
      <p><a href="/">Back to Salil Timalsina's portfolio</a></p>
  `)

  return html
}

function buildAboutPage(shellHtml) {
  const url = `${ORIGIN}/about`
  const title = 'About Salil Timalsina — UI/UX Interaction Designer'
  const desc =
    'About Salil Timalsina — UI/UX interaction designer based in Nepal. Background, process, tools, and design philosophy across product design, design systems, and end-to-end product experiences.'

  let html = shellHtml
  html = setTitle(html, title)
  html = setMeta(html, 'name="description"', desc)
  html = setMeta(html, 'property="og:title"', title)
  html = setMeta(html, 'property="og:description"', desc)
  html = setMeta(html, 'property="og:url"', url)
  html = setMeta(html, 'name="twitter:title"', title)
  html = setMeta(html, 'name="twitter:description"', desc)
  html = setCanonical(html, url)

  const shadow = `
    <h1>About Salil Timalsina</h1>
    <p>Salil Timalsina is a UI/UX interaction designer based in Nepal with 2+ years of experience designing web and mobile products, building scalable design systems (MUI, Flowbite, Untitled), leading end-to-end design, collaborating with clients, and mentoring interns.</p>
    <p>Salil specialises in product design, interaction design, design systems, and prototyping. Work spans SaaS dashboards, fintech apps, AI voice platforms, supply chain tools, music platforms, and career platforms.</p>
    <p>Connect with Salil Timalsina on <a href="${SOCIAL.linkedin}">LinkedIn</a>, <a href="${SOCIAL.x}">X</a>, <a href="${SOCIAL.behance}">Behance</a>, or <a href="${SOCIAL.email}">email</a>.</p>
  `
  html = replaceContentShadow(html, shadow)
  html = replaceNoscript(html, `
      <h1>About Salil Timalsina — UI/UX Interaction Designer</h1>
      <p>${escapeHtml(desc)}</p>
      <p><a href="/">Back to portfolio</a></p>
  `)
  return html
}

function buildHomePage(shellHtml) {
  // The default index.html shell already has good home meta. Just enhance the visible shadow.
  const shadow = `
    <h1>Salil Timalsina — UI/UX Interaction Designer Portfolio</h1>
    <p>Hi, I'm Salil Timalsina — UI/UX interaction designer from Nepal. 2+ years crafting web and mobile experiences, building scalable design systems (MUI, Flowbite, Untitled), leading end-to-end design, collaborating with clients, and mentoring interns.</p>
    <h2>Selected case studies by Salil Timalsina</h2>
    <ul>
      ${PROJECTS.map(p => `<li><a href="/${p.slug}"><strong>${escapeHtml(p.title)}</strong> — ${escapeHtml(p.intro)}</a></li>`).join('')}
    </ul>
    <h2>Connect with Salil Timalsina</h2>
    <ul>
      <li><a href="${SOCIAL.linkedin}">LinkedIn — Salil Timalsina</a></li>
      <li><a href="${SOCIAL.x}">X / Twitter — @saliltimalsina</a></li>
      <li><a href="${SOCIAL.instagram}">Instagram — @why.salil</a></li>
      <li><a href="${SOCIAL.behance}">Behance — Salil Timalsina</a></li>
    </ul>
  `
  return replaceContentShadow(shellHtml, shadow)
}

// ─── blog ───────────────────────────────────────────────────────────────────
const POSTS = [
  {
    slug: 'designing-b2b-saas-dashboards',
    title: 'Designing B2B SaaS dashboards that earn the third click',
    description:
      'How Salil Timalsina approaches dense B2B SaaS dashboards — lessons from OCCS, Telvox, and ClearPath: action queues over inboxes, one screen for the live task, and editable business rules.',
    date: '2026-05-01',
    body: `
      <p>Most B2B dashboards lose the operator at the third click. By then the user has scanned a wall of KPIs, scrolled past unrelated panels, and clicked into a screen that demands another navigation choice. Salil Timalsina's recent work on <a href="/occs">OCCS</a>, <a href="/telvox">Telvox</a>, and <a href="/clearpath">ClearPath</a> shares three patterns that hold the operator's attention long enough to finish the job.</p>

      <h2>1. Replace the inbox with an action queue</h2>
      <p>Clerks, factory managers, and voice-agent ops don't want to triage. They want the next thing to do. ClearPath's factory portal opens on a prioritised queue of POs — not a list of every record sorted by date. OCCS surfaces the next callback the clerk owes, not the full call log.</p>

      <h2>2. One screen for the live task</h2>
      <p>OCCS used to fragment a live call across modals: greeting, transcript, result code, transfer. The redesign unified it to a single workspace that survives across navigation, with a minimised pill if the clerk steps away. Same idea behind Telvox's agent config — voice, instructions, knowledge base, and tools are not separate pages.</p>

      <h2>3. Make the rules editable</h2>
      <p>Every B2B dashboard hides business logic somewhere. ClearPath's priority scoring lives in a transparent rules editor — no engineering needed to change weights when sales reorganises its book.</p>

      <p>For more on Salil Timalsina's design process, see the <a href="/about">about page</a>.</p>
    `,
  },
  {
    slug: 'designing-for-south-asian-diaspora',
    title: 'Designing for the South Asian diaspora — TransferNet and Skathi',
    description:
      'Two of Salil Timalsina\'s 2026 case studies — TransferNet (money transfer for the Australian diaspora) and Skathi (music platform for South Asian listeners) — share a design lens worth unpacking.',
    date: '2026-05-10',
    body: `
      <p>Designing for diaspora users means designing for two contexts at once: the country they're in and the country they're sending value back to. Two of Salil Timalsina's 2026 case studies — <a href="/transfernet">TransferNet</a> and <a href="/skathi">Skathi</a> — share a design lens worth unpacking.</p>

      <h2>Trust before delight</h2>
      <p>TransferNet's send flow opens with a live exchange rate and a sparkline, not a hero. Diaspora senders check rates compulsively; the home screen has to be a calculator first, an app second. KYC is unavoidable but it doesn't have to feel like a wall — three screens with no dead ends, clear progress, and a real "All done!" celebration at the end.</p>

      <h2>Cultural specificity in defaults</h2>
      <p>Skathi's onboarding asks for genre preference using South Asian categories first, not Western chart pop. The home feed surfaces regional artists. The beats marketplace tiers licensing in dollar bands that make sense for South Asian indie producers, not Western majors.</p>

      <h2>Designers from the community matter</h2>
      <p>Salil Timalsina designs from Nepal. That shapes both projects: the small details Western product designers wouldn't catch — the right tone, the right script choices, the right defaults — are not feature requests, they're built in.</p>

      <p>Read the <a href="/transfernet">TransferNet case study</a> or the <a href="/skathi">Skathi case study</a> for full design walkthroughs.</p>
    `,
  },
]

function blogShell({ title, description, url, bodyHtml }) {
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="author" content="Salil Timalsina" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
    <link rel="canonical" href="${url}" />
    <meta property="og:type" content="article" />
    <meta property="og:site_name" content="Salil Timalsina" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:image" content="${ORIGIN}/og.png" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${ORIGIN}/og.png" />
    <style>
      body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 720px; margin: 60px auto; padding: 0 24px; color: #222; line-height: 1.65; font-size: 17px; }
      h1 { font-size: 34px; line-height: 1.2; margin-bottom: 12px; letter-spacing: -0.01em; }
      h2 { font-size: 22px; margin-top: 40px; margin-bottom: 10px; }
      a { color: #b73ad6; text-decoration: none; }
      a:hover { text-decoration: underline; }
      .meta { color: #888; font-size: 14px; margin-bottom: 40px; }
      .back { display: inline-block; margin-bottom: 32px; font-size: 14px; }
      footer { margin-top: 60px; padding-top: 24px; border-top: 1px solid #eee; color: #888; font-size: 14px; }
    </style>
  </head>
  <body>
    <a class="back" href="/">← Back to Salil Timalsina's portfolio</a>
    ${bodyHtml}
    <footer>
      Written by <a href="/about">Salil Timalsina</a> — UI/UX Interaction Designer.
      <br/>Connect: <a href="${SOCIAL.linkedin}">LinkedIn</a> · <a href="${SOCIAL.x}">X</a> · <a href="${SOCIAL.behance}">Behance</a>.
    </footer>
  </body>
</html>`
}

function buildBlogIndex() {
  const bodyHtml = `
    <h1>Writing by Salil Timalsina</h1>
    <p class="meta">Notes on product design, interaction design, and design systems.</p>
    ${POSTS.map(
      p => `
        <article style="margin-bottom: 40px;">
          <h2 style="margin-top: 0;"><a href="/blog/${p.slug}">${escapeHtml(p.title)}</a></h2>
          <div class="meta">${escapeHtml(p.date)}</div>
          <p>${escapeHtml(p.description)}</p>
        </article>
      `,
    ).join('')}
  `
  return blogShell({
    title: 'Writing — Salil Timalsina, UI/UX Interaction Designer',
    description:
      'Writing by Salil Timalsina on product design, interaction design, design systems, and case studies from B2B SaaS, fintech, and consumer apps.',
    url: `${ORIGIN}/blog`,
    bodyHtml,
  })
}

function buildBlogPost(post) {
  const bodyHtml = `
    <h1>${escapeHtml(post.title)}</h1>
    <div class="meta">${escapeHtml(post.date)} · by <a href="/about">Salil Timalsina</a></div>
    ${post.body}
  `
  return blogShell({
    title: `${post.title} — Salil Timalsina`,
    description: post.description,
    url: `${ORIGIN}/blog/${post.slug}`,
    bodyHtml,
  })
}

// ─── main ───────────────────────────────────────────────────────────────────
const shellPath = join(DIST, 'index.html')
if (!existsSync(shellPath)) {
  console.error(`prerender: ${shellPath} not found. Run vite build first.`)
  process.exit(1)
}
const shell = readFileSync(shellPath, 'utf8')

// 1. Enhance home index.html
writeFileSync(shellPath, buildHomePage(shell))

// 2. About
const aboutDir = join(DIST, 'about')
mkdirSync(aboutDir, { recursive: true })
writeFileSync(join(aboutDir, 'index.html'), buildAboutPage(shell))

// 3. Per project
for (const p of PROJECTS) {
  const dir = join(DIST, p.slug)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), buildProjectPage(shell, p))
}

// 4. Blog
const blogDir = join(DIST, 'blog')
mkdirSync(blogDir, { recursive: true })
writeFileSync(join(blogDir, 'index.html'), buildBlogIndex())
for (const post of POSTS) {
  const dir = join(blogDir, post.slug)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'index.html'), buildBlogPost(post))
}

console.log(
  `prerender: wrote home + /about + ${PROJECTS.length} project pages + /blog + ${POSTS.length} posts.`,
)
