import { AnkiResponse } from "hooks/useAnki/types.ts"
import useCreateAnkiCard from "api/hooks/useCreateAnkiCard"
import { useCallback } from "react"
import { useToastContext } from "modules/Toast/useToastContext.ts"
import { useTranslation } from "react-i18next"
import { CreateAnkiCardParams } from "api/hooks/useCreateAnkiCard/types.ts"
import useGetAnkiDecks from "api/hooks/useGetAnkiDecks"
import useCreateAnkiDeck from "api/hooks/useCreateAnkiDeck"

const useAnki = (): AnkiResponse => {
  const { fireToast } = useToastContext()
  const { data: decks } = useGetAnkiDecks()
  const { mutateAsync: createDeck } = useCreateAnkiDeck()
  const { mutateAsync: createCardApi } = useCreateAnkiCard()
  const { t } = useTranslation('translation', { keyPrefix: 'anki' })

  const createAnkiDeck = useCallback(async () => {
    try {
      await createDeck({ deck: 'Japanese::Nyusu' })

      fireToast({
        type: 'success',
        message: t('create-deck.toast.success')
      })
    } catch (e) {
      fireToast({
        type: 'error',
        message: t('create-deck.toast.error')
      })
    }
  }, [createDeck, fireToast, t])

  const createCard = useCallback(async (args: CreateAnkiCardParams) => {
    if (decks && !decks.includes('Japanese::Nyusu')) {
      await createAnkiDeck()
    }

    try {
      await createCardApi(args)

      fireToast({
        type: 'success',
        message: t('create-card.toast.success')
      })
    } catch (e) {
      fireToast({
        type: 'error',
        message: e ? String(e) : t('create-card.toast.failure')
      })
    }

  }, [decks, createAnkiDeck, createCardApi, fireToast, t])

  return {
    createCard
  }
}

export default useAnki