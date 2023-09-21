import { ArticleProps } from "./types.ts"
import { useTranslation } from "react-i18next"

import styles from './Article.module.scss'
import { Card, CardActions, CardContent, Skeleton } from "@mui/material"
import useLanguageStats from "hooks/useLanguageStats"
import { format, parseISO } from "date-fns"
import { AccountCircle } from "@mui/icons-material"
import SourceButton from "modules/Article/components/SourceButton"

const Article = ({ details, loading }: ArticleProps) => {
    const { t } = useTranslation('translation', { keyPrefix: 'article' })
    const { kanji, katakana, roman, hiragana } = useLanguageStats({ input: details.title })

    return (
        <Card className={styles.article}>
            <CardContent className={styles.content}>
                {loading && (
                    <Skeleton variant='rectangular' />
                )}

                {!loading && (
                    <div>
                        <div className={styles.header}>
                            <div title={details.author ?? 'Unknown'}>
                                <AccountCircle className={styles.author} />
                            </div>

                            <p className={styles.date} title='Published'>
                                {format(parseISO(details.publishedAt), 'dd/MM/yy HH:mm')}
                            </p>
                        </div>

                        <p className={styles.label}>
                            {t('headline')}
                        </p>

                        <p className={styles.headline}>
                            {details.title}
                        </p>
                    </div>
                )}
            </CardContent>

            <CardActions>
                <SourceButton url={details.url} source={details.source} />
            </CardActions>
        </Card>
    )
}

export default Article