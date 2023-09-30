import { AnkiResponse } from "hooks/useAnki/types.ts"
import useCreateAnkiCard from "api/hooks/useCreateAnkiCard"
import { useCallback } from "react"
import { useToastContext } from "modules/Toast/useToastContext.ts"
import { useTranslation } from "react-i18next"
import { CreateAnkiCardParams } from "api/hooks/useCreateAnkiCard/types.ts"

const useAnki = (): AnkiResponse => {
  const { fireToast } = useToastContext()
  const { mutateAsync: createCardApi } = useCreateAnkiCard()
  const { t } = useTranslation('translation', { keyPrefix: 'anki' })

  const createCard = useCallback(async (args: CreateAnkiCardParams) => {
    try {
      await createCardApi(args)

      fireToast({
        type: 'success',
        message: t('create-card.toast.success')
      })
    } catch (e) {
      fireToast({
        type: 'error',
        message: t('create-card.toast.failure')
      })
    }
  }, [fireToast, createCardApi, t])

  return {
    createCard
  }
}

export default useAnki