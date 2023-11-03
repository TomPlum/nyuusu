import useClient from "api/clients/useClient"
import { hosts } from "api/hosts.ts"

const useLibreTranslateApi = () => {
  return useClient({
    host: hosts[import.meta.env.MODE].libreTranslateApi,
    contextRoot: ''
  })
}

export default useLibreTranslateApi