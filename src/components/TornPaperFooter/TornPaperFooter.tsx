import styles from './TornPaperFooter.module.scss'
import { CSSProperties, useMemo } from "react"
import { useWindowSize } from '@uidotdev/usehooks'
import { GitHub, Help } from "@mui/icons-material"
import classNames from "classnames"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

const TornPaperFooter = () => {
  const { width } = useWindowSize()
  const { t } = useTranslation('translation', { keyPrefix: 'footer' })

  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
    
  const path = useMemo(() => {
    const step = width === null || width < 1000 ? 4 : 2
    const quantity = width == null ? 75 : width > 1000 ? 100 : 50

    const values = Array(quantity).fill('').map((_v, i) => {
      const depth = getRandomInt(4, 20)
      return `${(i + 1) * step}% ${depth}px`
    })

    values.unshift('0% 0%') // <-- Top left
    values.unshift('0% 100%') // <-- Bottom left
    values.push('100% 0%') // <-- Top Right
    values.push('100% 100%') // <-- Bottom Right

    return {
      "--path": values.join(',')
    }
  }, [width]) as CSSProperties

  return (
    <div style={path} className={styles.wrapper}>
      <div className={styles.content}>
        <div className={classNames(styles.projects, styles.section)}>
          <p className={styles.paragraph}>
            <GitHub className={styles.github} />
            <span>{t('sections.related-projects')}</span>
          </p>

          <ul className={styles.list}>
            <li><a href='https://github.com/TomPlum/learn-japanese'>learn-japanese</a></li>
            <li><a href='https://github.com/TomPlum/japanese-keyboard'>japanese-keyboard</a></li>
          </ul>
        </div>

        <div className={classNames(styles.help, styles.section)}>
          <p className={styles.paragraph}>
            <Help className={styles.helpIcon} />
            <span>{t('sections.help')}</span>
          </p>

          <ul className={styles.list}>
            <li>
              <Link to='https://github.com/TomPlum/learn-japanese'>
                {t('help.anki')}
              </Link>
            </li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default TornPaperFooter