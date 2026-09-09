import { useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { projectCategories, projects, availableCategories } from '../data/projects'
import { ArrowRightIcon, SparkleIcon } from './icons'

const categoryStyles = {
  'UX Research': { text: 'text-ux-research', button: 'bg-[#9477EF] text-white' },
  'Product Design': { text: 'text-product-design', button: 'bg-[#83D3AE] text-white' },
  'Academic Research': { text: 'text-academic-research', button: 'bg-[#8099FD] text-white' },
}

export default function Work() {
  const { t } = useTranslation()
  const [filter, setFilter] = useState('All')
  const trackRef = useRef(null)

  const filters = useMemo(() => {
    const counts = { All: projects.length }
    for (const category of projectCategories) {
      counts[category] = projects.filter((p) => p.category === category).length
    }
    return ['All', ...projectCategories].map((label) => ({ label, count: counts[label] }))
  }, [])

  const visibleProjects =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  const categoryReady = filter === 'All' || availableCategories.includes(filter)

  const scrollByCard = (dir) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('[data-card]')
    const step = card ? card.offsetWidth + 24 : track.clientWidth * 0.9
    track.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <section id="work" className="mx-auto max-w-[1440px] px-6 py-6 sm:px-10 lg:px-[72px]">
      <div className="rounded-3xl bg-[#fdfdfd] p-8 shadow-sm">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="flex items-center gap-2 text-[32px] font-semibold text-black">
              {t('work.title')} <SparkleIcon className="h-4 w-4 text-primary" />
            </h2>
            <p className="mt-1 font-medium text-[#54575f]">{t('work.subtitle')}</p>
          </div>
          <div className="flex items-center gap-4">
            {categoryReady && (
              <div className="hidden items-center gap-2 sm:flex">
                <button
                  type="button"
                  aria-label="Previous projects"
                  onClick={() => scrollByCard(-1)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-black transition hover:border-primary hover:text-primary"
                >
                  <ArrowRightIcon width={16} height={16} className="rotate-180" />
                </button>
                <button
                  type="button"
                  aria-label="Next projects"
                  onClick={() => scrollByCard(1)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 text-black transition hover:border-primary hover:text-primary"
                >
                  <ArrowRightIcon width={16} height={16} />
                </button>
              </div>
            )}
            {/* All Projects page (/work) is a later change; anchor for now */}
            <a
              href="/#work"
              className="flex items-center gap-1 text-base font-medium text-black hover:text-primary hover:underline"
            >
              {t('work.viewAll')} <ArrowRightIcon width={16} height={16} />
            </a>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          {filters.map(({ label, count }) => (
            <button
              key={label}
              onClick={() => setFilter(label)}
              className={`rounded-full px-4 py-1.5 text-base font-medium transition-colors ${
                filter === label
                  ? 'bg-ux-research text-white'
                  : 'border border-gray-200 text-gray-600 hover:border-primary hover:text-primary'
              }`}
            >
              {label === 'All' ? t('work.all') : label} ({count})
            </button>
          ))}
        </div>

        {categoryReady ? (
          <div
            ref={trackRef}
            className="mt-8 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-color:theme(colors.ux-research)_transparent] [scrollbar-width:thin] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-ux-research/60 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-primary-light/50 [&::-webkit-scrollbar]:h-2"
          >
            {visibleProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border-2 border-dashed border-[#d9d6e4] bg-[#fbfbfd] px-6 py-16 text-center">
            <p className="font-playful text-2xl font-bold text-primary">{t('work.comingSoonTitle')}</p>
            <p className="mt-2 text-sm font-medium text-[#7f7f90]">{t('work.comingSoonBody')}</p>
          </div>
        )}
      </div>
    </section>
  )
}

// Three cards fit the viewport at md+ (100% minus the two 24px gaps, divided by 3).
function ProjectCard({ project }) {
  const style = categoryStyles[project.category] ?? {
    text: 'text-gray-600',
    button: 'bg-gray-100 text-gray-600',
  }
  const isInternal = project.link.startsWith('/')
  const CardTag = isInternal ? Link : 'a'
  const cardProps = isInternal ? { to: project.link } : { href: project.link }

  return (
    <CardTag
      data-card
      {...cardProps}
      className="group flex w-[80%] shrink-0 snap-start flex-col overflow-hidden rounded-[20px] border-2 border-[#d9d6e4] bg-[#fdfdfd] transition-shadow hover:shadow-lg sm:w-[46%] md:w-[calc((100%-48px)/3)]"
    >
      <div className="flex aspect-[760/338] items-center justify-center bg-primary-light/40 text-sm text-gray-400">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          'Project image'
        )}
      </div>
      <div className="flex flex-1 flex-col border-t border-[#d9d6e4] p-5">
        <span className={`text-[13px] font-semibold uppercase ${style.text}`}>{project.category}</span>
        <h3 className="mt-2 font-playful text-xl font-bold leading-[28px] text-[#333333]">
          {project.title}
        </h3>
        <p className="font-playful text-xl font-bold leading-[28px] text-[#333333]">
          {project.subtitle}
        </p>
        <p className="mt-2 flex-1 text-sm text-gray-500">{project.description}</p>
        <span
          className={`mt-4 inline-flex h-9 w-9 items-center justify-center self-end rounded-full transition-transform group-hover:translate-x-1 ${style.button}`}
        >
          <ArrowRightIcon width={16} height={16} />
        </span>
      </div>
    </CardTag>
  )
}
