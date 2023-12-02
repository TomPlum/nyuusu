import styles from './NyuusuApplication.module.scss'
import Header from "modules/Header"
import SettingsDrawer from "modules/Settings"
import { Outlet } from "react-router-dom"
import useCurrentRoute from "hooks/useCurrentRoute/useCurrentRoute.ts"
import GaussianNoise from "components/GaussianNoise"
import classNames from "classnames"
import ResetScroll from "components/ResetScroll"
import TornPaperFooter from "components/TornPaperFooter"
import { useSettingsContext } from "modules/Settings/context/useSettingsContext.ts"
import NoSourcesView from "views/NoSourcesView"

const NyusuDotOrg = () => {
  const route = useCurrentRoute()
  const { sources } = useSettingsContext()

  const isHome = route === '/'
  const isArticles = route === '/articles'
  const isNewspaper = route === '/newspaper'

  const isNoSources = (isArticles || isNewspaper) && sources.length === 0

  return (
    <div className={styles.wrapper}>
      {!isHome && (
        <Header />
      )}

      <div className={classNames(styles.content, { [styles.offset]: !isHome })}>
        <ResetScroll />
        <GaussianNoise />
        {isNoSources ? <NoSourcesView /> : <Outlet />}
        <SettingsDrawer />
        {!isHome && <TornPaperFooter />}
      </div>
    </div>
  )
}

export default NyusuDotOrg
