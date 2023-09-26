import { useMemo } from "react"
import enLocale from "date-fns/locale/en-GB"
import jpLocale from "date-fns/locale/ja"
import { useSettingsContext } from "modules/Settings/context/useSettingsContext.ts"

const useLocale = () => {
  const { language } = useSettingsContext()
    
  return useMemo(() => {
    switch (language) {
      case "en": return enLocale
      case "jp": return jpLocale
    }
  }, [language])
}

export default useLocale