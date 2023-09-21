import { NewsContext } from "context/NewsContext.ts"
import { PropsWithChildren, useMemo, useState } from "react"
import { NewsContextBag } from "context/types.ts"
import { View } from "components/ViewControls/types.ts"

const NewsContextProvider = ({ children }: PropsWithChildren) => {
    const [view, setView] = useState(View.SINGLE)
    
    const values: NewsContextBag = useMemo(() => ({
        view,
        setView
    }), [view])

    return (
        <NewsContext.Provider value={values}>
            {children}
        </NewsContext.Provider>
    )
}

export default NewsContextProvider