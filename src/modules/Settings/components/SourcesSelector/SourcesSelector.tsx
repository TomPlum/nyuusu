import { Checkbox, FormControlLabel } from "@mui/material"
import styles from './SourcesSelector.module.scss'
import { NewsSource } from "modules/Settings/context/types.ts"
import { SyntheticEvent, useCallback } from "react"
import { useSettingsContext } from "modules/Settings/context/useSettingsContext.ts"
import { useTranslation } from "react-i18next"

const useSources = () => {
  return Object.values(NewsSource)
}

export const SourcesSelector = () => {
  const availableSources = useSources()
  const { sources, setSources } = useSettingsContext()
  const { t } = useTranslation('translation', { keyPrefix: 'sources' })

  const onSelect = useCallback((_e: SyntheticEvent, source: NewsSource, checked: boolean) => {
    const current = [...sources]

    if (checked) {
      const updated = current.concat(source)
      setSources(updated)
    } else {
      const updated = current.filter(it => it !== source)
      setSources(updated)
    }
  }, [setSources, sources])

  return (
    <div className={styles.wrapper}>
      {availableSources.map(source => {
        return (
          <FormControlLabel
            key={source}
            value={source}
            label={t(source)}
            labelPlacement="end"
            checked={sources.includes(source)}
            onChange={(e, checked) => onSelect(e, source, checked)}
            control={<Checkbox inputProps={{ 'aria-label': source }} color='default' />}
          />
        )
      })}
    </div>
  )
}
