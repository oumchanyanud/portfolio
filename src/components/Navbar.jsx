import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { navLinks, profile } from '../data/profile'
import { DownloadIcon } from './icons'
import LanguageToggle from './LanguageToggle'

export default function Navbar() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-navbar shadow-md">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-6 py-4 sm:gap-4 sm:px-10 lg:px-[72px]">
        <a
          href="/#home"
          onClick={() => setOpen(false)}
          className="font-logo text-[36px] font-extrabold leading-none text-black sm:text-[44px]"
        >
          {profile.initials}
          <span className="text-primary">.</span>
        </a>

        <ul className="hidden gap-8 text-base font-medium text-black md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-primary">
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
            className="flex items-center gap-2 rounded-full bg-white px-3 py-2 text-base font-medium text-black shadow-sm transition-opacity hover:opacity-80 sm:px-4"
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
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
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
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
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
