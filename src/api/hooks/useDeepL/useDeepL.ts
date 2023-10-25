import useDeeplApi from "api/clients/useDeeplApi"
import { useCallback } from "react"
import { DeeplTranslateProps, DeeplTranslationRequest, DeeplTranslationResponse } from "api/hooks/useDeepL/types.ts"
import { useMutation } from "@tanstack/react-query"
import { queryKeys } from "api/queryKeys.ts"

export const useDeeplMutationKey = (input: string[]) => {
  return [queryKeys.deeplTranslate, ...input]
}

const useDeepL = ({ input }: DeeplTranslateProps) => {
  const client = useDeeplApi()

  const translate = useCallback(() => {
    return client.post<unknown, DeeplTranslationResponse, DeeplTranslationRequest>('/translate', {
      text: input,
      source_lang: 'JA',
      target_lang: 'EN'
    })
  }, [client, input])

  const mutationKey = useDeeplMutationKey(input)

  return useMutation(mutationKey, translate)
}

export default useDeepL