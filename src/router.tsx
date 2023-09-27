import { createBrowserRouter } from "react-router-dom"
import ArticleCardsView from "views/ArticleCardsView"
import NewspaperView from "views/NewspaperView"
import NyuusuApplication from "./NyuusuApplication.tsx"
import NotFoundView from "views/NotFoundView"
import ErrorView from "views/ErrorView"
import HomeView from "views/HomeView"

export const router = createBrowserRouter([
  {
    element: <NyuusuApplication />,
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
        path: '*',
        element: <NotFoundView />
      }
    ]
  }
])