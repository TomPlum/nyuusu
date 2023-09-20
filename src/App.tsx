import styles from './App.module.scss'
import useGetHeadline from "./api/hooks/useGetHeadline"

const App = () => {

    const { data: headline } = useGetHeadline()

    return (
        <div className={styles.wrapper}>
            {headline?.articles[0].title}
        </div>
    )
}

export default App
