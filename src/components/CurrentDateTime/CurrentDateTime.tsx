import styles from './CurrentDateTime.module.scss'
import { useEffect, useMemo, useState } from "react"
import { format } from "date-fns"
import { CurrentDateTimeProps } from "components/CurrentDateTime/types.ts"
import classNames from "classnames"
import useNewsContext from "context"
import jpLocale from 'date-fns/locale/ja'
import enLocale from 'date-fns/locale/en-GB'

const CurrentDateTime = ({ className }: CurrentDateTimeProps) => {
    const { language } = useNewsContext()
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(timer)
        }
    }, [])

    const locale = useMemo(() => {
        switch (language) {
            case "en": return enLocale
            case "jp": return jpLocale
        }
    }, [language])

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