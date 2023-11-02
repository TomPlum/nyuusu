import { CSSProperties, PropsWithChildren, useEffect } from "react"
import { PageTransitionProps } from "modules/PageTransition/types.ts"
import usePageTransitionContext from "modules/PageTransition/context/usePageTransitionContext.ts"
import classNames from "classnames"
import styles from "./PageTransition.module.scss"
import usePageTranslation from "modules/PageTransition/hooks/usePageTranslation"

const PageTransition = ({ children, hasNavigated, direction, className, targetPage, ...rest }: PropsWithChildren<PageTransitionProps>) => {
  const { setBackgroundTranslation } = usePageTransitionContext()
  const { sourcePageTranslation, targetPageTranslation } = usePageTranslation({ direction })

  useEffect(() => {
    setBackgroundTranslation('0% 0%')
  }, [setBackgroundTranslation])

  const TargetPageComponent = targetPage

  const sourceTranslation = {
    "--translate": `${sourcePageTranslation}`
  } as CSSProperties

  const targetTranslation = {
    "--targetTranslate": `${targetPageTranslation.x}% ${targetPageTranslation.y}%`, // TODO encapsulate in hook?
  } as CSSProperties

  return (
    <div
      {...rest}
      style={sourceTranslation}
      className={classNames(
        className,
        styles.sourcePage,
        { [styles['sourcePage--move']]: hasNavigated }
      )}
    >
      {hasNavigated && (
        <div style={targetTranslation} className={styles.targetPage}>
          <TargetPageComponent />
        </div>
      )}

      {children}
    </div>
  )
}

export default PageTransition