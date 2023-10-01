export interface LanguageStatsProps {
    input: string
}

export interface LanguageStats {
    difficulty: DifficultyRating
    kanji: number
    hiragana: number
    katakana: number
    roman: number
    other: number
}

export enum DifficultyRating {
    BEGINNER = 'Beginner',
    INTERMEDIATE = 'Intermediate',
    EXPERT = 'Expert'
}