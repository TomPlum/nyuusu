import styles from './CoffeeStain.module.scss'
import { CoffeeStainProps } from "components/CoffeeStain/types.ts"
import classNames from "classnames"

const CoffeeStain = ({ className }: CoffeeStainProps) => {
  return (
    <div className={classNames(styles.stain, className)}>
      <div className={styles.main}></div>
      <div className={styles.splash}></div>
    </div>
  )
}

export default CoffeeStain