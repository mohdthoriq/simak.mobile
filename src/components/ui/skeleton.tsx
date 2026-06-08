import { View, ViewProps } from 'react-native'
import { cn } from '../../utils/cn'

export interface SkeletonProps extends ViewProps {
    className?: string
}

export function Skeleton({ className, ...props }: SkeletonProps) {
    return (
        <View
            className={cn(
                "animate-pulse rounded-md bg-gray-200 dark:bg-zinc-800",
                className
            )}
            {...props}
        />
    )
}

export default Skeleton
