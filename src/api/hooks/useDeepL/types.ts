export interface DeeplTranslateProps {
    input: string[]
}

export interface DeeplTranslationRequest {
    text: string[]
    source_lang: string
    target_lang: string
}

export interface DeeplTranslationResponse {
    translations: DeeplTranslation[]
}

export interface DeeplTranslation {
    detected_source_language: string
    text: string
}