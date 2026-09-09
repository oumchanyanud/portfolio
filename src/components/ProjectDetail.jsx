import { Link, Navigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { projects } from '../data/projects'
import Contact from './Contact'
import { ArrowRightIcon } from './icons'
import blob from '../assets/project-detail/blob.webp'
import roleIcon from '../assets/project-detail/role.png'
import courseIcon from '../assets/project-detail/course.png'
import platformIcon from '../assets/project-detail/platform.png'
import toolsIcon from '../assets/project-detail/tools.png'

const categoryDot = {
  'UX Research': 'bg-ux-research',
  'Product Design': 'bg-product-design',
  'Academic Research': 'bg-academic-research',
}

// Figma-exact card treatment: no border, 24px radius, 0/4/24 drop shadow.
const CARD = 'rounded-[24px] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)]'

// Top mockup image dimensions (Figma): mobile projects vs web projects.
const HERO_SIZE = {
  mobile: { width: 618, height: 511 },
  web: { width: 602, height: 458 },
}

export default function ProjectDetail() {
  const { t } = useTranslation()
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/" replace />

  const { detail } = project
  const ds = detail.designSystem
  const isWeb = project.layout === 'web'
  const heroSize = HERO_SIZE[isWeb ? 'web' : 'mobile']

  const titleLead = project.titleAccent
    ? project.title.slice(0, project.title.length - project.titleAccent.length)
    : project.title

  const meta = [
    { icon: roleIcon, w: 30.5, h: 34.5, label: t('projectDetail.role'), value: detail.role },
    { icon: courseIcon, w: 27.5, h: 34.5, label: t('projectDetail.course'), value: detail.course },
    { icon: platformIcon, w: 41, h: 34.5, label: t('projectDetail.platform'), value: detail.platform },
    { icon: toolsIcon, w: 34.5, h: 34.5, label: t('projectDetail.tools'), value: detail.tools },
  ]

  const Blob = <img src={blob} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full" />

  return (
    <>
      <div className="mx-auto max-w-[1440px] px-6 pb-12 pt-32 sm:px-10 md:pt-40 lg:px-[120px]">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary transition-opacity hover:opacity-70"
        >
          <ArrowRightIcon width={16} height={16} className="rotate-180" />
          {t('projectDetail.back')}
        </Link>

        {/* ── Header: description left, mockup + blob right ── */}
        <div className="relative mt-8 lg:min-h-[520px]">
          <div className="lg:max-w-[540px]">
            <h1 className="font-playful text-[40px] font-semibold leading-[1.05] text-black sm:text-[52px] lg:text-[68px]">
              {titleLead}
              {project.titleAccent && <span className="text-primary">{project.titleAccent}</span>}
            </h1>

            {/* title → description: 16 */}
            <p className="mt-4 max-w-[30rem] text-[18px] font-medium leading-relaxed text-[#54575f]">
              {detail.longDescription}
            </p>

            {/* description → pill: 36 */}
            <span className="mt-9 inline-flex items-center gap-2 rounded-full border border-[#e7e3f2] bg-white px-4 py-2 text-[16px] font-medium uppercase tracking-[0.06em] text-[#7f7f90]">
              <span className={`h-2 w-2 rounded-full ${categoryDot[project.category]}`} />
              {project.category} Project
            </span>

            {/* pill → meta: 36 ; row gap: 16 */}
            <dl className="mt-9 grid max-w-[520px] grid-cols-2 gap-x-8 gap-y-4">
              {meta.map(({ icon, w, h, label, value }) => (
                <div key={label} className="flex items-start gap-3">
                  <img
                    src={icon}
                    alt=""
                    aria-hidden="true"
                    className="mt-1 shrink-0"
                    style={{ width: w, height: h }}
                  />
                  <div>
                    <dt className="text-[20px] font-bold leading-tight text-black">{label}</dt>
                    <dd className="mt-1 text-[18px] font-medium text-[#54575f]">{value}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>

          {/* desktop: blob + mockup, right-aligned, bleeding toward the frame edge */}
          <div className="pointer-events-none absolute right-[-40px] top-4 hidden h-[515px] w-[698px] lg:block">
            {Blob}
            <img
              src={detail.hero}
              alt={project.title}
              className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2 object-contain"
              style={{ width: heroSize.width, height: heroSize.height }}
            />
          </div>
        </div>

        {/* mobile / tablet: stacked mockup */}
        <div className="relative mx-auto mt-10 aspect-[698/515] w-full max-w-[460px] lg:hidden">
          {Blob}
          <img
            src={detail.hero}
            alt={project.title}
            className="absolute left-1/2 top-1/2 w-[90%] -translate-x-1/2 -translate-y-1/2 object-contain"
          />
        </div>

        {/* ── Key Features ──  (section gap: 36) */}
        <section className="mt-9">
          <SectionHeading>{t('projectDetail.keyFeatures')}</SectionHeading>
          {/* heading → grid: 16 ; card gaps: 48 */}
          <div className="mt-4 grid gap-12 md:grid-cols-2">
            {detail.keyFeatures.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} isWeb={isWeb} />
            ))}
          </div>
        </section>

        {/* ── Design System ──  (section gap: 36) */}
        {ds && (
          <section className="mt-9">
            <SectionHeading>{t('projectDetail.designSystem')}</SectionHeading>
            <div className="mt-4 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
              <DsCard title={t('projectDetail.color')} blurb={ds.color.blurb}>
                <ul className="mt-6 space-y-3">
                  {ds.color.swatches.map((hex) => (
                    <li key={hex} className="flex items-center gap-3">
                      <span
                        className="h-8 w-8 shrink-0 rounded-full"
                        style={{ backgroundColor: hex, boxShadow: '4px 4px 15px rgba(0,0,0,0.15)' }}
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
                  className="mx-auto mt-6 w-auto object-contain"
                  style={{ height: 125 }}
                />
                <p className="mt-3 text-[13px] font-bold text-black">{t('projectDetail.font')}</p>
                <p className="text-[13px] text-[#7f7f90]">{ds.typography.font}</p>
              </DsCard>

              <DsCard title={t('projectDetail.uiElements')} blurb={ds.uiElements.blurb}>
                <div className="mt-6 space-y-2">
                  {ds.uiElements.images.map((src, i) => (
                    <img
                      key={src}
                      src={src}
                      alt={`${project.title} UI element ${i + 1}`}
                      className="w-full max-w-[252px] rounded-lg"
                    />
                  ))}
                </div>
              </DsCard>

              <DsCard
                title={ds.gallery.label}
                blurb={ds.gallery.blurb}
                clip={ds.gallery.kind === 'illustration'}
              >
                {ds.gallery.kind === 'icon' ? (
                  <div className="mt-6 flex flex-wrap gap-3">
                    {ds.gallery.images.map((img, i) => (
                      <img
                        key={img.src}
                        src={img.src}
                        alt={`${project.title} ${ds.gallery.label} ${i + 1}`}
                        style={{ width: img.w }}
                        className="h-auto"
                      />
                    ))}
                  </div>
                ) : (
                  <div className="mt-6 flex flex-col items-center gap-3">
                    {ds.gallery.images.map((img, i) =>
                      img.bleed ? (
                        <img
                          key={img.src}
                          src={img.src}
                          alt={`${project.title} ${ds.gallery.label} ${i + 1}`}
                          className="-mx-9 -mb-9 mt-2 w-[calc(100%+4.5rem)] rounded-b-[24px] object-cover"
                          style={{ height: img.h }}
                        />
                      ) : (
                        <img
                          key={img.src}
                          src={img.src}
                          alt={`${project.title} ${ds.gallery.label} ${i + 1}`}
                          style={{ width: img.w, height: img.h }}
                          className="object-contain"
                        />
                      ),
                    )}
                  </div>
                )}
              </DsCard>
            </div>
          </section>
        )}
      </div>

      {/* DS grid → banner: 48 */}
      <Contact bubbleText={project.footerBubble} className="mt-12" />
    </>
  )
}

function SectionHeading({ children }) {
  return (
    <h2 className="flex items-center gap-2.5 text-[24px] font-semibold text-primary">
      <span className="h-2 w-2 rounded-full bg-primary" />
      {children}
    </h2>
  )
}

// Mobile projects: text left, phone screenshots right (2 @ 150×252 with 27px top radius,
// 1 @ 200×252). Web projects: text on top, one wide 504×304 screenshot below.
// Card padding 36; screenshots inset 24 (pulled 12 out of the 36 padding).
function FeatureCard({ feature, isWeb }) {
  const images = feature.images?.length ? feature.images : [feature.image].filter(Boolean)
  const single = images.length === 1

  if (isWeb) {
    return (
      <div className={`flex flex-col ${CARD} p-9`}>
        <h3 className="text-[20px] font-semibold text-black">{feature.title}</h3>
        <p className="mt-4 text-[16px] font-medium leading-relaxed text-[#7f7f90]">{feature.description}</p>
        {images[0] && (
          <img
            src={images[0]}
            alt={feature.title}
            className="mt-6 h-[304px] w-full max-w-[504px] rounded-xl object-cover"
          />
        )}
      </div>
    )
  }

  return (
    <div className={`flex gap-6 ${CARD} p-9`}>
      <div className="min-w-0 flex-1">
        <h3 className="text-[20px] font-semibold text-black">{feature.title}</h3>
        <p className="mt-4 text-[16px] font-medium leading-relaxed text-[#7f7f90]">{feature.description}</p>
      </div>
      <div className="-my-3 -mr-3 flex shrink-0 items-center gap-6">
        {images.map((src) => (
          <img
            key={src}
            src={src}
            alt={feature.title}
            style={{ width: single ? 200 : 150, height: 252 }}
            className={`object-cover ${single ? 'rounded-2xl' : 'rounded-t-[27px] rounded-b-none'}`}
          />
        ))}
      </div>
    </div>
  )
}

// Card padding 36; title → blurb 16; blurb → content 24.
function DsCard({ title, blurb, children, clip }) {
  return (
    <div className={`${CARD} p-9 ${clip ? 'overflow-hidden' : ''}`}>
      <h3 className="text-[20px] font-semibold text-black">{title}</h3>
      <p className="mt-4 text-[16px] font-medium leading-relaxed text-[#7f7f90]">{blurb}</p>
      {children}
    </div>
  )
}
