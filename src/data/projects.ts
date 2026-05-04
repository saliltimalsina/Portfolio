// ─── Skathi asset imports ─────────────────────────────────────────────────────
import skathiAppOnboarding from '../assets/Skathi/Onboarding Page.png'
import skathiAppUsername from '../assets/Skathi/Username.png'
import skathiAppUsername3 from '../assets/Skathi/Username-3.png'
import skathiAppUsername4 from '../assets/Skathi/Username-4.png'
import skathiAppUsername5 from '../assets/Skathi/Username-5.png'
import skathiAppUsername6 from '../assets/Skathi/Username-6.png'
import skathiAppUsername7 from '../assets/Skathi/Username-7.png'
import skathiAppUsername8 from '../assets/Skathi/Username-8.png'
import skathiAppUsername9 from '../assets/Skathi/Username-9.png'
import skathiAppUsername10 from '../assets/Skathi/Username-10.png'
import skathiAppSubPage from '../assets/Skathi/Sub Page.png'
import skathiAppSubPage1 from '../assets/Skathi/Sub Page-1.png'
import skathiAppSubPage2 from '../assets/Skathi/Sub Page-2.png'
import skathiAppSubPage3 from '../assets/Skathi/Sub Page-3.png'
import skathiAppSubPage4 from '../assets/Skathi/Sub Page-4.png'
import skathiAppSubPage5 from '../assets/Skathi/Sub Page-5.png'
import skathiAppAlbum from '../assets/Skathi/Album.png'
import skathiWebHomepage from '../assets/Skathi/Homepage.png'
import skathiWebArtist from '../assets/Skathi/Artist.png'
import skathiWebAlbum from '../assets/Skathi/Album_web.png'
import skathiWebBeats from '../assets/Skathi/Beats.png'
import skathiWebBeats1 from '../assets/Skathi/Beats-1.png'
import skathiWebBeatsList from '../assets/Skathi/Beats - List.png'
import skathiWebBeatsBox from '../assets/Skathi/Beats - Box.png'
import skathiWebBeatsDetail from '../assets/Skathi/Beats - Add to Cart or Detail.png'
import skathiWebBeatsDetailPlaying from '../assets/Skathi/Beats - Add to Cart or Detail - Playing.png'
import skathiWebBeatsLicense from '../assets/Skathi/Beats - License.png'
import skathiWebDetailedView from '../assets/Skathi/Detailed View.png'
import skathiWebEvent from '../assets/Skathi/Event.png'
import skathiWebCart from '../assets/Skathi/Cart.png'
import skathiWebBookArtist from '../assets/Skathi/Book Artist Form.png'
import skathiWebShop from '../assets/Skathi/Shop.png'
import skathiWebShop1 from '../assets/Skathi/Shop-1.png'
import skathiCover from '../assets/Skathi/Cover.png'
// ─────────────────────────────────────────────────────────────────────────────

export type ProjectSection = {
  label: string
  title: string
  body: string
  mockupBg: string
  mockupImg?: string | string[]
  mockupLayout?: 'portrait' | 'landscape'
}

export type Project = {
  id: number
  slug: string
  title: string
  client: string
  category: string
  date: string
  intro: string
  sections: ProjectSection[]
  cardImg?: string
  coverImg?: string
  docsUrl?: string
}

