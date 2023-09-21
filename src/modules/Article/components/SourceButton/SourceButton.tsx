import { InnerSourceButtonProps, SourceButtonProps } from "modules/Article/components/SourceButton/types.ts"
import styles from "./SourceButton.module.scss"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"
import { useTranslation } from "react-i18next"
import { YouTube } from "@mui/icons-material"
import classNames from "classnames"

const Button = ({ url, label, source, icon, className }: InnerSourceButtonProps) => {
    const { t } = useTranslation('translation', { keyPrefix: 'article.source' })

    const Icon = icon

    return (
        <a
            href={url}
            target="_blank"
            rel="noreferrer"
            title={source.name}
            className={classNames(styles.source, className)}
        >
            <Icon/>
            <span>{t(`label.${label}`)}</span>
        </a>
    )
}

const SourceButton = ({ source, url }: SourceButtonProps) => {
    if (source.name === 'YouTube') {
        return (
            <Button
                url={url}
                label='youtube'
                icon={YouTube}
                source={source}
                className={styles.youtube}
            />
        )
    }

    return (
        <Button
            url={url}
            label='default'
            source={source}
            icon={OpenInNewIcon}
            className={styles.default}
        />
    )
}

export default SourceButton
