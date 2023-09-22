import { DifficultyRating, LanguageStats, LanguageStatsProps } from "./types.ts"
import { useCallback, useMemo } from "react"

const hiraganaMatcher = /([ぁ-ん])/
const katakanaMatcher = /([ァ-ン])/
const kanjiMatcher = /([一-龯])/
const romanMatcher = /^[A-Z]+$/

const useLanguageStats = ({ input }: LanguageStatsProps): LanguageStats => {
  const count = useCallback((values: string, matcher: RegExp) => {
    return [...values].filter(char => {
      return matcher.exec(char)
    }).length
  }, [])

  const percentage = useCallback((matcher: RegExp) => {
    const quantity = count(input, matcher)
    const totalLength = input.length
    return Math.round((quantity / totalLength) * 100)
  }, [count, input])

  const calculateRating = useCallback((percentage: number) => {
    if (percentage >= 80) {
      return DifficultyRating.EXPERT
    } else if (percentage >= 40 && percentage < 80) {
      return DifficultyRating.INTERMEDIATE
    } else {
      return DifficultyRating.BEGINNER
    }
  }, [])

  const hiragana = useMemo(() => {
    return percentage(hiraganaMatcher)
  }, [percentage])

  const katakana = useMemo(() => {
    return percentage(katakanaMatcher)
  }, [percentage])

  const kanji = useMemo(() => {
    const percent = percentage(kanjiMatcher)
    return {
      rating: calculateRating(percent),
      percentage: percent
    }
  }, [calculateRating, percentage])

  const roman = useMemo(() => {
    return percentage(romanMatcher)
  }, [percentage])

  const other = useMemo(() => {
    return 100 - kanji.percentage - katakana - hiragana - roman
  }, [hiragana, kanji, katakana, roman])

  return {
    hiragana,
    katakana,
    kanji,
    roman,
    other
  }
}

export default useLanguageStats