import styles from './CurrentDateTime.module.scss'
import { useEffect, useMemo, useState } from "react"
import { format } from "date-fns"
import { CurrentDateTimeProps } from "modules/Header/components/CurrentDateTime/types.ts"
import classNames from "classnames"
import useLocale from "hooks/useLocale"

const CurrentDateTime = ({ className, timeClass, dateClass }: CurrentDateTimeProps) => {
  const locale = useLocale()
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => {
      clearInterval(timer)
    }
  }, [])

  const formattedDate = useMemo(() => {
    const language = locale?.code ?? 'ja'
    if (language === 'ja') {
      return format(date, 'yoMMMdo (E)', { locale })
    }

    return format(date, 'do MMM yyyy', { locale })
  }, [date, locale])

  return (
    <div className={classNames(styles.clock, className)}>
      <div className={classNames(styles.time, timeClass)}>
        {format(date, 'HH:mm:ss')}
      </div>

      <div className={classNames(styles.date, dateClass)}>
        {formattedDate}
      </div>
    </div>
  )
}

export default CurrentDateTime