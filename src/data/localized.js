import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { profile as enProfile } from './profile'
import { experience as enExperience } from './experience'
import { projects as enProjects } from './projects'
import { thai } from './thai'

// Overlays the Thai `thai.js` strings onto the canonical English data, keeping
// every non-text field (images, hex, sizes, slugs, layout, category keys) intact.
function localize(lang) {
  if (lang !== 'th') {
    return { profile: enProfile, experience: enExperience, projects: enProjects }
  }

  const th = thai

  const profile = {
    ...enProfile,
    title: th.profile.title,
    bio: th.profile.bio,
    heroTags: enProfile.heroTags.map((tag, i) => ({ ...tag, label: th.profile.heroTags[i] })),
    about: {
      ...enProfile.about,
      paragraphs: th.profile.about.paragraphs,
      facts: enProfile.about.facts.map((fact, i) => ({ ...fact, label: th.profile.about.facts[i] })),
    },
    interests: enProfile.interests.map((group, i) => ({
      ...group,
      title: th.profile.interests[i].title,
      items: th.profile.interests[i].items,
    })),
  }

  const experience = enExperience.map((item, i) => ({ ...item, ...th.experience[i] }))

  const projects = enProjects.map((p) => {
    const t = th.projects[p.slug]
    if (!t) return p

    // Bespoke-layout projects (e.g. Usability Testing, CNV Detection) have no
    // `detail` object — their case-study content lives in i18n instead — so only
    // the card-level fields get overlaid here.
    if (!p.detail) {
      return { ...p, subtitle: t.subtitle, description: t.description, footerBubble: t.footerBubble }
    }

    const td = t.detail
    const ds = p.detail.designSystem
    return {
      ...p,
      subtitle: t.subtitle,
      description: t.description,
      footerBubble: t.footerBubble,
      detail: {
        ...p.detail,
        longDescription: td.longDescription,
        role: td.role,
        course: td.course,
        platform: td.platform,
        tools: td.tools,
        keyFeatures: p.detail.keyFeatures.map((f, i) => ({
          ...f,
          title: td.keyFeatures[i].title,
          description: td.keyFeatures[i].description,
        })),
        designSystem: ds && {
          ...ds,
          color: { ...ds.color, blurb: td.designSystem.color.blurb },
          typography: {
            ...ds.typography,
            blurb: td.designSystem.typography.blurb,
            font: td.designSystem.typography.font,
          },
          uiElements: { ...ds.uiElements, blurb: td.designSystem.uiElements.blurb },
          gallery: {
            ...ds.gallery,
            label: td.designSystem.gallery.label,
            blurb: td.designSystem.gallery.blurb,
          },
        },
      },
    }
  })

  return { profile, experience, projects }
}

export function useLocalizedData() {
  const { i18n } = useTranslation()
  const lang = i18n.resolvedLanguage
  return useMemo(() => localize(lang), [lang])
}
