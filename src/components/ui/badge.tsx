import { View, Text, ViewProps } from 'react-native'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

const badgeVariants = cva(
    'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold border',
    {
        variants: {
            variant: {
                default: 'border-transparent bg-gray-900 dark:bg-zinc-50 text-white dark:text-zinc-900',
                secondary: 'border-transparent bg-gray-100 dark:bg-zinc-800 text-gray-900 dark:text-zinc-50',
                destructive: 'border-transparent bg-red-500 text-white',
                outline: 'text-gray-950 dark:text-zinc-50 border-gray-200 dark:border-zinc-800',
                success: 'border-transparent bg-emerald-500 text-white',
                warning: 'border-transparent bg-amber-500 text-white',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
)

const badgeTextVariants = cva(
    'text-xs font-semibold',
    {
        variants: {
            variant: {
                default: 'text-white dark:text-zinc-900',
                secondary: 'text-gray-900 dark:text-zinc-50',
                destructive: 'text-white',
                outline: 'text-gray-950 dark:text-zinc-50',
                success: 'text-white',
                warning: 'text-white',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
)

export interface BadgeProps extends ViewProps, VariantProps<typeof badgeVariants> {
    children: string
    className?: string
    textClassName?: string
}

export function Badge({
    children,
    variant,
    className,
    textClassName,
    ...props
}: BadgeProps) {
    return (
        <View className={cn(badgeVariants({ variant }), className)} {...props}>
            <Text className={cn(badgeTextVariants({ variant }), textClassName)}>
                {children}
            </Text>
        </View>
    )
}

export default Badge
