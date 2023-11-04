import useLibreTranslateApi from "api/clients/useLibreTranslateApi"
import { useCallback } from "react"
import { queryKeys } from "api/queryKeys.ts"
import { useMutation } from "@tanstack/react-query"
import { TranslateRequest } from "api/hooks/useLibreTranslate/types.ts"

export const useTranslateMutationKey = (text: string) => {
  return [queryKeys.translate, text]
}

const useLibreTranslate = ({ text }: TranslateRequest) => {
  const client = useLibreTranslateApi()

  const translate = useCallback(async () => {
    const request = new FormData()
    request.append('q', text)
    request.append('source', 'en')
    request.append('target', 'ja')

    return await client.postForm('/translate', request)
  }, [client, text])

  const mutationKey = useTranslateMutationKey(text)

  return useMutation({
    mutationKey,
    mutationFn: translate
  })
}

export default useLibreTranslate