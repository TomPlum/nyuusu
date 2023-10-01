import { CreateAnkiCardParams } from "api/hooks/useCreateAnkiCard/types.ts"

export interface AnkiResponse {
    createCard: (params: CreateAnkiCardParams) => Promise<void>
}