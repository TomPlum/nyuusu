import { View } from "components/ViewControls/types.ts"

export interface NewsContextBag {
    view: View
    setView: (view: View) => void
}