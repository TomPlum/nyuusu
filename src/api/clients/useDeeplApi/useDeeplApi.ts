import useClient from "api/clients/useClient"
import { hosts } from "api/hosts.ts"

const useDeeplApi = () => {
  return useClient({
    host: hosts[import.meta.env.MODE].deepl,
    contextRoot: '/v2',
    headers: {
      Authorization: `DeepL-Auth-Key ${import.meta.env.VITE_DEEPL_API_KEY}`
    }
  })
}

export default useDeeplApi