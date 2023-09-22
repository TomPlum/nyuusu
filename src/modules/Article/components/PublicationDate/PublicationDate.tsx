import { PublicationDateProps } from "modules/Article/components/PublicationDate/types.ts"
import styles from "./PublicationDate.module.scss"
import { useTranslation } from "react-i18next"
import { useCallback, useMemo } from "react"
import utcToZonedTime from "date-fns-tz/utcToZonedTime"
import { format, formatDistanceToNow, parse } from "date-fns"
import { zonedTimeToUtc } from "date-fns-tz"
import useLocale from "hooks/useLocale"
import classNames from "classnames"

const PublicationDate = ({ publishDate, className }: PublicationDateProps) => {
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
    <div className={classNames(styles.wrapper, className)}>
      <p className={styles.date} title='Published'>
        {date}
      </p>

      <p className={styles.distance}>
        {distanceFromNow}{' '}{t('distance-suffix')}
      </p>
    </div>
  )
}

export default PublicationDate