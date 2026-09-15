import { useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { projectCategories, availableCategories } from '../data/projects'
import { useLocalizedData } from '../data/localized'
import { ArrowRightIcon, SparkleIcon } from './icons'
import ProjectCard from './ProjectCard'

export default function Work() {
  const { t } = useTranslation()
  const { projects } = useLocalizedData()
  const [filter, setFilter] = useState('All')
  const trackRef = useRef(null)

  const filters = useMemo(() => {
    const counts = { All: projects.length }
    for (const category of projectCategories) {
      counts[category] = projects.filter((p) => p.category === category).length
    }
    return ['All', ...projectCategories].map((label) => ({ label, count: counts[label] }))
  }, [projects])

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
            <Link
              to="/work"
              className="flex items-center gap-1 text-base font-medium text-black hover:text-primary hover:underline"
            >
              {t('work.viewAll')} <ArrowRightIcon width={16} height={16} />
            </Link>
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
              {label === 'All' ? t('work.all') : t(`categories.${label}`, label)} ({count})
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
            <p className="text-2xl font-bold text-primary">{t('work.comingSoonTitle')}</p>
            <p className="mt-2 text-sm font-medium text-[#7f7f90]">{t('work.comingSoonBody')}</p>
          </div>
        )}
      </div>
    </section>
  )
}
