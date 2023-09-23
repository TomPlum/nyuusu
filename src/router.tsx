import { createBrowserRouter } from "react-router-dom"
import CardsHeadlineView from "views/CardsHeadlineView"
import SingleHeadlineView from "views/SingleHeadlineView"
import NyuusuApplication from "./NyuusuApplication.tsx"

export const router = createBrowserRouter([
  {
    element: <NyuusuApplication />,
    children: [
      {
        path: '/articles',
        element: <CardsHeadlineView />
      },
      {
        path: '/newspaper',
        element: <SingleHeadlineView />
      }
    ]
  }
])