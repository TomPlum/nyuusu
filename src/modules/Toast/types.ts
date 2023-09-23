import { AlertColor } from "@mui/material"

export interface ToastMessage {
    message: string
    timeout?: number
    type: AlertColor
}

export interface ToastContextBag {
    fireToast: (message: ToastMessage) => void
}

export interface ToastProps extends ToastMessage {
    onClose: () => void
}

export interface ActiveToast {
    id: number
    message: ToastMessage
}