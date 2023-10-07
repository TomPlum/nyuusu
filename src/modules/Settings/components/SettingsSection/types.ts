import { ReactElement } from "react"

export interface SettingsSectionProps {
    title: string
    description?: string | ReactElement
    onReset?: () => void
}