import { ViewTileProps } from "views/HomeView/components/ViewTile/types.ts"
import styles from './ViewTile.module.scss'

export const ViewTile = ({ title, desc, Icon, onClick }: ViewTileProps) => {
  return (
    <div onClick={onClick} className={styles.tile}>
      <Icon className={styles.icon} />

      <p className={styles.title}>
        {title}
      </p>

      <p className={styles.desc}>
        {desc}
      </p>
    </div>
  )
}

export default ViewTile