import styles from './Header.module.scss'
import { useTranslation } from "react-i18next"
import { HeaderProps } from "components/Header/types.ts"
import CurrentDateTime from "components/CurrentDateTime"
import ViewControls from "components/ViewControls"

const Header = ({ loading, articles }: HeaderProps) => {
    const { t } = useTranslation('translation', { keyPrefix: 'header' })

    return (
        <div className={styles.header}>
            <div>
                <h2 className={styles.title}>
                    {t('title')}
                </h2>

                {!loading && (
                    <p className={styles.subtitle}>
                        {t('subtitle', { articles })}
                    </p>
                )}
            </div>

            <ViewControls />

            <CurrentDateTime className={styles.clock} />
        </div>
    )
}

export default Header