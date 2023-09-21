import useGetHeadline from "api/hooks/useGetHeadline"
import { useEffect, useState } from "react"
import { NewsArticle } from "api/hooks/useGetHeadline/types.ts"
import Article from "modules/Article/components/Article"

const SingleHeadlineView = () => {
    const { data, isLoading } = useGetHeadline()
    const [current, setCurrent] = useState<NewsArticle>()

    useEffect(() => {
        if (data) {
            setCurrent(data.articles[0])
        }
    }, [data])
    
    return (
        <div>
            {current && (
                <Article loading={isLoading} details={current} onClick={() => {}} />
            )}
        </div>
    )
}

export default SingleHeadlineView