import { TypographyProps } from "./types.ts"
import { CSSProperties, PropsWithChildren, useMemo } from "react"
import styles from './Typography.module.scss'
import classNames from "classnames"
import { useSettingsContext } from "modules/Settings/context/useSettingsContext.ts"

const Typography = ({ children, useHorizontal, forceVertical, className }: PropsWithChildren<TypographyProps>) => {
  const { language, font } = useSettingsContext()

  const style: CSSProperties = useMemo(() => {
    return {
      fontFamily: font.name
    }
  }, [font])

  const isVertical = forceVertical ?? (language === 'jp' && !useHorizontal)

  return (
    <p
      className={classNames(
        className,
        styles.typography,
        { [styles.vertical]: isVertical },
      )}
      style={style}
    >
      {children}
    </p>
  )
}

export default Typography