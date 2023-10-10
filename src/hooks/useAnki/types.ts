import { CreateAnkiCardParams } from "api/hooks/useCreateAnkiCard/types.ts"
import { AnkiConnectResponse } from "api/clients/useAnkiConnect/types.ts"

export interface NyusuAnkiCardProps {
    headline: string
    excerpt?: string
    sourceUrl: string
    publishDate: string
    author?: string
}

export interface AnkiResponse {
    createCard: (params: CreateAnkiCardParams) => Promise<void>
    createNyusuModel: () => Promise<AnkiConnectResponse<string>>;
    createNyusuArticleCard: (props: NyusuAnkiCardProps) => Promise<void>
    createNyusuCard: (props: NyusuAnkiCardProps) => Promise<AnkiConnectResponse<string>>;
}

export const NyusuModelFields = ["Headline", "Excerpt", "SourceUrl", "PublishDate", "Author"]