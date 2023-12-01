import useClient from "api/clients/useClient"
import { hosts } from "api/hosts.ts"

export const useVercel = () => {
  return useClient({
    host: hosts[import.meta.env.MODE].vercel,
    contextRoot: '/'
  })
}

export default useVercel