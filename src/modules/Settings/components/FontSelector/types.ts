export interface Font {
    name: string
    slug: string
}

export const FONTS = [
  { name: 'AppliMincho', slug: 'appli-mincho' },
  { name: 'KGothic', slug: 'k-gothic' },
  { name: 'SanafonMugi', slug: 'sanafon-mugi' }
]

/*
export class Font {
    private readonly _name: string
    private readonly _slug: string

    constructor(name: string, slug: string) {
        this._name = name
        this._slug = slug
    }

    get name(): string {
        return this._name
    }

    get slug(): string {
        return this._slug
    }
}*/
