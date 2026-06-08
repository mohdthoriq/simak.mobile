import { View, ActivityIndicator } from 'react-native'

export interface LoadingProps {
    fullScreen?: boolean
    color?: string
}

export default function Loading({ 
    fullScreen = false, 
    color = '#2563eb' 
}: LoadingProps) {
    if (fullScreen) {
        return (
            <View className="flex-1 justify-center items-center bg-slate-50">
                <ActivityIndicator size="large" color={color} />
            </View>
        )
    }

    return (
        <View className="p-4 justify-center items-center">
            <ActivityIndicator size="small" color={color} />
        </View>
    )
}
