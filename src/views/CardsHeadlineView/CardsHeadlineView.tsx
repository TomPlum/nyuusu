import NewsGrid from "components/NewsGrid"
import styles from "./CardsHeadlineView.module.scss"
import Article from "modules/Article/components/Article"
import useGetHeadline from "api/hooks/useGetHeadline"
import SelectedArticle from "modules/Article/components/SelectedArticle"
import { useCallback, useState } from "react"
import { NewsArticle } from "api/hooks/useGetHeadline/types.ts"

const CardsHeadlineView = () => {
    const { data, isLoading } = useGetHeadline()

    const [selectedArticle, setSelectedArticle] = useState<NewsArticle>()

    const handleSelectArticle = useCallback((article: NewsArticle) => {
        setSelectedArticle(article)
    }, [])

    return (
        <div className={styles.cardsView}>
            <NewsGrid className={styles.grid}>
                {data?.articles.map(article => (
                    <Article
                        details={article}
                        loading={isLoading}
                        key={article.title}
                        className={styles.article}
                        onClick={handleSelectArticle}
                    />
                ))}
            </NewsGrid>

            {selectedArticle && (
                <SelectedArticle
                    article={selectedArticle}
                    onClose={() => setSelectedArticle(undefined)}
                />
            )}
        </div>
    )
}

export default CardsHeadlineView