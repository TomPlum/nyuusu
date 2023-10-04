import { Button, Container } from "@mui/material"
import { useTranslation } from "react-i18next"
import styles from './AnkiHelpView.module.scss'
import { ReactComponent as AnkiStarLogo } from "assets/anki.svg"
import { Settings } from "@mui/icons-material"
import { useSettingsContext } from "modules/Settings/context/useSettingsContext.ts"

const AnkiHelpView = () => {
  const { setOpen } = useSettingsContext()
  const { t } = useTranslation('translation', { keyPrefix: 'views.anki-help' })

  return (
    <Container maxWidth='md' className={styles.wrapper}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>
          <AnkiStarLogo className={styles.ankiLogo} />
          {t('title')}
        </h2>
      </div>

      <div className={styles.instructions}>
        <h4>{t('prerequisites')}</h4>

        <ol className={styles.list}>
          <li>
            <p>{t('1')}</p>
            <a href='https://apps.ankiweb.net/'>
              {t('anki-website-link')}
            </a>
          </li>

          <li>
            <p>{t('2')}</p>
            <a href='https://ankiweb.net/shared/info/2055492159'>
              {t('anki-connect-link')}
            </a>
          </li>
            
          <li>
            <p>{t('3')}</p>
            <p>{t('whitelist-instructions')}</p>
          </li>
        </ol>
      </div>

      <div>
        <h4>{t('configuration')}</h4>
        <p>{t('about-settings')}</p>
        <Button
          variant='outlined'
          startIcon={<Settings />}
          onClick={() => setOpen(true)}
          className={styles.settingsButton}
        >
          {t('settings-button')}
        </Button>
      </div>
    </Container>
  )
}

export default AnkiHelpView