import { forwardRef, useState } from 'react'
import { TextInput, View, Text, TextInputProps } from 'react-native'
import { cn } from '../../utils/cn'

export interface TextareaProps extends TextInputProps {
    label?: string
    error?: string
    helperText?: string
    containerClassName?: string
    labelClassName?: string
    errorClassName?: string
    disabled?: boolean
}

export const Textarea = forwardRef<TextInput, TextareaProps>(({
    label,
    error,
    helperText,
    containerClassName,
    labelClassName,
    errorClassName,
    className,
    disabled,
    onFocus,
    onBlur,
    numberOfLines = 4,
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
                    "border rounded-lg bg-white dark:bg-zinc-950 px-3 py-2 border-gray-200 dark:border-zinc-800",
                    isFocused && "border-blue-500 ring-1 ring-blue-500",
                    error && "border-red-500 ring-1 ring-red-500",
                    disabled && "opacity-50 bg-gray-50 dark:bg-zinc-900"
                )}
            >
                <TextInput
                    ref={ref}
                    editable={!disabled}
                    multiline
                    numberOfLines={numberOfLines}
                    textAlignVertical="top"
                    className={cn(
                        "text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 py-0 min-h-[80px]",
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

Textarea.displayName = 'Textarea'
export default Textarea
