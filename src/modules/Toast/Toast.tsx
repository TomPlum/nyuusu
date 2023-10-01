import { ToastProps } from "./types.ts"
import { Alert, Snackbar } from "@mui/material"
import React, { ForwardedRef } from "react"

const Toast = React.forwardRef(({ message, type, timeout, onClose }: ToastProps, ref: ForwardedRef<HTMLDivElement>) => {
  return (
    <Snackbar open autoHideDuration={timeout ?? 5000} onClose={onClose} anchorOrigin={{ vertical: "bottom", horizontal: 'right' }}>
      <Alert elevation={6} variant='filled' severity={type} ref={ref}>
        {message}
      </Alert>
    </Snackbar>
  )
})

Toast.displayName = 'Toast'

export default Toast