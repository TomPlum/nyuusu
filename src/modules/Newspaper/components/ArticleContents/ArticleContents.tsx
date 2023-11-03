import { ArticleContentsProps } from "modules/Newspaper/components/ArticleContents/types.ts"
import { useTranslation } from "react-i18next"
import styles from './ArticleContents.module.scss'
import classNames from "classnames"

export const ArticleContents = ({ contents, disclaimer, sourceUrl, className }: ArticleContentsProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'newspaper.article.contents' })

  return (
    <div className={classNames(styles.body, className)}>
      <div className={styles.dottedBottomLeft}>
        <div className={styles.dot} />
      </div>

      <div className={styles.dottedTopRight}>
        <div className={styles.dotTop} />
        <div className={styles.dotRight} />
      </div>

      <p className={styles.label}>{t('label')}</p>

      <p className={styles.text}>
        {contents ?? t('default')}
      </p>

      <a href={sourceUrl} target='_blank' rel='noreferrer' className={styles.link}>
        {t('see-more')}
      </a>

      <i className={styles.disclaimer}>
        {disclaimer}
      </i>
    </div>
  )
}