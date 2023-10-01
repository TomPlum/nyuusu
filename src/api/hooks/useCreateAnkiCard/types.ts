export interface CreateAnkiCardParams {
    note: {
        deckName: string,
        modelName: string,
        fields: {
            Front: Record<string, string>,
            Back: Record<string, string>
        },
        tags: string[],
    }
}