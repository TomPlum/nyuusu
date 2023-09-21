import styles from './NyuusuApplication.module.scss'
import Footer from "components/Footer"
import Header from "modules/Header/components/HeaderBar"
import { useCallback } from "react"
import useNewsContext from "context"
import SingleHeadlineView from "views/SingleHeadlineView"
import { View } from "modules/Header/components/ViewControls/types.ts"
import CardsHeadlineView from "views/CardsHeadlineView"

const NyuusuApplication = () => {
    const { view } = useNewsContext()

    const SelectedView = useCallback(() => {
        switch (view) {
            case View.SINGLE: {
                return <SingleHeadlineView />
            }
            case View.CARDS: {
                return <CardsHeadlineView />
            }
        }
    }, [view])

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <Header
                    loading={false}
                    articles={10} // TODO: Un-hardcode these
                />


                <div className={styles.body}>
                  <SelectedView />
                </div>

                <Footer />
            </div>
        </div>
    )
}

export default NyuusuApplication
