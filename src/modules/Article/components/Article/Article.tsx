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

const Article = React.forwardRef(({ details, loading, className, onClick, ...rest }: ArticleProps, ref: ForwardedRef<HTMLDivElement>) => {
    const { t } = useTranslation('translation', { keyPrefix: 'article' })
    const { kanji } = useLanguageStats({ input: details.title })

    const handleClick = useCallback(() => {
        onClick(details)
    }, [details, onClick])

    return (
        <Card className={classNames(styles.article, className)} onClick={handleClick} title={t('title')} ref={ref} {...rest}>
            {loading && (
                <Skeleton variant='rectangular' />
            )}

            {!loading && (
                <div className={styles.content}>
                    <ArticleHeader
                        author={details.author}
                        publishDate={details.publishedAt}
                    />

                    <div className={styles.body}>
                        <p className={styles.label}>
                            {t('headline')}
                        </p>

                        <p className={styles.headline}>
                            {details.title.trim()}
                        </p>
                    </div>

                    <div className={styles.footer}>
                        <SourceButton url={details.url} source={details.source} />
                        <div className={styles.right}>
                            <TranslateButton text={details.title} />
                            <RatingBadge rating={kanji.rating} />
                        </div>
                    </div>
                </div>
            )}
        </Card>
    )
})

Article.displayName = 'Article'

export default Article