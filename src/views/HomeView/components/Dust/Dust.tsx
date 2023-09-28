import styles from './Dust.module.scss'
import classNames from "classnames"

const Dust = () => {
  return (
    <ul className={styles.scene} data-friction-x="0.03" data-friction-y="0.05">
      <li className={classNames(styles.layer, styles.specks)} data-depth="0.1" />
      <li className={classNames(styles.layer, styles['layer-1'])} data-depth="0.15">
        <div className={classNames(styles.img, styles['img-1'])} />
      </li>

      <li className={classNames(styles.layer, styles['layer-2'])} data-depth="0.25">
        <div className={classNames(styles.img, styles['img-2'])} />
      </li>

      <li className={classNames(styles.layer, styles['layer-3'])} data-depth="0.45">
        <div  className={classNames(styles.img, styles['img-3'])} />
      </li>
    </ul>
  )
}

export default Dust