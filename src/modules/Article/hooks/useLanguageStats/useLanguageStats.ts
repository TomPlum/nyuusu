import { DifficultyRating, KanjiGrades, LanguageStats, LanguageStatsProps } from "./types.ts"
import { useCallback, useMemo } from "react"
import kanjiJson from 'assets/kanji.json'
import { KanjiData } from "views/HomeView/components/AnalysisArticle/types.ts"

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
    const trimmed = input.trim().replace(' ', '')
    const quantity = count(trimmed, matcher)
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

  const grades: KanjiGrades = useMemo(() => {
    const initialValue: KanjiGrades = {}
    const kanji = kanjiJson as KanjiData
    return [...input].reduce((acc, char) => {
      if (kanjiMatcher.test(char)){
        const grade = kanji.find(value => value.name === char)?.grade
        
        if (grade) {
          const existingValue = acc[grade]
          acc[grade] = (existingValue ?? 0) + 1
        }
      }

      return acc
    }, initialValue)
  }, [input])

  const hiragana = useMemo(() => {
    return percentage(hiraganaMatcher)
  }, [percentage])

  const katakana = useMemo(() => {
    return percentage(katakanaMatcher)
  }, [percentage])

  const kanji = useMemo(() => {
    return percentage(kanjiMatcher)
  }, [percentage])

  const roman = useMemo(() => {
    return percentage(romanMatcher)
  }, [percentage])

  const other = useMemo(() => {
    return 100 - kanji - katakana - hiragana - roman
  }, [hiragana, kanji, katakana, roman])

  const difficulty = useMemo(() => {
    return calculateRating(kanji)
  }, [calculateRating, kanji])

  return {
    difficulty,
    hiragana,
    katakana,
    kanji,
    roman,
    grades,
    other
  }
}

export default useLanguageStats