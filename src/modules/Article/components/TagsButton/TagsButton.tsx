import { TagsButtonProps } from "modules/Article/components/TagsButton/types.ts"
import { LocalOffer } from "@mui/icons-material"
import styles from './TagsButton.module.scss'

const TagsButton = ({ tags }: TagsButtonProps) => {
  return (
    <div title={tags.join(', ')} className={styles.button} data-testid='article-tags-button'>
      <LocalOffer />
    </div>
  )
}

export default TagsButton