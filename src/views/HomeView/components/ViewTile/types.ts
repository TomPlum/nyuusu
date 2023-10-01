import { SvgIconComponent } from "@mui/icons-material"

export interface ViewTileProps {
    title: string
    desc: string
    Icon: SvgIconComponent
    onClick: () => void
}