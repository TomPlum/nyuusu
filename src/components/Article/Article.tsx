import { ArticleProps } from "components/Article/types.ts"
import { useTranslation } from "react-i18next"

const Article = ({ details }: ArticleProps) => {
    const { t } = useTranslation()

    return (
        <div>
            <p>{t('headline')}</p>
            <p>{details.title}</p>

            <p>{details.author}</p>

            <p>{details.publishedAt}</p>

            <a href={details.url} target="_blank" rel="noreferrer">Source</a>
        </div>
    )
}

export default Article