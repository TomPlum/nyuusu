import { createContext } from "react"
import { ToastContextBag } from "modules/Toast/types.ts"

export const ToastContext = createContext<ToastContextBag>({
  fireToast: () => {
    console.debug('ToastContext is not initialised. Tried to invoke fireToast().')
  }
})