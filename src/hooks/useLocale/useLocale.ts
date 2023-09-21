import { useMemo } from "react"
import enLocale from "date-fns/locale/en-GB"
import jpLocale from "date-fns/locale/ja"
import useNewsContext from "context"

const useLocale = () => {
  const { language } = useNewsContext()
    
  return useMemo(() => {
    switch (language) {
    case "en": return enLocale
    case "jp": return jpLocale
    }
  }, [language])
}

export default useLocale