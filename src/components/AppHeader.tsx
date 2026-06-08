import { View, Text, Pressable } from 'react-native'
import { ReactNode } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

interface AppHeaderProps {
    title: string
    onBack?: () => void
    rightComponent?: ReactNode
    className?: string
}

export default function AppHeader({
    title,
    onBack,
    rightComponent,
    className
}: AppHeaderProps) {
    return (
        <View className={`flex-row items-center justify-between px-4 py-3 bg-white border-b border-slate-200 ${className || ''}`}>
            <View className='flex-1 items-start'>
                {onBack && (
                    <Pressable onPress={onBack} className='p-2 -ml-2 active:opacity-70'>
                        <Icon
                            name="arrow-left"
                            size={20}
                            color="#1f2937"
                        />
                    </Pressable>
                )}
            </View>

            <View className='flex-[2] items-center'>
                <Text className='text-base font-bold text-slate-900' numberOfLines={1}>
                    {title}
                </Text>
            </View>

            <View className='flex-1 items-end'>
                {rightComponent}
            </View>
        </View>
    )
}
