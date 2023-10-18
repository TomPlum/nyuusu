export interface AnalysisArticleProps {
    className?: string;
}

export type KanjiData = KanjiDatum[]

export interface KanjiDatum {
    "name": string,
    "on": string[],
    "kun": string[],
    "source": string,
    "meanings": string[],
    "grade": number,
    "jlpt": number,
    "strokes": number,
    "examples": KanjiExample[],
    "tags": string[]
}

export interface KanjiExample {
    value: string
    kana: string[]
    english: string[]
}

export interface TableData {
    length: number;
    kanji: number
    hiragana: number
    katakana: number
    roman: number
}