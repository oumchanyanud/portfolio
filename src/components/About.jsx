import { useTranslation } from 'react-i18next'
import { profile } from '../data/profile'
import { Icon, RobotIcon } from './icons'

export default function About() {
  const { t } = useTranslation()
  return (
    <section id="about" className="mx-auto max-w-[1440px] px-6 py-6 sm:px-10 lg:px-[72px]">
      {/* Figma card sizes: About 470×383, What I'm Into 778×383, 48 gap */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-[470px_778px] lg:justify-center lg:gap-12">
        <div className="overflow-hidden rounded-3xl bg-[#fdfdfd] p-8 shadow-sm lg:h-[383px]">
          <h2 className="flex items-center gap-2 text-[32px] font-semibold text-black">
            {t('about.title')}{' '}
            <RobotIcon width={54.42} height={54.42} className="rotate-[5.77deg] text-primary" />
          </h2>
          <div className="mt-4 space-y-3 font-medium text-[#54575f]">
            {profile.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {profile.about.facts.map((fact) => (
              <span
                key={fact.label}
                style={{ width: fact.w, height: fact.h }}
                className="flex items-center justify-center gap-2 rounded-[20px] bg-primary-light px-3 text-base font-semibold leading-tight text-[#37353d]"
              >
                <Icon
                  name={fact.icon}
                  width={20}
                  height={20}
                  className="shrink-0 text-ux-research"
                />
                <span className={fact.twoLine ? '' : 'whitespace-nowrap'}>{fact.label}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl bg-[#fdfdfd] p-8 shadow-sm lg:h-[383px]">
          <h2 className="text-[32px] font-semibold text-black">{t('about.interestsTitle')}</h2>
          {/* three side-by-side boxes */}
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {profile.interests.map((group) => (
              <div key={group.title} className="min-w-0 rounded-[20px] bg-primary-light p-4">
                <p className="text-xl font-semibold text-[#37353d]">{group.title}</p>
                <ul className="mt-2 list-disc space-y-1 pl-4 text-base font-medium text-[#37353d]">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
