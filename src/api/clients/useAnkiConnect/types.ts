export interface AnkiConnectResponse<Result> {
    result: Result
    error: string | null
}

export interface AnkiConnectRequest<Params> {
    action: string
    version: number
    params?: Params
}

export type AnkiConnectAction = 'addNote' | 'deckNames' | 'createDeck' | 'createModel' | 'modelNames' | 'guiAddCards'

export interface AnkiConnectClient<Params, Result> {
    call: (action: AnkiConnectAction, params?: Params) => Promise<AnkiConnectResponse<Result>>
}