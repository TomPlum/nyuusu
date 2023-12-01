import { LinearProgress } from "@mui/material"
import styles from './Loading.module.scss'
import { useTranslation } from "react-i18next"
import ArticleSkeleton from "modules/Article/components/ArticleSkeleton"
import NewsGrid from "components/NewsGrid"

const Loading = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.wrapper} data-testid='cards-loading'>
      <div className={styles.floating}>
        <p className={styles.text}>{t('loading')}</p>
        <LinearProgress color='info' variant='indeterminate' className={styles.loading} />
      </div>

      <div className={styles.gridWrapper}>
        <NewsGrid className={styles.grid}>
          {[...Array(9)].map((_num, i) => {
            return (
              <ArticleSkeleton key={i} />
            )
          })}
        </NewsGrid>
      </div>
    </div>
  )
}

export default Loading