const PROJECTS: Project[] = [
  {
    id: 0,
    slug: 'clearpath',
    title: "ClearPath — Supply Chain Platform",
    client: "ClearPath",
    category: "Product Design",
    date: "April 2026",
    intro: "A dual-sided supply chain platform connecting garment factories and buyers — giving factories a clear action queue and buyers real-time shipment visibility with direct customer impact data.",
    cardImg: '/mockups/ClearPath/Cover.png',
    coverImg: '/mockups/ClearPath/Cover.png',
    sections: [
      {
        label: "Discovery · Problem Space",
        title: "No one knew what was happening, or whose job it was to fix it.",
        body: "Production updates lived in emails. QC happened over WhatsApp. Buyers only found out about delays after they'd already missed their window. We mapped the full factory-to-buyer workflow and designed around one principle: always show who acts next.",
        mockupBg: "linear-gradient(145deg,#f0f4ff,#e8eeff)",
        mockupImg: '/mockups/ClearPath/Desktop-8.png',
      },
      {
        label: "Design · Factory Dashboard",
        title: "Everything urgent, in one place.",
        body: "Pending actions — PO acknowledgements, overdue production updates, QC submissions, document uploads — are ranked and surfaced with counts. Active shipments and POs requiring action sit below, so factories always land on a clear to-do.",
        mockupBg: "linear-gradient(145deg,#fff7f0,#ffeedd)",
        mockupImg: '/mockups/ClearPath/Fac-11.png',
      },
      {
        label: "Design · Production Updates",
        title: "Per-PO cards with progress, forecast dates, and urgency built in.",
        body: "Each PO shows item count, unit value, a progress bar, and its forecast date. Overdue POs flag in orange. Factories update status and forecast dates in one inline form — no separate screen needed.",
        mockupBg: "linear-gradient(145deg,#fff7f0,#ffeedd)",
        mockupImg: ['/mockups/ClearPath/Fac-8.png', '/mockups/ClearPath/Fac-9.png'],
        mockupLayout: 'landscape',
      },
      {
        label: "Design · Shipment Creation",
        title: "Select open POs, create a shipment batch.",
        body: "The Factory PO Selection List lets factories pick multiple purchase orders and group them into a shipment. A floating summary bar confirms items selected and total units before committing.",
        mockupBg: "linear-gradient(145deg,#f0fff4,#e0ffee)",
        mockupImg: '/mockups/ClearPath/Fac-10.png',
      },
      {
        label: "Design · Shipment Tracking (Factory)",
        title: "Factories track every shipment's stage and expected arrival.",
        body: "A paginated table shows all shipments with origin, factory, five-dot stage indicator, countdown to arrival, and status badge. Delayed, Overdue, In Transit, Arrived — triaged at a glance.",
        mockupBg: "linear-gradient(145deg,#fff7f0,#ffeedd)",
        mockupImg: ['/mockups/ClearPath/Fac.png', '/mockups/ClearPath/Fac-12.png'],
        mockupLayout: 'landscape',
      },
      {
        label: "Design · Shipment Detail (Factory)",
        title: "Four-stage tracker with inspection photos, docs, and transit status.",
        body: "Factories see the same shipment detail view as buyers — progress tracker, inspection photo grid with category labels, and a shipping documents checklist. Quick Actions on the right let them upload docs, add AWB details, or submit QC without leaving the page.",
        mockupBg: "linear-gradient(145deg,#fff7f0,#ffeedd)",
        mockupImg: ['/mockups/ClearPath/Fac-13.png', '/mockups/ClearPath/Fac-14.png'],
        mockupLayout: 'landscape',
      },
      {
        label: "Design · Documentation (Factory)",
        title: "Docs upload with clear status — uploaded, pending, or missing.",
        body: "Commercial Invoice, Packing List, Air Way Bill, and GSP Certificate each show upload timestamp and an Upload or Update button. Missing documents flag in red. The Docs Upload stage on the progress tracker stays pending until all four are present.",
        mockupBg: "linear-gradient(145deg,#fff7f0,#ffeedd)",
        mockupImg: '/mockups/ClearPath/Fac-15.png',
      },
      {
        label: "Design · Transit Status (Factory)",
        title: "Carrier, AWB, airports, and a live countdown in one card.",
        body: "The Transit Status card shows carrier name, AWB number, departure airport, expected arrival airport, and a remaining-time bar. Tracking history runs below with timestamped milestones from booking to delivery.",
        mockupBg: "linear-gradient(145deg,#fff7f0,#ffeedd)",
        mockupImg: '/mockups/ClearPath/Fac-2.png',
      },
      {
        label: "Design · QC Submissions",
        title: "QC status across all POs in one list — by PO or by line item.",
        body: "The QC Submissions list shows every PO with product count, QTY, QC status (In Progress, Ready, Failed), and contract date. Factories can view it by Purchase Order or drill into individual Line Items.",
        mockupBg: "linear-gradient(145deg,#f0fff4,#e0ffee)",
        mockupImg: '/mockups/ClearPath/Fac-6.png',
      },
      {
        label: "Design · QC Submission Detail",
        title: "Factories upload evidence. Buyers make the call.",
        body: "Per line item, factories upload inspection photos and write notes. The status card shows whether the decision is pending, approved, or needs rework. Buyers are only prompted to decide once evidence is complete — no ambiguity about who acts next.",
        mockupBg: "linear-gradient(145deg,#f0fff4,#e0ffee)",
        mockupImg: ['/mockups/ClearPath/Fac-1.png', '/mockups/ClearPath/Fac-3.png'],
        mockupLayout: 'landscape',
      },
      {
        label: "Design · Data Ingestion & Validation",
        title: "Document mismatches caught before they become customs problems.",
        body: "Factories upload Invoice, Packing List, AWB, and Line Items — the system cross-validates all four and flags Weight Mismatches, Carton Count Discrepancies, and HS Code conflicts with exact figures. Errors can be fixed or exported before submission.",
        mockupBg: "linear-gradient(145deg,#fff7f0,#ffeedd)",
        mockupImg: '/mockups/ClearPath/Fac-7.png',
      },
      {
        label: "Design · QC Review (Buyer)",
        title: "Buyers review factory photos and pass, fail, or request rework.",
        body: "The buyer-side QC Review surfaces factory-uploaded photos with Pass / Fail / Rework decision buttons and a feedback field. Every decision is timestamped, tied to the line item, and visible to both sides.",
        mockupBg: "linear-gradient(145deg,#f0fff4,#e0ffee)",
        mockupImg: ['/mockups/ClearPath/Fac-4.png', '/mockups/ClearPath/Fac-5.png'],
        mockupLayout: 'landscape',
      },
      {
        label: "Design · Shipment Tracking (Buyer)",
        title: "Every shipment across every factory — one table.",
        body: "The buyer's shipment tracking view spans all suppliers with five-dot progress indicators and live arrival countdowns. Status badges let buyers triage without opening individual records.",
        mockupBg: "linear-gradient(145deg,#f0f4ff,#e8eeff)",
        mockupImg: '/mockups/ClearPath/Desktop-7.png',
      },
      {
        label: "Design · Shipment Detail (Buyer)",
        title: "Stage tracker, carrier info, and customer impact — all on one page.",
        body: "The buyer shipment detail shows the four-stage progress bar, carrier and AWB details, departure and arrival airports, and a remaining-time countdown. A Customer Impact sidebar shows exactly which customers are waiting and the total order value at risk.",
        mockupBg: "linear-gradient(145deg,#f0f4ff,#e8eeff)",
        mockupImg: ['/mockups/ClearPath/Desktop-3.png', '/mockups/ClearPath/Desktop-6.png'],
        mockupLayout: 'landscape',
      },
      {
        label: "Design · Documentation & Inspection (Buyer)",
        title: "Documents timestamped. Photos labelled. Nothing left to chase.",
        body: "Buyers see all uploaded shipping documents with exact timestamps, and a photo grid of pallet integrity images labelled by inspection category. No offline communication needed before the delivery decision.",
        mockupBg: "linear-gradient(145deg,#f0f4ff,#e8eeff)",
        mockupImg: ['/mockups/ClearPath/Desktop-4.png', '/mockups/ClearPath/Desktop-5.png'],
        mockupLayout: 'landscape',
      },
      {
        label: "Design · Fulfillment Dashboard",
        title: "Five KPIs, all orders, one view.",
        body: "High Fill, Lookahead-Fulfillable, Long-Pending Low Fill, On Hold, and Value Ready to Pick are surfaced as KPI cards. The order table below shows priority decision, recommendation score, fill %, and look-ahead timing across every open order.",
        mockupBg: "linear-gradient(145deg,#f0f4ff,#e8eeff)",
        mockupImg: '/mockups/ClearPath/Desktop-2.png',
      },
      {
        label: "Design · Order Detail",
        title: "System recommendations show exactly how long to wait for a better fill.",
        body: "Current fulfillment, a look-ahead projection, and an AI-generated recommendation sit above the line item table. Allocated QTY, free stock, dispatched, and per-SKU status leave nothing ambiguous.",
        mockupBg: "linear-gradient(145deg,#f0f4ff,#e8eeff)",
        mockupImg: ['/mockups/ClearPath/Order_detail_-_KPIs_Alts.png', '/mockups/ClearPath/Desktop-11.png'],
        mockupLayout: 'landscape',
      },
      {
        label: "Design · Customer Detail",
        title: "Priority score, open orders, and fill rate per customer.",
        body: "Each customer page shows a configurable priority gauge, open order count, total value, and fulfillment rate — with dropdowns for Response Speed, Payment Terms, Fulfillment Preference, and Standing. Orders, Linked Shipments, and Activity Log live in tabs below.",
        mockupBg: "linear-gradient(145deg,#f0f4ff,#e8eeff)",
        mockupImg: '/mockups/ClearPath/Desktop-1.png',
      },
      {
        label: "Design · Customer Overview",
        title: "All accounts ranked by priority score and fill rate.",
        body: "The Customer Overview lists every account with priority score, open orders, full-size allocation, aggregate value, and fill percentage. Import and New Order sit top-right so teams can act without navigating away.",
        mockupBg: "linear-gradient(145deg,#f0f4ff,#e8eeff)",
        mockupImg: '/mockups/ClearPath/Desktop.png',
      },
      {
        label: "Design · Picklist & Dispatch",
        title: "Allocated, on order, free stock, and dispatched — side by side.",
        body: "The Picklist shows customer-allocated QTY, QTY on order, free stock, and dispatched figures for every open order. Dispatched Orders confirm full vs partial per SKU with timestamps — one source of truth for what left the building.",
        mockupBg: "linear-gradient(145deg,#f0f4ff,#e8eeff)",
        mockupImg: ['/mockups/ClearPath/Desktop-9.png', '/mockups/ClearPath/Desktop-10.png'],
        mockupLayout: 'landscape',
      },
      {
        label: "Design · Warehouse Stock",
        title: "Every SKU, its free stock, and its allocation — one table.",
        body: "The Product Stock Table lists SKUs with QTY in stock, free stock, and allocated quantities — filterable by department, category, supplier, and location bin. Five KPI cards keep fulfillment readiness front and centre.",
        mockupBg: "linear-gradient(145deg,#f0f4ff,#e8eeff)",
        mockupImg: '/mockups/ClearPath/Warehouse.png',
      },
      {
        label: "Design · Business Rules",
        title: "The scoring logic is transparent and editable — no engineering needed.",
        body: "Ops teams set numeric score adjustments for Response Speed, Payment Terms, Fulfillment Flexibility, and Customer Standing. Every allocation and priority recommendation in the platform flows from these rules.",
        mockupBg: "linear-gradient(145deg,#f0f4ff,#e8eeff)",
        mockupImg: '/mockups/ClearPath/Rules.png',
      },
    ],
  },
  {
    id: 1,
    slug: 'transfernet',
    title: "TransferNet",
    client: "TransferNet",
    category: "Product Design",
    date: "April 2026",
    intro:
      "Designed an end-to-end mobile money transfer app for the Australian diaspora — covering onboarding, identity verification, a live-rate home screen, and a four-step send flow with receipt upload, giving senders full visibility from tap to delivery.",
    cardImg: "/mockups/TransferNet/TransferNet_Cover.png",
    coverImg: "/mockups/TransferNet/TransferNet_Cover.png",

    sections: [
      // ─── DISCOVERY ───────────────────────────────────────────────────────────
      {
        label: "Discovery · Problem Space",
        title: "Sending money abroad was buried in friction, fees, and zero feedback.",
        body: "Existing remittance apps forced users through long verification flows before they could see a rate, hid fees until checkout, and gave no indication of where their money was after sending. We mapped the full sender journey — from first open to delivery confirmation — to identify every point where trust broke down and urgency was lost.",
        mockupBg: "linear-gradient(145deg,#f0f4ff,#e8eeff)",
        mockupImg: "/mockups/TransferNet/Homepage_-_Alt_4.png",
      },

      // ─── ONBOARDING & SIGN UP ────────────────────────────────────────────────
      {
        label: "Design · Onboarding & Sign Up",
        title: "Welcome, sign up, and email verification — three screens, zero dead ends.",
        body: "The welcome screen gives new users two clear paths (Get Started / Already have an Account) with no feature lists or rate teasers — just confidence routing. Sign-up collects email, password, and an optional referral code on a single form. An OTP is sent immediately to confirm the account, with a 45-second countdown and a Resend option so users are never locked out. All screens keep the keyboard and primary CTA in frame throughout.",
        mockupBg: "linear-gradient(145deg,#eef2ff,#e4eaff)",
        mockupImg: [
          "/mockups/TransferNet/Login_flow.png",
          "/mockups/TransferNet/Sign_Up_2.png",
          "/mockups/TransferNet/Sign_Up_1.png",
        ],
        mockupLayout: 'portrait',
      },

      // ─── KYC — IDENTITY, ADDRESS & CONFIRMATION ──────────────────────────────
      {
        label: "Design · KYC — Identity, Address & Confirmation",
        title: "Personal details, address, proof of residence, and an 'All done!' — the full KYC loop.",
        body: "Identity (name, date of birth, country of birth, gender) is collected on one screen with Continue locked until every field is valid — no inline errors, just a reliable signal of completion. Address follows: street, suburb, postal code, state, country, and a proof-of-residence upload zone, keeping compliance visible without making it feel like an interrogation. An 'All done!' screen with a pulsing green check closes the loop cleanly — users arrive at the home screen fully verified, with a single Start Exploring App CTA.",
        mockupBg: "linear-gradient(145deg,#fff7f0,#ffeedd)",
        mockupImg: [
          "/mockups/TransferNet/Onboard-1.png",
          "/mockups/TransferNet/Onboard-2.png",
          "/mockups/TransferNet/Onboard-3.png",
          "/mockups/TransferNet/Sign_Up_3.png",
        ],
        mockupLayout: 'portrait',
      },

      // ─── LOGIN & HOME ─────────────────────────────────────────────────────────
      {
        label: "Design · Login & Home Screen",
        title: "Returning users get straight in — and land on a screen that closes the deal.",
        body: "The login screen mirrors sign-up's layout (email, password with show/hide, remember me, Forgot Password) to keep repeat visits frictionless. Password recovery issues a fresh OTP then routes to a Create New Password screen with inline character requirements — minimal steps, keyboard always in frame. The home screen leads with the live exchange rate and a trend sparkline before any tap, Small/Large/Tuition tabs to switch transfer type, fees crossed out to zero, and a single Send Now button — backed by social proof and a real-time activity ticker.",
        mockupBg: "linear-gradient(145deg,#0f172a,#1e293b)",
        mockupImg: [
          "/mockups/TransferNet/Login_flow-1.png",
          "/mockups/TransferNet/Login_flow-2.png",
          "/mockups/TransferNet/Homepage_-_Alt_4.png",
        ],
        mockupLayout: 'portrait',
      },

      // ─── SEND MONEY — STEPS 1–3 ───────────────────────────────────────────────
      {
        label: "Design · Send Money — Steps 1–3",
        title: "Amount, recipient, and payment upload — the first three steps of the send flow.",
        body: "Step 1 shows the live rate and trend inline, lets users pick delivery method, and breaks out fees and subtotal before they commit. Step 2 surfaces frequent recipients as avatar pills above a searchable list — a New recipient shortcut sits inline so adding someone never breaks flow, and Continue stays grey until a selection is made. Step 3 shows copy-pasteable bank details (account name, BSB, account number) alongside a Required receipt upload zone that keeps Continue locked until evidence is attached, giving ops a full audit trail.",
        mockupBg: "linear-gradient(145deg,#f5f0ff,#ede5ff)",
        mockupImg: [
          "/mockups/TransferNet/Send_Money_05.png",
          "/mockups/TransferNet/Send_Money_04.png",
          "/mockups/TransferNet/Send_Money_03.png",
        ],
        mockupLayout: 'portrait',
      },

      // ─── SEND — CONFIRM & SUCCESS ─────────────────────────────────────────────
      {
        label: "Design · Send Money — Confirm & Success",
        title: "Review the full transfer, confirm once, and get a receipt that routes to tracking.",
        body: "The confirmation screen shows amount, recipient bank, fee, exchange rate, and the uploaded receipt thumbnail in a single summary before Confirm & Send commits. The success screen that follows surfaces the transfer ID, fee, and delivery method with Back to Home and Track Transfer CTAs — closing the send loop and routing users directly into the live tracking view.",
        mockupBg: "linear-gradient(145deg,#f5f0ff,#ede5ff)",
        mockupImg: [
          "/mockups/TransferNet/Send_Money_01.png",
          "/mockups/TransferNet/Send_Money_02.png",
        ],
        mockupLayout: 'portrait',
      },

      // ─── TRANSACTIONS & DETAIL ────────────────────────────────────────────────
      {
        label: "Design · Transactions & Tracking",
        title: "A filterable history and a five-stage timeline — visibility from list to delivery.",
        body: "The transactions screen groups transfers by date with a daily AUD total, filterable across All / Processing / Completed / Failed. Each row shows recipient, transfer ID, amounts, and timestamp with a Track Transfer shortcut. The detail view shows the full transfer above a vertical timeline — Transfer Created → Payment Verified → Sent for Collection → Processing → Delivered — with completed stages in green and the active stage in blue, plus a full details card and sender/recipient side by side.",
        mockupBg: "linear-gradient(145deg,#f0fff4,#e0ffee)",
        mockupImg: [
          "/mockups/TransferNet/Transaction_4.png",
          "/mockups/TransferNet/Transaction_3.png",
        ],
        mockupLayout: 'portrait',
      },

      // ─── RECIPIENTS & PROFILE ─────────────────────────────────────────────────
      {
        label: "Design · Recipients & Profile",
        title: "A send-ready contacts list and an account screen that stays scannable.",
        body: "Recipients are shown as a contacts-style list with a direct Send shortcut per row — jumping to step 2 without touching the home screen. The detail view shows full account info with Edit, Remove, and Send from context. The profile screen surfaces three personal stats (TXNs completed, AUD saved, days as member), quick-action tiles for Refer, Help, and Security, and an Essentials list for settings — all in a shallow, scannable hierarchy.",
        mockupBg: "linear-gradient(145deg,#f0f4ff,#e8eeff)",
        mockupImg: [
          "/mockups/TransferNet/Onboard_30.png",
          "/mockups/TransferNet/Onboard_29.png",
          "/mockups/TransferNet/Onboard_31.png",
        ],
        mockupLayout: 'portrait',
      },
    ],
  },
  {
    id: 2,
    slug: 'telvox',
    title: "Telvox",
    client: "Telvox",
    category: "Product Design",
    date: "April 2026",
    intro:
      "Designed a full-stack AI voice agent management platform — giving businesses a single command centre to build agents, run telephony campaigns, track leads and appointments, and manage client billing from one dashboard.",
    cardImg: "/mockups/Telvox/Tel.png",

    sections: [

      {
        label: "Discovery · Problem Space",
        title: "Businesses deploying AI voice agents had no single place to operate them.",
        body: "Agent configs, call logs, leads, and billing lived across separate tools. We mapped the full operator journey — agent creation to invoice — and unified everything into one platform.",
        mockupBg: "linear-gradient(145deg,#0f0e1a,#1a1828)",
        mockupImg: "/mockups/Telvox/Screen_Shot_2026-04-02_at_10_50_53.png",
      },

      {
        label: "Design · Overview Dashboard",
        title: "All key metrics on one screen — calls, agents, leads, revenue, and tickets at a glance.",
        body: "The overview surfaces 12 live metrics across calls, agents, messages, leads, appointments, and knowledge bases — plus a weekly consumption chart, billing panel, and open ticket alerts.",
        mockupBg: "linear-gradient(145deg,#f8f6ff,#ede9ff)",
        mockupImg: "/mockups/Telvox/Screen_Shot_2026-04-02_at_10_51_28.png",
      },

      {
        label: "Design · AI Agents — Model",
        title: "Build and configure every AI agent's voice, greeting, and identity in one panel.",
        body: "The Model tab shows the assigned voice, full system instructions, and live agent status. A Talk to the Agent button lets operators preview the experience before deployment.",
        mockupBg: "linear-gradient(145deg,#f0f4ff,#e8eeff)",
        mockupImg: "/mockups/Telvox/Screen_Shot_2026-04-02_at_10_53_04.png",
      },

      {
        label: "Design · Agent Analytics & Transcript",
        title: "Every call an agent handles is logged, playable, and fully transcribed.",
        body: "The Analytics tab shows a paginated call table per agent. Clicking any row opens a Call Details modal with audio playback and a turn-by-turn transcript — a complete audit trail for every conversation.",
        mockupBg: "linear-gradient(145deg,#f0f4ff,#e8eeff)",
        mockupImg: [
          "/mockups/Telvox/Screen_Shot_2026-04-02_at_10_53_14.png",
          "/mockups/Telvox/Screen_Shot_2026-04-02_at_10_54_56.png",
        ],
        mockupLayout: 'landscape',
      },

      {
        label: "Design · Agent Instructions",
        title: "Versioned system prompts with one-click rollback.",
        body: "The Instructions tab lets operators edit the agent's full system prompt inline. Every save creates a new version — Load Content on any previous version restores it instantly, making prompt regressions recoverable in seconds.",
        mockupBg: "linear-gradient(145deg,#fff7f0,#ffeedd)",
        mockupImg: "/mockups/Telvox/Screen_Shot_2026-04-02_at_10_53_22.png",
      },

      {
        label: "Design · Knowledge Base & Settings",
        title: "Attach documents to any agent and configure voice, tools, and model parameters.",
        body: "The Knowledge Base tab manages documents linked to the agent. Settings exposes model name, voice, agent tools, appointment overlap limit, and raw model config key-value pairs — all editable in place.",
        mockupBg: "linear-gradient(145deg,#f0fff4,#e0ffee)",
        mockupImg: [
          "/mockups/Telvox/Screen_Shot_2026-04-02_at_10_53_41.png",
          "/mockups/Telvox/Screen_Shot_2026-04-02_at_10_53_55.png",
        ],
        mockupLayout: 'landscape',
      },

      {
        label: "Design · Voices",
        title: "Seven voices across four providers — filter by language, gender, and style.",
        body: "The Voices library surfaces all available TTS options with provider, language, and personality tags. Operators pick and assign a voice to any agent without leaving the platform.",
        mockupBg: "linear-gradient(145deg,#f5f0ff,#ede5ff)",
        mockupImg: "/mockups/Telvox/Screen_Shot_2026-04-02_at_10_55_10.png",
      },

      {
        label: "Design · Tools Management",
        title: "Every custom API integration the agents can call — GET and POST — in one table.",
        body: "Tools are listed with method, endpoint, and description. Agents call these mid-conversation to fetch products, create leads, file support tickets, or book appointments without any human handoff.",
        mockupBg: "linear-gradient(145deg,#fff7f0,#ffeedd)",
        mockupImg: "/mockups/Telvox/Screen_Shot_2026-04-02_at_10_55_31.png",
      },

      {
        label: "Design · Support Tickets",
        title: "Technical issues extracted and logged by AI agents automatically.",
        body: "Tickets are created from call content without operator input. Each ticket surfaces customer, priority, status, and assigned agent — with Open and Resolved tabs keeping active issues front and centre.",
        mockupBg: "linear-gradient(145deg,#fff0f0,#ffe4e4)",
        mockupImg: "/mockups/Telvox/Screen_Shot_2026-04-02_at_10_55_41.png",
      },

      {
        label: "Design · Client Organizations",
        title: "A super admin layer for managing every client org, tier, and account manager.",
        body: "The Clients dashboard shows MRR, active orgs, total agents, and monthly volume at a glance. Each row exposes tier, status, users/agents, usage, MRR, and account manager — with an Export Data option for billing reconciliation.",
        mockupBg: "linear-gradient(145deg,#f0f8ff,#e4f0ff)",
        mockupImg: "/mockups/Telvox/Screen_Shot_2026-04-02_at_10_55_49.png",
      },

      {
        label: "Design · Calls & Conversations",
        title: "Every inbound and outbound call across all agents — searchable and filterable.",
        body: "The telephony log aggregates 2,420 calls with agent name, IP, timestamp, and duration. Tabs for Transferred, Successful, and Failed let ops triage without touching a filter dropdown.",
        mockupBg: "linear-gradient(145deg,#f0f4ff,#e8eeff)",
        mockupImg: "/mockups/Telvox/Screen_Shot_2026-04-02_at_10_56_06.png",
      },

      {
        label: "Design · Outbound Leads",
        title: "Import, segment, and call leads — individually or as a bulk campaign.",
        body: "Leads are added manually or bulk-imported via CSV, grouped for targeting, and called via the Call Now action or scheduled runs. Contacted, Not Contacted, and Pending tabs keep campaign status clear at all times.",
        mockupBg: "linear-gradient(145deg,#f5f0ff,#ede5ff)",
        mockupImg: "/mockups/Telvox/Screen_Shot_2026-04-02_at_10_56_18.png",
      },

      {
        label: "Design · Schedule Calls",
        title: "Automated outbound campaigns with daily or one-time frequency and full run history.",
        body: "Each schedule defines a group, frequency, run time, start and end date, and timezone. The table surfaces last run, status, and enabled state — giving campaign managers a live view of what ran and what's pending.",
        mockupBg: "linear-gradient(145deg,#f0fff4,#e0ffee)",
        mockupImg: "/mockups/Telvox/Screen_Shot_2026-04-02_at_10_56_25.png",
      },

      {
        label: "Design · Finance — Transactions",
        title: "Every credit top-up and service charge logged with revenue, cost, and margin.",
        body: "The All Transactions view shows total revenue, actual costs, net profit, and average margin across the platform. Each row carries user, type, description, payment method, amount, cost, profit, and date.",
        mockupBg: "linear-gradient(145deg,#fffbf0,#fff3d6)",
        mockupImg: "/mockups/Telvox/Screen_Shot_2026-04-02_at_10_56_44.png",
      },

      {
        label: "Design · Credit Management",
        title: "Monitor client credit limits, balances, risk scores, and overdue accounts.",
        body: "The Credit Management dashboard surfaces $2.1M total credit limit, $609K outstanding, and flags accounts as Good Standing, Warning, or Exceeded — with a risk score and last payment date per client row.",
        mockupBg: "linear-gradient(145deg,#fff0f0,#ffe4e4)",
        mockupImg: "/mockups/Telvox/Screen_Shot_2026-04-02_at_10_56_52.png",
      },

      {
        label: "Design · My Credits",
        title: "A personal credit wallet with current balance and one-tap top-up.",
        body: "Operators see their available credit balance, trigger a Razorpay top-up with one button, and access a full account statement history — keeping spend visible without going through finance.",
        mockupBg: "linear-gradient(145deg,#f8f6ff,#ede9ff)",
        mockupImg: "/mockups/Telvox/Screen_Shot_2026-04-02_at_10_57_19.png",
      },

      {
        label: "Design · Appointments",
        title: "A calendar view of every appointment booked by AI agents — with Google Calendar sync.",
        body: "Appointments surfaces a weekly calendar filterable by agent, with a List View toggle for tabular access. Operators can add appointments manually or sync the full calendar to Google Calendar for external visibility.",
        mockupBg: "linear-gradient(145deg,#f0f8ff,#e4f0ff)",
        mockupImg: "/mockups/Telvox/Screen_Shot_2026-04-02_at_10_57_35.png",
      },

      {
        label: "Design · Client Detail",
        title: "A 360° view of any client — plan, usage, agent performance, billing, and call history.",
        body: "The client detail page shows subscription tier, minutes consumed, active users, AI agent overview, billing summary with recent invoices, and a full call activity log — with Pause Service and Notify Client actions at the top.",
        mockupBg: "linear-gradient(145deg,#f8f6ff,#ede9ff)",
        mockupImg: [
          "/mockups/Telvox/Screen_Shot_2026-04-02_at_10_58_11.png",
          "/mockups/Telvox/Screen_Shot_2026-04-02_at_10_58_31.png",
        ],
        mockupLayout: 'landscape',
      },

    ],
  },
// ─── SKATHI ───────────────────────────────────────────────────────────────────

  {
    id: 3,
    slug: 'skathi',
    title: "Skathi — App & Web Platform",
    client: "Skathi",
    category: "Product Design",
    date: "April 2026",
    intro: "Designed the complete Skathi experience across iOS and web — a music platform built for South Asian listeners. The app covers streaming from onboarding to playback. The web extends into beats licensing, artist booking, studio rental, events, and a merch shop.",
    cardImg: skathiCover,
    coverImg: skathiCover,
    sections: [

      // ── APP ────────────────────────────────────────────────────────────────────
      {
        label: "App · Onboarding",
        title: "Three album covers and one line — the app makes its case immediately.",
        body: "The splash screen leads with a collage of real album art, the Skathi logo, and a single tagline: 'Feel every beat, wherever you are.' Two CTAs at the bottom — Get Started and I Already Have an Account — route new and returning users into separate flows from the first screen.",
        mockupBg: "linear-gradient(145deg,#1a1a2e,#16213e)",
        mockupImg: skathiAppOnboarding,
      },
      {
        label: "App · Sign Up & Password",
        title: "Email or social to sign up, then live password validation before moving on.",
        body: "Sign-up is a single email field with Google and Apple as alternatives — no name or phone required at this stage. The next screen asks for a password and ticks off three requirements in real time (1 letter, 1 number or special character, 8 characters minimum) as the user types. No post-submit errors, no ambiguity about what's still missing.",
        mockupBg: "linear-gradient(145deg,#111111,#1a1a2e)",
        mockupImg: [skathiAppSubPage1, skathiAppSubPage2],
        mockupLayout: 'portrait',
      },
      {
        label: "App · Choose a Plan",
        title: "Ad-free, offline, unlimited skips — the value is stated before the price.",
        body: "The plan screen leads with a preview carousel of the app and the core promise upfront. Two plan cards — Yearly at Rs. 1,400 and Monthly at Rs. 300 — sit below with a single Get Started CTA. The yearly saving is visible from the math alone, no badge needed.",
        mockupBg: "linear-gradient(145deg,#1a1a2e,#0f3460)",
        mockupImg: skathiAppSubPage,
      },
      {
        label: "App · Home Feed",
        title: "Eight named rows, genre filters at the top — nothing is unlabelled.",
        body: "The home feed is sectioned into Latest Songs, Albums for You, Your Top Picks, Trending Songs, Fresh Releases, Top Charts, Your Playlists, and Recently Played. Genre chips (Home, Rock, Folk, Indie, Sad) filter the whole feed from the top without navigating away. Free users see a premium banner above the fold; paid users see the same layout clean.",
        mockupBg: "linear-gradient(145deg,#111111,#1a1a2e)",
        mockupImg: [skathiAppUsername4, skathiAppUsername],
        mockupLayout: 'portrait',
      },
      {
        label: "App · Explore & Search",
        title: "Browse by genre or search across songs, playlists, EPs, and artists at once.",
        body: "The Explore tab is a full-bleed colour grid of genres — each tile uses a real album art crop as its background. Search returns all content types in a single unified list, with every row labelled by type and source so users know exactly what they're tapping into without switching between tabs.",
        mockupBg: "linear-gradient(145deg,#111111,#1a1a2e)",
        mockupImg: [skathiAppUsername5, skathiAppUsername3],
        mockupLayout: 'portrait',
      },
      {
        label: "App · Genre & Album",
        title: "A genre opens songs and albums together. An album opens Play, Shuffle, and its full tracklist.",
        body: "Genre pages (e.g. Skathi Prog Rock) surface song rows and album tiles on one scroll — no sub-navigation. Album pages lead with cover art, Play and Shuffle, and the complete tracklist with per-track action menus. The bottom tab bar persists throughout so users can navigate away without losing context.",
        mockupBg: "linear-gradient(145deg,#111111,#1a1a2e)",
        mockupImg: [skathiAppUsername10, skathiAppAlbum],
        mockupLayout: 'portrait',
      },
      {
        label: "App · Now Playing",
        title: "Album art fills the screen — controls stay minimal and out of the way.",
        body: "The player uses the album cover as a full-bleed background, pulling the mood of the artwork directly into the UI. Shuffle, skip, play/pause, and repeat sit below a progress scrubber. Three tabs — Queue, Lyrics, Related — extend the player experience without leaving the now playing screen.",
        mockupBg: "linear-gradient(145deg,#0d2137,#1a3a5c)",
        mockupImg: skathiAppUsername7,
      },
      {
        label: "App · Queue & Song Actions",
        title: "The queue is a reorderable list. Every song action lives in a bottom sheet.",
        body: "The Queue tab lists every upcoming track with drag handles for reordering inline. Tapping the three-dot menu on any track opens a bottom sheet with Share, Unlike Song, Add in Playlist, Add to Artist, and Downloaded — all without leaving the player or navigating to a separate settings screen.",
        mockupBg: "linear-gradient(145deg,#0d2137,#1a3a5c)",
        mockupImg: [skathiAppUsername8, skathiAppUsername6],
        mockupLayout: 'portrait',
      },
      {
        label: "App · Library & Account",
        title: "Saved content filtered by type. Account settings in a clean single list.",
        body: "The Library uses three filter pills — Playlists, Albums, Downloaded — to surface saved content without separate tabs. Each item shows its cover, title, and source label. The Account screen is a plain disclosure list: View Profile, Downloads, History, Manage Plan, Settings, and Log Out — nothing buried.",
        mockupBg: "linear-gradient(145deg,#111111,#1a1a2e)",
        mockupImg: [skathiAppUsername9, skathiAppSubPage3],
        mockupLayout: 'portrait',
      },
      {
        label: "App · Plan Management & Cancellation",
        title: "Current plan, billing date, and a cancellation form that treats leaving as feedback.",
        body: "Manage Plan shows the active subscription and next billing date with a single Change Plan button. Cancellation skips dark patterns entirely — a seven-option form (Subscription cost feels too high, Not using the app enough, Switched to a better service, and four more) collects the reason before confirming, turning exit into a product signal.",
        mockupBg: "linear-gradient(145deg,#111111,#1a1a2e)",
        mockupImg: [skathiAppSubPage4, skathiAppSubPage5],
        mockupLayout: 'portrait',
      },

      // ── WEB ────────────────────────────────────────────────────────────────────
      {
        label: "Web · Homepage",
        title: "Every surface Skathi offers — reachable in one click from the landing page.",
        body: "The homepage opens with a full-width search bar and a row of category icons covering Music, Artists, Beats, Studio, Events, and Shop. Scrolling reveals Featured this Month, Fresh Beats, Discover Artists, Noteworthy Releases, Latest Videos, Gallery of Visuals, Studio Booking, merch, and a mobile app download prompt — the entire platform in one scroll, nothing hidden behind a nav menu.",
        mockupBg: "linear-gradient(145deg,#111111,#1a1a2e)",
        mockupImg: skathiWebHomepage,
      },
      {
        label: "Web · Artist Page",
        title: "Music, discography, shows, videos, and merch — one profile, nothing split across pages.",
        body: "Artist pages like Chumbak open with a full-bleed live photo and a top nav spanning Popular Musics, Discography, Upcoming Shows, About, Videos, and Shop. Fans can stream an album, buy a t-shirt, and check upcoming show dates without ever leaving the artist's profile — each section is self-contained within the same scrollable page.",
        mockupBg: "linear-gradient(145deg,#111111,#1a1a2e)",
        mockupImg: skathiWebArtist,
      },
      {
        label: "Web · Album Detail",
        title: "Tracklist, price, more from the artist — and a nudge to go mobile.",
        body: "Album pages show the full tracklist, a purchase price, and a More from Chumbak carousel inline. A Go Mobile card with App Store and Google Play links sits within the page — nudging desktop listeners toward streaming without disrupting the purchase flow for those who want to buy.",
        mockupBg: "linear-gradient(145deg,#111111,#1a1a2e)",
        mockupImg: skathiWebAlbum,
      },
      {
        label: "Web · Beats Marketplace",
        title: "A numbered, filterable beats list — producers and buyers can both find exactly what they need.",
        body: "Beats to Explore presents tracks in a numbered two-column list with title, producer, and price per row. Filter chips across Genre, Track Type, BPM, Key, Mood, and more let buyers narrow precisely — a C-key ambient beat at 90 BPM is three filter taps away. Clicking any beat slides in a right-side detail panel without navigating away from the list.",
        mockupBg: "linear-gradient(145deg,#111111,#1a1a2e)",
        mockupImg: [skathiWebBeatsList, skathiWebBeatsDetail],
        mockupLayout: 'landscape',
      },
      {
        label: "Web · Beat Licensing",
        title: "Three license tiers, a preview player, and transparent terms — before checkout.",
        body: "The beat detail panel shows producer, BPM, key, tags, and three pricing tiers: Basic (MP3), Premium (MP3 + WAV + STEMS), and Exclusive (full rights). A persistent audio player bar at the bottom lets buyers preview while browsing. Clicking License Terms opens a modal — not a PDF — showing format availability and plain-language usage rules upfront.",
        mockupBg: "linear-gradient(145deg,#111111,#1a1a2e)",
        mockupImg: [skathiWebBeatsDetailPlaying, skathiWebBeatsLicense],
        mockupLayout: 'landscape',
      },
      {
        label: "Web · Beat Single Page",
        title: "A dedicated page for producers — tags, pricing, and a More like this carousel.",
        body: "Individual beat pages surface the producer, genre tags, price, play controls, and a Go Mobile prompt. The layout mirrors the album detail page — consistent whether users land on a track or a beat. A More like this carousel at the bottom keeps discovery going without requiring a return to the marketplace.",
        mockupBg: "linear-gradient(145deg,#111111,#1a1a2e)",
        mockupImg: skathiWebDetailedView,
      },
      {
        label: "Web · Events & Checkout",
        title: "From event poster to ticket — about, talent roll, venue map, and a checkout modal.",
        body: "Event pages open with a branded header image, then show About, Talent Roll, Date and Time, and an embedded venue map in one scroll. Clicking Register opens a checkout modal handling contact information and payment method inline — no page redirect, no separate checkout flow.",
        mockupBg: "linear-gradient(145deg,#111111,#1a1a2e)",
        mockupImg: [skathiWebEvent, skathiWebBeats],
        mockupLayout: 'landscape',
      },
      {
        label: "Web · Book an Artist",
        title: "A three-step booking form — Event Basics, Performances & Venue, Pricing & Contact.",
        body: "The Book Artist modal walks organisers through three clearly labelled steps. Step one collects Event Name, Date & Time, City, Organiser, Set Duration, and Event Type. A step indicator at the top shows progress without a page reload — keeping the flow contained in one overlay and reducing drop-off before the form is complete.",
        mockupBg: "linear-gradient(145deg,#111111,#1a1a2e)",
        mockupImg: skathiWebBookArtist,
      },
      {
        label: "Web · Studio Booking",
        title: "Rehearsal spaces listed like short-stay rentals — photos, amenities, hours, map, sticky booking widget.",
        body: "Studio pages open with a photo grid, rate per hour, capacity, and minimum booking duration. Below: an About section, amenities checklist, operating hours by day, and an embedded map. A sticky booking widget on the right holds date and time pickers with a Request to Book CTA — visible regardless of scroll position.",
        mockupBg: "linear-gradient(145deg,#111111,#1a1a2e)",
        mockupImg: skathiWebBeatsBox,
      },
      {
        label: "Web · Shop",
        title: "Artist merch in a filterable grid — from band tees to fine art prints.",
        body: "The Shop displays items in a five-column grid with name and price visible without hovering, filterable by Gender, Artist Merch, and New Arrivals. Product pages show the item with a watermarked preview, discount callout, description, Add to Cart CTA, and a Similar Items carousel — the same layout whether the product is apparel or an art print.",
        mockupBg: "linear-gradient(145deg,#111111,#1a1a2e)",
        mockupImg: [skathiWebShop, skathiWebShop1],
        mockupLayout: 'landscape',
      },
      {
        label: "Web · Cart & Orders",
        title: "One cart for beats, albums, shop, and events — tabbed, with a live order summary.",
        body: "The Cart is tabbed across Beats, Albums, Shop, and Events so each purchase type is visible on its own. An Order Summary sidebar shows item total, service charge, and total in real time. The account sidebar covers Order & Booking History, Return & Cancellations, and Payment Method. Request Cancellation surfaces the full order detail before anything is finalised.",
        mockupBg: "linear-gradient(145deg,#111111,#1a1a2e)",
        mockupImg: [skathiWebCart, skathiWebBeats1],
        mockupLayout: 'landscape',
      },
    ],
  },

  // ─── SKATHI WEB STUB (index 4 — keeps App.tsx card indices intact) ───────────
  {
    id: 2,
    slug: 'flowbite',
    title: "Skathi — App & Web Platform",
    client: "Skathi",
    category: "Product Design",
    date: "April 2026",
    intro: "Designed the complete Skathi experience across iOS and web — a music platform built for South Asian listeners. The app covers streaming from onboarding to playback. The web extends into beats licensing, artist booking, studio rental, events, and a merch shop.",
    cardImg: skathiCover,
    sections: [],
  },
  {
    id: 4,
    slug: 'occs',
    title: "OCCS — Outbound Call Centre System",
    client: "OCCS / Staie",
    category: "UX Design · Product Design · Research",
    date: "2024–2026",
    intro: "Redesigned the clerk-facing side of OCCS — a multi-tenant call centre platform used by 300+ clerks across multiple client companies. The goal was simple: give clerks everything they need on one screen during a live call, and get out of their way the rest of the time.",
    cardImg: '/mockups/OCCS/OCCS Cover.png',
    coverImg: '/mockups/OCCS/OCCS Cover.png',
    docsUrl: 'https://docs.occs.live/introduction.html',

    sections: [

      {
        label: "Design · Sign In",
        title: "First login or returning clerk — two states, no dead ends.",
        body: "Sign In collects username, password, and language upfront. Dark/light toggle is accessible before logging in. Returning clerks see a Welcome Back screen with their account pre-loaded — one tap to get in, one link to switch accounts.",
        mockupBg: "linear-gradient(145deg,#f0f5ff,#e8eeff)",
        mockupImg: ['/mockups/OCCS/occs-signin.png', '/mockups/OCCS/occs-welcome-back.png'],
        mockupLayout: 'landscape',
      },

      {
        label: "Design · Project Selection",
        title: "Pick your primary project, stack secondaries — then go live.",
        body: "Clerks work across multiple client companies. One project is Primary — it loads the call form, guide, and result codes. Any number can be Secondary for reference. The list is searchable and sortable by last used. Selected primary highlights orange, secondaries blue. The status bar at the bottom shows what's active before hitting LOGIN.",
        mockupBg: "linear-gradient(145deg,#f0fff5,#e0ffee)",
        mockupImg: ['/mockups/OCCS/occs-project-selection.png', '/mockups/OCCS/occs-project-selection-active.png', '/mockups/OCCS/occs-project-selection-filtered.png'],
        mockupLayout: 'landscape',
      },

      {
        label: "Design · Audio Setup",
        title: "Test your mic, speaker, and ringtone before the first call rings.",
        body: "Local Settings lets clerks pick their own audio devices independently. Live input meter shows the mic is actually picking up. TEST, PLAY TEST, and PLAY ECHO let them verify both directions. Changes apply instantly — no save step, no IT ticket.",
        mockupBg: "linear-gradient(145deg,#f5f5f5,#ebebeb)",
        mockupImg: '/mockups/OCCS/occs-local-settings.png',
      },

      {
        label: "Design · Callbacks",
        title: "Where clerks live between calls.",
        body: "The Callbacks dashboard lists every scheduled interaction — project, caller number, customer name, scheduled time — with CALL and RESCHEDULE inline on every row. My Callbacks and Shared Callbacks are tabbed. Search filters by name or number. TODAY shortcut cuts through the noise.",
        mockupBg: "linear-gradient(145deg,#f0f5ff,#e8eeff)",
        mockupImg: '/mockups/OCCS/occs-callbacks.png',
      },

      {
        label: "Design · Incoming Call",
        title: "The greeting script shows before the clerk picks up.",
        body: "When a call comes in, a modal interrupts whatever screen is open. It shows the project (Deer Car Sharing), the greeting script the clerk should read, the caller's name and number, then DECLINE and ACCEPT. The clerk knows exactly what to say before they answer — not after.",
        mockupBg: "linear-gradient(145deg,#f0fff5,#e0ffee)",
        mockupImg: '/mockups/OCCS/occs-incoming-call.png',
      },

      {
        label: "Design · Active Call — Main Screen",
        title: "Everything on one screen. No tab switching during a live call.",
        body: "The call screen is the hardest surface to get right. Left column: greeting script, problem locations with advice, 8 numbered call handling steps, and 3 special rule cards (Time Adjustment, Email Escalation, Never Do). Centre: live project info and active issues. Right: result codes, notes, Call Logs and Live Transcribe tabs. Top bar: caller name, timer, direction badge, and all call controls — permanent throughout.",
        mockupBg: "linear-gradient(145deg,#f0f5ff,#e8eeff)",
        mockupImg: '/mockups/OCCS/occs-call-screen.png',
      },

      {
        label: "Design · Result Codes",
        title: "Log the outcome before ending the call — not after.",
        body: "The right panel has three tabs: Not Reached, Reached, Successful. Clerks pick a result code, add notes, and hit Save. The button confirms SAVED in green. This happens while still on the call — no second screen, no post-call admin.",
        mockupBg: "linear-gradient(145deg,#fff8f0,#ffeedd)",
        mockupImg: ['/mockups/OCCS/occs-result-not-selected.png', '/mockups/OCCS/occs-active-call.png'],
        mockupLayout: 'landscape',
      },

      {
        label: "Design · Focus Mode",
        title: "Collapse both sidebars when the form needs more room.",
        body: "Both the left nav and right panel collapse independently. When a project has a dense call form, clerks can give the centre content the full width. Expanding either sidebar is one click — nothing is hidden permanently.",
        mockupBg: "linear-gradient(145deg,#f5f5f5,#ebebeb)",
        mockupImg: '/mockups/OCCS/occs-sidebars-collapsed.png',
      },

      {
        label: "Design · Call Persists Across Screens",
        title: "Navigate anywhere during a call — the bar stays.",
        body: "The blue call bar doesn't disappear when a clerk opens Callbacks or another module. It locks to the top of every page with the caller name, timer, and all controls. 'Click to return to call' appears when they're away from the call form — one click brings it back.",
        mockupBg: "linear-gradient(145deg,#f0f5ff,#e8eeff)",
        mockupImg: '/mockups/OCCS/occs-call-persist.png',
      },

      {
        label: "Design · Minimized Call",
        title: "Need both hands free? Shrink the call to a pill.",
        body: "The active call collapses to a floating pill — caller name, number, expand arrow — sitting in the bottom corner. The rest of the app is fully usable. Clicking the pill restores the full call screen.",
        mockupBg: "linear-gradient(145deg,#f0fff5,#e0ffee)",
        mockupImg: '/mockups/OCCS/occs-call-minimized.png',
      },

      {
        label: "Design · Callback Select During Call",
        title: "Schedule a callback without dropping the live call.",
        body: "While on a call, clerks can open the callback scheduler inline. The call continues in the top bar. They pick the time, confirm — done. No modal stack, no context loss.",
        mockupBg: "linear-gradient(145deg,#fff8f0,#ffeedd)",
        mockupImg: '/mockups/OCCS/occs-callback-select.png',
      },

      {
        label: "Design · Call Forward",
        title: "Select an agent, watch it ring, confirm the handoff.",
        body: "The Forward panel shows every available agent — name, status (Available, On Hold, On Break), wait time. Clerk selects one, hits FORWARD. The row flips to Ringing with a live counter. If the call gets through in conditional mode, the top bar shows both legs of the call simultaneously. CANCEL is always there if the transfer needs to be pulled back.",
        mockupBg: "linear-gradient(145deg,#f0f5ff,#e8eeff)",
        mockupImg: ['/mockups/OCCS/occs-forward-selected.png', '/mockups/OCCS/occs-forward-ringing.png', '/mockups/OCCS/occs-forward-conditional.png'],
        mockupLayout: 'landscape',
      },

      {
        label: "Design · End Call",
        title: "Confirm before you hang up.",
        body: "Clicking End Call shows a modal with the contact name, number, and result code. Two buttons: CANCEL and END CALL. No accidental disconnects, no fixing a wrong result code after the fact.",
        mockupBg: "linear-gradient(145deg,#fff0f0,#ffeded)",
        mockupImg: '/mockups/OCCS/occs-end-call.png',
      },

      {
        label: "Design · Client Search",
        title: "Look up any customer mid-call without losing your place.",
        body: "Client Search is a tab inside the active call screen. Eight search fields — name, phone, email, address, project, postal code. Results are paginated. SELECT links the record to the call. Call Logs stay visible on the right throughout.",
        mockupBg: "linear-gradient(145deg,#f0fff5,#e0ffee)",
        mockupImg: '/mockups/OCCS/occs-search.png',
      },

      {
        label: "At Scale · Process & Impact",
        title: "4,000+ tickets. Sprint retros every two weeks. ~35% faster response. ~30% less manual coordination.",
        body: "OCCS wasn't a side project — it ran live across multiple client companies with 300+ clerks and thousands of customer interactions. The Jira board shows a real sprint in motion: tickets across To Do, In Progress, Blocked, Review, and Done simultaneously. Every two weeks the team ran structured Miro retrospectives — car metaphors, hunted/hunter formats — to surface blockers and recalibrate. Rule-based workflows, automated mailing, project-level views, and AI-powered voice recognition shipped across the 12-month build. End result: response efficiency up ~35%, manual coordination down ~30%.",
        mockupBg: "linear-gradient(145deg,#1a1f2e,#252d40)",
        mockupImg: ['/mockups/OCCS/Screen Shot 2026-04-02 at 14.26.30.png', '/mockups/OCCS/7fc570f7-ba76-43a7-85b8-59f575cdab99.png', '/mockups/OCCS/1350a396-df65-49df-a047-951dced0cb1e.jpeg'],
        mockupLayout: 'landscape',
      },

    ],
  },
  {
    id: 5,
    slug: 'topmate',
    title: "Topmate Mentor Profile & Dashboard",
    client: "Personal Project",
    category: "UX Design",
    date: "2025",
    intro: "Designed and optimised a mentoring profile and session dashboard for Topmate.io to improve booking conversion and mentee experience.",
    sections: [
      {
        label: "Research · Conversion",
        title: "Profiles that failed to convert curious visitors into bookings.",
        body: "We analysed 20 active mentor profiles and exit interviews with 12 mentees. Drop-off happened at the services scroll — pricing felt disconnected from value.",
        mockupBg: "linear-gradient(145deg,#fdf4ff,#fae8ff)",
      },
      {
        label: "Design · Dashboard",
        title: "One view for everything a mentor needs to run their practice.",
        body: "Upcoming sessions, earnings, mentee notes, and session prep — consolidated into a single dashboard. Mentors reported 60% less time managing logistics.",
        mockupBg: "linear-gradient(145deg,#f8f0ff,#f0e0ff)",
      },
    ],
  },

  // ─── JOBBICUS ────────────────────────────────────────────────────────────────
  // Image dimensions reference (all verified):
  //   Desktop ~1440×900  → landscape layout, fills full width cleanly
  //   Desktop ≥1440×1400 → too tall, avoid in multi-image layouts
  //   Mobile  390×844    → portrait layout, show 3 per row max
  {
    id: 6,
    slug: 'jobbicus',
    title: "Jobbicus — Career Platform",
    client: "Jobbicus",
    category: "Product Design",
    date: "2025",
    intro: "Designed a full-featured career platform connecting job seekers and employers — covering sign-up and profile setup, a personalised home feed, employer dashboards, job posting, proposals, upskilling courses, virtual hiring fairs, and accommodation support for relocating candidates.",
    cardImg: "/mockups/Jobbicus/Onboard.png",
    coverImg: "/mockups/Jobbicus/Onboard.png",

    sections: [
      // ─── DISCOVERY ──────────────────────────────────────────────────────────
      {
        label: "Discovery · Problem Space",
        title: "Job boards listed openings. Jobbicus was built to close the gap between wanting a job and being ready for one.",
        body: "Most platforms gave candidates a list and left them to figure out the rest — no skill-building, no way to stand out, no support for relocation. Jobbicus was conceived as a full career launchpad: pairing live opportunities with the courses, connections, and hiring events needed to land them.",
        mockupBg: "linear-gradient(145deg,#f0f4ff,#e0ecff)",
        mockupImg: "/mockups/Jobbicus/Onboard.png",
      },

      // ─── LANDING PAGE — DESKTOP ──────────────────────────────────────────────
      {
        label: "Design · Landing Page — Desktop",
        title: "Value-first above the fold, everything else earned by scrolling.",
        body: "The desktop landing opens with a bold hero and a single call to action before any scroll. The page continues into feature highlights, social proof, and a second CTA — each block earns the next without burying the entry message.",
        mockupBg: "linear-gradient(145deg,#f0f4ff,#e0ecff)",
        mockupImg: "/mockups/Jobbicus/Home Page.png",
      },

      // ─── LANDING PAGE — MOBILE ───────────────────────────────────────────────
      {
        label: "Design · Landing Page — Mobile",
        title: "Same hierarchy on a smaller screen — nothing hidden or deprioritised on mobile.",
        body: "The mobile landing mirrors the desktop value hierarchy adapted for touch. Every key claim and the primary CTA are reachable in a single thumb scroll, with tap targets sized for comfortable one-handed use.",
        mockupBg: "linear-gradient(145deg,#eef2ff,#dde8ff)",
        mockupImg: "/mockups/Jobbicus/Home Page_mobiel.png",
      },

      // ─── SIGN IN & SIGN UP ───────────────────────────────────────────────────
      {
        label: "Design · Sign In & Sign Up",
        title: "Two lean screens to get users in — no friction before the first meaningful action.",
        body: "Sign-in is a single email + password form with a show/hide toggle and a Forgot Password escape hatch. Sign-up adds confirm password and an optional referral code — nothing more. Both keep the CTA in frame at all times and share the same visual structure so switching between them feels seamless.",
        mockupBg: "linear-gradient(145deg,#fff0f7,#ffe0ec)",
        mockupImg: [
          "/mockups/Jobbicus/Sign In.png",
          "/mockups/Jobbicus/Sign Up.png",
        ],
        mockupLayout: 'landscape',
      },

      // ─── MOBILE ONBOARDING ───────────────────────────────────────────────────
      {
        label: "Design · Mobile Onboarding",
        title: "Career intent established up front before any personalisation runs.",
        body: "The onboarding flow establishes user type and career goals in single-purpose screens — one decision per step so nothing is skipped. A persistent progress indicator keeps the end in sight throughout.",
        mockupBg: "linear-gradient(145deg,#fff8f0,#ffeedd)",
        mockupImg: [
          "/mockups/Jobbicus/Onboarding 5.png",
          "/mockups/Jobbicus/Setup.png",
          "/mockups/Jobbicus/Setup-1.png",
        ],
        mockupLayout: 'portrait',
      },

      // ─── PROFILE SETUP ───────────────────────────────────────────────────────
      {
        label: "Design · Profile & Account Setup",
        title: "Profile built one focused step at a time — role, skills, experience, location.",
        body: "Setup continues after onboarding with the same single-purpose pattern. Each screen handles one part of the profile so users complete a full, findable record without facing a wall of fields. The Profile screen shows the finished candidate card employers will see.",
        mockupBg: "linear-gradient(145deg,#fff5f0,#ffe8dd)",
        mockupImg: [
          "/mockups/Jobbicus/Setup-2.png",
          "/mockups/Jobbicus/Setup-3.png",
          "/mockups/Jobbicus/Profile.png",
        ],
        mockupLayout: 'portrait',
      },

      // ─── HOME FEED — FULL SCROLL ─────────────────────────────────────────────
      {
        label: "Design · Home Feed — Full Page",
        title: "The personalised home feed at full length — jobs, courses, and events in one view.",
        body: "The logged-in home surfaces job matches, course picks, and upcoming virtual fairs based on the candidate's profile. The full-page view shows how every content type coexists without competing — each section earns its position through relevance rather than editorial priority.",
        mockupBg: "linear-gradient(145deg,#f0fff7,#e0ffed)",
        mockupImg: "/mockups/Jobbicus/Post Login - Homepage - Subscribed.png",
      },

      // ─── HOME FEED — STATES & SUBSCRIBE ─────────────────────────────────────
      {
        label: "Design · Feed States & Subscribe",
        title: "Free and subscribed states side by side — the upgrade feels like a reward, not a wall.",
        body: "Three feed states show how content adapts as the user's subscription status changes. The Subscribe modal appears contextually with a clear value exchange — priority results, exclusive listings, virtual fair access — so the upgrade feels earned rather than forced.",
        mockupBg: "linear-gradient(145deg,#edfff5,#d8ffee)",
        mockupImg: [
          "/mockups/Jobbicus/Post Login - Homepage - Subscribed-1.png",
          "/mockups/Jobbicus/Post Login - Homepage - Subscribed-2.png",
          "/mockups/Jobbicus/Post Login - Homepage - Subscribed-3.png",
          "/mockups/Jobbicus/Subscribe Popup.png",
        ],
        mockupLayout: 'landscape',
      },

      // ─── EMPLOYER DASHBOARD — FULL VIEW ─────────────────────────────────────
      {
        label: "Design · Employer Dashboard — Full View",
        title: "Every active role, applicant count, and recent activity on one scrollable page.",
        body: "The full dashboard scroll shows how employers get a complete picture of their hiring pipeline without switching views — open roles, applicant totals, recent candidate activity, and quick actions all within one continuous layout.",
        mockupBg: "linear-gradient(145deg,#1a1f35,#252d4a)",
        mockupImg: "/mockups/Jobbicus/Dashboard.png",
      },

      // ─── EMPLOYER DASHBOARD — STATES ────────────────────────────────────────
      {
        label: "Design · Dashboard States",
        title: "Three dashboard states covering empty, active, and populated pipeline views.",
        body: "Dashboard-1 shows a freshly posted role awaiting applicants. Dashboard-2 and Dashboard-3 show increasingly populated pipelines — giving employers a clear mental model of what the board looks like as candidates apply.",
        mockupBg: "linear-gradient(145deg,#1e2440,#2a3255)",
        mockupImg: [
          "/mockups/Jobbicus/Dashboard-1.png",
          "/mockups/Jobbicus/Dashboard-2.png",
          "/mockups/Jobbicus/Dashboard-3.png",
        ],
        mockupLayout: 'landscape',
      },

      // ─── JOB POSTING ─────────────────────────────────────────────────────────
      {
        label: "Design · Job Posting",
        title: "A numbered multi-step form so employers stay focused and nothing gets skipped.",
        body: "Job posting walks through role details, requirements, and compensation in clearly numbered steps. The View Job Post screen shows the published listing exactly as candidates see it — giving employers a final review moment before candidates start applying.",
        mockupBg: "linear-gradient(145deg,#fff8f0,#ffeedd)",
        mockupImg: [
          "/mockups/Jobbicus/Job post Step 15.png",
          "/mockups/Jobbicus/Job post Step 16.png",
          "/mockups/Jobbicus/Dashboard - View Job Post.png",
        ],
        mockupLayout: 'landscape',
      },

      // ─── COMPANY PROFILE ─────────────────────────────────────────────────────
      {
        label: "Design · Company Profile",
        title: "A public employer page that candidates discover and trust before they apply.",
        body: "The company profile page shows culture, open roles, team size, and employer reviews in a single scannable view. Candidates evaluate the employer here before committing to a proposal — so the page is designed to answer the questions that would otherwise delay an application.",
        mockupBg: "linear-gradient(145deg,#f0f8ff,#ddeeff)",
        mockupImg: "/mockups/Jobbicus/Company Profile.png",
      },

      // ─── INVITE CANDIDATES — FULL VIEW ───────────────────────────────────────
      {
        label: "Design · Invite Candidates — Full Flow",
        title: "Employers reach matched candidates directly with a targeted, personalised invite.",
        body: "The full Invite Candidates page shows the complete matched-candidate list with filters and preview cards — employers select the best fits before composing an outreach. The flow keeps sourcing inside the platform so every touchpoint is tracked.",
        mockupBg: "linear-gradient(145deg,#1c2138,#272f4e)",
        mockupImg: "/mockups/Jobbicus/Dashboard - Invite Candidates.png",
      },

      // ─── INVITE FLOW ─────────────────────────────────────────────────────────
      {
        label: "Design · Invitation Flow",
        title: "Pre-populated invite message and a confirmation step to keep outreach intentional.",
        body: "After selecting candidates the employer composes a message with role context pre-filled. A confirmation step shows the recipient list before sending — preventing accidental mass outreach and keeping each invite feeling personal.",
        mockupBg: "linear-gradient(145deg,#202540,#2d3558)",
        mockupImg: [
          "/mockups/Jobbicus/Dashboard - Invite Candidates-1.png",
          "/mockups/Jobbicus/Dashboard - Invite Candidates - Confirmation.png",
        ],
        mockupLayout: 'landscape',
      },

      // ─── PROPOSALS — DESKTOP ─────────────────────────────────────────────────
      {
        label: "Design · Proposals — Desktop",
        title: "Candidates pitch back with a structured proposal — not just a resume drop.",
        body: "The proposal flow walks candidates through pitch, relevant experience, and availability in a multi-step form with a visible progress bar. Each step is a single decision point so the submission never feels overwhelming.",
        mockupBg: "linear-gradient(145deg,#f5f0ff,#ede5ff)",
        mockupImg: [
          "/mockups/Jobbicus/Proposal Flow.png",
          "/mockups/Jobbicus/Proposal Flow-1.png",
          "/mockups/Jobbicus/Proposal Flow-3.png",
        ],
        mockupLayout: 'landscape',
      },

      // ─── PROPOSALS — FULL SCROLL ─────────────────────────────────────────────
      {
        label: "Design · Proposal Detail — Full Page",
        title: "The full proposal submission page at natural scroll length.",
        body: "Proposal Flow-2 shows the complete proposal form at full page height — capturing the structured pitch, experience summary, and availability fields together. Submitted proposals carry a live status so candidates always know where they stand.",
        mockupBg: "linear-gradient(145deg,#f0ebff,#e6deff)",
        mockupImg: "/mockups/Jobbicus/Proposal Flow-2.png",
      },

      // ─── PROPOSALS — MOBILE ──────────────────────────────────────────────────
      {
        label: "Design · Proposals & Learning — Mobile",
        title: "Invitations, active proposals, and courses at a glance on mobile.",
        body: "The mobile Proposals — Invited screen surfaces all active employer invitations with company, role, and deadline in one list. The Learn tabs show courses organised by skill level with duration and tag visible without opening each card.",
        mockupBg: "linear-gradient(145deg,#f0ebff,#e4d9ff)",
        mockupImg: [
          "/mockups/Jobbicus/Proposals - Invited.png",
          "/mockups/Jobbicus/Learn.png",
          "/mockups/Jobbicus/Learn-1.png",
        ],
        mockupLayout: 'portrait',
      },

      // ─── COURSES — FULL PAGE ─────────────────────────────────────────────────
      {
        label: "Design · Courses — Full Browse Page",
        title: "Course catalogue at full length — categories, difficulty, and duration all visible.",
        body: "The course browse page surfaces the full catalogue with role-based categories and skill-level filters. The full-page view shows how the grid scales across many courses without losing scannability — candidates find the right track without a search.",
        mockupBg: "linear-gradient(145deg,#f0f9ff,#dff0ff)",
        mockupImg: "/mockups/Jobbicus/Course - Flow.png",
      },

      // ─── COURSES — BROWSE STATES ────────────────────────────────────────────
      {
        label: "Design · Course Browse & Enrolment",
        title: "Three browse states — category landing, course detail, and enrolment confirmation.",
        body: "The flow moves from category grid to individual course detail to enrolment confirmation in three screens. Each step answers one question: what's available, is this right for me, and am I committed — without back-and-forth.",
        mockupBg: "linear-gradient(145deg,#e8f4ff,#d5eaff)",
        mockupImg: [
          "/mockups/Jobbicus/Course - Flow-1.png",
          "/mockups/Jobbicus/Course - Flow-2.png",
          "/mockups/Jobbicus/Course - Flow-3.png",
        ],
        mockupLayout: 'landscape',
      },

      // ─── COURSE DETAIL — MOBILE ─────────────────────────────────────────────
      {
        label: "Design · Course Detail — Mobile",
        title: "Reading and video modes from the same entry point — format is a preference, not a fork.",
        body: "The mobile course detail opens with an overview of modules and estimated time. From there the learner picks reading or video mode without being routed to a different course version. Both formats share the same progress state so switching mid-course doesn't lose position.",
        mockupBg: "linear-gradient(145deg,#f0f6ff,#e0eeff)",
        mockupImg: [
          "/mockups/Jobbicus/Course Detail - Home.png",
          "/mockups/Jobbicus/Course Detail - Home - Reading.png",
          "/mockups/Jobbicus/Course Detail - Home - Video.png",
        ],
        mockupLayout: 'portrait',
      },

      // ─── COURSE PROGRESS — MOBILE ────────────────────────────────────────────
      {
        label: "Design · Course Progress & Mobile Navigation",
        title: "Quiz closes the module; More tab keeps secondary actions out of the main nav.",
        body: "The post-quiz pass screen confirms the skill badge earned and shows the next recommended module — closing the learning loop with forward momentum. The More tab consolidates account, settings, referrals, and accommodations so the main navigation stays focused on the core job-seeking flow.",
        mockupBg: "linear-gradient(145deg,#f8f0ff,#f0e4ff)",
        mockupImg: [
          "/mockups/Jobbicus/Course Detail - Quiz - Post Take - Pass.png",
          "/mockups/Jobbicus/More.png",
          "/mockups/Jobbicus/More-1.png",
        ],
        mockupLayout: 'portrait',
      },

      // ─── MESSAGES — DESKTOP ─────────────────────────────────────────────────
      {
        label: "Design · Messages — Desktop",
        title: "Threaded inbox on desktop — consistent layout and status indicators across both sides.",
        body: "The messages view uses a split-pane layout with thread list on the left and active conversation on the right. Read/unread states and timestamp are visible in the list without opening each message — recruiters and candidates triage quickly.",
        mockupBg: "linear-gradient(145deg,#f0fff8,#e0fff2)",
        mockupImg: "/mockups/Jobbicus/Messages.png",
      },

      // ─── MESSAGES — MOBILE ───────────────────────────────────────────────────
      {
        label: "Design · Messages & Accommodations — Mobile",
        title: "Full message thread on mobile, and accommodation listings for relocating candidates.",
        body: "Mobile messaging preserves the same thread context as desktop — no messages are hidden or truncated on smaller screens. The Accommodations — Detail screen surfaces verified housing listings for candidates relocating for a role, integrated into the same app so job and housing search happen together.",
        mockupBg: "linear-gradient(145deg,#e8fff5,#d5ffec)",
        mockupImg: [
          "/mockups/Jobbicus/Messages Mobile.png",
          "/mockups/Jobbicus/Message View.png",
          "/mockups/Jobbicus/Accommodations - Detail.png",
        ],
        mockupLayout: 'portrait',
      },

      // ─── VIRTUAL FAIRS ───────────────────────────────────────────────────────
      {
        label: "Design · Virtual Hiring Fairs",
        title: "Company booths, live sessions, and direct job applications in one event interface.",
        body: "Virtual fairs consolidate what candidates normally do across multiple platforms — research companies, attend talks, and apply for roles — into a single live-event experience. Booth cards surface the key company info and open roles so candidates can apply without leaving the fair.",
        mockupBg: "linear-gradient(145deg,#f0fff8,#ddfff0)",
        mockupImg: [
          "/mockups/Jobbicus/Virtual Fair.png",
          "/mockups/Jobbicus/Virtual Fair-1.png",
        ],
        mockupLayout: 'landscape',
      },

      // ─── SETTINGS ────────────────────────────────────────────────────────────
      {
        label: "Design · Settings",
        title: "Preferences, billing, and account management in a predictable, scannable layout.",
        body: "Settings uses a grouped list pattern — notifications, privacy, subscription, billing — so users find what they're looking for without a search. The Invoice view gives subscribers a printable record without routing them to an external portal.",
        mockupBg: "linear-gradient(145deg,#f5f5f5,#ebebeb)",
        mockupImg: [
          "/mockups/Jobbicus/Settings.png",
          "/mockups/Jobbicus/Settings - Billing and Payments - Invoice.png",
        ],
        mockupLayout: 'landscape',
      },

      // ─── SETTINGS — MY INFORMATION ───────────────────────────────────────────
      {
        label: "Design · My Information — Full Edit Page",
        title: "Every editable profile field on one long form — no pagination, no modal stacks.",
        body: "The My Information edit page surfaces all personal and professional fields in a single continuous form. The decision to use one long page rather than multi-step wizard reflects that users editing existing data move non-linearly — they jump to the field that needs updating rather than stepping through from the top.",
        mockupBg: "linear-gradient(145deg,#f2f2f2,#e8e8e8)",
        mockupImg: "/mockups/Jobbicus/Settings -  My Information - Edit.png",
      },

      // ─── STAYS & ACCOMMODATIONS ──────────────────────────────────────────────
      {
        label: "Design · Stays & Accommodations",
        title: "Verified housing listings for candidates relocating for a new role.",
        body: "Stays brings accommodation search inside the platform so candidates don't need to juggle a separate housing service while job hunting. Listings are verified, show commute context to posted roles, and surface key details — price, proximity, lease terms — in a card format consistent with the job browse experience.",
        mockupBg: "linear-gradient(145deg,#fff8f0,#ffeedd)",
        mockupImg: "/mockups/Jobbicus/Stays.png",
      },
    ],
  },
]

export default PROJECTS
