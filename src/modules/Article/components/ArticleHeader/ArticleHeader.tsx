import styles from "./ArticleHeader.module.scss"
import { format, formatDistanceToNow, parse } from "date-fns"
import { ArticleHeaderProps } from "modules/Article/components/ArticleHeader/types.ts"
import { useCallback, useMemo } from "react"
import useLocale from "hooks/useLocale"
import utcToZonedTime from "date-fns-tz/utcToZonedTime"
import { zonedTimeToUtc } from "date-fns-tz"
import { useTranslation } from "react-i18next"
import PublisherButton from "modules/Article/components/PublisherButton"

const ArticleHeader = ({ publisher, publishDate }: ArticleHeaderProps) => {
  const locale = useLocale()
  const { t } = useTranslation('translation', { keyPrefix: 'article.header' })

  const parseDate = useCallback(() => {
    const referenceDate = utcToZonedTime(new Date(), 'UTC')
    const parsedDate = parse(publishDate, "yyyy-MM-dd'T'HH:mm:ssXXXXX", referenceDate)
    return zonedTimeToUtc(parsedDate, 'UTC')
  }, [publishDate])
    
  const distanceFromNow = useMemo(() => {
    if (!publishDate) {
      return 'unknown'
    }

    const date = parseDate()
    return formatDistanceToNow(date, { locale })
  }, [locale, parseDate, publishDate])

  const date = useMemo(() => {
    if (!publishDate) {
      return 'unknown'
    }

    const date = parseDate()
    return format(date, 'dd/MM/yy HH:mm', { locale })
  }, [locale, parseDate, publishDate])
    
  return (
    <div className={styles.header}>
      <PublisherButton className={styles.author} name={publisher} onClick={() => {}}/>

      <div className={styles.info}>
        <p className={styles.date} title='Published'>
          {date}
        </p>

        <p className={styles.distance}>
          {distanceFromNow}{' '}{t('distance-suffix')}
        </p>
      </div>
    </div>
  )
}

export default ArticleHeader