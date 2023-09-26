import { Checkbox, FormControlLabel } from "@mui/material"
import styles from './SourcesSelector.module.scss'
import { NewsSource } from "modules/Settings/context/types.ts"
import { SyntheticEvent, useCallback } from "react"
import { useSettingsContext } from "modules/Settings/context/useSettingsContext.ts"

const useSources = () => {
  return Object.values(NewsSource)
}

export const SourcesSelector = () => {
  const availableSources = useSources()
  const { sources, setSources } = useSettingsContext()

  const onSelect = useCallback((e: SyntheticEvent, source: NewsSource, checked: boolean) => {
    e.stopPropagation()
    e.preventDefault()
    
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
            value={source}
            key={source}
            control={<Checkbox
              inputProps={{ 'aria-label': source }}
            />}
            onChange={(e, checked) => onSelect(e, source, checked)}
            checked={source.includes(source)}
            label={source}
            labelPlacement="end"
          />
        )
      })}
    </div>
  )
}
