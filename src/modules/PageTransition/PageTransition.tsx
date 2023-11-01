import { CSSProperties, PropsWithChildren, useEffect } from "react"
import { PageTransitionProps } from "modules/PageTransition/types.ts"
import usePageTransitionContext from "modules/PageTransition/context/usePageTransitionContext.ts"
import classNames from "classnames"
import styles from "./PageTransition.module.scss"
import usePageTranslation from "modules/PageTransition/hooks/usePageTranslation"

const PageTransition = ({ children, hasNavigated, direction, className, target, ...rest }: PropsWithChildren<PageTransitionProps>) => {
  const { setBackgroundTranslation } = usePageTransitionContext()
  const { sourcePageTranslation, targetPageTranslation } = usePageTranslation({ direction })

  useEffect(() => {
    setBackgroundTranslation('0% 0%')
  }, [setBackgroundTranslation])

  const TargetPageComponent = target.component

  const style = { "--translate": `${sourcePageTranslation}` } as CSSProperties

  return (
    <div
      {...rest}
      style={style}
      className={classNames(
        className,
        styles.page,
        { [styles['page--move']]: hasNavigated }
      )}
    >
      {hasNavigated && (
        <TargetPageComponent
          xTranslate={targetPageTranslation.x}
          yTranslate={targetPageTranslation.y}
        />
      )}

      {children}
    </div>
  )
}

export default PageTransition