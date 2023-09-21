export interface LanguageStatsProps {
    input: string
}

export interface StatSummary {
    rating: DifficultyRating
    percentage: number
}

export interface LanguageStats {
    kanji: StatSummary
    hiragana: number
    katakana: number
    roman: number
}

export enum DifficultyRating {
    BEGINNER = 'Beginner',
    INTERMEDIATE = 'Intermediate',
    EXPERT = 'Expert'
}