import { useTranslation } from 'react-i18next'
import { profile } from '../data/profile'
import { LinkedInIcon, GitHubIcon, MailIcon, FooterArrowDoodle, FooterSquiggleDoodle } from './icons'
import footerBg from '../assets/footer-bg.svg'
import characters from '../assets/characters.webp'
import textBubble from '../assets/text-bubble.webp'

// Figma banner sizes: home 1296×142, project 1200×142 (same height, different width
// via the section's horizontal padding). `bubbleText` overrides the shared line.
export default function Contact({ bubbleText, className = '', variant = 'home' }) {
  const { t } = useTranslation()
  const isProject = variant === 'project'
  // project pages pass an array of lines so the wrap matches the Figma exactly
  const lines = Array.isArray(bubbleText) ? bubbleText : bubbleText ? [bubbleText] : []

  const socialLinks = [
    { href: profile.links.linkedin, label: t('contact.linkedin'), Icon: LinkedInIcon, external: true },
    { href: profile.links.github, label: t('contact.github'), Icon: GitHubIcon, external: true },
    { href: profile.links.email, label: t('contact.email'), Icon: MailIcon, external: false },
  ]

  return (
    <section
      id="contact"
      className={`mx-auto max-w-[1440px] px-6 pb-12 sm:px-10 ${
        isProject ? 'lg:px-[120px]' : 'lg:px-[72px]'
      } ${className}`}
    >
      <div className="relative flex flex-col items-center gap-5 rounded-[24px] px-6 py-6 sm:px-8 lg:h-[142px] lg:flex-row lg:flex-nowrap lg:justify-between lg:gap-6 lg:py-0 lg:pl-[96px] lg:pr-[84px]">
        {/* Direct Figma export (rounded container + two-tone wavy bands) — pixel-exact artwork. */}
        <img
          src={footerBg}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 h-full w-full rounded-[24px]"
        />

        <div className="relative flex w-full items-end gap-3 sm:w-auto sm:gap-4 lg:h-full lg:gap-9">
          {/* bottom edge of the character is flush with the bottom of the banner; on the
              home banner it is a little taller and rises above the band */}
          <img
            src={characters}
            alt=""
            aria-hidden="true"
            className={`shrink-0 self-end object-contain ${
              isProject ? 'w-[100px] sm:w-[120px] lg:w-[137px]' : 'w-[104px] sm:w-[132px] lg:w-[164px]'
            }`}
            style={{ aspectRatio: '137 / 133' }}
          />
          <div
            className={`relative flex min-w-0 flex-1 items-center justify-center self-center sm:flex-none ${
              isProject ? 'sm:w-[18rem] lg:w-[27rem]' : 'sm:w-[17rem] lg:w-[23rem]'
            }`}
          >
            <img
              src={textBubble}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 h-full w-full"
            />
            {isProject ? (
              <p className="relative whitespace-nowrap px-5 py-4 text-center font-playful text-[19px] font-semibold leading-tight text-primary sm:px-6 sm:text-[24px]">
                {lines.map((line, i) => (
                  <span key={line}>
                    {i > 0 && <br />}
                    {line}
                  </span>
                ))}
              </p>
            ) : (
              <p className="relative px-6 py-3 text-center font-playful font-semibold leading-tight text-primary sm:px-7">
                <span className="text-[20px] sm:text-[26px]">{t('contact.bubbleLead')}</span>
                <br />
                <span className="text-[15px] sm:text-[19px]">{t('contact.bubbleRest')}</span>
              </p>
            )}
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
