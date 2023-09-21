import { RatingBadgeProps } from "modules/Article/components/RatingBadge/types.ts"
import { useMemo } from "react"
import { DifficultyRating } from "modules/Article/hooks/useLanguageStats/types.ts"
import styles from './RatingBadge.module.scss'
import classNames from "classnames"

const RatingBadge = ({ rating }: RatingBadgeProps) => {
    const { label, className } = useMemo(() => {
        switch (rating) {
            case DifficultyRating.BEGINNER: {
                return {
                    label: '1',
                    className: styles.beginner
                }
            }
            case DifficultyRating.INTERMEDIATE: {
                return {
                    label: '2',
                    className: styles.intermediate
                }
            }
            case DifficultyRating.EXPERT: {
                return {
                    label: '3',
                    className: styles.expert
                }
            }
        }
    }, [rating])

    return (
        <div className={classNames(styles.badge, className)} title={rating}>
            {label}
        </div>
    )
}

export default RatingBadge