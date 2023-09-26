import { Checkbox, FormControlLabel } from "@mui/material"
import styles from './SourcesSelector.module.scss'
import { NewsSource } from "modules/Settings/context/types.ts"

const useSources = () => {
  return Object.values(NewsSource)
}

export const SourcesSelector = () => {
  const sources = useSources()

  return (
    <div className={styles.wrapper}>
      {sources.map(source => {
        return (
          <FormControlLabel
            value={source}
            key={source}
            control={<Checkbox
              inputProps={{ 'aria-label': source }}
            />}
            label={source}
            labelPlacement="end"
          />
        )
      })}
    </div>
  )
}
