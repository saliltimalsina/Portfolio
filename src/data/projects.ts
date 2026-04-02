export type ProjectSection = {
  label: string
  title: string
  body: string
  mockupBg: string
  mockupImg?: string | string[]
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
    title: "Whirlpool ONE",
    client: "Whirlpool Corporation",
    category: "Industrial Design",
    date: "February 2022",
    intro: "Revamped the top-load washer for India and built a new, scalable brand DNA to unify Whirlpool's next generation of products.",
    sections: [
      {
        label: "Research · Market",
        title: "Built for Indian homes, not adapted from global ones.",
        body: "Indian households operate differently — bucket heights, water habits, saree care. We embedded with 14 families across 3 cities to uncover the real gaps in existing appliance design.",
        mockupBg: "linear-gradient(145deg,#1c2a4a,#0e1828)",
      },
      {
        label: "Design · Brand DNA",
        title: "Scalable visual language for the next generation of products.",
        body: "Beyond the washer, we established a brand system — material cues, proportions, surface language — that could extend across Whirlpool's entire India product lineup.",
        mockupBg: "linear-gradient(145deg,#162040,#0e1830)",
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
  {
    id: 4,
    title: "Flowbite Design System",
    client: "Freelance",
    category: "Design Systems",
    date: "2024",
    intro: "Built and documented a scalable component library using Flowbite and Tailwind, enabling consistent design across multiple client products.",
    sections: [
      {
        label: "Audit · Foundations",
        title: "Mapping inconsistencies before building anything new.",
        body: "Across 3 client codebases, we found 47 button variants, 9 conflicting color scales, and zero shared spacing tokens. A system audit came first.",
        mockupBg: "linear-gradient(145deg,#f0fdf4,#dcfce7)",
      },
      {
        label: "Build · Components",
        title: "A component library that teams actually adopt.",
        body: "Each component ships with usage guidelines, variant rationale, and do/don't examples — making adoption frictionless for engineers and designers alike.",
        mockupBg: "linear-gradient(145deg,#ecfdf5,#d1fae5)",
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
