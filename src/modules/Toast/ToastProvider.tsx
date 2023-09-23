import { PropsWithChildren, useCallback, useMemo, useState } from "react"
import { ActiveToast, ToastContextBag, ToastMessage } from "modules/Toast/types.ts"
import { ToastContext } from "modules/Toast/ToastContext.ts"
import Toast from "modules/Toast/Toast.tsx"
import styles from './ToastProvider.module.scss'

const ToastProvider = ({ children }: PropsWithChildren) => {
  const [toast, setToast] = useState<ActiveToast[]>([])

  const fireToast = useCallback((message: ToastMessage) => {
    const quantity = toast.length
    setToast(existing => {
      return existing.concat({ id: quantity + 1, message })
    })
  }, [toast.length])

  const handleClose = (id: number) => {
    setToast(existing => {
      return existing.splice(id, 1)
    })
  }

  const values: ToastContextBag = useMemo(() => ({
    toasts: toast,
    fireToast
  }), [fireToast, toast])

  return (
    <ToastContext.Provider value={values}>
      {children}

      <div className={styles.container}>
        {toast.map(({ id, message }) => {
          return <Toast key={id} {...message} onClose={() => handleClose(id)} />
        })}
      </div>
    </ToastContext.Provider>
  )
}

export default ToastProvider