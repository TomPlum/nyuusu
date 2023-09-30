export interface AnkiConnectResponse {
    result: string
    error: string | null
}

export interface AnkiConnectRequest<Params> {
    action: string
    version: number
    params: Params
}

export type AnkiConnectAction = 'addNote'

export interface AnkiConnectClient<Params> {
    call: (action: AnkiConnectAction, params: Params) => Promise<AnkiConnectResponse>
}