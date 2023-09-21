/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_NEWS_API_KEY: string
    readonly MODE: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}