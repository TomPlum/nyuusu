import styles from './NyuusuApplication.module.scss'
import Header from "modules/Header/components/HeaderBar"
import SettingsDrawer from "modules/Settings/components/SettingsDrawer"
import { Outlet } from "react-router-dom"
import useCurrentRoute from "hooks/useCurrentRoute/useCurrentRoute.ts"
import { useMemo } from "react"
import GaussianNoise from "components/GaussianNoise"
import classNames from "classnames"


const NyuusuApplication = () => {
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
        <GaussianNoise />
        <Outlet />
        <SettingsDrawer />
      </div>
    </div>
  )
}

export default NyuusuApplication
