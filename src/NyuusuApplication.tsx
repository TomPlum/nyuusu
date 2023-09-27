import styles from './NyuusuApplication.module.scss'
import Footer from "components/Footer"
import Header from "modules/Header/components/HeaderBar"
import SettingsDrawer from "modules/Settings/components/SettingsDrawer"
import { Outlet } from "react-router-dom"


const NyuusuApplication = () => {
  return (
    <div className={styles.wrapper}>
      <Header />

      <div className={styles.content}>
        <Outlet />
        <SettingsDrawer />
      </div>

      <Footer />
    </div>
  )
}

export default NyuusuApplication
