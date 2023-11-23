import { AnkiResponse, NyusuAnkiCardProps, NyusuModelFields } from "hooks/useAnki/types.ts"
import useCreateAnkiCard from "api/hooks/useCreateAnkiCard"
import { useCallback } from "react"
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
import { useSnackbar } from "notistack"

const useAnki = (): AnkiResponse => {
  const { anki } = useSettingsContext()
  const { data: decks } = useGetAnkiDecks()
  const { enqueueSnackbar } = useSnackbar()
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

      enqueueSnackbar(t('create-deck.toast.success'), {
        key: 'create-deck.toast.success',
        variant: 'success',
      })
    } catch (e) {
      enqueueSnackbar(t('create-deck.toast.error'), {
        key: 'create-deck.toast.error',
        variant: 'error',
      })
    }
  }, [anki.deckName, createDeck, enqueueSnackbar, t])

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

      enqueueSnackbar(t('create-card.toast.success'), {
        key: 'create-card.toast.success',
        variant: 'success'
      })
    } catch (e) {
      enqueueSnackbar(e ? String(e) : t('create-card.toast.failure'), {
        key: 'create-card.toast.failure',
        variant: 'error'
      })
    }

  }, [decks, anki.deckName, createAnkiDeck, createCardApi, enqueueSnackbar, t])

  const createNyusuArticleCard = useCallback(async (args: NyusuAnkiCardProps) => {
    if (decks && !decks.includes(anki.deckName)) {
      await createAnkiDeck()
    }

    if (models && !models.includes(anki.modelName)) {
      try {
        await createNyusuModel()
        enqueueSnackbar(t('create-model.success'), {
          key: 'create-model.success',
          variant: 'info',
        })
      } catch (e) {
        enqueueSnackbar(t('create-model.toast-error'), {
          key: 'create-model.error',
          variant: 'error'
        })
      }
    }

    try {
      await createNyusuCard(args)

      enqueueSnackbar(t('create-card.toast.success'), {
        key: 'create-card.toast.success',
        variant: 'success',
      })
    } catch (e) {
      enqueueSnackbar(e ? String(e) : t('create-card.toast.failure'), {
        key: 'create-card.toast.succfailureess',
        variant: 'error'
      })
    }

  }, [decks, anki.deckName, anki.modelName, models, createAnkiDeck, createNyusuModel, enqueueSnackbar, t, createNyusuCard])

  return {
    createCard,
    createNyusuCard,
    createNyusuModel,
    createNyusuArticleCard
  }
}

export default useAnki