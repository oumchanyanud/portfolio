import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import Contact from './Contact'
import { ArrowRightIcon } from './icons'

export default function AllProjects() {
  const { t } = useTranslation()

  return (
    <>
      <div className="mx-auto max-w-[1440px] px-6 pb-0 pt-32 sm:px-10 md:pt-40 lg:px-[120px]">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary transition-opacity hover:opacity-70"
        >
          <ArrowRightIcon width={16} height={16} className="rotate-180" />
          {t('allProjects.back')}
        </Link>

        <h1 className="sr-only">{t('allProjects.title')}</h1>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} layout="grid" />
          ))}
        </div>
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
