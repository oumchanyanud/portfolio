import { useTranslation } from 'react-i18next'
import { profile } from '../data/profile'
import { LinkedInIcon, GitHubIcon, MailIcon, FooterArrowDoodle, FooterSquiggleDoodle } from './icons'
import footerBg from '../assets/footer-bg.svg'
import characters from '../assets/characters.webp'

// `bubbleText` lets project pages show their own line ("Everything students need, in one place!" …);
// the home page falls back to the shared contact.bubble string.
export default function Contact({ bubbleText }) {
  const { t } = useTranslation()
  const text = bubbleText || t('contact.bubble')

  const socialLinks = [
    { href: profile.links.linkedin, label: t('contact.linkedin'), Icon: LinkedInIcon, external: true },
    { href: profile.links.github, label: t('contact.github'), Icon: GitHubIcon, external: true },
    { href: profile.links.email, label: t('contact.email'), Icon: MailIcon, external: false },
  ]

  return (
    <section id="contact" className="mx-auto max-w-[1440px] px-6 pb-12 sm:px-10 lg:px-[72px]">
      <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-[24px] px-8 py-10 md:flex-row md:justify-between md:gap-8 md:px-12">
        {/* Direct Figma export (rounded container + two-tone wavy bands) — pixel-exact artwork. */}
        <img
          src={footerBg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
        />

        <div className="relative flex items-center gap-3 md:gap-4">
          <img
            src={characters}
            alt=""
            aria-hidden="true"
            className="h-24 w-24 shrink-0 object-contain md:h-28 md:w-28"
          />
          <p className="relative max-w-[15rem] rounded-[28px] rounded-bl-md bg-primary-light px-5 py-3 text-center font-playful text-lg font-bold leading-snug text-primary md:text-xl">
            {text}
          </p>
        </div>

        <div className="relative flex flex-wrap items-center justify-center gap-3 md:flex-nowrap">
          <FooterArrowDoodle className="pointer-events-none absolute -left-3 top-1/2 hidden h-8 w-7 -translate-y-1/2 text-primary sm:block md:-left-5" />
          {socialLinks.map(({ href, label, Icon, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-base font-medium text-black shadow-sm transition-colors hover:text-primary"
            >
              <Icon width={16} height={16} />
              {label}
            </a>
          ))}
          <FooterSquiggleDoodle className="pointer-events-none absolute -right-4 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-primary sm:block md:-right-7" />
        </div>
      </div>
    </section>
  )
}
