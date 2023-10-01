import { TranslateArticleProps } from "modules/Newspaper/components/TranslateArticle/types.ts"
import useTranslate from "hooks/useTranslate"
import { useTranslation } from "react-i18next"
import styles from './TranslateArticle.module.scss'
import { ReactComponent as DeeplLogo } from 'assets/deepl.svg'

const TranslateArticle = ({ text }: TranslateArticleProps) => {
  const { link } = useTranslate({ text })
  const { t } = useTranslation('translation', { keyPrefix: 'newspaper.article.translate' })

  return (
    <div className={styles.article}>
      <p className={styles.desc}>{t('description')}</p>
      <a href={link} target="_blank" rel='noreferrer'>
        {t('translate')}
      </a>
      <DeeplLogo className={styles.deepl}/>
    </div>
  )
}

export default TranslateArticle