import { useTranslation } from 'react-i18next'
import { profile } from '../data/profile'
import { LinkedInIcon, GitHubIcon, MailIcon, FooterArrowDoodle, FooterSquiggleDoodle } from './icons'
import footerBg from '../assets/footer-bg.svg'
import footerCharacters from '../assets/footer-characters.svg'

export default function Contact() {
  const { t } = useTranslation()
  return (
    <section id="contact" className="mx-auto max-w-[1440px] px-6 pb-12 sm:px-10 lg:px-[72px]">
      <div className="relative flex flex-col items-center justify-between gap-6 overflow-hidden rounded-[24px] px-8 py-8 md:flex-row md:flex-wrap md:justify-center md:px-10 lg:flex-nowrap lg:justify-between">
        {/* Direct Figma export (rounded container + the two-tone wavy bands) — pixel-exact artwork. */}
        <img src={footerBg} alt="" aria-hidden="true" className="pointer-events-none absolute inset-0 h-full w-full" />

        <div className="relative flex aspect-[566/133] w-full max-w-[460px] items-center justify-center md:w-[460px] md:shrink-0 lg:-mb-8 lg:self-end">
          <img
            src={footerCharacters}
            alt="Let's create meaningful experiences together!"
            className="pointer-events-none h-full w-full object-contain"
          />
        </div>

        <div className="relative flex flex-wrap items-center justify-center gap-3 md:flex-nowrap md:shrink-0">
          <FooterArrowDoodle className="pointer-events-none absolute -left-3 top-1/2 hidden h-8 w-7 -translate-y-1/2 text-primary sm:block md:-left-5" />
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-base font-medium text-black shadow-sm transition-colors hover:text-primary"
          >
            <LinkedInIcon width={16} height={16} />
            {t('contact.linkedin')}
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-base font-medium text-black shadow-sm transition-colors hover:text-primary"
          >
            <GitHubIcon width={16} height={16} />
            {t('contact.github')}
          </a>
          <a
            href={profile.links.email}
            className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-base font-medium text-black shadow-sm transition-colors hover:text-primary"
          >
            <MailIcon width={16} height={16} />
            {t('contact.email')}
          </a>
          <FooterSquiggleDoodle className="pointer-events-none absolute -right-4 top-1/2 hidden h-6 w-6 -translate-y-1/2 text-primary sm:block md:-right-7" />
        </div>
      </div>
    </section>
  )
}
