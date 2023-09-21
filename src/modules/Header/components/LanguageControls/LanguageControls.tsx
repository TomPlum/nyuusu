import useNewsContext from "context"
import styles from './LanguageControls.module.scss'
import { Language, Translate } from "@mui/icons-material"
import classNames from "classnames"
import { useTranslation } from "react-i18next"
import { useCallback } from "react"
import i18n from "i18next"
import { Language as LanguageType } from 'components/LanguageControls/types.ts'

const LanguageControls = () => {
    const { language, setLanguage } = useNewsContext()
    const { t } = useTranslation('translation', { keyPrefix: 'header.language-controls' })

    const handleChange = useCallback((language: LanguageType) => {
        i18n.changeLanguage(language).then(() => {
            setLanguage(language)
        }).catch(error => {
            console.debug('Failed to set language to: ', language, error)
        })
    }, [setLanguage])

    return (
        <div className={styles.controls}>
            <div onClick={() => handleChange('jp')} title={t('single')}>
                <Translate
                    className={classNames(styles.icon, { [styles.active]: language === 'jp' })}
                />
            </div>

            <div onClick={() => handleChange('en')} title={t('cards')}>
                <Language
                    className={classNames(styles.icon, { [styles.active]: language === 'en' })}
                />
            </div>
        </div>
    )
}

export default LanguageControls