import { AnkiResponse, NyusuAnkiCardProps, NyusuModelFields } from "hooks/useAnki/types.ts"
import useCreateAnkiCard from "api/hooks/useCreateAnkiCard"
import { useCallback } from "react"
import { useToastContext } from "modules/Toast/useToastContext.ts"
import { useTranslation } from "react-i18next"
import { CreateAnkiCardParams } from "api/hooks/useCreateAnkiCard/types.ts"
import useGetAnkiDecks from "api/hooks/useGetAnkiDecks"
import useCreateAnkiDeck from "api/hooks/useCreateAnkiDeck"
import { useSettingsContext } from "modules/Settings/context/useSettingsContext.ts"
import useCreateAnkiModel from "api/hooks/useCreateAnkiModel"
import useGetAnkiModels from "api/hooks/useGetAnkiModels"
import ankiTemplateFront from 'assets/anki-front.html?raw'
import ankiTemplateBack from 'assets/anki-back.html?raw'
import ankiCss from 'assets/anki.css?raw'

const useAnki = (): AnkiResponse => {
  const { anki } = useSettingsContext()
  const { fireToast } = useToastContext()
  const { data: decks } = useGetAnkiDecks()
  const { data: models } = useGetAnkiModels()
  const { mutateAsync: createDeck } = useCreateAnkiDeck()
  const { mutateAsync: createModel } = useCreateAnkiModel()
  const { mutateAsync: createCardApi } = useCreateAnkiCard({
    useGraphicalInterface: anki.useGraphicalInterface
  })
  const { t } = useTranslation('translation', { keyPrefix: 'anki' })

  const createAnkiDeck = useCallback(async () => {
    try {
      await createDeck({ deck: anki.deckName })

      fireToast({
        type: 'info',
        message: t('create-deck.toast.success')
      })
    } catch (e) {
      fireToast({
        type: 'error',
        message: t('create-deck.toast.error')
      })
    }
  }, [anki.deckName, createDeck, fireToast, t])

  const createNyusuModel = useCallback(async () => {
    return createModel({
      modelName: anki.modelName,
      css: ankiCss,
      inOrderFields: NyusuModelFields,
      cardTemplates: [
        {
          Name: "Nyuusu Card Template",
          Front: ankiTemplateFront,
          Back: ankiTemplateBack
        }
      ]
    })
  }, [anki.modelName, createModel])

  const createNyusuCard = useCallback(async (args: NyusuAnkiCardProps) => {
    return createCardApi({
      note: {
        deckName: anki.deckName,
        modelName: anki.modelName,
        tags: anki.tags,
        fields: {
          Headline: args.headline.japanese,
          Excerpt: args.excerpt.japanese ?? 'This article had no excerpt available.',
          SourceUrl: args.sourceUrl,
          PublishDate: args.publishDate,
          Author: args.author ?? 'Unknown',
          HeadlineTranslated: args.headline.english,
          ExcerptTranslated: args.excerpt.english ?? 'This article had no excerpt available.'
        }
      }
    })
  }, [anki.deckName, anki.modelName, anki.tags, createCardApi])

  const createCard = useCallback(async (args: CreateAnkiCardParams) => {
    if (decks && !decks.includes(anki.deckName)) {
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

  }, [decks, anki.deckName, createAnkiDeck, createCardApi, fireToast, t])

  const createNyusuArticleCard = useCallback(async (args: NyusuAnkiCardProps) => {
    if (decks && !decks.includes(anki.deckName)) {
      await createAnkiDeck()
    }

    if (models && !models.includes(anki.modelName)) {
      try {
        await createNyusuModel()
        fireToast({
          type: 'info',
          message: t('create-model.success')
        })
      } catch (e) {
        fireToast({
          type: 'error',
          message: t('create-model.toast-error')
        })
      }
    }

    try {
      await createNyusuCard(args)

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

  }, [decks, anki.deckName, anki.modelName, models, createAnkiDeck, createNyusuModel, fireToast, t, createNyusuCard])

  return {
    createCard,
    createNyusuCard,
    createNyusuModel,
    createNyusuArticleCard
  }
}

export default useAnki