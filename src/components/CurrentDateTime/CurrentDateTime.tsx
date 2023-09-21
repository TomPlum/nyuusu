import styles from './CurrentDateTime.module.scss'
import { useEffect, useState } from "react"
import { format } from "date-fns"
import { CurrentDateTimeProps } from "components/CurrentDateTime/types.ts"
import classNames from "classnames"

const CurrentDateTime = ({ className }: CurrentDateTimeProps) => {
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
                {format(date, 'hh:MM:ss')}
            </div>

            <div className={styles.date}>
                {format(date, 'do MMM yy')}
            </div>
        </div>
    )
}

export default CurrentDateTime