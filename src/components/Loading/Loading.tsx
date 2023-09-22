import { LinearProgress } from "@mui/material"
import styles from './Loading.module.scss'
import { useTranslation } from "react-i18next"

const Loading = () => {
  const { t } = useTranslation()

  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>{t('loading')}</p>
      <LinearProgress color='info' variant='indeterminate' className={styles.loading} />
    </div>
  )
}

export default Loading