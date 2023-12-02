import { DeeplTranslationResponse } from "api/hooks/useDeepL/types.ts"

export const useDeepLResponses: DeeplTranslationResponse = {
  translations: [
    {
      text: 'This is a stubbed English headline translation response.',
      detected_source_language: 'JA'
    },
    {
      text: 'This is a stubbed English article excerpt translation response.',
      detected_source_language: 'JA'
    }
  ]
}