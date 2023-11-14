import styles from './NyuusuApplication.module.scss'
import Header from "modules/Header"
import SettingsDrawer from "modules/Settings"
import { Outlet } from "react-router-dom"
import useCurrentRoute from "hooks/useCurrentRoute/useCurrentRoute.ts"
import { useMemo } from "react"
import GaussianNoise from "components/GaussianNoise"
import classNames from "classnames"
import ResetScroll from "components/ResetScroll"

const NyusuDotOrg = () => {
  const route = useCurrentRoute()

  const isHome = useMemo(() => {
    return route === '/'
  }, [route])

  return (
    <div className={styles.wrapper}>
      {!isHome && (
        <Header />
      )}

      <div className={classNames(styles.content, { [styles.offset]: !isHome })}>
        <ResetScroll />
        <GaussianNoise />
        <Outlet />
        <SettingsDrawer />
      </div>
    </div>
  )
}

export default NyusuDotOrg
