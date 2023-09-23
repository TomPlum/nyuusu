import { Dialog, DialogContent } from "@mui/material"
import { SelectedArticleProps } from "modules/Article/components/SelectedArticle/types.ts"
import styles from './SelectedArticle.module.scss'
import ArticleHeader from "modules/Article/components/ArticleHeader"
import SourceButton from "modules/Article/components/SourceButton"
import RatingBadge from "modules/Article/components/RatingBadge"
import useLanguageStats from "modules/Article/hooks/useLanguageStats"
import SlideTransition from "components/SlideTransition"


const SelectedArticle = ({ article, feed, onClose }: SelectedArticleProps) => {
  const { difficulty } = useLanguageStats({ input: article.title })
    
  return (
    <Dialog
      open={true}
      onClose={onClose}
      TransitionComponent={SlideTransition}
      aria-labelledby="selected-article-title"
      aria-describedby="selected-article-description"
    >
      <DialogContent className={styles.wrapper}>
        <ArticleHeader
          feed={feed}
          publisher={feed.publisher}
          publishDate={article.publishDate}
        />

        <p className={styles.headline}>
          {article.title.trim()}
        </p>

        <div className={styles.footer}>
          <SourceButton url={article.link} source={{ id: null, name: 'link' }} />
          <RatingBadge rating={difficulty} />
        </div>

        {/*<ArticleSourcePage link={article.url} />*/}
      </DialogContent>
    </Dialog>
  )
}

export default SelectedArticle