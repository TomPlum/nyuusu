import useGetHeadline from "api/hooks/useGetHeadline"
import { useCallback, useEffect, useMemo, useState } from "react"
import Article from "modules/Article/components/Article"
import { Button, LinearProgress } from "@mui/material"
import styles from './SingleHeadlineView.module.scss'
import { ChevronLeft, ChevronRight } from "@mui/icons-material"

const SingleHeadlineView = () => {
  const { data, isLoading } = useGetHeadline()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (data) {
      setCurrent(0)
    }
  }, [data])

  const moveLeft = useCallback(() => {
    if (!data) {
      return
    }

    if (current === 0) {
      setCurrent(data.articles.length - 1)
      return
    }

    setCurrent(current - 1)
  }, [current, data])

  const moveRight = useCallback(() => {
    if (!data) {
      return
    }

    if (current === data.articles.length - 1) {
      setCurrent(0)
      return
    }

    setCurrent(current + 1)
  }, [current, data])

  const progress = useMemo(() => {
    if (data) {
      const percentage =  ((current + 1) / data.articles.length) * 100
      return Math.round(percentage)
    }

    return 0
  }, [current, data])
  console.log(progress)
    
  return (
    <div className={styles.singleView}>
      <Button onClick={moveLeft}>
        <ChevronLeft />
      </Button>
      
      {data && (
        <div>
          <LinearProgress value={progress} variant='determinate' />
          <Article loading={isLoading} details={data.articles[current]} onClick={() => {}} />
        </div>
      )}

      <Button onClick={moveRight}>
        <ChevronRight />
      </Button>
    </div>
  )
}

export default SingleHeadlineView