import styles from "./Footer.module.scss"
import { useTranslation } from "react-i18next"
import { Box, Container } from "@mui/material"
import { GitHub } from "@mui/icons-material"

const Footer = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'footer' })

  return (
    <Box
      component="footer"
      sx={ { py: 3, px: 2, mt: 'auto' }}
    >
      <Container maxWidth="sm">
        <div className={styles.footer}>
          <p>
            {t('api-citation.prefix')}
            {' '}
            <a href='https://newsapi.org/s/japan-news-api' target="_blank" rel="noreferrer">
              {t('api-citation.name')}
            </a>
            {'.'}
          </p>

          <a href='https://github.com/TomPlum/nyuusu' target="_blank" rel="noreferrer">
            <GitHub />
          </a>
        </div>
      </Container>
    </Box>
  )
}

export default Footer