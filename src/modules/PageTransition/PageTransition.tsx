import { PropsWithChildren, useEffect } from "react"
import { PageTransitionProps } from "modules/PageTransition/types.ts"
import usePageTransitionContext from "modules/PageTransition/context/usePageTransitionContext.ts"
import classNames from "classnames"
import styles from "./PageTransition.module.scss"

const PageTransition = ({ children, hasNavigated, defaultTranslation, className, target, ...rest }: PropsWithChildren<PageTransitionProps>) => {
  const { setBackgroundTranslation } = usePageTransitionContext()

  useEffect(() => {
    setBackgroundTranslation(defaultTranslation)
  }, [defaultTranslation, setBackgroundTranslation])

  const TargetPageComponent = target.component
    
  return (
    <div className={classNames(className, { [styles['page--move']]: hasNavigated })} {...rest}>
      {hasNavigated && (
        <TargetPageComponent {...target.props}  />
      )}

      {children}
    </div>
  )
}

export default PageTransition