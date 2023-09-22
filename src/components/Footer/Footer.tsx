import styles from "./Footer.module.scss"
import { useTranslation } from "react-i18next"
import { Box, Container } from "@mui/material"
import { GitHub, RssFeedTwoTone } from "@mui/icons-material"

const Footer = () => {
  const { t } = useTranslation('translation', { keyPrefix: 'footer' })
  // TODO: Add copyright
  return (
    <Box
      component="footer"
      sx={ { py: 3, px: 2, mt: 'auto' }}
    >
      <Container maxWidth="sm">
        <div className={styles.footer}>
          <a href='https://github.com/TomPlum/nyuusu' target="_blank" rel="noreferrer">
            <GitHub />
          </a>

          <a href='https://mainichi.jp/rss/' target="_blank" rel="noreferrer">
            <RssFeedTwoTone />
          </a>
        </div>
      </Container>
    </Box>
  )
}

export default Footer