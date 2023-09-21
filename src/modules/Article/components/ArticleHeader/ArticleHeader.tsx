import styles from "./ArticleHeader.module.scss"
import { AccountCircle } from "@mui/icons-material"
import { format, parseISO } from "date-fns"
import { ArticleHeaderProps } from "modules/Article/components/ArticleHeader/types.ts"

const ArticleHeader = ({ author, publishDate }: ArticleHeaderProps) => {
    return (
        <div className={styles.header}>
            <div title={author ?? 'Unknown'}>
                <AccountCircle className={styles.author} />
            </div>

            <p className={styles.date} title='Published'>
                {format(parseISO(publishDate), 'dd/MM/yy HH:mm')}
            </p>
        </div>
    )
}

export default ArticleHeader