import { useSettingsContext } from "modules/Settings/context/useSettingsContext.ts"
import { Autocomplete, TextField } from "@mui/material"
import { Font } from "./types.ts"
import { SyntheticEvent, useCallback, useMemo } from "react"
import { useTranslation } from "react-i18next"

const FontSelector = () => {
  const { font, setFont } = useSettingsContext()
  const { t } = useTranslation('translation', { keyPrefix: 'settings' })

  const handleChange = useCallback((_e: SyntheticEvent, value: string | null) => {
    if (value) {
      setFont(value)
    }
  }, [setFont])

  const options = useMemo(() => {
    return Object.values(Font).map(name => name.valueOf())
  }, [])

  return (
    <div>
      <Autocomplete
        value={font}
        options={options}
        id={t('font-label')}
        onChange={handleChange}
        renderInput={(params => <TextField {...params} label={params.id} />)}
      />
    </div>
  )
}

export default FontSelector