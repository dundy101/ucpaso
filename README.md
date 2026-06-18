# PASO UC — Website

**Pinoy-American Student Organization at the University of Cincinnati**

A premium, agency-quality website built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

---

## Getting Started

### Prerequisites
- Node.js 18+ ([nodejs.org](https://nodejs.org))
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## Deployment

Recommended: **Vercel** (free for student organizations)

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) and import your repo
3. Deploy — Vercel auto-detects Next.js, zero config needed
4. Add your custom domain in Vercel settings

---

## Customization Guide

### 🗓 Google Calendar Integration

Open `src/components/sections/Calendar.tsx`

Replace the placeholder with your Google Calendar embed URL:

```tsx
// Find the commented-out iframe and replace the placeholder div with:
<iframe
  src="YOUR_GOOGLE_CALENDAR_EMBED_URL_HERE"
  className="absolute inset-0 w-full h-full border-0"
  title="PASO Events Calendar"
  loading="lazy"
/>
```

**How to get your embed URL:**
1. Go to [calendar.google.com](https://calendar.google.com)
2. Settings → Your calendar → "Integrate Calendar"
3. Copy the "Embed code" iframe src URL
4. Paste it into Calendar.tsx

### 📸 Adding Photos

**Mock Debut gallery** — `src/app/events/mock-debut/page.tsx`
Find the gallery grid section and replace the placeholder divs with `<Image>` components:

```tsx
import Image from 'next/image'

<Image
  src="/images/mock-debut-2025-1.jpg"
  alt="Mock Debut 2025 photo"
  fill
  className="object-cover"
/>
```

Put photos in `public/images/`

### 👥 Board Members

Open `src/app/board/page.tsx`

Update the `executive` and `chairs` arrays:

```ts
const executive = [
  {
    name: 'Jane Doe',
    position: 'President',
    major: 'Biology · A&S',
    year: "'26",
    bio: 'Jane is a junior from...',
    initials: 'JD',
    // Add: photo: '/images/board/jane.jpg'
  },
  // ...
]
```

To add headshot photos, add `photo` field and update `MemberCard`:
```tsx
{m.photo && <Image src={m.photo} alt={m.name} fill className="object-cover" />}
```

### 🅿️ Parking PDF

Place your parking directions PDF at `public/parking-directions.pdf`
The Mock Debut page already links to `/parking-directions.pdf`.

### 📬 Contact Form

The contact form currently shows a success state (no email sent).
To make it functional, integrate **Formspree** (free):

1. Sign up at [formspree.io](https://formspree.io)
2. Create a form and copy your form endpoint
3. In `src/app/contact/page.tsx`, update `handleSubmit`:

```ts
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(form),
  })
  if (res.ok) setSubmitted(true)
}
```

### 🎨 Design Tokens

All colors and fonts are in `src/app/globals.css` under `:root {}`.
Primary accent color: `--gold: #C9A020`

---

## File Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Home
│   ├── layout.tsx          # Root layout (navbar + footer)
│   ├── globals.css         # Design tokens + global styles
│   ├── events/
│   │   ├── page.tsx        # Events hub
│   │   ├── mock-debut/     # Mock Debut microsite
│   │   └── worldwide/      # WorldWide page
│   ├── programs/           # Programs page
│   ├── board/              # Board page
│   ├── more/               # FAQ + History + Resources
│   └── contact/            # Contact form + info
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky navigation
│   │   └── Footer.tsx      # Footer
│   ├── sections/           # Page sections (Hero, About, etc.)
│   ├── ui/                 # Shared primitives (Button, Card, Countdown)
│   └── motion/             # Framer Motion animation wrappers
public/
└── images/                 # Add photos here
```

---

## Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 15 | Framework, routing, SSR |
| TypeScript | Type safety |
| Tailwind CSS | Utility styling |
| Framer Motion | Animations |
| Lucide React | Icons |
| Playfair Display | Display/serif font |
| DM Sans | Body/UI font |

---

## Design System

**Colors**
- `--ink` `#080B14` — primary background
- `--gold` `#C9A020` — primary accent (used sparingly)
- `--text-1/2/3/4` — text hierarchy (92%/55%/28%/12% white)

**Type Scale**
- Display: Playfair Display (serif) — headings, hero text
- Sans: DM Sans — body, UI, labels

**Spacing**
- `.section` = 7rem vertical padding
- `.container` = 1200px max-width

---

## Contact

uc.paso17@gmail.com · @uc_paso on Instagram
