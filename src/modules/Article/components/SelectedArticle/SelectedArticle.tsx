import { Dialog, DialogContent, Slide } from "@mui/material"
import { SelectedArticleProps } from "modules/Article/components/SelectedArticle/types.ts"
import { TransitionProps } from "@mui/material/transitions"
import styles from './SelectedArticle.module.scss'
import React from "react"
import ArticleHeader from "modules/Article/components/ArticleHeader"
import SourceButton from "modules/Article/components/SourceButton"
import RatingBadge from "modules/Article/components/RatingBadge"
import useLanguageStats from "modules/Article/hooks/useLanguageStats"

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
        children: React.ReactElement;
    },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />
})

const SelectedArticle = ({ article, onClose }: SelectedArticleProps) => {
  const { kanji } = useLanguageStats({ input: article.title })
    
  return (
    <Dialog
      open={true}
      onClose={onClose}
      TransitionComponent={Transition}
      aria-labelledby="selected-article-title"
      aria-describedby="selected-article-description"
    >
      <DialogContent className={styles.wrapper}>
        <ArticleHeader
          author={article.author}
          publishDate={article.publishedAt}
        />

        <p className={styles.headline}>
          {article.title.trim()}
        </p>

        <div className={styles.footer}>
          <SourceButton url={article.url} source={article.source} />
          <RatingBadge rating={kanji.rating} />
        </div>

        {/*<ArticleSourcePage link={article.url} />*/}
      </DialogContent>
    </Dialog>
  )
}

export default SelectedArticle