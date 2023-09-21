import styles from './Header.module.scss'
import { useTranslation } from "react-i18next"
import { HeaderProps } from "modules/Header/components/HeaderBar/types.ts"
import CurrentDateTime from "modules/Header/components/CurrentDateTime"
import ViewControls from "modules/Header/components/ViewControls"
import LanguageControls from "modules/Header/components/LanguageControls"

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