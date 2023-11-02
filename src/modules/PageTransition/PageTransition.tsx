import { PropsWithChildren, useEffect } from "react"
import { PageTransitionProps } from "modules/PageTransition/types.ts"
import classNames from "classnames"
import styles from "./PageTransition.module.scss"
import usePageTranslation from "modules/PageTransition/hooks/usePageTranslation"
import usePageTransitionContext from "modules/PageTransition/context/usePageTransitionContext.ts"

const PageTransition = ({
  targetHasHeader = false,
  direction = 'left',
  hasNavigated,
  targetPage,
  className,
  children,
  ...rest
}: PropsWithChildren<PageTransitionProps>) => {
  const TargetPageComponent = targetPage
  const { setTargetHasHeader } = usePageTransitionContext()
  const { sourcePageTranslation, targetPageTranslation } = usePageTranslation({ direction })

  useEffect(() => {
    setTargetHasHeader(targetHasHeader)
  }, [setTargetHasHeader, targetHasHeader])

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
          {TargetPageComponent && (
            <TargetPageComponent />
          )}
        </div>
      )}

      {children}
    </div>
  )
}

export default PageTransition