import { TypographyProps } from "./types.ts"
import { PropsWithChildren } from "react"
import styles from './Typography.module.scss'
import classNames from "classnames"
import { useSettingsContext } from "modules/Settings/context/useSettingsContext.ts"

const Typography = ({ children, useHorizontal, forceVertical, className }: PropsWithChildren<TypographyProps>) => {
  const { language } = useSettingsContext()

  const isVertical = forceVertical ?? (language === 'jp' && !useHorizontal)

  return (
    <p
      className={classNames(
        className,
        { [styles.vertical]: isVertical },
      )}
    >
      {children}
    </p>
  )
}

export default Typography