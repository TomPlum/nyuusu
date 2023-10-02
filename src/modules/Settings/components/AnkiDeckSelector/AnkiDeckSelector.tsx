import { TextField } from "@mui/material"
import { useTranslation } from "react-i18next"
import { useSettingsContext } from "modules/Settings/context/useSettingsContext.ts"
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react"

const AnkiDeckSelector = () => {
  const { anki, setAnkiSettings } = useSettingsContext()
  const [value, setValue] = useState(anki.deckName)
  const { t } = useTranslation('translation', { keyPrefix: 'settings.anki.deck' })

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }, [])

  const error = useMemo(() => {
    return value.length <= 0
  }, [value.length])

  useEffect(() => {
    setValue(anki.deckName)
  }, [anki.deckName])

  useEffect(() => {
    if (!error) {
      setAnkiSettings({
        ...anki,
        deckName: value
      })
    }
  }, [anki, error, setAnkiSettings, value])

  return (
    <div>
      <TextField
        value={value}
        error={error}
        label={t('label')}
        onChange={handleChange}
        id='anki-deck-name-selector'
        data-testid='anki-deck-name-selector'
        helperText={error ? t('error') : t('help')}
      />
    </div>
  )
}

export default AnkiDeckSelector