import { BannerProps } from "modules/Newspaper/components/Banner/types.ts"
import styles from "./Banner.module.scss"
import PublicationDate from "modules/Article/components/PublicationDate"

const Banner = ({ publisher, publishDate }: BannerProps) => {
  return (
    <div className={styles.banner}>
      <div className={styles.border}>
        <h1 className={styles.publisher}>{publisher}</h1>
      </div>

      <PublicationDate
        className={styles.date}
        publishDate={publishDate}
      />
    </div>
  )
}

export default Banner