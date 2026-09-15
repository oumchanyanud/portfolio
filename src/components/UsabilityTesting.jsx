import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Contact from './Contact'
import { ArrowRightIcon, SearchIcon, BookIcon, PersonIcon, CameraIcon, ChartIcon, ChatIcon, PinIcon, DevicesIcon, SparkleIcon } from './icons'
import roleIcon from '../assets/project-detail/role.png'
import courseIcon from '../assets/project-detail/course.png'
import platformIcon from '../assets/project-detail/platform.png'
import toolsIcon from '../assets/project-detail/tools.png'

// Same card treatment as every other project page (ProjectDetail.jsx): borderless,
// white, soft shadow. Inner structural elements (process panels, severity tiles,
// findings steps) keep a thin #ECE6FC hairline of their own — never the main card.
const CARD = 'rounded-[24px] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)]'

// The SEQ scale deepens from the site's timeline purple to a near-navy — same visual
// language as the outline → fill → dark tiers in "Why We Tested".
const FLOW_START = [0x94, 0x77, 0xef] // --color-timeline
const FLOW_END = [0x17, 0x25, 0x6a]

function flowFill(t) {
  const [r1, g1, b1] = FLOW_START
  const [r2, g2, b2] = FLOW_END
  const r = Math.round(r1 + (r2 - r1) * t)
  const g = Math.round(g1 + (g2 - g1) * t)
  const b = Math.round(b1 + (b2 - b1) * t)
  return `rgb(${r}, ${g}, ${b})`
}

// Non-text metadata (icons, tones, colors) stay here — matched by index to the
// translated copy pulled from i18n (usabilityTesting.*) inside the component.
const metaIcons = [roleIcon, courseIcon, toolsIcon, platformIcon, toolsIcon, courseIcon]
const whyWeTestedTones = ['outline', 'fill', 'fill', 'outline', 'dark']
const processIcons = [SearchIcon, BookIcon, CameraIcon, ChartIcon]
const processNumbers = ['01', '02', '03', '04']
const contributionIcons = [SearchIcon, PersonIcon, CameraIcon, ChatIcon]
const contributionNumbers = ['01', '02', '03', '04']
const observedIcons = [ClockIcon, PinIcon, RepeatIcon, ZapIcon]
const seqScale = [1, 2, 3, 4, 5, 6, 7]
const severityStyles = [
  { Icon: StopIcon, iconBg: 'bg-red-100', iconText: 'text-red-600' },
  { Icon: AlertTriangleIcon, iconBg: 'bg-orange-100', iconText: 'text-orange-600' },
  { Icon: InfoCircleIcon, iconBg: 'bg-amber-100', iconText: 'text-amber-700' },
  { Icon: SparkleIcon, iconBg: 'bg-primary-light', iconText: 'text-primary' },
]
const pipelineIcons = [EyeIcon, AlertTriangleIcon, GaugeIcon, LightbulbIcon, DevicesIcon]

