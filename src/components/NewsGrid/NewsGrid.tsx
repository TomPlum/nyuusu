import Grid from '@mui/material/Unstable_Grid2'
import { NewsGridProps } from "components/NewsGrid/types.ts"

const NewsGrid = ({ className, children }: NewsGridProps) => {
  return (
    <Grid className={className} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} justifyContent='center'>
      {children}
    </Grid>
  )
}

export default NewsGrid