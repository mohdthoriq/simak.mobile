import { View, Text, ViewProps, TextProps } from 'react-native'
import { cn } from '../../utils/cn'

export interface CardProps extends ViewProps {
    className?: string
}

export function Card({ className, ...props }: CardProps) {
    return (
        <View
            className={cn(
                "rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-sm",
                className
            )}
            {...props}
        />
    )
}

export interface CardHeaderProps extends ViewProps {
    className?: string
}

export function CardHeader({ className, ...props }: CardHeaderProps) {
    return (
        <View
            className={cn("flex flex-col space-y-1.5 p-6", className)}
            {...props}
        />
    )
}

export interface CardTitleProps extends TextProps {
    className?: string
}

export function CardTitle({ className, ...props }: CardTitleProps) {
    return (
        <Text
            className={cn(
                "font-semibold tracking-tight text-xl text-gray-900 dark:text-zinc-50",
                className
            )}
            {...props}
        />
    )
}

export interface CardDescriptionProps extends TextProps {
    className?: string
}

export function CardDescription({ className, ...props }: CardDescriptionProps) {
    return (
        <Text
            className={cn("text-sm text-gray-500 dark:text-zinc-400", className)}
            {...props}
        />
    )
}

export interface CardContentProps extends ViewProps {
    className?: string
}

export function CardContent({ className, ...props }: CardContentProps) {
    return (
        <View
            className={cn("p-6 pt-0", className)}
            {...props}
        />
    )
}

export interface CardFooterProps extends ViewProps {
    className?: string
}

export function CardFooter({ className, ...props }: CardFooterProps) {
    return (
        <View
            className={cn("flex flex-row items-center p-6 pt-0", className)}
            {...props}
        />
    )
}
