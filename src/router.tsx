import { createBrowserRouter } from "react-router-dom"
import ArticleCardsView from "views/ArticleCardsView"
import NewspaperView from "views/NewspaperView"
import NyusuDotOrg from "./NyusuDotOrg.tsx"
import NotFoundView from "views/NotFoundView"
import ErrorView from "views/ErrorView"
import HomeView from "views/HomeView"
import AnkiHelpView from "views/AnkiHelpView"

export const router = createBrowserRouter([
  {
    element: <NyusuDotOrg />,
    errorElement: <ErrorView />,
    children: [
      {
        path: '/',
        element: <HomeView />
      },
      {
        path: '/articles',
        element: <ArticleCardsView />
      },
      {
        path: '/newspaper',
        element: <NewspaperView />
      },
      {
        path: '/anki',
        element: <AnkiHelpView />
      },
      {
        path: '*',
        element: <NotFoundView />
      }
    ]
  }
])