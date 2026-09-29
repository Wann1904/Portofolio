import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const links = [
  { href: '/#about', label: 'About' },
  { href: '/#skills', label: 'Skills' },
  { href: '/#repair-cases', label: 'Repair Cases' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#journey', label: 'Journey' },
  { href: '/#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location])

  return (
    <header
      className={`sticky top-0 z-40 transition-colors ${
        scrolled ? 'border-b border-base-line bg-base/90 backdrop-blur' : 'border-b border-transparent'
      }`}
    >
      <nav
        aria-label="Navigasi utama"
        className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4"
      >
        <Link to="/" className="font-display text-sm font-semibold tracking-tight text-ink">
          Ridwan Maulana Pratama
        </Link>

        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-md border border-base-line md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
        >
          <span className="sr-only">Menu</span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            {open ? (
              <path d="M2 2L16 16M16 2L2 16" stroke="currentColor" strokeWidth="1.6" />
            ) : (
              <path d="M1 4H17M1 9H17M1 14H17" stroke="currentColor" strokeWidth="1.6" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <ul id="mobile-menu" className="border-t border-base-line px-6 py-4 md:hidden">
          {links.map((link) => (
            <li key={link.href} className="py-2">
              <a href={link.href} className="text-sm text-ink-soft hover:text-ink">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
