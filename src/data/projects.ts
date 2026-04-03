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

      // ─── ONBOARDING ──────────────────────────────────────────────────────────
      {
        label: "Design · Onboarding",
        title: "A single screen to orient new users before any commitment.",
        body: "The welcome screen leads with a bold illustration of global reach and two clear paths — Get Started or Already have an Account. No feature list, no rate teaser. The goal was to remove hesitation and route users confidently into either the sign-up or login flow with a single tap.",
        mockupBg: "linear-gradient(145deg,#eef2ff,#e4eaff)",
        mockupImg: "/mockups/TransferNet/Login_flow.png",
      },

      // ─── SIGN UP & VERIFICATION ───────────────────────────────────────────────
      {
        label: "Design · Sign Up & Verification",
        title: "Account creation in two screens, verified before KYC begins.",
        body: "Email, password, confirm password, and an optional referral code are collected on a single sign-up screen. An OTP sent immediately to the registered email confirms the account — a 45-second countdown with a Resend option keeps the flow moving without locking users out. Both screens keep the keyboard and CTA in frame at all times.",
        mockupBg: "linear-gradient(145deg,#eef2ff,#e4eaff)",
        mockupImg: [
          "/mockups/TransferNet/Sign_Up_2.png",
          "/mockups/TransferNet/Sign_Up_1.png",
        ],
        mockupLayout: 'portrait',
      },

      // ─── KYC — PERSONAL DETAILS ───────────────────────────────────────────────
      {
        label: "Design · KYC — Personal Details",
        title: "Identity collected in one form, Continue only unlocks when it's complete.",
        body: "Name, date of birth, country of birth, and gender are gathered on a single screen that matches the layout of the user's official ID. The Continue button stays disabled until every field is valid — making it a reliable signal of completion rather than a source of inline error states. Two states are shown: mid-fill (Continue greyed) and fully completed (Continue active in blue).",
        mockupBg: "linear-gradient(145deg,#fff7f0,#ffeedd)",
        mockupImg: [
          "/mockups/TransferNet/Onboard-1.png",
          "/mockups/TransferNet/Onboard-2.png",
        ],
        mockupLayout: 'portrait',
      },

      // ─── KYC — ADDRESS ────────────────────────────────────────────────────────
      {
        label: "Design · KYC — Address & Proof",
        title: "Residential address and proof of residence in one focused screen.",
        body: "Street, suburb, postal code, state, and country are captured with a proof-of-residence upload zone at the bottom. Keeping compliance requirements visible but contained to a single screen prevents the KYC flow from feeling like an interrogation — users know exactly what's left before they can send.",
        mockupBg: "linear-gradient(145deg,#fff7f0,#ffeedd)",
        mockupImg: "/mockups/TransferNet/Onboard-3.png",
      },

      // ─── ALL DONE ─────────────────────────────────────────────────────────────
      {
        label: "Design · Account Ready",
        title: "A clear success state before users ever touch the send flow.",
        body: "An 'All done!' confirmation screen with a pulsing green check mark closes the onboarding loop cleanly. Users arrive at the home screen knowing their account is fully verified — not mid-process. The single CTA, Start Exploring App, removes any ambiguity about what to do next.",
        mockupBg: "linear-gradient(145deg,#f0fff4,#e0ffee)",
        mockupImg: "/mockups/TransferNet/Sign_Up_3.png",
      },

      // ─── LOGIN & RECOVERY ─────────────────────────────────────────────────────
      {
        label: "Design · Login & Password Recovery",
        title: "Returning users get in fast. Locked-out users have a clear path back.",
        body: "The login screen mirrors the sign-up layout — email, password with show/hide toggle, remember me, and a Forgot Password link — keeping cognitive load low for repeat visits. The recovery flow issues a fresh OTP then routes directly to a Create New Password screen with inline character requirements, keeping steps minimal and the keyboard in frame throughout.",
        mockupBg: "linear-gradient(145deg,#eef2ff,#e4eaff)",
        mockupImg: [
          "/mockups/TransferNet/Login_flow-1.png",
          "/mockups/TransferNet/Login_flow-2.png",
        ],
        mockupLayout: 'portrait',
      },

      // ─── HOME ─────────────────────────────────────────────────────────────────
      {
        label: "Design · Home Screen",
        title: "A live rate, a fee waiver, and one button — the home screen does one job.",
        body: "The dark home screen leads with the exchange rate and a trend sparkline, showing the exclusive rate advantage before any interaction. Small/Large/Tuition tabs let users switch transfer type without leaving the screen. Fees are crossed out to zero, the saved amount appears in the footer, and a single Send Now button closes the decision loop. Social proof ('13M+ transactions done') and a real-time activity ticker reinforce trust without cluttering the layout.",
        mockupBg: "linear-gradient(145deg,#0f172a,#1e293b)",
        mockupImg: "/mockups/TransferNet/Homepage_-_Alt_4.png",
      },

      // ─── SEND — STEP 1 ────────────────────────────────────────────────────────
      {
        label: "Design · Send Money — Amount",
        title: "Step 1 of 4: live rate, delivery method, and total before picking a recipient.",
        body: "Amount and recipient currency update in real time with the exclusive rate and a trend indicator visible inline. Delivery method (Bank Deposit) is selectable from a dropdown. Fees and subtotal are broken out below the fold so users understand exactly what they're committing to — including the zero-fee promotional state — before they continue.",
        mockupBg: "linear-gradient(145deg,#f5f0ff,#ede5ff)",
        mockupImg: "/mockups/TransferNet/Send_Money_05.png",
      },

      // ─── SEND — STEP 2 ────────────────────────────────────────────────────────
      {
        label: "Design · Send Money — Recipient",
        title: "Step 2 of 4: pick a frequent contact or add someone new in one tap.",
        body: "Frequent recipients surface immediately as avatar pills above a full searchable list. A New recipient shortcut sits inline with the frequent row so adding someone never breaks the flow. When no recipient is selected the Continue button stays grey — a passive guardrail that eliminates the empty-state submission error entirely.",
        mockupBg: "linear-gradient(145deg,#f5f0ff,#ede5ff)",
        mockupImg: "/mockups/TransferNet/Send_Money_04.png",
      },

      // ─── SEND — STEP 3 ────────────────────────────────────────────────────────
      {
        label: "Design · Send Money — Payment Upload",
        title: "Step 3 of 4: bank details to copy, receipt to upload, then continue.",
        body: "Rather than integrating a payment gateway, the flow asks users to transfer via online banking and upload the receipt screenshot. Account name, BSB, and account number are all copy-pasteable inline. The upload zone is marked Required and keeps Continue disabled until evidence is attached — preventing orders from advancing without a payment trace and giving ops a full audit trail.",
        mockupBg: "linear-gradient(145deg,#f5f0ff,#ede5ff)",
        mockupImg: "/mockups/TransferNet/Send_Money_03.png",
      },

      // ─── SEND — STEP 4 + SUCCESS ──────────────────────────────────────────────
      {
        label: "Design · Send Money — Confirm & Success",
        title: "Step 4 of 4: full summary review, then a confirmation that sticks.",
        body: "The confirmation screen shows the complete transfer at a glance — amount, recipient bank, fee, exchange rate, and the uploaded receipt thumbnail — before a single Confirm & Send button commits. The success screen that follows surfaces the transfer number, fee, and delivery method with Back to Home and Track Order Transfer CTAs, closing the send loop and routing users directly into the tracking flow.",
        mockupBg: "linear-gradient(145deg,#f5f0ff,#ede5ff)",
        mockupImg: [
          "/mockups/TransferNet/Send_Money_01.png",
          "/mockups/TransferNet/Send_Money_02.png",
        ],
        mockupLayout: 'portrait',
      },

      // ─── RECIPIENTS ───────────────────────────────────────────────────────────
      {
        label: "Design · Recipients",
        title: "A contacts-style list that doubles as a send launchpad.",
        body: "Each recipient row shows initials, name, and phone number with a direct Send shortcut — jumping straight to step 2 of the send flow without passing through the home screen. Frequent recipients stay pinned at the top. The detail view exposes full account information — receiver ID, name, mobile, account name and number — with Edit and Remove controls and a Send button that triggers the flow from context.",
        mockupBg: "linear-gradient(145deg,#f0f4ff,#e8eeff)",
        mockupImg: [
          "/mockups/TransferNet/Onboard_30.png",
          "/mockups/TransferNet/Onboard_29.png",
        ],
        mockupLayout: 'portrait',
      },

      // ─── TRANSACTIONS ─────────────────────────────────────────────────────────
      {
        label: "Design · Transactions",
        title: "A filterable transfer history with per-transfer tracking built in.",
        body: "Transfers are grouped by date with a total AUD value per day, filterable across All / Processing / Completed / Failed tabs. Each card shows recipient, transfer ID, sent amount, recipient gets amount, and timestamp — with a Track Transfer button that opens the live status view. Status badges (Delivered, Pending) let users triage at a glance without opening individual records.",
        mockupBg: "linear-gradient(145deg,#f0fff4,#e0ffee)",
        mockupImg: "/mockups/TransferNet/Transaction_4.png",
      },

      // ─── TRANSACTION DETAIL ───────────────────────────────────────────────────
      {
        label: "Design · Transaction Detail",
        title: "A five-stage timeline so senders always know exactly where their money is.",
        body: "Each transfer page shows the amount, approximate destination value, and recipient name above a live status badge. A vertical timeline below walks through Transfer Created → Payment Verified → Sent for Collection → Processing Transfer → Delivered, with completed stages struck through in green and the active stage highlighted in blue. Exchange rate, fee, created date, transaction ID, and platform are broken out in a details card, with sender and recipient shown side by side at the foot of the page.",
        mockupBg: "linear-gradient(145deg,#f0fff4,#e0ffee)",
        mockupImg: "/mockups/TransferNet/Transaction_3.png",
      },

      // ─── PROFILE ──────────────────────────────────────────────────────────────
      {
        label: "Design · Profile",
        title: "Account stats, quick actions, and settings — without the clutter.",
        body: "The profile screen surfaces three personal stats (TXNs completed, AUD saved, days as member) alongside quick-action tiles for Refer, Help, and Security. An Essentials list handles the rest — personal detail, about, password change, update check, and log out — using a simple disclosure pattern that keeps the screen scannable and the settings hierarchy shallow.",
        mockupBg: "linear-gradient(145deg,#fff7f0,#ffeedd)",
        mockupImg: "/mockups/TransferNet/Onboard_31.png",
      },
    ],
  },
  {
    id: 2,
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
    title: "Skathi — App & Web Platform",
    client: "Skathi",
    category: "Product Design",
    date: "April 2026",
    intro: "Designed the complete Skathi experience across iOS and web — a music platform built for South Asian listeners. The app covers streaming from onboarding to playback. The web extends into beats licensing, artist booking, studio rental, events, and a merch shop.",
    cardImg: skathiCover,
    sections: [],
  },
