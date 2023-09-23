import { ArticleProps } from "./types.ts"
import { useTranslation } from "react-i18next"

import styles from './Article.module.scss'
import { Card, Skeleton } from "@mui/material"
import useLanguageStats from "modules/Article/hooks/useLanguageStats"
import SourceButton from "modules/Article/components/SourceButton"
import RatingBadge from "modules/Article/components/RatingBadge"
import classNames from "classnames"
import React, { ForwardedRef, useCallback } from "react"
import ArticleHeader from "modules/Article/components/ArticleHeader"
import TranslateButton from "modules/Article/components/TranslateButton"
import TagsButton from "modules/Article/components/TagsButton"

const Article = React.forwardRef(({
  article,
  feed,
  loading,
  className,
  onClick,
  ...rest 
}: ArticleProps, ref: ForwardedRef<HTMLDivElement>) => {
  const { t } = useTranslation('translation', { keyPrefix: 'article' })
  const { difficulty } = useLanguageStats({ input: article.title })

  const handleClick = useCallback(() => {
    onClick(article)
  }, [article, onClick])

  return (
    <Card className={classNames(styles.article, className)} onClick={handleClick} title={t('title')} ref={ref} {...rest}>
      {loading && (
        <Skeleton variant='rectangular' />
      )}

      {!loading && (
        <div className={styles.content}>
          <ArticleHeader
            feed={feed}
            publisher={feed.publisher}
            publishDate={article.publishDate}
          />

          <div className={styles.body}>
            <p className={styles.label}>
              {t('headline')}
            </p>

            <p className={styles.headline}>
              {article.title.trim()}
            </p>
          </div>

          <div className={styles.footer}>
            <SourceButton url={article.link} source={{ id: null, name: 'link' }} />

            <div className={styles.right}>
              <TagsButton tags={[feed.title]} />
              <TranslateButton text={article.title} />
              <RatingBadge rating={difficulty} />
            </div>
          </div>
        </div>
      )}
    </Card>
  )
})

Article.displayName = 'Article'

export default Article