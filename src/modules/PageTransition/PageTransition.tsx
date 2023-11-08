import { PropsWithChildren, useEffect } from "react"
import { PageTransitionProps } from "modules/PageTransition/types.ts"
import classNames from "classnames"
import styles from "./PageTransition.module.scss"
import usePageTranslation from "modules/PageTransition/hooks/usePageTranslation"
import usePageTransitionContext from "modules/PageTransition/context/usePageTransitionContext.ts"

const PageTransition = ({
  targetHasHeader = false,
  direction = 'left',
  animation = 'slide',
  hasNavigated,
  targetPage,
  className,
  children,
  ...rest
}: PropsWithChildren<PageTransitionProps>) => {
  const TargetPageComponent = targetPage
  const { setTargetHasHeader } = usePageTransitionContext()
  const { id, sourcePageTranslation, targetPageTranslation } = usePageTranslation({ direction, animation })

  useEffect(() => {
    setTargetHasHeader(targetHasHeader)
  }, [setTargetHasHeader, targetHasHeader])

  return (
    <div
      {...rest}
      style={sourcePageTranslation}
      className={classNames(
        className,
        styles[`${id}-sourcePage`],
        { [styles[`${id}-sourcePage--move`]]: hasNavigated }
      )}
    >
      {hasNavigated && (
        <div style={targetPageTranslation} className={styles[`${id}-targetPage`]}>
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