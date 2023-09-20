import styles from './App.module.scss'
import useGetHeadline from "api/hooks/useGetHeadline"
import Article from "components/Article"

const App = () => {
    const { data } = useGetHeadline()

    return (
        <div className={styles.wrapper}>
            {data?.articles.map(article => {
                return (
                    <Article details={article} key={article.title} />
                )
            })}
        </div>
    )
}

export default App
