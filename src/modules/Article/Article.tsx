import { ArticleProps } from "./types.ts"
import { useTranslation } from "react-i18next"

import styles from './Article.module.scss'
import { Card, Skeleton } from "@mui/material"
import useLanguageStats from "modules/Article/hooks/useLanguageStats"
import SourceButton from "modules/Article/components/SourceButton"
import RatingBadge from "modules/Article/components/RatingBadge"
import classNames from "classnames"
import React, { ForwardedRef, useCallback, useMemo } from "react"
import ArticleHeader from "modules/Article/components/ArticleHeader"
import TranslateButton from "modules/Article/components/TranslateButton"
import TagsButton from "modules/Article/components/TagsButton"
import { DifficultyRating } from "modules/Article/hooks/useLanguageStats/types.ts"

const Article = React.forwardRef(({
  id,
  article,
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

  const difficultyClass = useMemo(() => {
    switch (difficulty) {
      case DifficultyRating.BEGINNER: return styles.beginner
      case DifficultyRating.INTERMEDIATE: return styles.intermediate
      case DifficultyRating.EXPERT: return styles.expert
    }
  }, [difficulty])

  return (
    <Card
      ref={ref}
      {...rest}
      title={t('title')}
      onClick={handleClick}
      data-testid={`article-card-${id}`}
      className={classNames(styles.article, className)}
    >
      {loading && (
        <Skeleton variant='rectangular' />
      )}

      <div className={classNames(styles.difficulty, difficultyClass)} />

      {!loading && (
        <div className={styles.content}>
          <ArticleHeader article={article} />

          <div className={styles.body}>
            <p className={styles.label}>
              {t('headline')}
            </p>

            <p className={styles.headline}>
              {article.title.trim()}
            </p>
          </div>

          <div className={styles.footer}>
            <div className={styles.left}>
              <SourceButton url={article.link} source={{ id: null, name: 'link' }} />
            </div>

            <div className={styles.right}>
              <TagsButton tags={[article.title]} />
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