import styles from "./Footer.module.scss"
import { useTranslation } from "react-i18next"
import { useMemo } from "react"

const Footer = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'views.home.footer' })

  const currentYear = useMemo(() => {
    return new Date().getFullYear()
  }, [])

  return (
    <div className={styles.wrapper}>
      <span className={styles.edition}>
        {t('edition', { number: 1 })}
      </span>
        
      <span className={styles.copyright}>
        {t('copyright', { year: currentYear })}
      </span>
    </div>
  )
}

export default Footer