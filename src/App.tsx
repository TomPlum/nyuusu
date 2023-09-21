import styles from './App.module.scss'
import useGetHeadline from "api/hooks/useGetHeadline"
import Article from "modules/Article/components/Article"
import NewsGrid from "components/NewsGrid"
import { CircularProgress } from "@mui/material"
import Footer from "components/Footer"
import Header from "components/Header"

const App = () => {
    const { data, isLoading } = useGetHeadline()

    return (
        <div className={styles.wrapper}>
            <Header
                loading={isLoading}
                articles={data?.articles.length ?? 0}
            />

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
