import { TextField } from "@mui/material"
import { useTranslation } from "react-i18next"
import { useSettingsContext } from "modules/Settings/context/useSettingsContext.ts"
import { ChangeEvent, useCallback } from "react"

const AnkiDeckSelector = () => {
  const { anki ,setAnkiSettings } = useSettingsContext()
  const { t } = useTranslation('translation', { keyPrefix: 'settings.anki' })

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setAnkiSettings({
      ...anki,
      deckName: e.target.value
    })
  }, [anki, setAnkiSettings])

  return (
    <div>
      <TextField
        value={anki.deckName}
        label={t('deck.label')}
        onChange={handleChange}
        id='anki-deck-name-selector'
        data-testid='anki-deck-name-selector'
      />
    </div>
  )
}

export default AnkiDeckSelector