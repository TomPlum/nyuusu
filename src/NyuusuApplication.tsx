import styles from './NyuusuApplication.module.scss'
import Footer from "components/Footer"
import Header from "modules/Header/components/HeaderBar"
import SettingsDrawer from "modules/Settings/components/SettingsDrawer"
import { Outlet } from "react-router-dom"
import { useSettingsContext } from "modules/Settings/context/useSettingsContext.ts"


const NyuusuApplication = () => {
  const { open: settingsOpen } = useSettingsContext()

  return (
    <div className={styles.wrapper}>
      <Header />

      <div className={styles.content}>
        <Outlet />

        {settingsOpen && (
          <SettingsDrawer />
        )}
      </div>

      <Footer />
    </div>
  )
}

export default NyuusuApplication
