import React from 'react'
import { View, Text, Pressable, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { AuthStackParamList } from '../../navigation/AuthStack'
import { Controller } from 'react-hook-form'
import { useLoginForm } from '../../services/auth.service'
import Input from '../../components/ui/input'
import Button from '../../components/ui/button'


export default function LoginScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  
  // Destructure hook useLoginForm Anda
  const { form, isLoading, onSubmit } = useLoginForm();
  const { control, handleSubmit, formState: { errors } } = form;

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-slate-50"
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', paddingHorizontal: 24 }}>
        
        <View className="items-center mb-10 mt-10">
          <View className="w-20 h-20 bg-blue-600 rounded-2xl items-center justify-center shadow-lg shadow-blue-500/30 mb-4">
            <Text className="text-white text-4xl font-extrabold">S</Text>
          </View>
          <Text className="text-3xl font-bold text-slate-800 tracking-tight">SIMAK Mobile</Text>
          <Text className="text-slate-500 text-center mt-2">
            Sistem Informasi Manajemen Akademik
          </Text>
        </View>

        <View className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-100 border border-slate-100">
          <Text className="text-slate-800 font-semibold text-xl mb-6 text-center">
            Selamat Datang Kembali
          </Text>

          {/* Input Email dibungkus Controller dari react-hook-form */}
          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Email"
                placeholder="Masukkan email Anda"
                keyboardType="email-address"
                autoCapitalize="none"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.email?.message} // Otomatis dapat error dari Zod schema
              />
            )}
          />

          {/* Input Password dibungkus Controller */}
          <Controller
            control={control}
            name="password"
            render={({ field: { onChange, onBlur, value } }) => (
              <Input
                label="Password"
                placeholder="Masukkan password Anda"
                secureTextEntry
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                error={errors.password?.message} // Otomatis dapat error dari Zod schema
              />
            )}
          />

          <View className="items-end mb-6 mt-[-8px]">
            <Pressable className="active:opacity-70 p-2 -mr-2">
              <Text className="text-blue-600 font-medium text-sm">Lupa Password?</Text>
            </Pressable>
          </View>

          {/* Tombol trigger handleSubmit dari react-hook-form */}
          <Button 
            onPress={handleSubmit(onSubmit)} 
            disabled={isLoading}
            className={isLoading ? 'opacity-70' : ''}
          >
            {isLoading ? 'Memproses...' : 'Masuk'}
          </Button>

          <View className="flex-row justify-center items-center mt-6">
            <Text className="text-slate-500 text-sm">Belum punya akun? </Text>
            <Pressable onPress={() => navigation.navigate('Register')} className="p-2 -ml-2">
              <Text className="text-blue-600 font-bold text-sm">Daftar di sini</Text>
            </Pressable>
          </View>
        </View>

        <Text className="text-slate-400 text-center text-xs mt-8 mb-6">
          v0.0.1 • Antigravity Power Dev
        </Text>

      </ScrollView>
    </KeyboardAvoidingView>
  )
}