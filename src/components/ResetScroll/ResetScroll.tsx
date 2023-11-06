import { useLocation } from "react-router-dom"
import { useEffect } from "react"

const ResetScroll = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default ResetScroll