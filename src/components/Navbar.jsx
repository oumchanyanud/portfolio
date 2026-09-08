import { navLinks, profile } from '../data/profile'
import { DownloadIcon } from './icons'

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-navbar shadow-md">
      <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-4 sm:px-10 lg:px-[72px]">
        <a href="/#home" className="font-logo text-[44px] text-black">
          {profile.initials}
          <span className="text-primary">.</span>
        </a>

        <ul className="hidden gap-8 text-base font-medium text-black md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-primary">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={profile.resumeUrl}
          download
          className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-base font-medium text-black shadow-sm transition-opacity hover:opacity-80"
        >
          <DownloadIcon width={16} height={16} />
          View Resume
        </a>
      </nav>
    </header>
  )
}
