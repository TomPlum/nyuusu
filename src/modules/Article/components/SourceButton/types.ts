import { NewsArticleSource } from "api/hooks/useGetHeadline/types.ts"
import { SvgIconComponent } from "@mui/icons-material"

export interface SourceButtonProps {
    url: string
    source: NewsArticleSource
}

export interface InnerSourceButtonProps extends SourceButtonProps{
    icon: SvgIconComponent
    label: string
    className: string
}