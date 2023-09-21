import styles from './Header.module.scss'
import { useTranslation } from "react-i18next"
import { HeaderProps } from "components/Header/types.ts"
import CurrentDateTime from "components/CurrentDateTime"
import ViewControls from "components/ViewControls"
import LanguageControls from "components/LanguageControls"

const Header = ({ loading, articles }: HeaderProps) => {
    const { t } = useTranslation('translation', { keyPrefix: 'header' })

    return (
        <div className={styles.header}>
            <div className={styles.left}>
                <h2 className={styles.title}>
                    <img src='/logo.png'  alt='news-logo' className={styles.logo}/>
                    {t('title')}
                </h2>

                {!loading && (
                    <p className={styles.subtitle}>
                        {t('subtitle', { articles })}
                    </p>
                )}
            </div>

           <div className={styles.right}>
               <ViewControls />
                <LanguageControls />
               <CurrentDateTime className={styles.clock} />
           </div>
        </div>
    )
}

export default Header