import { Modal, View, ModalProps, Pressable } from 'react-native'
import { ReactNode } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

interface AppModalProps extends ModalProps {
    visible: boolean
    onClose: () => void
    children: ReactNode
    className?: string
}

const AppModal: React.FC<AppModalProps> = ({
    visible,
    onClose,
    children,
    className,
    ...props
}) => {
    return (
        <Modal
            visible={visible}
            transparent
            animationType="fade"
            onRequestClose={onClose}
            {...props}
        >
            {/* Overlay */}
            <View className="flex-1 items-center justify-center bg-slate-900/40 backdrop-blur-sm">
                {/* Modal Content */}
                <View className={`bg-white rounded-xl mx-4 w-full shadow-2xl ${className || ''}`}>
                    {/* Close Button */}
                    <Pressable
                        onPress={onClose}
                        className="absolute top-3 right-3 z-10 p-2 -mr-2 active:opacity-70 rounded-full bg-slate-100"
                    >
                        <Icon
                            name="times"
                            size={18}
                            color="#94a3b8"
                        />
                    </Pressable>
                    
                    {/* Content */}
                    <View className="py-4">
                        {children}
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default AppModal
