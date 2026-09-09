import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { projectCategories, projects } from '../data/projects'
import { ArrowRightIcon, SparkleIcon } from './icons'

const categoryStyles = {
  'UX Research': { text: 'text-ux-research', button: 'bg-[#9477EF] text-white' },
  'Product Design': { text: 'text-product-design', button: 'bg-[#83D3AE] text-white' },
  'Academic Research': { text: 'text-academic-research', button: 'bg-[#8099FD] text-white' },
}

export default function Work() {
  const { t } = useTranslation()
  const [filter, setFilter] = useState('All')

  const filters = useMemo(() => {
    const counts = { All: projects.length }
    for (const category of projectCategories) {
      counts[category] = projects.filter((p) => p.category === category).length
    }
    return ['All', ...projectCategories].map((label) => ({ label, count: counts[label] }))
  }, [])

  const visibleProjects =
    filter === 'All' ? projects : projects.filter((p) => p.category === filter)

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
          {/* Real destination (/work All Projects page) is added in a later change. */}
          <a
            href="/#work"
            className="flex items-center gap-1 text-base font-medium text-black hover:text-primary hover:underline"
          >
            {t('work.viewAll')} <ArrowRightIcon width={16} height={16} />
          </a>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {filters.map(({ label, count }) => (
            <button
              key={label}
              onClick={() => setFilter(label)}
              className={`rounded-full px-4 py-1.5 text-base font-medium transition-colors ${filter === label
                  ? 'bg-ux-research text-white'
                  : 'border border-gray-200 text-gray-600 hover:border-primary hover:text-primary'
                }`}
            >
              {label === 'All' ? t('work.all') : label} ({count})
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {visibleProjects.map((project) => {
            const style = categoryStyles[project.category] ?? {
              text: 'text-gray-600',
              button: 'bg-gray-100 text-gray-600',
            }
            const isInternal = project.link.startsWith('/')
            const CardTag = isInternal ? Link : 'a'
            const cardProps = isInternal ? { to: project.link } : { href: project.link }
            return (
              <CardTag
                key={project.id}
                {...cardProps}
                className="group flex flex-col overflow-hidden rounded-[20px] border-2 border-[#d9d6e4] bg-[#fdfdfd] transition-shadow hover:shadow-lg"
              >
                <div className="flex aspect-video items-center justify-center bg-gray-50 text-sm text-gray-400">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                  ) : (
                    // TODO: add a project thumbnail — see src/data/projects.js `image`
                    'Project image'
                  )}
                </div>
                <div className="flex flex-1 flex-col border-t border-[#d9d6e4] p-5">
                  <span className={`text-[13px] font-semibold uppercase ${style.text}`}>
                    {project.category}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold leading-[32px] text-[#333333]">{project.title}</h3>
                  <p className="text-xl font-semibold leading-[32px] text-[#333333]">{project.subtitle}</p>
                  <p className="mt-2 flex-1 text-sm text-gray-500">{project.description}</p>
                  <span
                    className={`mt-4 inline-flex h-9 w-9 items-center justify-center self-end rounded-full transition-transform group-hover:translate-x-1 ${style.button}`}
                  >
                    <ArrowRightIcon width={16} height={16} />
                  </span>
                </div>
              </CardTag>
            )
          })}
        </div>
      </div>
    </section>
  )
}
