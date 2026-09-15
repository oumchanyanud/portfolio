import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Contact from './Contact'
import { ArrowRightIcon, BookIcon, ChartIcon, PinIcon, SearchIcon, SparkleIcon } from './icons'
import roleIcon from '../assets/project-detail/role.png'
import courseIcon from '../assets/project-detail/course.png'
import platformIcon from '../assets/project-detail/platform.png'
import toolsIcon from '../assets/project-detail/tools.png'
import octExamples from '../assets/projects/cnv-detection/fig-oct-examples.webp'
import segmentationComparison from '../assets/projects/cnv-detection/fig-segmentation-comparison.webp'
import errorAnalysis from '../assets/projects/cnv-detection/fig-error-analysis.webp'

// Same borderless-card language as every other project page (ProjectDetail.jsx / UsabilityTesting.jsx).
// Reserved for sections that genuinely need grouping — lighter sections use a plain
// border (BORDER) or sit open on the page background instead, so the page doesn't
// read as a stack of identical shadowed cards.
const CARD = 'rounded-[24px] bg-white shadow-[0_4px_24px_rgba(0,0,0,0.08)]'
const BORDER = 'rounded-[24px] border border-[#ECE6FC] bg-white'

// Source: Panyasombat et al., "Automated Detection and Segmentation of Choroidal
// Neovascularization in OCT Using Deep Learning," Science & Technology Asia,
// Vol.30 No.3, 2025 (Table 1, Table 2, Fig. 4, Fig. 5). Numbers below are read
// directly from the published tables/figures — do not "round nicer".
const CLASSIFICATION_RESULTS = [
  { name: 'U-Net', accuracy: 99.0, auc: 99.0, fnr: 0.0, fpr: 2.0 },
  { name: 'Attention U-Net', accuracy: 96.4, auc: 96.4, fnr: 2.0, fpr: 5.2 },
  { name: 'DeepLabV3+', accuracy: 99.4, auc: 99.4, fnr: 0.0, fpr: 1.2 },
  { name: 'DeepLabV3++', accuracy: 99.4, auc: 99.4, fnr: 0.0, fpr: 1.2, highlight: true },
  { name: 'Mask R-CNN', accuracy: 99.2, auc: 99.2, fnr: 0.0, fpr: 1.6 },
  { name: 'Mask R-CNN+', accuracy: 97.2, auc: 97.2, fnr: 0.4, fpr: 5.2 },
]

const SEGMENTATION_RESULTS = [
  { name: 'U-Net', precision: 66.9, recall: 90.86, f1: 75.86, iou: 62.55 },
  { name: 'Attention U-Net', precision: 69.92, recall: 92.63, f1: 78.38, iou: 64.74 },
  { name: 'DeepLabV3+', precision: 73.59, recall: 90.2, f1: 79.91, iou: 67.59 },
  { name: 'DeepLabV3++', precision: 72.18, recall: 92.54, f1: 80.05, iou: 68.14, highlight: true },
  { name: 'Mask R-CNN', precision: 69.45, recall: 92.15, f1: 78.22, iou: 64.76 },
  { name: 'Mask R-CNN+', precision: 69.67, recall: 88.78, f1: 76.61, iou: 62.03 },
]

const TRAINING_TIME = [
  { name: 'U-Net', minutes: 109.0 },
  { name: 'Attention U-Net', minutes: 49.1 },
  { name: 'DeepLabV3+', minutes: 58.0 },
  { name: 'DeepLabV3++', minutes: 32.0, highlight: true },
  { name: 'Mask R-CNN', minutes: 36.0 },
  { name: 'Mask R-CNN+', minutes: 44.0 },
]

const PUBLICATION_URL = 'https://ph02.tci-thaijo.org/index.php/SciTechAsia/article/view/261438'

const AUTHORS = [
  'Pawaris Panyasombat',
  'Anawin Srivoranan',
  'Chanyanud Sriyota',
  'Teerachot Khusuwan',
  'Pakinee Aimmanee',
]

