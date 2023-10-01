import styles from './NyuusuApplication.module.scss'
import Footer from "components/Footer"
import Header from "modules/Header/components/HeaderBar"
import SettingsDrawer from "modules/Settings/components/SettingsDrawer"
import { Outlet } from "react-router-dom"
import useCurrentRoute from "hooks/useCurrentRoute/useCurrentRoute.ts"


const NyuusuApplication = () => {
  const route = useCurrentRoute()
  return (
    <div className={styles.wrapper}>
      {route !== '/' && <Header />}

      <div className={styles.content}>
        <Outlet />
        <SettingsDrawer />
      </div>

      <Footer />
    </div>
  )
}

export default NyuusuApplication
