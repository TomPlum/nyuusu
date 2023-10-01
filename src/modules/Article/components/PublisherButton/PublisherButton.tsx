import { PublisherButtonProps } from "modules/Article/components/PublisherButton/types.ts"
import styles from './PublisherButton.module.scss'
import { AccountCircle } from "@mui/icons-material"
import classNames from "classnames"
import { IconButton } from "@mui/material"

const PublisherButton = ({ name, className, onClick }: PublisherButtonProps) => {
  return (
    <IconButton data-testid='article-publisher-button' classes={{ root: classNames(styles.button, className) }} onClick={onClick}>
      <AccountCircle className={styles.icon} />
      <span className={styles.name}>{name}</span>
    </IconButton>
  )
}

export default PublisherButton