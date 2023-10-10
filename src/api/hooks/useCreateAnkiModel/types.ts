export interface CreateAnkiModelParams {
    modelName: string
    inOrderFields: string[]
    css?: string
    isCloze?: boolean
    cardTemplates: Record<string, string>[]
}