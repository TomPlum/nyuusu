import styles from "./Footer.module.scss"
import { Container } from "@mui/material"
import { GitHub, RssFeedTwoTone } from "@mui/icons-material"

const Footer = () => {
  // TODO: Add copyright
  return (
    <Container maxWidth="sm" className={styles.footer}>
      <a href='https://github.com/TomPlum/nyuusu' target="_blank" rel="noreferrer">
        <GitHub className={styles.github} />
      </a>

      <a href='https://mainichi.jp/rss/' target="_blank" rel="noreferrer">
        <RssFeedTwoTone className={styles.rss} />
      </a>
    </Container>
  )
}

export default Footer