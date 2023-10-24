export interface LanguageStatsProps {
    input: string
}

export type KanjiGrades = Record<number, number>

export interface LanguageStats {
    difficulty: DifficultyRating
    kanji: number
    hiragana: number
    katakana: number
    roman: number
    other: number
    grades: KanjiGrades
}

export enum DifficultyRating {
    BEGINNER = 'Beginner',
    INTERMEDIATE = 'Intermediate',
    EXPERT = 'Expert'
}