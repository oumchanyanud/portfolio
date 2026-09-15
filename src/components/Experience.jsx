import { useTranslation } from 'react-i18next'
import { useLocalizedData } from '../data/localized'
import { Icon, WorkIcon } from './icons'

const colorStyles = {
  purple: { bg: 'bg-[#ece6fc]', icon: 'text-[#7753e6]', tag: 'bg-[#ece6fc] text-[#7753e6]' },
  green: { bg: 'bg-[#daefe6]', icon: 'text-[#45a079]', tag: 'bg-[#daefe6] text-[#45a079]' },
  blue: { bg: 'bg-[#c3cfff]', icon: 'text-[#5372f0]', tag: 'bg-[#c3cfff] text-[#5372f0]' },
}

// bank/code are thin-stroke glyphs with generous viewBox padding, so they read lighter/smaller
// than research's bolder shape at the same size — bump them up to match visually.
const iconSize = {
  bank: 28,
  code: 28,
  research: 24,
}

// Figma card widths (317 / 278 / 260). grow-0 caps each card there instead of stretching
// to fill the row — shrink still lets them scale down together on narrower md screens.
const cardSizing = [
  'md:w-[317px] md:max-w-[317px] md:grow-0 md:shrink',
  'md:w-[278px] md:max-w-[278px] md:grow-0 md:shrink',
  'md:w-[260px] md:max-w-[260px] md:grow-0 md:shrink',
]

export default function Experience() {
  const { t } = useTranslation()
  const { experience } = useLocalizedData()
  return (
    <section id="experience" className="mx-auto max-w-[1440px] px-6 py-6 sm:px-10 lg:px-[72px]">
      <div className="rounded-3xl bg-[#fdfdfd] p-8 shadow-sm">
        <h2 className="flex items-center gap-2 text-[32px] font-semibold text-black">
          {t('experience.title')}{' '}
          <WorkIcon width={51.98} height={51.98} className="rotate-[-8.66deg] text-primary" />
        </h2>
        <p className="mt-1 font-medium text-[#54575f]">{t('experience.subtitle')}</p>

        <div className="relative mt-12 px-11">
          <svg
            className="pointer-events-none absolute left-0 right-0 top-[5px] hidden h-10 w-full -translate-y-1/2 text-[#9477ef] md:block"
            viewBox="0 0 120 40"
            preserveAspectRatio="none"
            fill="none"
          >
            <path
              d="M-12 30c7.32 0 12.2 -18 31.72 -18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray="1.6 2.6"
              vectorEffect="non-scaling-stroke"
            />
            <path
              d="M19.72 12c10.77 0 10.77 22 21.53 22s10.77 -22 21.53 -22s10.07 22 20.14 22s10.07 -22 20.14 -22"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div className="flex flex-col gap-5 md:flex md:flex-row md:items-start md:justify-between md:gap-6">
            {experience.map((item, index) => {
              const styles = colorStyles[item.color]
              return (
                <div key={item.id} className={`flex flex-col ${cardSizing[index]}`}>
                  {index > 0 && (
                    <div className="mb-4 h-6 border-l-2 border-dashed border-[#9477ef]/40 md:hidden" aria-hidden="true" />
                  )}
                  {/* Dot centered within this card's own column, so it lines up exactly
                      regardless of the unequal flex-basis widths/gaps above. */}
                  <div className="mb-3 hidden flex-col items-center md:flex">
                    <span className="-mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-[#9477ef]" />
                    <span className="mt-2 text-sm font-semibold text-[#7f7f90]">{item.date}</span>
                  </div>
                  <div className="flex-1 rounded-2xl border-2 border-[#d9d6e4] bg-[#fbfbfd] p-4 shadow-sm">
                    <div className="flex items-start gap-3">
                      <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${styles.bg}`}>
                        <Icon
                          name={item.icon}
                          width={iconSize[item.icon]}
                          height={iconSize[item.icon]}
                          className={styles.icon}
                        />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-base font-semibold leading-snug text-black">{item.role}</h3>
                        <p className="mt-0.5 text-sm text-[#54575f]">{item.company}</p>
                      </div>
                    </div>
                    <span
                      className={`ml-[60px] mt-3 inline-block whitespace-nowrap rounded-full px-3 py-0.5 text-[13px] font-semibold ${styles.tag}`}
                    >
                      {item.tag}
                    </span>
                    <p className="mt-2 text-xs font-semibold text-[#9477ef] md:hidden">{item.date}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
