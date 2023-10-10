import { AlertColor } from "@mui/material"

export interface AnkiAlert {
    type: AlertColor
    message: string
    canRetry?: boolean
    reasons?: AnkiProblemReason[]
    shouldPreventManualTesting?: boolean
}

export enum AnkiProblemReason {
    ANKI_NOT_RUNNING,
    ANKI_CONNECT_NOT_INSTALLED,
    ANKI_CONNECT_INCORRECT_WHITELIST
}