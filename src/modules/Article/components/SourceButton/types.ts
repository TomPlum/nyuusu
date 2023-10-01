import { NewsApiArticleSource } from "api/hooks/useGetHeadline/types.ts"
import { SvgIconComponent } from "@mui/icons-material"

export interface SourceButtonProps {
    url: string
    source: NewsApiArticleSource // TODO: Decouple from API types. Do we need this now for RSS?
}

export interface InnerSourceButtonProps extends SourceButtonProps{
    icon: SvgIconComponent
    label: string
    className: string
}