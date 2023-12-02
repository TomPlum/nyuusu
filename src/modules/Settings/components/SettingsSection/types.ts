import { ReactElement } from "react"

export interface SettingsSectionProps {
    title: string
    error?: string
    description?: string | ReactElement
    onReset?: () => void
}