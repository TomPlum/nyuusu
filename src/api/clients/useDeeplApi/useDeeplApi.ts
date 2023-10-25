import useClient from "api/clients/useClient"
import { hosts } from "api/hosts.ts"

const useDeeplApi = () => {
  return useClient({
    host: hosts[import.meta.env.MODE].deepl,
    contextRoot: '/v2'
  })
}

export default useDeeplApi