// ─────────────────────────────────────────────────────────────────
//  OCCS Case Study
//
//  Image filename map (verified):
//    image 1.png                            → User detail — General Information panel
//    image 2.png                            → Users list table (10 rows, bulk select)
//    image 3.png                            → Projects list — small view (3 projects)
//    image 4.png                            → Project Teams tab (Best Team / Acmda Team)
//    image 5.png                            → Inbound Opening Time — per-day table
//    image 6.png                            → Edit Opening Hours modal (day picker + time)
//    image 7.png                            → Edit Opening Hours Playback (audio upload)
//    image 8.png                            → Add Email — Message step (rich-text canvas)
//    image 9.png                            → Add Email — Result Codes step
//    image 10.png                           → Page Builder canvas (form fields + survey)
//    image 11.png                           → Page Builder — Page Settings panel open
//    image 12.png                           → Export / Call Records table (UUID keyed)
//    image 13.png                           → Global Settings — Calendar list
//    image 14.png                           → Add Calendar — full-year view (2025)
//    image 15.png                           → Clerk Local Settings — Sound & Audio Devices
//    image 16.png                           → Incoming call modal (accept / reject)
//    image 17.png                           → Projects list — large view (10+ projects)
//    image 18.png                           → Active Call — form tabs + Call Logs sidebar
//    Screen Shot 2026-04-02 at 14.26.30.png → Jira board (OCCS active sprint)
//    7fc570f7-ba76-43a7-85b8-59f575cdab99.png → Miro retro — car metaphor
//    1350a396-df65-49df-a047-951dced0cb1e.jpeg → Miro retro — hunted/hunter format
// ─────────────────────────────────────────────────────────────────

  {
    id: 4,
    title: "OCCS — Outbound Call Centre System",
    client: "OCCS / Staie",
    category: "UX Design · Product Design · Research",
    date: "2024–2025",
    intro: "Led UX design on a multi-tenant call centre platform built for 300+ clerks and 5,000+ customers across multiple client companies. Replaced a fragmented legacy system with a unified, role-based MUI dashboard — spanning user management, project configuration, live call handling, and reporting — shipped across 4,000+ tracked Jira tickets over 12 months.",
    cardImg: '/mockups/OCCS/OCCS Cover.png',
    coverImg: '/mockups/OCCS/OCCS Cover.png',
    docsUrl: 'https://docs.occs.live/introduction.html',

    sections: [

      {
        label: "Discovery · Sprint Scope",
        title: "4,000+ tickets, 20+ subtasks per epic — the problem was bigger than anyone expected.",
        body: "The OCCS Jira board made the scale impossible to ignore: in any given sprint, tickets were spread across TO DO, IN PROGRESS, BLOCKED, REVIEW, and DONE — with more in flight than resolved. QA tickets piled up faster than they cleared. The team was building a platform for hundreds of clerks while simultaneously reverse-engineering the full complexity of the legacy system it replaced. This board became the team's daily prioritisation tool and the source of truth for what shipped each week.",
        mockupBg: "linear-gradient(145deg,#f0f4ff,#e4eaff)",
        mockupImg: '/mockups/OCCS/Screen Shot 2026-04-02 at 14.26.30.png',
      },

      {
        label: "Process · Agile Retrospectives",
        title: "Car metaphors, ghost hunts, and sticky notes — how the team reflected and recalibrated.",
        body: "Every sprint closed with a structured retrospective on Miro. One format asked 'Which car best describes our last sprint?' — forcing gut-check honesty about velocity and morale. A later format reframed the same question as 'What ghosts were hunting us? / What allowed us to turn from hunted to hunter?' pushing the team past surface complaints into root causes. Recurring themes — test coverage gaps, missing human resource in FE, deployment failures, poorly written user stories — fed directly into the next sprint's scope and shaped how we prioritised design decisions.",
        mockupBg: "linear-gradient(145deg,#f5f0ff,#ede8ff)",
        mockupImg: ['/mockups/OCCS/7fc570f7-ba76-43a7-85b8-59f575cdab99.png', '/mockups/OCCS/1350a396-df65-49df-a047-951dced0cb1e.jpeg'],
        mockupLayout: 'landscape',
      },

      {
        label: "Design · User Management",
        title: "One searchable table to manage every clerk, admin, and extension across the platform.",
        body: "The Users screen gives SuperAdmins a paginated table of every account — first name, last name, username, status badge (Active / Inactive), extension number, and group (Clerk or Admin) visible without opening a single detail view. Rows support bulk selection for mass operations, and a search bar filters across 300+ users instantly. Selecting a row opens a General Information panel showing the full profile with Edit and Delete controls. This replaced scattered spreadsheets with a single auditable surface.",
        mockupBg: "linear-gradient(145deg,#f0f5ff,#e8eeff)",
        mockupImg: ['/mockups/OCCS/image 2.png', '/mockups/OCCS/image 1.png'],
        mockupLayout: 'landscape',
      },

      {
        label: "Design · Multi-tenant Project Architecture",
        title: "Each client company lives in its own isolated Project — scoped teams, channels, and data.",
        body: "The Projects list scales to dozens of clients simultaneously — from internal test environments to live client deployments — all managed from one admin panel without interference between companies. Drilling into a project reveals a nested tree: Channel (Voice, Email, Contact), Views, Database, and Result Code configuration. The Teams tab lets admins assign clerks with per-member agent levels and use-as-agent toggles, so each company's access is scoped precisely without touching global settings.",
        mockupBg: "linear-gradient(145deg,#f0fff5,#e0ffee)",
        mockupImg: ['/mockups/OCCS/image 17.png', '/mockups/OCCS/image 4.png'],
        mockupLayout: 'landscape',
      },

      {
        label: "Design · Inbound Voice Channel",
        title: "Opening hours and shift windows configured per project — no developer involvement.",
        body: "Each inbound voice channel exposes an Opening Time table showing per-day durations for Monday through Saturday, with unset days defaulting to Closed. Clicking Edit opens a day-selector modal where admins pick specific days, set start and end times with a 24-hour picker, and add multiple shift windows for split-hour operations like early/late shifts. Changes take effect immediately and are fully reversible — removing any dependency on engineering to reconfigure call routing.",
        mockupBg: "linear-gradient(145deg,#fff8f0,#ffeedd)",
        mockupImg: ['/mockups/OCCS/image 5.png', '/mockups/OCCS/image 6.png'],
        mockupLayout: 'landscape',
      },

      {
        label: "Design · Playback Audio & Email Templates",
        title: "Upload an audio file or build a rich-text email — both self-serve, both per-project.",
        body: "The Playback panel lets admins browse and upload custom audio files directly to an inbound channel for opening-hours messages — no engineering ticket needed. The Add Email wizard sits alongside it as the outbound equivalent: admins compose a rich-text message template with a full formatting toolbar and dynamic customer fields like {global_first_name}, drag placeholder blocks for personalized sections, and preview the result before saving. Both tools eliminated a recurring class of developer requests.",
        mockupBg: "linear-gradient(145deg,#fff0fa,#fce8f5)",
        mockupImg: ['/mockups/OCCS/image 7.png', '/mockups/OCCS/image 8.png'],
        mockupLayout: 'landscape',
      },

      {
        label: "Design · Result Codes & Automated Follow-ups",
        title: "Link a call outcome to an email template — the right message sends itself.",
        body: "The final step of the Add Email wizard binds the template to specific result codes: 'Call successful', 'Successful', 'Reached', 'Not Reached', and others. Two dropdowns scope the binding to a project and result code type before the checklist renders, preventing cross-project contamination. Once configured, a clerk marking a call 'Not Reached' automatically dispatches the correct follow-up email — no manual action, no missed follow-ups, no reliance on clerk memory.",
        mockupBg: "linear-gradient(145deg,#f5f0ff,#ede8ff)",
        mockupImg: '/mockups/OCCS/image 9.png',
      },

      {
        label: "Design · Page Builder",
        title: "A no-code canvas so admins build exactly the call form their clerks need.",
        body: "The Update Project Page editor gives admins a drag-and-drop canvas to build custom call forms without writing code. Fields — First Name, Last Name, Date of Birth, Gender, Phone Number, Email — and survey questions like source channel (Facebook, YouTube, Instagram, Twitter, Other) can be arranged freely. A collapsible Page Settings sidebar binds result codes to the page by name. Auto-save runs continuously, and a Preview button lets admins see exactly what clerks will see before pushing live.",
        mockupBg: "linear-gradient(145deg,#f0fff5,#e0ffee)",
        mockupImg: ['/mockups/OCCS/image 10.png', '/mockups/OCCS/image 11.png'],
        mockupLayout: 'landscape',
      },

      {
        label: "Design · Global Settings",
        title: "Holidays, email accounts, and call types — set once at the platform level, applied everywhere.",
        body: "Global Settings consolidates five cross-project modules: Calendar, Email Accounts, Views Attributes, Outcome Actions, and Call Types. The Calendar module renders all 12 months of the year in a single scrollable view — clicking any date opens a popover to add a holiday, with CSV import available for bulk setup. Holidays configured here propagate automatically to every project, making it fast to handle national and regional schedules without touching individual project configs.",
        mockupBg: "linear-gradient(145deg,#fffdf0,#fff8dd)",
        mockupImg: ['/mockups/OCCS/image 13.png', '/mockups/OCCS/image 14.png'],
        mockupLayout: 'landscape',
      },

      {
        label: "Design · Active Call Interface",
        title: "Accept. Fill the form. Mark done. The entire clerk workflow on one screen, live.",
        body: "An incoming call surfaces a full-screen modal showing the caller's number with a green Accept and red Reject button — no ambiguity about which call is ringing. Once connected, the clerk lands on the project's custom call form, tabbed by view (Brief, Chronolog, Contact), with Call Logs running in a live sidebar on the right — showing every prior interaction with date, phone number, remarks, and which agent handled it. Auto Save Enabled runs in the background throughout, and Mark As Done cleanly closes the interaction.",
        mockupBg: "linear-gradient(145deg,#f0f5ff,#e8eeff)",
        mockupImg: ['/mockups/OCCS/image 16.png', '/mockups/OCCS/image 18.png'],
        mockupLayout: 'landscape',
      },

      {
        label: "Design · Call Records & Clerk Tools",
        title: "Every call UUID-logged and exportable. Every audio device self-configured by the clerk.",
        body: "The Export table inside Database logs every call with a UUID, caller number, destination, direction (inbound/outbound), agent ID, and external extension — searchable, column-filterable, and directly exportable in one click. On the clerk side, the Local Setting screen in Tools lets each user select their own recording device, playback device, and ringtone output, with Play Sound and Play Echo verification buttons to confirm hardware before going live. Together they eliminated two recurring categories of ops and IT support overhead.",
        mockupBg: "linear-gradient(145deg,#fff0f0,#ffeded)",
        mockupImg: ['/mockups/OCCS/image 12.png', '/mockups/OCCS/image 15.png'],
        mockupLayout: 'landscape',
      },

    ],
  },
  {
    id: 5,
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
]

export default PROJECTS
