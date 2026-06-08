import { View, Text, ViewProps, TextProps } from 'react-native'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

const alertVariants = cva(
    'relative w-full rounded-lg border p-4 flex-row gap-3',
    {
        variants: {
            variant: {
                default: 'bg-white dark:bg-zinc-950 text-gray-950 dark:text-zinc-50 border-gray-200 dark:border-zinc-800',
                destructive: 'border-red-500/50 dark:border-red-500 bg-red-50 dark:bg-red-950/20 text-red-600 dark:text-red-500',
                success: 'border-emerald-500/50 dark:border-emerald-500 bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-500',
                warning: 'border-amber-500/50 dark:border-amber-500 bg-amber-50 dark:bg-amber-950/20 text-amber-600 dark:text-amber-500',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
)

export interface AlertProps extends ViewProps, VariantProps<typeof alertVariants> {
    icon?: React.ReactNode
    className?: string
}

export function Alert({
    className,
    variant,
    icon,
    children,
    ...props
}: AlertProps) {
    return (
        <View
            className={cn(alertVariants({ variant }), className)}
            {...props}
        >
            {icon && <View className="mt-0.5">{icon}</View>}
            <View className="flex-1 flex-col gap-1">
                {children}
            </View>
        </View>
    )
}

export interface AlertTitleProps extends TextProps {
    className?: string
}

export function AlertTitle({ className, ...props }: AlertTitleProps) {
    return (
        <Text
            className={cn(
                "font-semibold leading-none tracking-tight text-gray-900 dark:text-zinc-50 text-base",
                className
            )}
            {...props}
        />
    )
}

export interface AlertDescriptionProps extends TextProps {
    className?: string
}

export function AlertDescription({ className, ...props }: AlertDescriptionProps) {
    return (
        <Text
            className={cn(
                "text-sm text-gray-600 dark:text-zinc-400 [&_p]:leading-relaxed",
                className
            )}
            {...props}
        />
    )
}
