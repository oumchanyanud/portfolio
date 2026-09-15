import { useTranslation } from 'react-i18next'
import { SUPPORTED_LANGUAGES } from '../i18n/config'

// Small EN / TH segmented control. Kept text-only so it works in the nav on every width.
export default function LanguageToggle({ className = '' }) {
  const { t, i18n } = useTranslation()
  const current = SUPPORTED_LANGUAGES.includes(i18n.resolvedLanguage) ? i18n.resolvedLanguage : 'en'

  return (
    <div
      role="group"
      aria-label={t('language.label')}
      className={`flex items-center rounded-full bg-white/70 p-0.5 text-sm font-semibold shadow-sm ${className}`}
    >
      {SUPPORTED_LANGUAGES.map((lng) => {
        const active = lng === current
        return (
          <button
            key={lng}
            type="button"
            aria-pressed={active}
            onClick={() => i18n.changeLanguage(lng)}
            className={`rounded-full px-2.5 py-1 transition-colors ${
              active ? 'bg-primary text-white' : 'text-black/60 hover:text-primary'
            }`}
          >
            {t(`language.${lng}`)}
          </button>
        )
      })}
    </div>
  )
}
