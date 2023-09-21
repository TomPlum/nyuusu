import { UseKatakanaProps } from "./types.ts"
import hepburn from 'hepburn'
import { useMemo } from "react"

const useKatakana = ({ english }: UseKatakanaProps) => {
  return useMemo(() => {
    return hepburn.toKatakana(english)
  }, [english])
}

export default useKatakana