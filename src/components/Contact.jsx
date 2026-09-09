import { useTranslation } from 'react-i18next'
import { profile } from '../data/profile'
import { LinkedInIcon, GitHubIcon, MailIcon, FooterArrowDoodle, FooterSquiggleDoodle } from './icons'
import footerBg from '../assets/footer-bg.svg'
import characters from '../assets/characters.webp'
import textBubble from '../assets/text-bubble.webp'

// `bubbleText` lets project pages show their own line ("Everything students need, in one place!" …);
// the home page falls back to the shared contact.bubble string.
export default function Contact({ bubbleText, className = '' }) {
  const { t } = useTranslation()
  const text = bubbleText || t('contact.bubble')

  const socialLinks = [
    { href: profile.links.linkedin, label: t('contact.linkedin'), Icon: LinkedInIcon, external: true },
    { href: profile.links.github, label: t('contact.github'), Icon: GitHubIcon, external: true },
    { href: profile.links.email, label: t('contact.email'), Icon: MailIcon, external: false },
  ]

  return (
    <section
      id="contact"
      className={`mx-auto max-w-[1440px] px-6 pb-12 sm:px-10 lg:px-[72px] ${className}`}
    >
      <div className="relative flex flex-col items-center gap-6 overflow-hidden rounded-[24px] px-8 py-8 md:flex-row md:flex-nowrap md:justify-between md:gap-6 md:px-10 lg:pl-[96px] lg:pr-[84px]">
        {/* Direct Figma export (rounded container + two-tone wavy bands) — pixel-exact artwork. */}
        <img
          src={footerBg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full"
        />

        <div className="relative flex items-center gap-4 md:gap-9">
          <img
            src={characters}
            alt=""
            aria-hidden="true"
            className="shrink-0 object-contain"
            style={{ width: 137, height: 133 }}
          />
          <div className="relative flex w-[19rem] max-w-full items-center justify-center">
            <img
              src={textBubble}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full"
            />
            <p className="relative px-7 py-5 text-center font-playful text-[24px] font-semibold leading-tight text-primary">
              {text}
            </p>
          </div>
        </div>

        <div className="relative flex flex-wrap items-center justify-center gap-2 md:flex-nowrap">
          <FooterArrowDoodle className="pointer-events-none absolute -left-3 top-1/2 hidden h-8 w-7 -translate-y-1/2 text-primary sm:block md:-left-6" />
          {socialLinks.map(({ href, label, Icon, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[16px] font-medium text-black shadow-sm transition-colors hover:text-primary"
            >
              <Icon width={16} height={16} />
              {label}
            </a>
          ))}
          <FooterSquiggleDoodle className="pointer-events-none absolute -right-3 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-primary sm:block md:-right-6" />
        </div>
      </div>
    </section>
  )
}
