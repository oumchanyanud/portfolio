import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { navLinks, profile } from '../data/profile'
import { DownloadIcon } from './icons'
import LanguageToggle from './LanguageToggle'

export default function Navbar() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    const top = el.getBoundingClientRect().top + window.scrollY - 80 // clear the fixed navbar
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
  }

  const handleNav = (event, id) => {
    event.preventDefault()
    setOpen(false)
    if (pathname === '/') {
      if (id === 'home') window.scrollTo({ top: 0, behavior: 'smooth' })
      else scrollToSection(id)
    } else {
      // navigate home with the hash — ScrollManager handles the scroll once mounted
      navigate(id === 'home' ? '/' : `/#${id}`)
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-navbar shadow-md">
      <nav className="relative mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-6 py-4 sm:gap-4 sm:px-10 lg:px-[72px]">
        <a
          href={import.meta.env.BASE_URL}
          onClick={(e) => handleNav(e, 'home')}
          className="font-logo text-[36px] font-extrabold leading-none text-black sm:text-[44px]"
        >
          {profile.initials}
          <span className="text-primary">.</span>
        </a>

        {/* absolutely centred so its position doesn't shift between EN / TH */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 gap-8 text-base font-medium text-black md:flex">
          {navLinks.map((link) => (
            <li key={link.key}>
              <a
                href={`${import.meta.env.BASE_URL}#${link.key}`}
                onClick={(e) => handleNav(e, link.key)}
                className="transition-colors hover:text-primary"
              >
                {t(`nav.${link.key}`, link.label)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageToggle />
          <a
            href={profile.resumeUrl}
            download
            className="flex items-center justify-center gap-2 rounded-full bg-white px-3 py-2 text-base font-medium text-black shadow-sm transition-opacity hover:opacity-80 sm:w-[164px]"
          >
            <DownloadIcon width={16} height={16} />
            <span className="hidden sm:inline">{t('nav.resume')}</span>
          </a>

          {/* mobile menu button */}
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black shadow-sm md:hidden"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {open ? (
                <>
                  <path d="M6 6l12 12" />
                  <path d="M18 6L6 18" />
                </>
              ) : (
                <>
                  <path d="M3 6h18" />
                  <path d="M3 12h18" />
                  <path d="M3 18h18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* mobile dropdown */}
      {open && (
        <ul className="border-t border-white/40 bg-navbar px-6 pb-4 pt-2 text-base font-medium text-black md:hidden">
          {navLinks.map((link) => (
            <li key={link.key}>
              <a
                href={`${import.meta.env.BASE_URL}#${link.key}`}
                onClick={(e) => handleNav(e, link.key)}
                className="block py-2 transition-colors hover:text-primary"
              >
                {t(`nav.${link.key}`, link.label)}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
