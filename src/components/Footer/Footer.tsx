import styles from "./Footer.module.scss"
import { useTranslation } from "react-i18next"
import { Box, Container } from "@mui/material"

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
        </div>
      </Container>
    </Box>
  )
}

export default Footer