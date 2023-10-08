import useClient from "api/clients/useClient"
import { hosts } from "api/hosts.ts"

const useLibreTranslate = () => {
  return useClient({
    host: hosts[import.meta.env.MODE].libreTranslateApi,
    contextRoot: ''
  })
}

export default useLibreTranslate