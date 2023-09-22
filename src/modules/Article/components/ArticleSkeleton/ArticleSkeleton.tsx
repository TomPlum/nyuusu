import { Skeleton, Stack } from "@mui/material"
import styles from './ArticleSkeleton.module.scss'

const ArticleSkeleton = () => {
  return (
    <Stack spacing={1} className={styles.card}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Skeleton
            width={40}
            height={40}
            animation='wave'
            variant='circular'
          />

          <div className={styles.publisher}>
            <Skeleton variant='text' animation='wave' width={170} />
            <Skeleton variant='text' animation='wave' width={120} />
          </div>
        </div>

        <div className={styles.right}>
          <Skeleton variant='text' animation='wave' width={120} />
          <Skeleton variant='text' animation='wave' width={85} />
        </div>
      </div>

      <div className={styles.headline}>
        <Skeleton
          height={100}
          animation='wave'
          variant='rectangular'
        />
      </div>

      <div className={styles.footer}>
        <div className={styles.left}>
          <Skeleton
            width={100}
            height={30}
            animation='wave'
            variant='rectangular'
            sx={{ borderRadius: 20 }}
          />
        </div>

        <div className={styles.right}>
          <Skeleton width={30} height={30} animation='wave' variant='circular' />
          <Skeleton width={30} height={30} animation='wave' variant='circular' />
          <Skeleton width={30} height={30} animation='wave' variant='circular' />
        </div>
      </div>
    </Stack>
  )
}

export default ArticleSkeleton