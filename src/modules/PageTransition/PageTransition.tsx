import { PropsWithChildren } from "react"
import { PageTransitionProps } from "modules/PageTransition/types.ts"
import classNames from "classnames"
import styles from "./PageTransition.module.scss"
import usePageTranslation from "modules/PageTransition/hooks/usePageTranslation"

const PageTransition = ({ children, hasNavigated, direction, className, targetPage, ...rest }: PropsWithChildren<PageTransitionProps>) => {
  const TargetPageComponent = targetPage
  const { sourcePageTranslation, targetPageTranslation } = usePageTranslation({ direction })

  return (
    <div
      {...rest}
      style={sourcePageTranslation}
      className={classNames(
        className,
        styles.sourcePage,
        { [styles['sourcePage--move']]: hasNavigated }
      )}
    >
      {hasNavigated && (
        <div style={targetPageTranslation} className={styles.targetPage}>
          <TargetPageComponent />
        </div>
      )}

      {children}
    </div>
  )
}

export default PageTransition