export default function UsabilityTesting() {
  const { t } = useTranslation()

  const meta = metaIcons.map((icon, i) => ({
    icon,
    ...t(`usabilityTesting.meta.${['role', 'company', 'tools', 'duration', 'scope', 'methods'][i]}`, {
      returnObjects: true,
    }),
  }))
  const whyWeTestedFlow = t('usabilityTesting.whyWeTested.flow', { returnObjects: true }).map((label, i) => ({
    label,
    tone: whyWeTestedTones[i],
  }))
  const processPhases = t('usabilityTesting.process.phases', { returnObjects: true }).map((phase, i) => ({
    ...phase,
    n: processNumbers[i],
    Icon: processIcons[i],
  }))
  const contributions = t('usabilityTesting.contributions.items', { returnObjects: true }).map((item, i) => ({
    ...item,
    n: contributionNumbers[i],
    Icon: contributionIcons[i],
  }))
  const observedBehaviors = t('usabilityTesting.duringSession.behaviors', { returnObjects: true }).map(
    (label, i) => ({ label, Icon: observedIcons[i] }),
  )
  const severityLevels = t('usabilityTesting.measuring.severity.levels', { returnObjects: true }).map(
    (level, i) => ({ ...level, ...severityStyles[i] }),
  )
  const decisionPipeline = t('usabilityTesting.findingsToDecisions.pipeline', { returnObjects: true }).map(
    (step, i) => ({ ...step, Icon: pipelineIcons[i] }),
  )
  const bubbleLines = t('usabilityTesting.bubble', { returnObjects: true })

  return (
    <>
      <div className="mx-auto max-w-[1440px] px-6 pb-0 pt-[108px] sm:px-10 md:pt-[132px] lg:px-[120px]">
        <Link
          to="/#work"
          className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary transition-opacity hover:opacity-70"
        >
          <ArrowRightIcon width={16} height={16} className="rotate-180" />
          {t('projectDetail.back')}
        </Link>

        <h1 className="mt-8 font-playful text-[40px] font-semibold leading-[1.05] text-black sm:text-[52px] lg:text-[64px]">
          {t('usabilityTesting.title')}
        </h1>

        <p className="mt-6 max-w-[760px] text-[18px] font-medium leading-relaxed text-[#54575f]">
          {t('usabilityTesting.intro')}
        </p>

        <span className="mt-9 inline-flex items-center gap-2 rounded-full border border-[#e7e3f2] bg-white px-4 py-2 text-[16px] font-medium uppercase tracking-[0.06em] text-[#7f7f90]">
          <span className="h-2 w-2 rounded-full bg-ux-research" />
          {t('categories.User Experience Research', 'User Experience Research')}
        </span>

        <dl className="mt-9 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {meta.map(({ icon, label, value }, i) => (
            <div key={`${label}-${i}`} className="flex items-start gap-2.5">
              <img src={icon} alt="" aria-hidden="true" className="mt-1 h-[30px] w-[30px] shrink-0 object-contain" />
              <div>
                <dt className="text-[20px] font-bold leading-tight text-black">{label}</dt>
                <dd className="mt-1 text-[18px] font-medium text-[#54575f]">{value}</dd>
              </div>
            </div>
          ))}
        </dl>

        {/* ── Why We Tested ── */}
        <section className={`mt-9 ${CARD} p-6 sm:p-9`}>
          <SectionTitle>{t('usabilityTesting.whyWeTested.title')}</SectionTitle>
          <p className="mt-4 text-[16px] font-medium leading-relaxed text-[#54575f]">
            {t('usabilityTesting.whyWeTested.body')}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            {whyWeTestedFlow.map((step, i) => (
              <Fragment key={step.label}>
                <FlowChip label={step.label} tone={step.tone} />
                {i < whyWeTestedFlow.length - 1 && (
                  <ArrowRightIcon width={16} height={16} className="shrink-0 text-primary/40" />
                )}
              </Fragment>
            ))}
          </div>
          <p className="mt-5 text-[16px] font-medium leading-relaxed text-[#54575f]">
            {t('usabilityTesting.whyWeTested.transition')}
          </p>
          <p className="mt-2 text-[21px] font-bold italic leading-snug text-primary sm:text-[23px]">
            {t('usabilityTesting.whyWeTested.quote')}
          </p>
        </section>

        {/* ── My Usability Testing Process — one parent module: a single card carries
             the section, four thin-bordered panels sit inside it as one system. ── */}
        <section className={`mt-9 ${CARD} p-6 sm:p-9`}>
          <SectionTitle>{t('usabilityTesting.process.title')}</SectionTitle>

          <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {processPhases.map((phase) => (
              <div
                key={phase.n}
                className="relative flex h-full flex-col rounded-2xl border border-[#ECE6FC] bg-white p-6 pt-8"
              >
                {/* The icon badge straddles the panel's own top border — half outside,
                    half in — so it reads as part of the outline, not just content.
                    z-10 + a white fill keep it cleanly masking the border behind it. */}
                <span className="absolute -top-5 left-6 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#ECE6FC] bg-white text-primary">
                  <phase.Icon width={18} height={18} />
                </span>
                <span className="absolute top-3 right-5 text-[12px] font-bold text-primary/60">{phase.n}</span>

                <h3 className="text-[17px] font-semibold text-black">{phase.title}</h3>
                <p className="mt-1.5 text-[14px] font-medium leading-snug text-primary">{phase.blurb}</p>
                <ul className="mt-5 flex flex-1 flex-col gap-3">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[15px] font-medium leading-relaxed text-[#54575f]">
                      <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-primary/40" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary-light/50 px-5 py-2.5 text-center text-[14px] font-semibold text-primary">
              <SparkleIcon width={14} height={14} className="shrink-0" />
              {t('usabilityTesting.process.output')}
            </span>
          </div>
          <p className="mt-4 text-center text-[13px] italic text-[#7f7f90]">
            {t('usabilityTesting.process.confidentialityNote')}
          </p>
        </section>

        {/* ── My Contributions ── */}
        <section className="mt-9">
          <SectionTitle>{t('usabilityTesting.contributions.title')}</SectionTitle>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {contributions.map((item) => (
              <div
                key={item.n}
                className={`flex gap-3.5 ${CARD} p-5 transition-shadow hover:shadow-[0_6px_28px_rgba(0,0,0,0.1)]`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-light/60 text-primary">
                  <item.Icon width={18} height={18} />
                </span>
                <div>
                  <p className="text-[15px] font-semibold text-black">{item.title}</p>
                  <p className="mt-1 text-[15px] font-medium leading-relaxed text-[#54575f]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── During the Session ── */}
        <div className="mt-9 rounded-[24px] bg-primary-light/50 p-6 sm:p-9">
          <p className="text-[13px] font-bold uppercase tracking-wide text-primary">
            {t('usabilityTesting.duringSession.label')}
          </p>
          <p className="mt-3 text-[19px] font-semibold italic leading-snug text-[#3d3450] sm:text-[21px]">
            {t('usabilityTesting.duringSession.quote')}
          </p>
          <div className="mt-5 border-t border-primary/10 pt-4">
            <p className="text-center text-[13px] font-semibold text-primary/70">
              {t('usabilityTesting.duringSession.observedLabel')}
            </p>
            <div className="mt-3 flex flex-wrap justify-center gap-2.5">
              {observedBehaviors.map(({ label, Icon }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[13px] font-medium text-[#54575f] shadow-sm"
                >
                  <Icon width={14} height={14} className="text-primary" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Measuring Usability ── */}
        <section className="mt-9">
          <SectionTitle>{t('usabilityTesting.measuring.title')}</SectionTitle>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className={`flex h-full flex-col ${CARD} p-6 sm:p-9`}>
              <SectionTitle>{t('usabilityTesting.measuring.seq.title')}</SectionTitle>
              {/* Everything after the heading is one block, vertically centered in
                  whatever height the row ends up at (Severity usually sets it) —
                  intentional balance instead of a dead gap pinned to one edge. */}
              <div className="flex flex-1 flex-col justify-center">
                <div>
                  <p className="text-[15px] font-medium text-[#54575f]">
                    {t('usabilityTesting.measuring.seq.taskLabel')}
                  </p>
                  <ArrowRightIcon width={14} height={14} className="my-1.5 rotate-90 text-primary/50" />
                  <p className="text-[16px] font-medium italic text-[#54575f]">
                    {t('usabilityTesting.measuring.seq.question')}
                  </p>
                </div>
                {/* A neutral 1–7 scale explaining the method — equal-size segments so
                    this never reads as a chart of measured results. */}
                <div className="mt-6 flex items-center justify-between gap-1.5 sm:gap-2">
                  {seqScale.map((value) => (
                    <div key={value} className="flex flex-1 flex-col items-center gap-2">
                      <div
                        className="h-9 w-full rounded-lg sm:h-10"
                        style={{ backgroundColor: flowFill((value - 1) / (seqScale.length - 1)) }}
                      />
                      <span className="text-[13px] font-semibold text-[#54575f]">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-2 flex justify-between text-[12px] font-medium text-[#7f7f90]">
                  <span>{t('usabilityTesting.measuring.seq.veryDifficult')}</span>
                  <span>{t('usabilityTesting.measuring.seq.veryEasy')}</span>
                </div>
              </div>
            </div>

            <div className={`${CARD} p-6 sm:p-9`}>
              <SectionTitle>{t('usabilityTesting.measuring.severity.title')}</SectionTitle>
              <p className="mt-2 text-[14px] font-medium text-[#54575f]">
                {t('usabilityTesting.measuring.severity.intro')}
              </p>
              <div className="mt-5 grid grid-cols-2 gap-4">
                {severityLevels.map((level) => (
                  <div
                    key={level.label}
                    className="rounded-2xl border border-[#ECE6FC] p-4 transition-colors hover:border-primary/30"
                  >
                    <span className={`flex h-9 w-9 items-center justify-center rounded-full ${level.iconBg} ${level.iconText}`}>
                      <level.Icon width={17} height={17} />
                    </span>
                    <p className="mt-2.5 text-[15px] font-semibold text-black">{level.label}</p>
                    <p className="mt-1 text-[13px] font-medium leading-relaxed text-[#54575f]">{level.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── From Findings to Product Decisions ── */}
        <div className={`mt-9 ${CARD} p-6 sm:p-9`}>
          <SectionTitle>{t('usabilityTesting.findingsToDecisions.title')}</SectionTitle>
          <p className="mt-4 max-w-[820px] text-[16px] font-medium leading-relaxed text-[#54575f]">
            {t('usabilityTesting.findingsToDecisions.bodyLead')}
            <strong className="font-semibold text-primary">
              {t('usabilityTesting.findingsToDecisions.bodyStrong1')}
            </strong>
            {t('usabilityTesting.findingsToDecisions.bodyMid')}
            <strong className="font-semibold text-primary">
              {t('usabilityTesting.findingsToDecisions.bodyStrong2')}
            </strong>
            {t('usabilityTesting.findingsToDecisions.bodyTail')}
          </p>
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-2">
            {decisionPipeline.map((step, i) => (
              <Fragment key={step.label}>
                <div className="flex w-full flex-col items-center gap-2.5 rounded-2xl border border-[#ECE6FC] p-5 text-center transition-colors hover:border-primary/30 sm:w-[148px]">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-light/60 text-primary">
                    <step.Icon width={22} height={22} />
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold text-black">{step.label}</p>
                    <p className="mt-0.5 text-[13px] font-medium leading-snug text-[#7f7f90]">{step.sub}</p>
                  </div>
                </div>
                {i < decisionPipeline.length - 1 && (
                  <ArrowRightIcon
                    width={18}
                    height={18}
                    className="mx-auto shrink-0 rotate-90 text-primary/40 sm:mx-0 sm:rotate-0"
                  />
                )}
              </Fragment>
            ))}
          </div>
        </div>

        {/* ── Confidentiality Notice ── */}
        <div className="mt-9 rounded-[24px] bg-primary-light/40 p-6 sm:p-9">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-primary">
                <ShieldIcon width={18} height={18} />
              </span>
              <div>
                <p className="text-[16px] font-semibold text-black">
                  {t('usabilityTesting.confidentiality.title')}
                </p>
                <p className="mt-1 text-[15px] font-medium leading-relaxed text-[#54575f]">
                  {t('usabilityTesting.confidentiality.body1')}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-primary">
                <SparkleIcon width={16} height={16} />
              </span>
              <p className="text-[15px] font-medium leading-relaxed text-[#54575f]">
                {t('usabilityTesting.confidentiality.body2Lead')}
                <strong className="font-semibold text-primary">
                  {t('usabilityTesting.confidentiality.body2Strong')}
                </strong>
                {t('usabilityTesting.confidentiality.body2Tail')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <Contact bubbleText={bubbleLines} variant="project" className="mt-12" />
    </>
  )
}

function SectionTitle({ children }) {
  return <h2 className="text-[20px] font-semibold text-black">{children}</h2>
}

function FlowChip({ label, tone }) {
  const toneClass =
    tone === 'outline'
      ? 'border border-[#e5e0f5] bg-white text-primary'
      : tone === 'dark'
        ? 'bg-[#17256a] text-white'
        : 'bg-primary text-white'
  return (
    <span className={`inline-flex items-center rounded-full px-5 py-2.5 text-[15px] font-semibold ${toneClass}`}>
      {label}
    </span>
  )
}

// Small page-specific icons — one-off glyphs not general enough for the shared icon set.
function EyeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M1.5 12S5 5 12 5s10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function GaugeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 15a8 8 0 1 1 16 0" />
      <path d="M12 15 15.5 9" />
      <path d="M4 15h1M19 15h1M12 15v1" />
    </svg>
  )
}

function LightbulbIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 18h6" />
      <path d="M10 21h4" />
      <path d="M12 3a6 6 0 0 0-4 10.5c.6.55 1 1.36 1 2.25V16h6v-.25c0-.89.4-1.7 1-2.25A6 6 0 0 0 12 3Z" />
    </svg>
  )
}

function ClockIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  )
}

function RepeatIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M17 2l4 4-4 4" />
      <path d="M3 11V9a4 4 0 0 1 4-4h14" />
      <path d="M7 22l-4-4 4-4" />
      <path d="M21 13v2a4 4 0 0 1-4 4H3" />
    </svg>
  )
}

function ZapIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M13 2 3 14h7l-1 8 11-14h-7l1-6z" />
    </svg>
  )
}

function StopIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M6.3 6.3 17.7 17.7" />
    </svg>
  )
}

function AlertTriangleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3 2 20h20L12 3z" />
      <path d="M12 10v4" />
      <circle cx="12" cy="17" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  )
}

function InfoCircleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5" />
      <circle cx="12" cy="8" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  )
}

function ShieldIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 3 4 6v6c0 4.5 3.4 7.7 8 9 4.6-1.3 8-4.5 8-9V6z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}
