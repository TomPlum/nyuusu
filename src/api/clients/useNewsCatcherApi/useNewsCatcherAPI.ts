import useClient from "api/clients/useClient"
import { hosts } from "api/hosts.ts"

const useNewsCatcherAPI = () => {
  return useClient({
    host:  hosts[import.meta.env.MODE].newsCatcherApi,
    contextRoot: 'default'
  })
}

export default useNewsCatcherAPI