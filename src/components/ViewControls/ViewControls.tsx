import { View } from "components/ViewControls/types.ts"
import { GridView, Newspaper } from "@mui/icons-material"
import useNewsContext from "context"
import styles from './ViewControls.module.scss'
import { useTranslation } from "react-i18next"
import classNames from "classnames"

const ViewControls = () => {
    const { view, setView } = useNewsContext()
    const { t } = useTranslation('translation', { keyPrefix: 'header.view-controls' })

    return (
        <div className={styles.controls}>
            <div onClick={() => setView(View.SINGLE)} title={t('single')}>
                <Newspaper
                    className={classNames(styles.icon, { [styles.active]: view === View.SINGLE })}
                />
            </div>

            <div onClick={() => setView(View.CARDS)} title={t('cards')}>
                <GridView
                    className={classNames(styles.icon, { [styles.active]: view === View.CARDS })}
                />
            </div>
        </div>
    )
}

export default ViewControls