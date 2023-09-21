import { ArticleProps } from "./types.ts"
import { useTranslation } from "react-i18next"

import styles from './Article.module.scss'
import { Card, Skeleton } from "@mui/material"
import useLanguageStats from "modules/Article/hooks/useLanguageStats"
import { format, parseISO } from "date-fns"
import { AccountCircle } from "@mui/icons-material"
import SourceButton from "modules/Article/components/SourceButton"
import RatingBadge from "modules/Article/components/RatingBadge"
import classNames from "classnames"

const Article = ({ details, loading, className }: ArticleProps) => {
    const { t } = useTranslation('translation', { keyPrefix: 'article' })
    const { kanji } = useLanguageStats({ input: details.title })

    return (
        <Card className={classNames(styles.article, className)}>
            {loading && (
                <Skeleton variant='rectangular' />
            )}

            {!loading && (
                <div className={styles.content}>
                    <div className={styles.header}>
                        <div title={details.author ?? 'Unknown'}>
                            <AccountCircle className={styles.author} />
                        </div>

                        <p className={styles.date} title='Published'>
                            {format(parseISO(details.publishedAt), 'dd/MM/yy HH:mm')}
                        </p>
                    </div>

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
                        <RatingBadge rating={kanji.rating} />
                    </div>
                </div>
            )}
        </Card>
    )
}

export default Article