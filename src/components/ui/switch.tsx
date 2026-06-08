import { useRef, useEffect } from 'react'
import { Pressable, Animated, StyleSheet, View } from 'react-native'
import { cn } from '../../utils/cn'

export interface SwitchProps {
    checked: boolean
    onCheckedChange: (checked: boolean) => void
    disabled?: boolean
    className?: string
}

export function Switch({
    checked,
    onCheckedChange,
    disabled = false,
    className
}: SwitchProps) {
    const animatedValue = useRef(new Animated.Value(checked ? 1 : 0)).current

    useEffect(() => {
        Animated.timing(animatedValue, {
            toValue: checked ? 1 : 0,
            duration: 200,
            useNativeDriver: false,
        }).start()
    }, [checked])

    const translateX = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: [2, 22],
    })

    const backgroundColor = animatedValue.interpolate({
        inputRange: [0, 1],
        outputRange: ['#e4e4e7', '#3b82f6'], // zinc-200 to blue-500
    })

    return (
        <Pressable
            disabled={disabled}
            onPress={() => onCheckedChange(!checked)}
            className={cn(
                "h-6 w-11 rounded-full justify-center",
                disabled && "opacity-50",
                className
            )}
        >
            <Animated.View
                style={[
                    styles.track,
                    { backgroundColor }
                ]}
            >
                <Animated.View
                    style={[
                        styles.thumb,
                        { transform: [{ translateX }] }
                    ]}
                />
            </Animated.View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    track: {
        width: '100%',
        height: '100%',
        borderRadius: 9999,
        justifyContent: 'center',
    },
    thumb: {
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
    }
})

export default Switch
