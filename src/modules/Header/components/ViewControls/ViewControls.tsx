import { GridView, Newspaper } from "@mui/icons-material"
import styles from './ViewControls.module.scss'
import { useTranslation } from "react-i18next"
import classNames from "classnames"
import { Link } from "react-router-dom"
import useCurrentRoute from "hooks/useCurrentRoute/useCurrentRoute.ts"

const ViewControls = () => {
  const route = useCurrentRoute()
  const { t } = useTranslation('translation', { keyPrefix: 'header.view-controls' })

  return (
    <div className={styles.controls}>
      <Link to='newspaper' title={t('single')}>
        <Newspaper
          className={classNames(styles.icon, { [styles.active]: route?.includes('newspaper') })}
        />
      </Link>

      <Link to='articles' title={t('cards')}>
        <GridView
          className={classNames(styles.icon, { [styles.active]: route.includes('articles') })}
        />
      </Link>
    </div>
  )
}

export default ViewControls