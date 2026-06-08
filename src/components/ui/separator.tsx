import { View, ViewProps } from 'react-native'
import { cn } from '../../utils/cn'

export interface SeparatorProps extends ViewProps {
    orientation?: 'horizontal' | 'vertical'
    decorative?: boolean
    className?: string
}

export function Separator({
    className,
    orientation = 'horizontal',
    decorative = true,
    ...props
}: SeparatorProps) {
    return (
        <View
            // role = decorative ? 'none' : 'separator' (handled implicitly by styling/accessibility)
            className={cn(
                "bg-gray-200 dark:bg-zinc-800",
                orientation === 'horizontal' ? 'h-[1px] w-full' : 'w-[1px] h-full',
                className
            )}
            {...props}
        />
    )
}

export default Separator
