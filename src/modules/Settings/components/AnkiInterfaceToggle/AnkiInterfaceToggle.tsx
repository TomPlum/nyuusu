import { FormControl, FormControlLabel, FormGroup, Switch } from "@mui/material"
import { useSettingsContext } from "modules/Settings/context/useSettingsContext.ts"
import { ChangeEvent, useCallback } from "react"
import { useTranslation } from "react-i18next"

const AnkiInterfaceToggle = () => {
  const { anki, setAnkiSettings } = useSettingsContext()
  const { t } = useTranslation('translation', { keyPrefix: 'settings.anki.interface' })

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setAnkiSettings({
      ...anki,
      useGraphicalInterface: e.target.checked
    })
  }, [anki, setAnkiSettings])

  return (
    <FormControl>
      <FormGroup row aria-label='position'>
        <FormControlLabel
          label={t('label')}
          labelPlacement='end'
          control={<Switch
            onChange={handleChange}
            checked={anki.useGraphicalInterface}
            inputProps={{ 'aria-label': 'controlled' }}
          />}
        />
      </FormGroup>
    </FormControl>
  )
}

export default AnkiInterfaceToggle