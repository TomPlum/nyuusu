import { HeadlineProps } from "modules/Newspaper/components/Headline/types.ts"
import styles from './Headline.module.scss'

const Headline = ({ headline }: HeadlineProps) => {
  return (
    <div className={styles.headline}>
      {headline}
    </div>
  )
}

export default Headline