import ViewTile from "views/HomeView/components/ViewTile"
import { useTranslation } from "react-i18next"
import { Dashboard, Newspaper } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
import styles from './HomeView.module.scss'
import Grid from "@mui/material/Unstable_Grid2"
import Dust from "views/HomeView/components/Dust"
import Typewriter from 'typewriter-effect'

const HomeView = () => {
  const navigate = useNavigate()
  const { t } = useTranslation('translation', { keyPrefix: 'views.home' })

  return (
    <div className={styles.view}>
      <Dust />

      <Grid container className={styles.wrapper} sx={{ flexDirection: 'column', flexGrow: 1 }} spacing={5}>
        <Grid xs={12} className={styles.titleContainer}>
          <Typewriter
            options={{
              loop: true,
              autoStart: true,
              delay: 'natural',
              strings: t('title', { returnObjects: true }) ,
              wrapperClassName: styles.typewriter,
              cursorClassName: styles.cursor
            }}
          />
        </Grid>
          
        <Grid xs={12} sm={6} className={styles.left}>
          <ViewTile
            Icon={Newspaper}
            desc={t('newspaper.desc')}
            title={t('newspaper.title')}
            onClick={() => navigate('/newspaper')}
          />
        </Grid>

        <Grid xs={12} sm={6} className={styles.right}>
          <ViewTile
            Icon={Dashboard}
            desc={t('articles.desc')}
            title={t('articles.title')}
            onClick={() => navigate('/articles')}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default HomeView