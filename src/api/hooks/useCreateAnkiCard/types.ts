export interface CreateAnkiCardParams {
    note: {
        deckName: string,
        modelName: string,
        fields: Record<string, string>,
        tags: string[],
    }
}

export interface CreateAnkiCardProps {
    useGraphicalInterface?: boolean
}