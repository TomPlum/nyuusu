import useClient from "api/clients/useClient"
import { hosts } from "api/hosts.ts"

const useAnkiConnect = () => {
  return useClient({
    host: hosts[import.meta.env.MODE].anki,
    contextRoot: ''
  })
}

export default useAnkiConnect