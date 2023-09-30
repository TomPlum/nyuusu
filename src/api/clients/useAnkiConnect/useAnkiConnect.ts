import useClient from "api/clients/useClient"
import { hosts } from "api/hosts.ts"
import {
  AnkiConnectAction,
  AnkiConnectClient,
  AnkiConnectRequest,
  AnkiConnectResponse
} from "api/clients/useAnkiConnect/types.ts"
import { useCallback } from "react"
import { AxiosResponse } from "axios"

const useAnkiConnect = <Params>(): AnkiConnectClient<Params> => {
  const client = useClient({
    host: hosts[import.meta.env.MODE].anki,
    contextRoot: ''
  })

  const call = useCallback(async (action: AnkiConnectAction, params: unknown) => {
    const { data } = await client.post<object, AxiosResponse<AnkiConnectResponse>, AnkiConnectRequest<unknown>>('', {
      action,
      version: 6,
      params: params
    })

    if (data.error) {
      throw new Error(data.error)
    }

    return data
  }, [client])

  return {
    call
  }
}

export default useAnkiConnect