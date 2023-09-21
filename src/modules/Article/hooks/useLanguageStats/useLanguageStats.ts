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
        return count(input, hiraganaMatcher)
    }, [count, input])

    const katakana = useMemo(() => {
        return count(input, katakanaMatcher)
    }, [count, input])

    const kanji = useMemo(() => {
        const kanjiCount = count(input, kanjiMatcher)
        const totalLength = input.length
        const percentage = (kanjiCount / totalLength) * 100
        return {
            rating: calculateRating(percentage),
            percentage: Number(percentage.toFixed(0))
        }
    }, [calculateRating, count, input])

    const roman = useMemo(() => {
        return count(input, romanMatcher)
    }, [count, input])

    return {
        hiragana,
        katakana,
        kanji,
        roman
    }
}

export default useLanguageStats