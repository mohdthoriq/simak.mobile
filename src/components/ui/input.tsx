import { forwardRef, useState } from 'react'
import { TextInput, View, Text, TextInputProps } from 'react-native'
import { cn } from '../../utils/cn'

export interface InputProps extends TextInputProps {
    label?: string
    error?: string
    helperText?: string
    containerClassName?: string
    labelClassName?: string
    errorClassName?: string
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
    disabled?: boolean
}

export const Input = forwardRef<TextInput, InputProps>(({
    label,
    error,
    helperText,
    containerClassName,
    labelClassName,
    errorClassName,
    leftIcon,
    rightIcon,
    className,
    disabled,
    onFocus,
    onBlur,
    ...props
}, ref) => {
    const [isFocused, setIsFocused] = useState(false)

    return (
        <View className={cn("w-full gap-1.5", containerClassName)}>
            {label && (
                <Text className={cn("text-sm font-medium text-gray-700 dark:text-gray-300", labelClassName)}>
                    {label}
                </Text>
            )}
            <View
                className={cn(
                    "flex-row items-center border rounded-lg bg-white dark:bg-zinc-950 px-3 h-10 border-gray-200 dark:border-zinc-800",
                    isFocused && "border-blue-500 ring-1 ring-blue-500",
                    error && "border-red-500 ring-1 ring-red-500",
                    disabled && "opacity-50 bg-gray-50 dark:bg-zinc-900"
                )}
            >
                {leftIcon && <View className="mr-2 justify-center items-center">{leftIcon}</View>}
                <TextInput
                    ref={ref}
                    editable={!disabled}
                    className={cn(
                        "flex-1 text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 py-0 h-full",
                        className
                    )}
                    onFocus={(e) => {
                        setIsFocused(true)
                        onFocus?.(e)
                    }}
                    onBlur={(e) => {
                        setIsFocused(false)
                        onBlur?.(e)
                    }}
                    {...props}
                />
                {rightIcon && <View className="ml-2 justify-center items-center">{rightIcon}</View>}
            </View>
            {error ? (
                <Text className={cn("text-xs text-red-500 font-medium mt-0.5", errorClassName)}>
                    {error}
                </Text>
            ) : helperText ? (
                <Text className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                    {helperText}
                </Text>
            ) : null}
        </View>
    )
})

Input.displayName = 'Input'
export default Input
