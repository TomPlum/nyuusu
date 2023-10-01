export interface LocalStorageProps<Value> {
    key: string
    value: Value
    defaultValue: Value
}

export interface LocalStorage<Value> {
    value: Value
}