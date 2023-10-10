import styles from './NyuusuApplication.module.scss'
import Footer from "components/Footer"
import Header from "modules/Header/components/HeaderBar"
import SettingsDrawer from "modules/Settings/components/SettingsDrawer"
import { Outlet } from "react-router-dom"
import useCurrentRoute from "hooks/useCurrentRoute/useCurrentRoute.ts"
import { useMemo } from "react"
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

      <div className={styles.content}>
        <Outlet />
        <SettingsDrawer />
      </div>

      {isHome && (
        <Footer
          className={classNames({ [styles.homeFooter]: isHome })}
        />
      )}
    </div>
  )
}

export default NyuusuApplication
