import styles from "./ArticleHeader.module.scss"
import { AccountCircle } from "@mui/icons-material"
import { format, formatDistanceToNow, parseISO } from "date-fns"
import { ArticleHeaderProps } from "modules/Article/components/ArticleHeader/types.ts"
import { useMemo } from "react"
import useLocale from "hooks/useLocale"

const ArticleHeader = ({ author, publishDate }: ArticleHeaderProps) => {
  const locale = useLocale()
    
  const distanceFromNow = useMemo(() => {
    return formatDistanceToNow(parseISO(publishDate), { locale })
  }, [locale, publishDate])
    
  return (
    <div className={styles.header}>
      <div title={author ?? 'Unknown'}>
        <AccountCircle className={styles.author} />
      </div>

      <div className={styles.info}>
        <p className={styles.date} title='Published'>
          {format(parseISO(publishDate), 'dd/MM/yy HH:mm')}
        </p>

        <p className={styles.distance}>
          {distanceFromNow}
        </p>
      </div>
    </div>
  )
}

export default ArticleHeader