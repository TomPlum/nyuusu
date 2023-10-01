import ViewTile from "views/HomeView/components/ViewTile"
import { useTranslation } from "react-i18next"
import { Dashboard, Newspaper } from "@mui/icons-material"
import { useNavigate } from "react-router-dom"
import styles from './HomeView.module.scss'
import Grid from "@mui/material/Unstable_Grid2"
import Typewriter from 'typewriter-effect'
import CurrentDateTime from "modules/Header/components/CurrentDateTime"
import { Box } from "@mui/material"

const HomeView = () => {
  const navigate = useNavigate()
  const { t } = useTranslation('translation', { keyPrefix: 'views.home' })
  const titles: string[] = t('title', { returnObjects: true })

  return (
    <Box sx={{ flexGrow: 1 }} className={styles.view}>
      <Grid container className={styles.wrapper}  columnSpacing={0} rowSpacing={0}>
        <Grid xs={12} className={styles.titleContainer}>
          <Typewriter
            options={{
              loop: true,
              autoStart: true,
              strings: titles,
              delay: 'natural',
              cursorClassName: styles.cursor,
              wrapperClassName: styles.typewriter,
            }}
          />
        </Grid>
          
        <Grid xs={12}>
          <div className={styles.dateContainer}>
            <CurrentDateTime className={styles.date} />
          </div>
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
    </Box>
  )
}

export default HomeView