import Grid from '@mui/material/Unstable_Grid2'
import { NewsGridProps } from "components/NewsGrid/types.ts"

const NewsGrid = ({ className, children }: NewsGridProps) => {
    return (
        <Grid className={className}>
            {children}
        </Grid>
    )
}

export default NewsGrid