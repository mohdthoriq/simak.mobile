import React from "react";
import { View, Text, SafeAreaView } from 'react-native';
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import Button from "./ui/button";

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
    return (
        <SafeAreaView className="flex-1 bg-slate-50 justify-center items-center p-6">
            <View className="w-16 h-16 rounded-full bg-red-100 justify-center items-center mb-4">
                <Text className="text-3xl">⚠️</Text>
            </View>
            
            <Text className="text-xl font-bold text-slate-900 mb-2 text-center">
                Ups! Sistem Mengalami Kendala
            </Text>
            
            <Text className="text-sm text-slate-600 text-center mb-6">
                {(error as any)?.message || 'Terjadi kesalahan yang tidak terduga pada aplikasi.'}
            </Text>
            
            <Button 
                variant="danger" 
                onPress={resetErrorBoundary} 
                className="min-w-[150px]"
            >
                Muat Ulang
            </Button>
        </SafeAreaView>
    );
};

export interface AppErrorBoundaryProps {
    children: React.ReactNode;
    onReset? : () => void
}

export default function AppErrorBoundary({children, onReset}: AppErrorBoundaryProps) {
    return (
        <ErrorBoundary FallbackComponent={ErrorFallback} onError={onReset}>
            {children}
        </ErrorBoundary>
    )
}