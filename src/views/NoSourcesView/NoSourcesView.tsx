import styles from './NoSourcesView.module.scss'
import { Button, Container } from "@mui/material"
import { useTranslation } from "react-i18next"
import { Settings } from "@mui/icons-material"
import { useSettingsContext } from "modules/Settings/context/useSettingsContext.ts"

const NoSourcesView = () => {
  const { setOpen } = useSettingsContext()
  const { t } = useTranslation('translation', { keyPrefix: 'views.no-sources' })

  return (
    <Container className={styles.wrapper}>
      <h1 className={styles.heading}>
        {t('heading')}
      </h1>

      <p className={styles.body}>
        {t('body')}
      </p>

      <Button
        color='primary'
        variant='contained'
        className={styles.settings}
        onClick={() => setOpen(true)}
      >
        <Settings />
        <span>{t('settings')}</span>
      </Button>

      <p className={styles.help}>
        {t('help-text')}
      </p>

    </Container>
  )
}

export default NoSourcesView