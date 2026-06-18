import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <p className="text-[var(--gold)] text-xs font-medium uppercase tracking-widest2 mb-4">404</p>
      <h1 className="font-display font-medium text-5xl lg:text-6xl text-[var(--text-1)] mb-4">
        Page not found
      </h1>
      <p className="text-[var(--text-3)] text-base max-w-sm mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 h-11 px-7 rounded-full bg-[var(--gold)] text-[var(--ink)] text-sm font-bold hover:bg-[var(--gold-light)] transition-all active:scale-[0.97]"
      >
        Back to Home
      </Link>
    </div>
  )
}
