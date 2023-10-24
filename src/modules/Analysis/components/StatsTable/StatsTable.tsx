import { StatsTableProps } from "modules/Analysis/components/StatsTable/types.ts"
import styles from "./StatsTable.module.scss"
import { Equalizer } from "@mui/icons-material"
import AnimatedNumber from "react-animated-numbers"
import { useTranslation } from "react-i18next"

const StatsTable = ({ data }: StatsTableProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'views.home.articles.analysis' })

  return (
    <div className={styles.stats}>
      <div className={styles.heading}>
        <Equalizer className={styles.icon} />
        <span>{t('text.start.prefix')}</span>
        <AnimatedNumber
          animateToNumber={data?.length ?? 0}
          configs={[{ mass: 1, tension: 220, friction: 47 }]}
        />
        <span>{t('text.start.suffix')}</span>
      </div>

      <div className={styles.stat}>
        <p className={styles.label}>字</p>
        <div className={styles.text}>
          <span>{t('text.kanji.prefix')}</span>
          <AnimatedNumber
            configs={[{}]}
            animateToNumber={data?.kanji ?? 0}
          />
          <span>{t('text.kanji.suffix')}</span>
        </div>
      </div>

      <div className={styles.stat}>
        <p className={styles.label}>ひ</p>
        <div className={styles.text}>
          <AnimatedNumber
            animateToNumber={data?.hiragana ?? 0}
            configs={[{ mass: 1, tension: 220, friction: 35 }]}
          />
          <span>{t('text.hiragana.suffix')}</span>
        </div>
      </div>

      <div className={styles.stat}>
        <p className={styles.label}>カ</p>
        <div className={styles.text}>
          <span>{t('text.katakana.prefix')}</span>
          <AnimatedNumber
            animateToNumber={data?.katakana ?? 0}
            configs={[{ mass: 1, tension: 220, friction: 25 }]}
          />
          <span>{t('text.katakana.suffix')}</span>
        </div>
      </div>

      <div className={styles.stat}>
        <p className={styles.label}>A</p>
        <div className={styles.text}>
          <AnimatedNumber
            animateToNumber={data?.roman ?? 0}
            configs={[{ mass: 1, tension: 220, friction: 45 }]}
          />
          <span>{t('text.roman.suffix')}</span>
        </div>
      </div>

      <div className={styles.mask} />
    </div>
  )
}

export default StatsTable