export default function CnvResearch() {
  const { t } = useTranslation()

  // Same 4 Figma-exported icon assets Usability Testing reuses across its own meta
  // fields (icons cycle rather than needing a 1:1 semantic match) — keeps hero
  // metadata visually identical in stroke weight, size, and color across both pages.
  const meta = [
    { icon: roleIcon, ...t('academicResearch.meta.role', { returnObjects: true }) },
    { icon: toolsIcon, ...t('academicResearch.meta.field', { returnObjects: true }) },
    { icon: platformIcon, ...t('academicResearch.meta.period', { returnObjects: true }) },
    { icon: courseIcon, ...t('academicResearch.meta.publication', { returnObjects: true }) },
  ]

  const contributionIcons = [PinIcon, SearchIcon, ChartIcon]
  const contributionItems = t('academicResearch.contribution.items', { returnObjects: true }).map(
    (item, i) => ({ ...item, Icon: contributionIcons[i] }),
  )

  const glanceMetrics = t('academicResearch.glance.metrics', { returnObjects: true })
  const challenges = t('academicResearch.problem.challenges', { returnObjects: true })
  const problemFlow = t('academicResearch.problem.flow', { returnObjects: true })
  const taskIcons = [EyeIcon, TargetIcon]
  const tasks = t('academicResearch.objective.tasks', { returnObjects: true }).map((task, i) => ({
    ...task,
    Icon: taskIcons[i],
  }))
  const pipelinePhases = t('academicResearch.pipeline.phases', { returnObjects: true })
  const datasetItems = t('academicResearch.setup.dataset.items', { returnObjects: true })
  const trainingItems = t('academicResearch.setup.training.items', { returnObjects: true })
  const models = t('academicResearch.models.items', { returnObjects: true })
  const classificationMetrics = t('academicResearch.evaluation.classification.metrics', {
    returnObjects: true,
  })
  const segmentationMetrics = t('academicResearch.evaluation.segmentation.metrics', {
    returnObjects: true,
  })
  const whyReasons = t('academicResearch.whyDeepLab.reasons', { returnObjects: true })
  const tradeoff = t('academicResearch.whyDeepLab.tradeoff', { returnObjects: true })
  const limitationItems = t('academicResearch.limitations.items', { returnObjects: true })
  const errorLegend = t('academicResearch.limitations.errorLegend', { returnObjects: true })
  const futureItems = t('academicResearch.future.items', { returnObjects: true })
  const bubbleLines = t('academicResearch.bubble', { returnObjects: true })

  const deepLabSeg = SEGMENTATION_RESULTS.find((m) => m.highlight)
  const maxAccuracy = Math.max(...CLASSIFICATION_RESULTS.map((m) => m.accuracy))
  const maxMinutes = Math.max(...TRAINING_TIME.map((m) => m.minutes))

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

        {/* ── Hero — same order/rhythm as UsabilityTesting.jsx: title, intro, category
             pill, then the meta dl (bare icon + bold label + value). ── */}
        <h1 className="mt-8 max-w-[900px] font-playful text-[28px] font-semibold leading-[1.2] text-black sm:text-[36px] lg:text-[42px]">
          {t('academicResearch.title')}
        </h1>

        <p className="mt-6 max-w-[720px] text-[18px] font-medium leading-relaxed text-[#54575f]">
          {t('academicResearch.short')}
        </p>

        <span className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#e7e3f2] bg-white px-4 py-2 text-[16px] font-medium uppercase tracking-[0.06em] text-[#7f7f90]">
          <span className="h-2 w-2 rounded-full bg-academic-research" />
          {t('academicResearch.kicker')}
        </span>

        <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
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

        {/* Role/period are my own project record; findings below are the paper's. */}
        <p className="mt-4 max-w-[640px] text-[13px] italic leading-relaxed text-[#7f7f90]">
          {t('academicResearch.metaNote')}
        </p>

        <a
          href={PUBLICATION_URL}
          target="_blank"
          rel="noreferrer"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
        >
          <BookIcon width={16} height={16} />
          {t('academicResearch.publicationCta')}
          <ArrowRightIcon width={14} height={14} />
        </a>

        {/* ── Research at a Glance ── */}
        <section className="mt-10">
          <SectionTitle>{t('academicResearch.glance.title')}</SectionTitle>
          <p className="mt-2 text-[15px] font-medium text-[#7f7f90]">{t('academicResearch.glance.subtitle')}</p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {glanceMetrics.map((metric) => (
              <div
                key={metric.label}
                className="flex flex-col items-center rounded-2xl border border-[#ECE6FC] px-3 py-5 text-center"
              >
                <span className="font-playful text-[22px] font-semibold leading-tight text-primary sm:text-[26px]">
                  {metric.value}
                </span>
                <span className="mt-2 text-[13px] font-medium leading-snug text-[#54575f]">{metric.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── The Problem ── */}
        <section className="mt-12">
          <SectionTitle>{t('academicResearch.problem.title')}</SectionTitle>
          <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
            <div>
              <p className="text-[16px] font-medium leading-relaxed text-[#54575f]">
                {t('academicResearch.problem.body1')}
              </p>
              <p className="mt-4 text-[16px] font-medium leading-relaxed text-[#54575f]">
                {t('academicResearch.problem.body2')}
              </p>

              <p className="mt-6 text-[13px] font-bold uppercase tracking-wide text-primary">
                {t('academicResearch.problem.challengesTitle')}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {challenges.map((label) => (
                  <span
                    key={label}
                    className="inline-flex items-center rounded-full border border-[#ECE6FC] bg-primary-light/30 px-3.5 py-1.5 text-[13px] font-medium text-[#54575f]"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <figure className="flex flex-col items-center">
              <img
                src={octExamples}
                alt="Example healthy OCT scan (top row) compared with OCT scans showing CNV, highlighted in yellow (bottom row)."
                className="w-full max-w-[340px] rounded-2xl border border-[#ECE6FC] object-contain"
              />
              <figcaption className="mt-3 text-center text-[13px] font-medium text-[#7f7f90]">
                {t('academicResearch.problem.imageCaption')}
              </figcaption>
            </figure>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 rounded-[24px] bg-primary-light/30 px-4 py-5 sm:gap-3">
            {problemFlow.map((label, i) => (
              <Fragment key={label}>
                <FlowChip label={label} tone={i === problemFlow.length - 1 ? 'dark' : i === 0 ? 'outline' : 'fill'} />
                {i < problemFlow.length - 1 && (
                  <ArrowRightIcon width={16} height={16} className="shrink-0 text-primary/40" />
                )}
              </Fragment>
            ))}
          </div>

          <p className="mt-6 border-l-2 border-primary/40 pl-4 text-[16px] font-medium italic leading-relaxed text-primary">
            {t('academicResearch.problem.closing')}
          </p>
        </section>

        {/* ── Research Objective ── */}
        <section className="mt-12">
          <SectionTitle>{t('academicResearch.objective.title')}</SectionTitle>
          <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {tasks.map((task) => (
              <div key={task.n} className={`relative flex gap-4 ${CARD} p-6 sm:p-9`}>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-light/60 text-primary">
                  <task.Icon width={20} height={20} />
                </span>
                <div>
                  <p className="text-[13px] font-bold text-primary/60">
                    {t('academicResearch.objective.taskLabel', { n: task.n })}
                  </p>
                  <h3 className="mt-1 text-[18px] font-semibold text-black">{task.title}</h3>
                  <p className="mt-1.5 text-[15px] font-medium leading-relaxed text-[#54575f]">{task.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex justify-center">
            <span className="inline-flex max-w-[640px] items-center gap-2 rounded-full bg-primary-light/50 px-5 py-2.5 text-center text-[14px] font-semibold text-primary">
              <SparkleIcon width={14} height={14} className="shrink-0" />
              {t('academicResearch.objective.goal')}
            </span>
          </div>
        </section>

        {/* ── My Contribution — distinguishes my personal role from the team's published
             findings shown in every section after this one. Lightweight by design:
             same bordered-card treatment as "Models Explored", not a new visual pattern. ── */}
        <section className="mt-12">
          <SectionTitle>{t('academicResearch.contribution.title')}</SectionTitle>
          <p className="mt-2 max-w-[760px] text-[15px] font-medium leading-relaxed text-[#54575f]">
            {t('academicResearch.contribution.intro')}
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {contributionItems.map((item) => (
              <div key={item.title} className={`${BORDER} p-5`}>
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-light/60 text-primary">
                  <item.Icon width={16} height={16} />
                </span>
                <p className="mt-3 text-[15px] font-semibold text-black">{item.title}</p>
                <p className="mt-1.5 text-[13px] font-medium leading-relaxed text-[#7f7f90]">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Research Pipeline ── */}
        <section className="mt-12">
          <SectionTitle>{t('academicResearch.pipeline.title')}</SectionTitle>
          <p className="mt-2 text-[15px] font-medium text-[#7f7f90]">{t('academicResearch.pipeline.subtitle')}</p>
          {/* Four conceptual phases (Preprocess → Detect → Localize → Evaluate), each grouping
              its own steps — horizontal on desktop, a clear vertical stack below lg. */}
          <div className="mt-6 flex flex-col items-stretch gap-3 lg:flex-row lg:items-stretch lg:justify-center lg:gap-3">
            {pipelinePhases.map((phase, i) => (
              <Fragment key={phase.title}>
                <div className="flex-1 rounded-2xl border border-[#ECE6FC] bg-white p-5 lg:max-w-[240px]">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-light/60 text-[12px] font-bold text-primary">
                      {phase.n}
                    </span>
                    <span className="text-[13px] font-bold uppercase tracking-wide text-primary">{phase.title}</span>
                  </div>
                  <div className="mt-4 flex flex-col items-start gap-1.5 pl-[3px]">
                    {phase.steps.map((step, si) => (
                      <Fragment key={step}>
                        <span className="text-[13px] font-semibold leading-snug text-black">{step}</span>
                        {si < phase.steps.length - 1 && (
                          <ArrowRightIcon width={12} height={12} className="rotate-90 text-primary/30" />
                        )}
                      </Fragment>
                    ))}
                  </div>
                </div>
                {i < pipelinePhases.length - 1 && (
                  <div className="flex items-center justify-center py-1 lg:py-0">
                    <ArrowRightIcon width={18} height={18} className="rotate-90 text-primary/40 lg:rotate-0" />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </section>

        {/* ── Dataset & Experiment Setup ── */}
        <section className="mt-12">
          <SectionTitle>{t('academicResearch.setup.title')}</SectionTitle>
          <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
            <SpecCard title={t('academicResearch.setup.dataset.title')} items={datasetItems} />
            <SpecCard title={t('academicResearch.setup.training.title')} items={trainingItems} />
          </div>
        </section>

        {/* ── Models Explored ── */}
        <section className="mt-12">
          <SectionTitle>{t('academicResearch.models.title')}</SectionTitle>
          <p className="mt-4 max-w-[820px] text-[15px] font-medium leading-relaxed text-[#54575f]">
            {t('academicResearch.models.intro')}
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {models.map((model, i) => (
              <div key={model.name} className={`${BORDER} p-5`}>
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary-light/60 text-[12px] font-bold text-primary">
                  {i + 1}
                </span>
                <p className="mt-3 text-[16px] font-semibold text-black">{model.name}</p>
                <p className="mt-1.5 text-[14px] font-medium leading-relaxed text-[#7f7f90]">{model.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Evaluation Strategy ── */}
        <section className="mt-12">
          <SectionTitle>{t('academicResearch.evaluation.title')}</SectionTitle>
          {/* Open comparison, not two stacked cards — a single divider does the grouping. */}
          <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
            <div className="sm:border-r sm:border-[#ECE6FC] sm:pr-10">
              <SectionTitle>{t('academicResearch.evaluation.classification.title')}</SectionTitle>
              <p className="mt-2 text-[14px] font-medium text-[#7f7f90]">
                {t('academicResearch.evaluation.classification.blurb')}
              </p>
              <ul className="mt-5 space-y-3">
                {classificationMetrics.map((m) => (
                  <li key={m.label} className="border-t border-[#ECE6FC] pt-3 first:border-t-0 first:pt-0">
                    <p className="text-[14px] font-semibold text-black">{m.label}</p>
                    <p className="text-[13px] font-medium text-[#7f7f90]">{m.description}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionTitle>{t('academicResearch.evaluation.segmentation.title')}</SectionTitle>
              <p className="mt-2 text-[14px] font-medium text-[#7f7f90]">
                {t('academicResearch.evaluation.segmentation.blurb')}
              </p>
              <ul className="mt-5 space-y-3">
                {segmentationMetrics.map((m) => (
                  <li key={m.label} className="border-t border-[#ECE6FC] pt-3 first:border-t-0 first:pt-0">
                    <p className="text-[14px] font-semibold text-black">{m.label}</p>
                    <p className="text-[13px] font-medium text-[#7f7f90]">{m.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── Results — Classification ── */}
        <section className={`mt-12 ${CARD} p-6 sm:p-9`}>
          <SectionTitle>{t('academicResearch.results.title')}</SectionTitle>
          <p className="mt-2 max-w-[720px] text-[15px] font-medium leading-relaxed text-[#54575f]">
            {t('academicResearch.results.intro')}
          </p>
          <p className="mt-6 mb-3 text-[13px] font-semibold text-[#7f7f90]">
            {t('academicResearch.results.chartCaption')}
          </p>
          <div className="space-y-3">
            {CLASSIFICATION_RESULTS.map((model) => (
              <BarRow
                key={model.name}
                label={model.name}
                value={model.accuracy}
                max={maxAccuracy}
                suffix="%"
                highlight={model.highlight}
              />
            ))}
          </div>
          <p className="mt-6 rounded-[24px] bg-primary-light/30 p-4 text-[14px] font-medium leading-relaxed text-primary sm:p-5">
            {t('academicResearch.results.highlight')}
          </p>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full min-w-[480px] border-collapse text-left text-[13px]">
              <thead>
                <tr className="border-b border-[#ECE6FC] text-[#7f7f90]">
                  <th className="py-2 pr-4 font-semibold">Model</th>
                  <th className="py-2 pr-4 font-semibold">AUC</th>
                  <th className="py-2 pr-4 font-semibold">FNR</th>
                  <th className="py-2 pr-4 font-semibold">FPR</th>
                </tr>
              </thead>
              <tbody>
                {CLASSIFICATION_RESULTS.map((m) => (
                  <tr key={m.name} className={`border-b border-[#ECE6FC]/70 ${m.highlight ? 'bg-primary-light/20' : ''}`}>
                    <td className={`py-2 pr-4 font-medium ${m.highlight ? 'text-primary' : 'text-black'}`}>{m.name}</td>
                    <td className="py-2 pr-4 text-[#54575f]">{m.auc.toFixed(2)}%</td>
                    <td className="py-2 pr-4 text-[#54575f]">{m.fnr.toFixed(2)}%</td>
                    <td className="py-2 pr-4 text-[#54575f]">{m.fpr.toFixed(2)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── Segmentation Comparison ── */}
        <section className={`mt-12 ${CARD} p-6 sm:p-9`}>
          <SectionTitle>{t('academicResearch.segmentationResults.title')}</SectionTitle>
          <p className="mt-2 max-w-[720px] text-[15px] font-medium leading-relaxed text-[#54575f]">
            {t('academicResearch.segmentationResults.intro')}
          </p>

          {/* Image-first: the qualitative model outputs lead the section — sized to stay
              legible and prominent without monopolizing the viewport on desktop (~25%
              smaller than the previous pass at every breakpoint, still responsive). */}
          <figure className="mt-8 flex flex-col items-center">
            <img
              src={segmentationComparison}
              alt="Segmentation output for one representative case: original scan, ground truth, and predictions from U-Net, Attention U-Net, DeepLabV3+, DeepLabV3++, Mask R-CNN, and Mask R-CNN+."
              className="w-full max-w-[230px] rounded-2xl border border-[#ECE6FC] object-contain sm:max-w-[270px] lg:max-w-[320px]"
            />
            <figcaption className="mt-3 max-w-[320px] text-center text-[12px] font-medium text-[#7f7f90]">
              {t('academicResearch.segmentationResults.imageCaption')}
            </figcaption>
          </figure>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_0.6fr]">
            <div className="overflow-x-auto">
              <p className="mb-3 text-[13px] font-semibold text-[#7f7f90]">
                {t('academicResearch.segmentationResults.tableCaption')}
              </p>
              <table className="w-full min-w-[440px] border-collapse text-left text-[13px]">
                <thead>
                  <tr className="border-b border-[#ECE6FC] text-[#7f7f90]">
                    <th className="py-2 pr-4 font-semibold">Model</th>
                    <th className="py-2 pr-4 font-semibold">Precision</th>
                    <th className="py-2 pr-4 font-semibold">Recall</th>
                    <th className="py-2 pr-4 font-semibold">F1</th>
                    <th className="py-2 pr-4 font-semibold">IoU</th>
                  </tr>
                </thead>
                <tbody>
                  {SEGMENTATION_RESULTS.map((m) => (
                    <tr key={m.name} className={`border-b border-[#ECE6FC]/70 ${m.highlight ? 'bg-primary-light/20' : ''}`}>
                      <td className={`py-2 pr-4 font-medium ${m.highlight ? 'text-primary' : 'text-black'}`}>
                        <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
                          {m.name}
                          {m.highlight && <BestBadge label={t('academicResearch.bestOverallBadge')} />}
                        </span>
                      </td>
                      <td className="py-2 pr-4 text-[#54575f]">{m.precision.toFixed(2)}%</td>
                      <td className="py-2 pr-4 text-[#54575f]">{m.recall.toFixed(2)}%</td>
                      <td className="py-2 pr-4 text-[#54575f]">{m.f1.toFixed(2)}%</td>
                      <td className="py-2 pr-4 text-[#54575f]">{m.iou.toFixed(2)}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div>
              <p className="flex flex-wrap items-center gap-2 text-[13px] font-bold uppercase tracking-wide text-primary">
                {t('academicResearch.segmentationResults.spotlightLabel')}
              </p>
              <div className="mt-3 grid grid-cols-2 gap-3">
                {[
                  { label: 'Precision', value: deepLabSeg.precision },
                  { label: 'Recall', value: deepLabSeg.recall },
                  { label: 'F1-score', value: deepLabSeg.f1 },
                  { label: 'IoU', value: deepLabSeg.iou },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-[#ECE6FC] bg-primary-light/20 px-3 py-4 text-center">
                    <span className="font-playful text-[20px] font-semibold text-primary">{stat.value.toFixed(2)}%</span>
                    <span className="mt-1 block text-[12px] font-medium text-[#54575f]">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-6 rounded-[24px] bg-primary-light/30 p-4 text-[14px] font-medium leading-relaxed text-primary sm:p-5">
            {t('academicResearch.segmentationResults.finding')}
          </p>
        </section>

        {/* ── Why DeepLabV3++? ── */}
        <section className={`mt-12 ${CARD} p-6 sm:p-9`}>
          {/* Handwritten-accent title (font-playful, same family as the hero headline) —
              a small personal touch on the page's central conclusion. */}
          <h2 className="font-playful text-[22px] font-semibold text-black">
            {t('academicResearch.whyDeepLab.title')}
          </h2>
          <p className="mt-2 max-w-[720px] text-[15px] font-medium leading-relaxed text-[#54575f]">
            {t('academicResearch.whyDeepLab.intro')}
          </p>

          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {whyReasons.map((reason) => (
              <li key={reason} className="flex items-start gap-2.5 rounded-2xl border border-[#ECE6FC] p-4">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                  <CheckIcon width={11} height={11} />
                </span>
                <span className="text-[14px] font-medium leading-relaxed text-[#54575f]">{reason}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {tradeoff.map((label, i) => (
              <Fragment key={label}>
                <FlowChip label={label} tone="outline" />
                {i < tradeoff.length - 1 && <span className="text-lg font-bold text-primary/40">+</span>}
              </Fragment>
            ))}
            <ArrowRightIcon width={18} height={18} className="text-primary/40" />
            <FlowChip label={t('academicResearch.whyDeepLab.tradeoffResult')} tone="dark" />
          </div>

          <p className="mt-8 mb-3 text-[13px] font-semibold text-[#7f7f90]">
            {t('academicResearch.whyDeepLab.trainingTimeCaption')}
          </p>
          <div className="space-y-3">
            {TRAINING_TIME.map((model) => (
              <BarRow
                key={model.name}
                label={model.name}
                value={model.minutes}
                max={maxMinutes}
                suffix=" min"
                highlight={model.highlight}
                decimals={1}
                badge={model.highlight ? t('academicResearch.bestOverallBadge') : undefined}
              />
            ))}
          </div>
          <p className="mt-6 text-[14px] font-medium leading-relaxed text-[#54575f]">
            {t('academicResearch.whyDeepLab.trainingNote')}
          </p>
        </section>

        {/* ── Where the Models Struggled ── */}
        <section className="mt-12">
          <SectionTitle>{t('academicResearch.limitations.title')}</SectionTitle>
          <p className="mt-2 max-w-[760px] text-[15px] font-medium leading-relaxed text-[#54575f]">
            {t('academicResearch.limitations.intro')}
          </p>

          <div className="mt-6 grid grid-cols-1 gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {limitationItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5 rounded-2xl border border-[#ECE6FC] p-4">
                  <AlertTriangleIcon width={16} height={16} className="mt-0.5 shrink-0 text-amber-600" />
                  <span className="text-[14px] font-medium leading-relaxed text-[#54575f]">{item}</span>
                </li>
              ))}
            </ul>

            <figure className="flex flex-col items-center">
              <img
                src={errorAnalysis}
                alt="Pixel-level error map for one case: true positives in green, false positives in blue, and false negatives in red, across the original scan and ground truth."
                className="w-full max-w-[220px] rounded-2xl border border-[#ECE6FC] object-contain"
              />
              <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
                {errorLegend.map((entry) => (
                  <span key={entry.label} className="inline-flex items-center gap-1.5 text-[12px] font-medium text-[#54575f]">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: entry.swatch }} />
                    {entry.label}
                  </span>
                ))}
              </div>
            </figure>
          </div>
        </section>

        {/* ── Future Research Directions ── */}
        <section className="mt-12">
          <SectionTitle>{t('academicResearch.future.title')}</SectionTitle>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {futureItems.map((item) => (
              <div key={item} className={`flex items-start gap-2.5 ${BORDER} p-4`}>
                <CompassIcon width={16} height={16} className="mt-0.5 shrink-0 text-primary" />
                <span className="text-[14px] font-medium leading-relaxed text-[#54575f]">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Publication ── */}
        <section className={`mt-12 mb-9 ${CARD} p-6 sm:p-9`}>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <SectionTitle>{t('academicResearch.publication.title')}</SectionTitle>
              <h3 className="mt-4 max-w-[560px] font-playful text-[18px] font-semibold leading-snug text-black sm:text-[20px]">
                {t('academicResearch.title')}
              </h3>
              <p className="mt-3 text-[14px] font-medium text-[#54575f]">
                {t('academicResearch.publication.journal')} · {t('academicResearch.publication.volume')}
              </p>
              <p className="text-[14px] font-medium text-[#7f7f90]">
                {t('academicResearch.publication.dateRange')} · {t('academicResearch.publication.pages')}
              </p>
              <p className="mt-4 text-[13px] font-bold uppercase tracking-wide text-primary">
                {t('academicResearch.publication.authorsLabel')}
              </p>
              <p className="mt-1.5 max-w-[520px] text-[14px] font-medium leading-relaxed text-[#54575f]">
                {AUTHORS.map((author, i) => (
                  <span key={author}>
                    {i > 0 && ', '}
                    {author === 'Chanyanud Sriyota' ? <strong className="font-semibold text-black">{author}</strong> : author}
                  </span>
                ))}
              </p>
            </div>
            <a
              href={PUBLICATION_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              <BookIcon width={16} height={16} />
              {t('academicResearch.publication.cta')}
              <ArrowRightIcon width={14} height={14} />
            </a>
          </div>
        </section>
      </div>

      <Contact bubbleText={bubbleLines} variant="project" className="mt-3" />
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

function SpecCard({ title, items }) {
  return (
    <div className={`${BORDER} p-6 sm:p-9`}>
      <SectionTitle>{title}</SectionTitle>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-[15px] font-medium leading-relaxed text-[#54575f]">
            <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-primary/40" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

function BarRow({ label, value, max, suffix, highlight, decimals = 1, badge }) {
  const pct = Math.max(4, (value / max) * 100)
  return (
    <div className="flex items-center gap-3">
      <div className="flex w-[128px] shrink-0 flex-col items-start gap-1 sm:w-[140px]">
        <span className={`text-[13px] font-medium leading-tight ${highlight ? 'font-semibold text-primary' : 'text-[#54575f]'}`}>
          {label}
        </span>
        {badge && <BestBadge label={badge} />}
      </div>
      <div className="h-3 flex-1 overflow-hidden rounded-full bg-primary-light/40">
        <div
          className={`h-full rounded-full ${highlight ? 'bg-primary' : 'bg-primary/40'}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className={`w-[64px] shrink-0 text-right text-[13px] font-semibold ${highlight ? 'text-primary' : 'text-[#54575f]'}`}>
        {value.toFixed(decimals)}
        {suffix}
      </span>
    </div>
  )
}

// Signals the strongest model with an icon + label, not color alone (accessibility) — reuses
// the site's existing SparkleIcon accent and the Experience timeline's success-green tones.
function BestBadge({ label, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full bg-[#daefe6] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#2f8a63] ${className}`}
    >
      <SparkleIcon width={9} height={9} />
      {label}
    </span>
  )
}

// Page-specific icons — one-off glyphs matched to this research page's concepts.
function EyeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M1.5 12S5 5 12 5s10.5 7 10.5 7-3.5 7-10.5 7S1.5 12 1.5 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function TargetIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m5 13 4 4L19 7" />
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

function CompassIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="m15 9-2 6-6 2 2-6 6-2z" />
    </svg>
  )
}
