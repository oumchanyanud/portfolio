import { Link, Navigate, useParams } from 'react-router-dom'
import { projects } from '../data/projects'
import { ArrowRightIcon, BriefcaseIcon, CameraIcon, CodeIcon } from './icons'

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)

  if (!project) return <Navigate to="/" replace />

  const { detail } = project

  return (
    <section className="mx-auto max-w-[1440px] px-6 pb-10 pt-36 sm:px-10 md:pt-44 lg:px-[72px]">
      <Link to="/" className="inline-flex items-center gap-1 text-base font-medium text-black hover:text-primary">
        <ArrowRightIcon width={16} height={16} className="rotate-180" /> Back
      </Link>

      <div className="mt-6 rounded-3xl bg-[#fdfdfd] p-8 shadow-sm">
        <span className="text-[13px] font-semibold uppercase text-product-design">{project.category}</span>
        <h1 className="mt-2 text-[32px] font-semibold text-black">{project.title}</h1>
        <p className="mt-1 text-xl font-medium text-[#54575f]">{project.subtitle}</p>

        <div className="mt-6 flex items-center justify-center rounded-2xl bg-gray-50 p-6 text-sm text-gray-400">
          {detail.hero ? (
            <img src={detail.hero} alt={project.title} className="max-h-[420px] w-auto object-contain" />
          ) : (
            // TODO: add the hero illustration — see src/data/projects.js `detail.hero`
            <span className="flex aspect-video w-full items-center justify-center">Project hero image</span>
          )}
        </div>

        <p className="mt-6 max-w-3xl font-medium text-[#54575f]">{detail.longDescription}</p>

        <div className="mt-6 grid max-w-md grid-cols-2 gap-x-8 gap-y-4">
          <Meta icon={<BriefcaseIcon width={18} height={18} />} label="Role" value={detail.role} />
          <Meta icon={<CodeIcon width={18} height={18} />} label="Course" value={detail.course} />
          <Meta icon={<CameraIcon width={18} height={18} />} label="Platform" value={detail.platform} />
          <Meta icon={<CodeIcon width={18} height={18} />} label="Tools" value={detail.tools} />
        </div>

        {detail.keyFeatures && detail.keyFeatures.length > 0 && (
          <div className="mt-10">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-black">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Key Features
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {detail.keyFeatures.map((feature) => (
                <div key={feature.title} className="rounded-2xl border-2 border-[#d9d6e4] bg-[#fbfbfd] p-5">
                  <h3 className="text-base font-semibold text-black">{feature.title}</h3>
                  <p className="mt-1.5 text-sm text-[#7f7f90]">{feature.description}</p>
                  {feature.image && (
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="mt-4 w-full rounded-xl border border-[#d9d6e4] object-contain"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

function Meta({ icon, label, value }) {
  return (
    <div className="flex items-start gap-2">
      <span className="mt-0.5 text-primary">{icon}</span>
      <div>
        <p className="text-sm font-semibold text-black">{label}</p>
        <p className="text-sm text-[#54575f]">{value}</p>
      </div>
    </div>
  )
}
