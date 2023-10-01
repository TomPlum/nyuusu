import { useLocation } from "react-router-dom"

const useCurrentRoute = () => {
  const location = useLocation()
  return location.pathname
}

export default useCurrentRoute