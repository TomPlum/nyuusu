import { useNavigate } from "react-router-dom"
import { DelayedNavigationResponse } from "modules/PageTransition/hooks/useDelayedNavigation/types.ts"
import { useCallback } from "react"

const useDelayedNavigation = (): DelayedNavigationResponse => {
  const navigate = useNavigate()

  const doNavigate = useCallback((route: string) => {
    setTimeout(() => navigate(route), 700)
  }, [navigate])

  return {
    navigate: doNavigate
  }
}

export default useDelayedNavigation