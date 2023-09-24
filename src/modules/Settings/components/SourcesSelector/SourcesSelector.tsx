import { Checkbox, FormControlLabel } from "@mui/material"
import styles from './SourcesSelector.module.scss'

const useSources = () => {
  return [
    '毎日新聞社'
  ]
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
