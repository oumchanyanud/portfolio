import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowRightIcon } from './icons'

const categoryStyles = {
  'User Experience Research': { text: 'text-ux-research', button: 'bg-[#9477EF] text-white' },
  'Product Design': { text: 'text-product-design', button: 'bg-[#83D3AE] text-white' },
  'Academic Research': { text: 'text-academic-research', button: 'bg-[#8099FD] text-white' },
}

// layout: 'carousel' — fixed peek width for the home scroller (3 fit at md+);
//         'grid' — fills its grid cell on the All Projects page.
export default function ProjectCard({ project, layout = 'carousel' }) {
  const { t } = useTranslation()
  const style = categoryStyles[project.category] ?? {
    text: 'text-gray-600',
    button: 'bg-gray-100 text-gray-600',
  }
  const isInternal = project.link.startsWith('/')
  const CardTag = isInternal ? Link : 'a'
  const cardProps = isInternal ? { to: project.link } : { href: project.link }
  const sizing =
    layout === 'grid'
      ? 'w-full'
      : 'w-[80%] shrink-0 snap-start sm:w-[46%] md:w-[calc((100%-48px)/3)]'

  return (
    <CardTag
      data-card
      {...cardProps}
      className={`group flex flex-col overflow-hidden rounded-[20px] border-2 border-[#d9d6e4] bg-[#fdfdfd] transition-shadow hover:shadow-lg ${sizing}`}
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
        <span className={`text-[13px] font-semibold uppercase tracking-wide ${style.text}`}>
          {t(`categories.${project.category}`, project.category)}
        </span>
        <h3 className="mt-2 text-xl font-semibold leading-[28px] text-[#333333]">{project.title}</h3>
        <p className="text-xl font-semibold leading-[28px] text-[#333333]">{project.subtitle}</p>
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
