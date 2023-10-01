import styles from "./ArticleHeader.module.scss"
import { ArticleHeaderProps } from "modules/Article/components/ArticleHeader/types.ts"
import { useState } from "react"
import PublisherButton from "modules/Article/components/PublisherButton"
import PublisherModal from "modules/Article/components/PublisherModal"
import PublicationDate from "modules/Article/components/PublicationDate"

const ArticleHeader = ({ article }: ArticleHeaderProps) => {
  const [showPublisherModal, setShowPublisherModal] = useState(false)
    
  return (
    <div className={styles.header}>
      <PublisherButton
        name={article.publisher}
        className={styles.author}
        onClick={() => setShowPublisherModal(true)}
      />

      <PublicationDate publishDate={article.publishDate} />

      {showPublisherModal && (
        <PublisherModal article={article} onClose={() => setShowPublisherModal(false)} />
      )}
    </div>
  )
}

export default ArticleHeader