import { useContext } from "react"
import { NewsContext } from "context/NewsContext.ts"

const useNewsContext = () => useContext(NewsContext)

export default useNewsContext