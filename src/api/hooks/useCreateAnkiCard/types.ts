export interface CreateAnkiCardParams {
    note: {
        deckName: "Nyusu",
        modelName: "Basic",
        fields: {
            Front: string,
            Back: string
        },
        tags: string[],
    }
}

export interface CreateAnkiCardRequest {
    action: 'addNote',
    version: 6,
    params: CreateAnkiCardParams
}