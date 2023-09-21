import styles from './Header.module.scss'
import { useTranslation } from "react-i18next"
import { HeaderProps } from "components/Header/types.ts"

const Header = ({ loading, articles }: HeaderProps) => {
    const { t } = useTranslation('translation', { keyPrefix: 'header' })

    return (
        <div className={styles.header}>
            <h2 className={styles.title}>
                {t('title')}
            </h2>

            {!loading && (
                <p className={styles.subtitle}>
                    {t('subtitle', { articles })}
                </p>
            )}
        </div>
    )
}

export default Header