import styles from './TornPaperFooter.module.scss'
import { CSSProperties, useMemo } from "react"
import { useWindowSize } from '@uidotdev/usehooks'
import { GitHub, Help } from "@mui/icons-material"
import classNames from "classnames"
import { Link } from "react-router-dom"

const TornPaperFooter = () => {
  const { width } = useWindowSize()

  const getRandomInt = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
    
  const path = useMemo(() => {
    const step = Math.floor((width ?? 1000) / 8)
    const quantity = step > 100 ? 100 : step

    const values = Array(quantity).fill('').map((_v, i) => {
      const depth = getRandomInt(4, 12)
      return `${i}% ${depth}px`
    })

    values.unshift('0% 0%') // <-- Top left
    values.push('100% 0%') // <-- Top Right

    return {
      "--path": values.join(',')
    }
  }, [width]) as CSSProperties

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner} style={path} />

      <div className={styles.content}>
        <div className={classNames(styles.projects, styles.section)}>
          <p className={styles.paragraph}>
            <GitHub className={styles.github} />
            <span>Related projects</span>
          </p>

          <ul className={styles.list}>
            <li><a href='https://github.com/TomPlum/learn-japanese'>learn-japanese</a></li>
            <li><a href='https://github.com/TomPlum/japanese-keyboard'>japanese-keyboard</a></li>
          </ul>
        </div>

        <div className={classNames(styles.help, styles.section)}>
          <p className={styles.paragraph}>
            <Help className={styles.helpIcon} />
            <span>Help</span>
          </p>

          <ul className={styles.list}>
            <li><Link to='https://github.com/TomPlum/learn-japanese'>Anki Configuration</Link></li>
          </ul>
        </div>
      </div>

    </div>
  )
}

export default TornPaperFooter