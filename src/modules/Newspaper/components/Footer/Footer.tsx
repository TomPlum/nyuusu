import styles from "./Footer.module.scss"
import { useTranslation } from "react-i18next"
import { useMemo } from "react"
import { FooterProps } from "modules/Newspaper/components/Footer/types.ts"

const Footer = ({ edition }: FooterProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'newspaper.footer' })

  const currentYear = useMemo(() => {
    return new Date().getFullYear()
  }, [])

  return (
    <div className={styles.wrapper}>
      <span className={styles.edition}>
        {t('edition', { number: edition })}
      </span>
        
      <span className={styles.copyright}>
        {t('copyright', { year: currentYear })}
      </span>
    </div>
  )
}

export default Footer