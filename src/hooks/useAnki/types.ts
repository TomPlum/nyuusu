import { CreateAnkiCardParams } from "api/hooks/useCreateAnkiCard/types.ts"

export interface AnkiResponse {
    loading: boolean
    createCard: (params: CreateAnkiCardParams) => Promise<void>
}