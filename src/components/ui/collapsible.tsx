import { createContext, useContext, useState, ReactNode } from 'react'
import { View, Pressable, ViewProps, PressableProps } from 'react-native'
import { cn } from '../../utils/cn'

interface CollapsibleContextType {
    open: boolean
    setOpen: (open: boolean) => void
}

const CollapsibleContext = createContext<CollapsibleContextType | undefined>(undefined)

export interface CollapsibleProps extends ViewProps {
    open?: boolean
    defaultOpen?: boolean
    onOpenChange?: (open: boolean) => void
    children: ReactNode
    className?: string
}

export function Collapsible({
    open: customOpen,
    defaultOpen = false,
    onOpenChange,
    children,
    className,
    ...props
}: CollapsibleProps) {
    const [localOpen, setLocalOpen] = useState(defaultOpen)
    const open = customOpen !== undefined ? customOpen : localOpen

    const setOpen = (newOpen: boolean) => {
        setLocalOpen(newOpen)
        onOpenChange?.(newOpen)
    }

    return (
        <CollapsibleContext.Provider value={{ open, setOpen }}>
            <View className={cn("w-full", className)} {...props}>
                {children}
            </View>
        </CollapsibleContext.Provider>
    )
}

export interface CollapsibleTriggerProps extends PressableProps {
    className?: string
}

export function CollapsibleTrigger({ children, className, ...props }: CollapsibleTriggerProps) {
    const context = useContext(CollapsibleContext)
    if (!context) throw new Error("CollapsibleTrigger must be used within Collapsible")

    return (
        <Pressable
            onPress={() => context.setOpen(!context.open)}
            className={cn("w-full", className)}
            {...props}
        >
            {children}
        </Pressable>
    )
}

export interface CollapsibleContentProps extends ViewProps {
    className?: string
}

export function CollapsibleContent({ children, className, ...props }: CollapsibleContentProps) {
    const context = useContext(CollapsibleContext)
    if (!context) throw new Error("CollapsibleContent must be used within Collapsible")

    if (!context.open) return null

    return (
        <View className={cn("w-full overflow-hidden", className)} {...props}>
            {children}
        </View>
    )
}
