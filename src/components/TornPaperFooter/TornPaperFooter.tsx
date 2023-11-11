import styles from './TornPaperFooter.module.scss'
import { CSSProperties, useMemo } from "react"
import { useWindowSize } from '@uidotdev/usehooks'
import { GitHub, Help, Verified } from "@mui/icons-material"
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

    values.unshift('0% 0%') // <-- Top left [2]
    values.unshift('0% 100%') // <-- Bottom left [1]
    // Values from above are in the middle here
    values.push('100% 0%') // <-- Top Right [3]
    values.push('100% 100%') // <-- Bottom Right [4]

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
              <Link to='https://github.com/TomPlum/nyuusu/tree/main#readme'>
                {t('help.readme')}
              </Link>
            </li>

            <li>
              <Link to='https://github.com/TomPlum/learn-japanese'>
                {t('help.anki')}
              </Link>
            </li>
          </ul>
        </div>

        <div className={classNames(styles.acknowledgements, styles.section)}>
          <p className={styles.paragraph}>
            <Verified className={styles.acknowledgementsIcon} />
            <span>{t('sections.acknowledgements')}</span>
          </p>

          <ul className={styles.list}>
            <li>
              <Link to='https://www.newscatcherapi.com/'>
                {t('acknowledgements.newscatcher')}
              </Link>
            </li>

            <li>
              <Link to='https://www.deepl.com/en/docs-api'>
                {t('acknowledgements.deepl')}
              </Link>
            </li>

            <li>
              <Link to='https://alvaromontoro.com/blog/68035/css-art-drawing-a-coffee-stain'>
                {t('acknowledgements.coffee')}
              </Link>
            </li>

            <li>
              <Link to='https://codepen.io/lynnandtonic/pen/PoZpjOr'>
                {t('acknowledgements.crease')}
              </Link>
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default TornPaperFooter