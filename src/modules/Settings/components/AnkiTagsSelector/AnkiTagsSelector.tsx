import { TextField } from "@mui/material"
import { useSettingsContext } from "modules/Settings/context/useSettingsContext.ts"
import { useTranslation } from "react-i18next"
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react"

const AnkiTagsSelector = () => {
  const { anki, setAnkiSettings } = useSettingsContext()
  const [value, setValue] = useState(anki.tags.join(','))
  const { t } = useTranslation('translation', { keyPrefix: 'settings.anki.tags' })

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }, [])

  const error = useMemo(() => {
    return !/^([a-zA-Z0-9]+,?\s*)+$/.test(value)
  }, [value])

  useEffect(() => {
    if (!error) {
      setAnkiSettings({
        ...anki,
        tags: value.trim().split(',')
      })
    }
  }, [anki, error, setAnkiSettings, value])

  return (
    <div>
      <TextField
        value={value}
        error={error}
        label={t('label')}
        helperText={t('help')}
        onChange={handleChange}
        id='anki-deck-tags-selector'
        data-testid='anki-deck-tags-selector'
      />
    </div>
  )
}

export default AnkiTagsSelector