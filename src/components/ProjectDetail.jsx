import { Link, Navigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { projects } from '../data/projects'
import Contact from './Contact'
import { ArrowRightIcon, PersonIcon, BookIcon, DevicesIcon, ToolsIcon } from './icons'

const categoryDot = {
  'UX Research': 'bg-ux-research',
  'Product Design': 'bg-product-design',
  'Academic Research': 'bg-academic-research',
}

export default function ProjectDetail() {
  const { t } = useTranslation()
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/" replace />

  const { detail } = project
  const ds = detail.designSystem
  const isWeb = project.layout === 'web'

  // "SIIT Super App" -> "SIIT " + <accent>Super App</accent>
  const titleLead = project.titleAccent
    ? project.title.slice(0, project.title.length - project.titleAccent.length)
    : project.title

  const meta = [
    { icon: <PersonIcon width={22} height={22} />, label: t('projectDetail.role'), value: detail.role },
    { icon: <BookIcon width={22} height={22} />, label: t('projectDetail.course'), value: detail.course },
    { icon: <DevicesIcon width={22} height={22} />, label: t('projectDetail.platform'), value: detail.platform },
    { icon: <ToolsIcon width={22} height={22} />, label: t('projectDetail.tools'), value: detail.tools },
  ]

  return (
    <>
      <div className="mx-auto max-w-[1440px] px-6 pb-16 pt-32 sm:px-10 md:pt-40 lg:px-[72px]">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary transition-opacity hover:opacity-70"
        >
          <ArrowRightIcon width={16} height={16} className="rotate-180" />
          {t('projectDetail.back')}
        </Link>

        {/* ── Header: description left, mockup right ── */}
        <div className="mt-8 grid items-start gap-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-12">
          <div>
            <h1 className="font-playful text-[42px] font-extrabold leading-[1.08] text-black sm:text-[52px]">
              {titleLead}
              {project.titleAccent && <span className="text-primary">{project.titleAccent}</span>}
            </h1>

            <p className="mt-5 max-w-xl text-lg font-medium leading-relaxed text-[#54575f]">
              {detail.longDescription}
            </p>

            <span className="mt-6 inline-flex items-center gap-2 rounded-full border-2 border-[#e7e3f2] bg-white px-4 py-2 text-[13px] font-bold uppercase tracking-[0.08em] text-[#7f7f90]">
              <span className={`h-2 w-2 rounded-full ${categoryDot[project.category]}`} />
              {project.category} Project
            </span>

            <dl className="mt-8 grid max-w-md grid-cols-2 gap-x-10 gap-y-6">
              {meta.map(({ icon, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <span className="mt-0.5 shrink-0 text-primary">{icon}</span>
                  <div>
                    <dt className="text-[15px] font-bold text-black">{label}</dt>
                    <dd className="mt-0.5 text-[15px] text-[#54575f]">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div
              aria-hidden="true"
              className="absolute -inset-x-6 -inset-y-10 -z-10 rounded-[46%_54%_63%_37%/48%_43%_57%_52%] bg-primary-light"
            />
            <img
              src={detail.hero}
              alt={project.title}
              className="w-full max-w-[620px] object-contain"
            />
          </div>
        </div>

        {/* ── Key Features ── */}
        <section className="mt-20">
          <h2 className="flex items-center gap-2.5 font-playful text-2xl font-bold text-primary">
            <span className="h-2 w-2 rounded-full bg-primary" />
            {t('projectDetail.keyFeatures')}
          </h2>

          <div className={`mt-6 grid gap-5 ${isWeb ? 'md:grid-cols-2' : 'md:grid-cols-2'}`}>
            {detail.keyFeatures.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} isWeb={isWeb} />
            ))}
          </div>
        </section>

        {/* ── Design System ── */}
        {ds && (
          <section className="mt-20">
            <h2 className="flex items-center gap-2.5 font-playful text-2xl font-bold text-primary">
              <span className="h-2 w-2 rounded-full bg-primary" />
              {t('projectDetail.designSystem')}
            </h2>

            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              <DsCard title={t('projectDetail.color')} blurb={ds.color.blurb}>
                <ul className="mt-4 space-y-2.5">
                  {ds.color.swatches.map((hex) => (
                    <li key={hex} className="flex items-center gap-3">
                      <span
                        className="h-7 w-7 shrink-0 rounded-full border border-black/10"
                        style={{ backgroundColor: hex }}
                      />
                      <span className="text-[13px] font-medium tracking-wide text-[#54575f]">{hex}</span>
                    </li>
                  ))}
                </ul>
              </DsCard>

              <DsCard title={t('projectDetail.typography')} blurb={ds.typography.blurb}>
                <img
                  src={ds.typography.image}
                  alt={`${project.title} typography sample`}
                  className="mt-4 w-full rounded-lg"
                />
                <p className="mt-3 text-[13px] font-bold text-black">{t('projectDetail.font')}</p>
                <p className="text-[13px] text-[#7f7f90]">{ds.typography.font}</p>
              </DsCard>

              <DsCard title={t('projectDetail.uiElements')} blurb={ds.uiElements.blurb}>
                <div className="mt-4 space-y-2">
                  {ds.uiElements.images.map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt={`${project.title} UI element ${i + 1}`}
                      className="w-full rounded-lg border border-[#ece9f4]"
                    />
                  ))}
                </div>
              </DsCard>

              <DsCard title={ds.gallery.label} blurb={ds.gallery.blurb}>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {ds.gallery.images.map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt={`${project.title} ${ds.gallery.label} ${i + 1}`}
                      className="w-full rounded-lg"
                    />
                  ))}
                </div>
              </DsCard>
            </div>
          </section>
        )}
      </div>

      <Contact bubbleText={project.footerBubble} />
    </>
  )
}

// Feature card. Mobile projects: text left, phone screenshots right (2 at 150px, 1 at 200px).
// Web projects: text on top, one wide screenshot below.
function FeatureCard({ feature, isWeb }) {
  const images = feature.images?.length ? feature.images : [feature.image].filter(Boolean)
  const single = images.length === 1

  if (isWeb) {
    return (
      <div className="flex flex-col rounded-2xl border-2 border-[#eae7f3] bg-white p-6 shadow-sm">
        <h3 className="text-lg font-bold text-black">{feature.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[#7f7f90]">{feature.description}</p>
        {images[0] && (
          <img
            src={images[0]}
            alt={feature.title}
            className="mt-4 w-full rounded-xl border border-[#eae7f3]"
          />
        )}
      </div>
    )
  }

  return (
    <div className="flex items-center gap-5 rounded-2xl border-2 border-[#eae7f3] bg-white p-6 shadow-sm">
      <div className="min-w-0 flex-1">
        <h3 className="text-lg font-bold text-black">{feature.title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-[#7f7f90]">{feature.description}</p>
      </div>
      <div className="flex shrink-0 gap-3">
        {images.map((src) => (
          <img
            key={src}
            src={src}
            alt={feature.title}
            style={{ width: single ? 200 : 150 }}
            className="rounded-xl border border-[#eae7f3]"
          />
        ))}
      </div>
    </div>
  )
}

function DsCard({ title, blurb, children }) {
  return (
    <div className="rounded-2xl border-2 border-[#eae7f3] bg-white p-5 shadow-sm">
      <h3 className="text-base font-bold text-black">{title}</h3>
      <p className="mt-1 text-[13px] leading-relaxed text-[#7f7f90]">{blurb}</p>
      {children}
    </div>
  )
}
