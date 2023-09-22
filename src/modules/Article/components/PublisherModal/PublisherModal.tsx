import { PublisherModalProps } from "modules/Article/components/PublisherModal/types.ts"
import { Dialog, DialogContent } from "@mui/material"
import SlideTransition from "components/SlideTransition"
import styles from './PublisherModal.module.scss'
import PublisherButton from "modules/Article/components/PublisherButton"
import { RssFeed } from "@mui/icons-material"
import { useTranslation } from "react-i18next"

const PublisherModal = ({ feed, onClose }: PublisherModalProps) => {
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
          <PublisherButton name={feed.publisher} />
          <p>{feed.title}</p>
        </div>

        <div className={styles.section}>
          <p className={styles.label}>
            <RssFeed className={styles.rss} />
            <span>{t('rss.label')}</span>
          </p>

          <p className={styles.desc}>
            <span>{t('rss.desc')}</span>
            <span>{' '}</span>
            <a href={feed.rssFeedLink} target='_blank' rel='noreferrer'>
              {feed.rssFeedLink}
            </a>
          </p>
        </div>

        <p>{feed.rights}</p>
      </DialogContent>
    </Dialog>
  )
}

export default PublisherModal