import useDeeplApi from "api/clients/useDeeplApi"
import { useCallback } from "react"
import { DeeplTranslateProps, DeeplTranslationRequest, DeeplTranslationResponse } from "api/hooks/useDeepL/types.ts"
import { useMutation } from "@tanstack/react-query"
import { queryKeys } from "api/queryKeys.ts"
import { AxiosResponse } from "axios"

export const useDeeplMutationKey = (input: string[]) => {
  return [queryKeys.deeplTranslate].concat(input)
}

const useDeepL = ({ input }: DeeplTranslateProps) => {
  const client = useDeeplApi()

  const translate = useCallback(async () => {
    const { data } = await client.post<unknown, AxiosResponse<DeeplTranslationResponse>, DeeplTranslationRequest>('/translate', {
      text: input,
      source_lang: 'JA',
      target_lang: 'EN'
    })

    return data
  }, [client, input])

  const mutationKey = useDeeplMutationKey(input)

  return useMutation({
    mutationKey,
    mutationFn: translate
  })
}

export default useDeepL