import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { projectCategories, projects, availableCategories } from '../data/projects'
import ProjectCard from './ProjectCard'
import Contact from './Contact'
import { ArrowRightIcon, SparkleIcon } from './icons'

export default function AllProjects() {
  const { t } = useTranslation()
  const [filter, setFilter] = useState('All')

  const filters = useMemo(() => {
    const counts = { All: projects.length }
    for (const category of projectCategories) {
      counts[category] = projects.filter((p) => p.category === category).length
    }
    return ['All', ...projectCategories].map((label) => ({ label, count: counts[label] }))
  }, [])

  const categoryReady = filter === 'All' || availableCategories.includes(filter)
  const visibleProjects =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter)

  return (
    <>
      <div className="mx-auto max-w-[1440px] px-6 pb-0 pt-32 sm:px-10 md:pt-40 lg:px-[120px]">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary transition-opacity hover:opacity-70"
        >
          <ArrowRightIcon width={16} height={16} className="rotate-180" />
          {t('projectDetail.back')}
        </Link>

        <h1 className="mt-8 flex items-center gap-2 text-[32px] font-semibold text-black">
          {t('work.title')} <SparkleIcon className="h-4 w-4 text-primary" />
        </h1>
        <p className="mt-1 font-medium text-[#54575f]">{t('work.subtitle')}</p>

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
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} layout="grid" />
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border-2 border-dashed border-[#d9d6e4] bg-[#fbfbfd] px-6 py-16 text-center">
            <p className="font-playful text-2xl font-bold text-primary">{t('work.comingSoonTitle')}</p>
            <p className="mt-2 text-sm font-medium text-[#7f7f90]">{t('work.comingSoonBody')}</p>
          </div>
        )}
      </div>

      {/* last card → 48 → banner */}
      <Contact
        variant="project"
        bubbleText={[t('contact.bubbleLead'), t('contact.bubbleRest')]}
        className="mt-12"
      />
    </>
  )
}
