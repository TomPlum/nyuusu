import { useSettingsContext } from "modules/Settings/context/useSettingsContext.ts"
import { Autocomplete, TextField } from "@mui/material"
import { Font, FONTS } from "./types.ts"
import { SyntheticEvent, useCallback } from "react"
import { useTranslation } from "react-i18next"

const FontSelector = () => {
  const { font, setFont } = useSettingsContext()
  const { t } = useTranslation('translation', { keyPrefix: 'settings.font' })

  const handleChange = useCallback((_e: SyntheticEvent, value: Font | null) => {
    if (value) {
      setFont(value)
    }
  }, [setFont])

  return (
    <div>
      <Autocomplete
        value={font}
        options={FONTS}
        id={t('label')}
        onChange={handleChange}
        getOptionLabel={option => t(`names.${option.slug}`)}
        renderInput={(params => <TextField {...params} label={params.id} />)}
      />
    </div>
  )
}

export default FontSelector