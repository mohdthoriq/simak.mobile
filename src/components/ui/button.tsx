import { ReactNode } from 'react'
import { Pressable, Text, PressableProps } from 'react-native'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../utils/cn'

const buttonVariants = cva(
    'px-3 py-2 rounded-lg flex-row items-center justify-center active:opacity-80 disabled:opacity-50',
    {
        variants: {
            variant: {
                primary: 'bg-blue-600',
                danger: 'bg-red-600',
                default: 'bg-gray-200',
            },
            size: {
                default: 'h-10',
                sm: 'h-8 px-2',
                lg: 'h-12 px-6'
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
)

const textVariants = cva(
    'text-sm font-semibold text-center',
    {
        variants: {
            variant: {
                default: 'text-gray-900', // Better contrast than gray-600
                primary: 'text-white',
                danger: 'text-white',
            }
        },
        defaultVariants: {
            variant: 'default',
        }
    }
)

interface ButtonProps extends PressableProps, VariantProps<typeof buttonVariants> {
    children: ReactNode
    className?: string
    textClassName?: string
}

export default function Button({
    children,
    variant,
    size,
    textClassName,
    className,
    disabled,
    ...props
}: ButtonProps) {
    return (
        <Pressable
            disabled={disabled}
            className={cn(buttonVariants({ variant, size }), className)}
            {...props}
        >
            <Text className={cn(textVariants({ variant }), textClassName)}>
                {children}
            </Text>
        </Pressable>
    )
}