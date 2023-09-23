import { TranslateProps, TranslateResult } from "hooks/useTranslate/types.ts"
import { useMemo } from "react"

const useTranslate = ({ text }: TranslateProps): TranslateResult => {
  const link = useMemo(() => {
    return `https://www.deepl.com/en/translator#ja/en/${text}`
  }, [text])

  return {
    link
  }
}

export default useTranslate