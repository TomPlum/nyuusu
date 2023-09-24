import { ArticleContentsProps } from "modules/Newspaper/components/ArticleContents/types.ts"
import { useTranslation } from "react-i18next"
import styles from './ArticleContents.module.scss'

export const ArticleContents = ({ sourceUrl }: ArticleContentsProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'newspaper.article.contents' })

  return (
    <div className={styles.body}>
      <p className={styles.label}>{t('label')}</p>

      <p className={styles.text}>
        {t('lorem')}
      </p>

      <p>{t('lorem2')}</p>
        
      <p>
        <a href={sourceUrl} target='_blank' rel='noreferrer' className={styles.link}>
          {t('see-more')}
        </a>
      </p>
    </div>
  )
}