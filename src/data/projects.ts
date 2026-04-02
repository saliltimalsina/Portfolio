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
  docsUrl?: string
}

const PROJECTS: Project[] = [
  {
    id: 0,
    title: "ClearPath Factory Portal",
    client: "ClearPath",
    category: "Product Design",
    date: "April 2026",
    intro: "Designed a dual-sided supply chain platform connecting garment factories and buyers — giving factories a clear action queue and giving buyers real-time shipment visibility with direct customer impact data.",
    cardImg: '/mockups/ClearPath/Dashboard.jpg',
    sections: [
      {
        label: "Discovery · Problem Space",
        title: "Factories were losing track of what needed doing and when.",
        body: "Production updates were scattered across emails, spreadsheets, and calls. Buyers had no visibility into QC status or shipment progress until it was too late to act. We mapped the full factory-to-buyer workflow to find where urgency was getting lost.",
        mockupBg: "linear-gradient(145deg,#f0f4ff,#e8eeff)",
        mockupImg: '/mockups/ClearPath/Dashboard.jpg',
      },
      {
        label: "Design · Factory Actions",
        title: "A single action queue that tells factories exactly what to do next.",
        body: "We consolidated PO acknowledgements, overdue production updates, QC photo submissions, and document uploads into a prioritised pending actions panel — surfacing the two most urgent items at the top with countdown timers.",
        mockupBg: "linear-gradient(145deg,#fff7f0,#ffeedd)",
        mockupImg: ['/mockups/ClearPath/Po Update 01.jpg', '/mockups/ClearPath/Po Update 02.jpg'],
        mockupLayout: 'landscape',
      },
      {
        label: "Design · Production Tracking",
        title: "Per-PO progress cards so nothing slips past its forecast date.",
        body: "Factories can update forecast dates and bulk-change statuses across line items in one pass. Overdue POs surface with orange urgency labels and due-in countdowns, reducing the back-and-forth between buyer and factory.",
        mockupBg: "linear-gradient(145deg,#fff7f0,#ffeedd)",
        mockupImg: '/mockups/ClearPath/Po Update 02.jpg',
      },
      {
        label: "Design · QC Workflow",
        title: "A factory-side QC submission flow that keeps buyers in control.",
        body: "Factories upload visual evidence and inspection notes per line item. The buyer receives a decision prompt only after evidence is complete — removing ambiguity about who acts next and ensuring every QC decision is traceable.",
        mockupBg: "linear-gradient(145deg,#f0fff4,#e0ffee)",
        mockupImg: '/mockups/ClearPath/review.jpg',
      },
      {
        label: "Design · Buyer Shipment View",
        title: "Buyers see every shipment, its stage, and how late it is — at a glance.",
        body: "A paginated shipment table spans all factories and origins, with a five-dot progress indicator and a live countdown to expected arrival. Status badges (Delayed, Overdue, In Transit, Arrived) let buyers triage in seconds without opening individual records.",
        mockupBg: "linear-gradient(145deg,#f0f4ff,#e8eeff)",
        mockupImg: '/mockups/ClearPath/Shipment 01.jpg',
      },
      {
        label: "Design · Shipment Detail",
        title: "A four-stage tracker that shows exactly where a shipment is stuck.",
        body: "Each shipment page surfaces carrier details, AWB number, departure and arrival airports, and a live remaining-time bar — alongside a Customer Impact sidebar showing which buyers are waiting and the total order value at risk.",
        mockupBg: "linear-gradient(145deg,#f0f4ff,#e8eeff)",
        mockupImg: '/mockups/ClearPath/Shipment 02.jpg',
      },
      {
        label: "Design · Documentation",
        title: "All shipping documents in one place, timestamped and ready to audit.",
        body: "Commercial Invoice, Packing List, Air Way Bill, and GSP Certificate are listed with exact upload times. The Docs Upload stage on the progress tracker stays pending until all required documents are present — preventing shipments from advancing prematurely.",
        mockupBg: "linear-gradient(145deg,#f0f4ff,#e8eeff)",
        mockupImg: '/mockups/ClearPath/Shipment 03.jpg',
      },
      {
        label: "Design · Inspection Evidence",
        title: "Pallet integrity photos give buyers confidence before goods arrive.",
        body: "A photo grid labelled by inspection category lets buyers verify physical condition remotely. Combined with QC summaries and document uploads, the shipment detail page removes the need for any offline communication before the delivery decision.",
        mockupBg: "linear-gradient(145deg,#f0f4ff,#e8eeff)",
        mockupImg: '/mockups/ClearPath/Shipment 04.jpg',
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
    cardImg: "/mockups/TransferNet/Homepage_-_Alt_4.png",

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
  {
    id: 3,
    title: "Blockchain system design for socio-economic impact",
    client: "NID Academic Project",
    category: "Service Design",
    date: "June 2022",
    intro: "Designed a speculative blockchain system offering microfinance and transparent supply chains to empower Indian farmers and drive socio-economic impact.",
    sections: [
      {
        label: "Research · Context",
        title: "Farmers trapped in opaque, exploitative supply chains.",
        body: "We mapped the journey of a kilo of wheat — from field to shelf — and found 5 rent-seeking intermediaries, zero farmer visibility, and no access to fair credit.",
        mockupBg: "linear-gradient(145deg,#0d2234,#122d46)",
      },
      {
        label: "Design · System",
        title: "Trustless transparency for low-literacy, low-connectivity users.",
        body: "SMS-based transaction logging, visual-first interface in local languages, and community validator nodes — designed for real constraints, not ideal conditions.",
        mockupBg: "linear-gradient(145deg,#0a1e2e,#0f2840)",
      },
    ],
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
    cardImg: '/mockups/OCCS/image 18.png',
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
