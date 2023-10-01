import { PublisherModalProps } from "modules/Article/components/PublisherModal/types.ts"
import { Dialog, DialogContent } from "@mui/material"
import SlideTransition from "components/SlideTransition"
import styles from './PublisherModal.module.scss'
import PublisherButton from "modules/Article/components/PublisherButton"
import { RssFeed } from "@mui/icons-material"
import { useTranslation } from "react-i18next"

const PublisherModal = ({ article, onClose }: PublisherModalProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'article.publisher' })

  return (
    <Dialog
      open={true}
      onClose={onClose}
      className={styles.dialog}
      TransitionComponent={SlideTransition}
      aria-labelledby="article-publisher-title"
      aria-describedby="article-publisher-description"
    >
      <DialogContent className={styles.content}>
        <div className={styles.header}>
          <PublisherButton name={article.publisher} />
          <p>{article.title}</p>
        </div>

        {article.rssFeedLink && (
          <div className={styles.section}>
            <p className={styles.label}>
              <RssFeed className={styles.rss} />
              <span>{t('rss.label')}</span>
            </p>

            <p className={styles.desc}>
              <span>{t('rss.desc')}</span>
              <span>{' '}</span>
              <a href={article.rssFeedLink} target='_blank' rel='noreferrer'>
                {article.rssFeedLink}
              </a>
            </p>
          </div>
        )}

        <p>{article.rights}</p>
      </DialogContent>
    </Dialog>
  )
}

export default PublisherModal