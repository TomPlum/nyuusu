import { TypographyProps } from "./types.ts"
import { PropsWithChildren } from "react"
import styles from './Typography.module.scss'
import classNames from "classnames"
import { useSettingsContext } from "modules/Settings/context/useSettingsContext.ts"

const Typography = ({ children, useHorizontal, className }: PropsWithChildren<TypographyProps>) => {
  const { language } = useSettingsContext()

  return (
    <p className={classNames(className, { [styles.vertical]: language === 'jp' && !useHorizontal })}>
      {children}
    </p>
  )
}

export default Typography