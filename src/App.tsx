import styles from './App.module.scss'
import useGetHeadline from "api/hooks/useGetHeadline"
import Article from "modules/Article/components/Article"
import NewsGrid from "components/NewsGrid"
import { useTranslation } from "react-i18next"
import { CircularProgress } from "@mui/material"
import Footer from "components/Footer"

const App = () => {
    const { t } = useTranslation()
    const { data, isLoading } = useGetHeadline()

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <h2>{t('title')}</h2>
                {!isLoading && data && (
                    <p>{t('subtitle', { articles: data.articles.length })}</p>
                )}
            </div>

            <div className={styles.content}>
                {isLoading && (
                    <CircularProgress  color='error' />
                )}

                <NewsGrid className={styles.grid}>
                    {data?.articles.map(article => (
                        <Article
                            details={article}
                            loading={isLoading}
                            key={article.title}
                            className={styles.article}
                        />
                    ))}
                </NewsGrid>
            </div>

            <Footer />
        </div>
    )
}

export default App
