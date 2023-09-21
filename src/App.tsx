import styles from './App.module.scss'
import useGetHeadline from "api/hooks/useGetHeadline"
import Article from "modules/Article/components/Article"
import NewsGrid from "components/NewsGrid"
import { useTranslation } from "react-i18next"

const App = () => {
    const { t } = useTranslation()
    const { data, isLoading } = useGetHeadline()

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <h2>{t('title')}</h2>

                <NewsGrid className={styles.grid}>
                    {data?.articles.map(article => {
                        return (
                            <Article
                                details={article}
                                loading={isLoading}
                                key={article.title}
                            />
                        )
                    })}
                </NewsGrid>
            </div>
        </div>
    )
}

export default App
