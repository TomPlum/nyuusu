import { useContext } from "react"
import { ToastContext } from "modules/Toast/ToastContext.ts"

export const useToastContext = () => useContext(ToastContext)