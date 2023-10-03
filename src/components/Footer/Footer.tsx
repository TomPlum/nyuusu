import styles from "./Footer.module.scss"
import { Container } from "@mui/material"
import { GitHub, RssFeedTwoTone } from "@mui/icons-material"
import SettingsButton from "modules/Header/components/SettingsButton"
import { FooterProps } from "components/Footer/types.ts"
import classNames from "classnames"

const Footer = ({ className }: FooterProps) => {
  // TODO: Add copyright
  return (
    <Container maxWidth="sm" className={classNames(styles.footer, className)}>
      <a href='https://github.com/TomPlum/nyuusu' target="_blank" rel="noreferrer">
        <GitHub className={styles.github} />
      </a>

      <a href='https://mainichi.jp/rss/' target="_blank" rel="noreferrer">
        <RssFeedTwoTone className={styles.rss} />
      </a>

      <SettingsButton />
    </Container>
  )
}

export default Footer