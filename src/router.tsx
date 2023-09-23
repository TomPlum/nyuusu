import { createBrowserRouter } from "react-router-dom"
import CardsHeadlineView from "views/ArticleCardsView"
import NewspaperView from "views/NewspaperView"
import NyuusuApplication from "./NyuusuApplication.tsx"
import NotFoundView from "views/NotFoundView"
import ErrorView from "views/ErrorView"

export const router = createBrowserRouter([
  {
    element: <NyuusuApplication />,
    errorElement: <ErrorView />,
    children: [
      {
        path: '/articles',
        element: <CardsHeadlineView />
      },
      {
        path: '/newspaper',
        element: <NewspaperView />
      },
      {
        path: '*',
        element: <NotFoundView />
      }
    ]
  }
])