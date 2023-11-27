import styles from './AnalysisControls.module.scss'
import { ToggleButton, ToggleButtonGroup } from "@mui/material"
import { useState } from "react"
import { AnalysisMode } from "modules/Analysis/components/AnalysisControls/types.ts"
import { MouseEvent } from "react"
import { useTranslation } from "react-i18next"
import Typography from "components/Typography"

const AnalysisControls = () => {
  const [mode, setMode] = useState<AnalysisMode>('headline-and-article')
  const { t } = useTranslation('translation', { keyPrefix: 'views.home.articles.analysis.controls' })

  const handleChangeMode = (_e: MouseEvent<HTMLElement>, value: AnalysisMode) => {
    setMode(value)
  }

  return (
    <div className={styles.wrapper}>
      <ToggleButtonGroup exclusive value={mode} onChange={handleChangeMode} className={styles.group}>
        <ToggleButton value='headline-and-article' className={styles.button}>
          <Typography forceVertical>
            {t('headline-and-article')}
          </Typography>
        </ToggleButton>

        <ToggleButton value='headline-only' className={styles.button}>
          <Typography forceVertical>
            {t('headline-only')}
          </Typography>
        </ToggleButton>

        <ToggleButton value='article-only' className={styles.button}>
          <Typography forceVertical>
            {t('article-only')}
          </Typography>
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}

export default AnalysisControls