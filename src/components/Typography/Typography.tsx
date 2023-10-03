import { TypographyProps } from "./types.ts"
import { PropsWithChildren } from "react"
import styles from './Typography.module.scss'
import classNames from "classnames"
import { useSettingsContext } from "modules/Settings/context/useSettingsContext.ts"

const Typography = ({ children, className }: PropsWithChildren<TypographyProps>) => {
  const { language } = useSettingsContext()

  return (
    <p className={classNames(className, { [styles.vertical]: language === 'jp' })}>
      {children}
    </p>
  )
}

export default Typography