import { Image, ImageSourcePropType, Text, View } from "react-native";

export interface AppAvatarProps {
    source?: ImageSourcePropType
    fallbackText: string
    size?: 'sm' | 'md' | 'lg'
    className?: string
}

export default function AppAvatar({
    source,
    fallbackText,
    size = 'md',
    className
}: AppAvatarProps) {
    const sizeClass =
        size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-16 h-16' : 'w-12 h-12';
    
    const textSizeClass =
        size === 'sm' ? 'text-xs' : size === 'lg' ? 'text-xl' : 'text-base';

    return (
        <View className={`${sizeClass} rounded-full bg-blue-100 overflow-hidden justify-center items-center ${className || ''}`}>
            {source ? (
                <Image source={source} className="w-full h-full" resizeMode="cover" />
            ) : (
                <Text className={`font-bold text-blue-700 uppercase ${textSizeClass}`}>
                    {fallbackText.substring(0, 2).toUpperCase()}
                </Text>
            )}    
        </View>
    )
}
