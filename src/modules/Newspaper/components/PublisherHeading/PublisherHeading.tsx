import styles from "./PublisherHeading.module.scss"
import { useTranslation } from "react-i18next"
import { PublisherHeadingProps } from "./types.ts"
import classNames from "classnames"
import { useMemo } from "react"

const PublisherHeading = ({ name, title, className }: PublisherHeadingProps) => {
  const { t } = useTranslation('translation', { keyPrefix: 'newspaper.publisher' })

  const renderedTitle = useMemo(() => {
    if (!title || title === '') {
      return t('defaults.title')
    }

    return title
  }, [title, t])

  const renderedPublisherName = useMemo(() => {
    if (!name || name === '') {
      return t('defaults.name')
    }

    return name
  }, [name, t])

  return (
    <div className={classNames(styles.publisherWrapper, className)}>
      <div className={styles.borderContainer}>
        <div className={styles.borderTop} />

        <h1 className={styles.publisher}>
          {renderedPublisherName}
        </h1>

        <div className={styles.borderBottom} />
      </div>

      <div className={styles.title}>
        {renderedTitle}
      </div>
    </div>
  )
}

export default PublisherHeading