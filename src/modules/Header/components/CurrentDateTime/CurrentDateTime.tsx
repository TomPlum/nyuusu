import styles from './CurrentDateTime.module.scss'
import { useEffect, useState } from "react"
import { format } from "date-fns"
import { CurrentDateTimeProps } from "modules/Header/components/CurrentDateTime/types.ts"
import classNames from "classnames"
import useLocale from "hooks/useLocale"

const CurrentDateTime = ({ className }: CurrentDateTimeProps) => {
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


  return (
    <div className={classNames(styles.clock, className)}>
      <div className={styles.time}>
        {format(date, 'HH:mm:ss')}
      </div>

      <div className={styles.date}>
        {format(date, 'do MMM yyyy', { locale })}
      </div>
    </div>
  )
}

export default CurrentDateTime