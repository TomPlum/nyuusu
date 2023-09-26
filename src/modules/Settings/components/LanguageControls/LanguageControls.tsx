import styles from './LanguageControls.module.scss'
import { useTranslation } from "react-i18next"
import { useCallback, MouseEvent } from "react"
import i18n from "i18next"
import { Language } from './types.ts'
import { ToggleButton, ToggleButtonGroup } from "@mui/material"
import { useSettingsContext } from "modules/Settings/context/useSettingsContext.ts"
import { CircleFlag } from 'react-circle-flags'
import classNames from "classnames"

const LanguageControls = () => {
  const { language, setLanguage } = useSettingsContext()
  const { t } = useTranslation('translation', { keyPrefix: 'header.language-controls' })

  const handleChange = useCallback((_e: MouseEvent<HTMLElement>, language: Language) => {
    i18n.changeLanguage(language).then(() => {
      setLanguage(language)
    }).catch(error => {
      console.debug('Failed to set language to: ', language, error)
    })
  }, [setLanguage])

  return (
    <div className={styles.controls}>
      <ToggleButtonGroup value={language} exclusive onChange={handleChange} aria-label='language' color='secondary'>
        <ToggleButton value={'en'} aria-label={t('en')}>
          <CircleFlag countryCode='uk' className={classNames(styles.icon, { [styles.active]: language === 'en' })} />
        </ToggleButton>

        <ToggleButton value={'jp'} aria-label={t('jp')}>
          <CircleFlag countryCode='jp' className={classNames(styles.icon, { [styles.active]: language === 'jp' })} />
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}

export default LanguageControls