import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable, KeyboardAvoidingView, Platform } from 'react-native';
import { Controller } from 'react-hook-form';
import { useRegisterForm } from '../../services/auth.service';
import Input from '../../components/ui/input';
import Button from '../../components/ui/button';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamList } from '../../navigation/AuthStack';

export default function RegisterScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
  const { form, isLoading, onSubmit } = useRegisterForm();
  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');

  const handleRegister = (data: any) => {
    if (data.password !== confirmPassword) {
      setConfirmPasswordError('Password konfirmasi tidak cocok');
      return;
    }
    setConfirmPasswordError('');
    onSubmit(data);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-slate-50"
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Banner Section - Inspired by simakWeb layout */}
        <View className="bg-slate-900 px-6 py-10 items-center justify-center rounded-b-[40px] shadow-lg">
          <View className="w-14 h-14 bg-emerald-600/20 border border-emerald-500/30 rounded-2xl items-center justify-center mb-4">
            <Text className="text-2xl">📋</Text>
          </View>
          <Text className="text-white text-xs font-semibold tracking-widest uppercase opacity-60 mb-1">
            SISTEM MANAJEMEN PESANTREN
          </Text>
          <Text className="text-white text-lg font-bold text-center px-4 mb-2">
            Absensi Digital & Manajemen Akademik
          </Text>
          <Text className="text-slate-400 text-xs text-center px-6 leading-relaxed">
            Catat dan pantau kehadiran santri secara real-time. Laporan otomatis tersedia kapan saja.
          </Text>
          
          {/* Progress dots decoration */}
          <View className="flex-row gap-1.5 mt-4">
            <View className="w-4 h-1.5 rounded-full bg-blue-500" />
            <View className="w-1.5 h-1.5 rounded-full bg-slate-700" />
            <View className="w-1.5 h-1.5 rounded-full bg-slate-700" />
            <View className="w-1.5 h-1.5 rounded-full bg-slate-700" />
          </View>
        </View>

        {/* Form Section */}
        <View className="px-6 py-8">
          <View className="items-center mb-6">
            <Text className="text-2xl font-extrabold text-slate-800">Buat Akun Baru</Text>
            <Text className="text-slate-500 text-sm mt-1">Isi data di bawah untuk mendaftar</Text>
          </View>

          <View className="gap-4">
            {/* Nama Lengkap */}
            <Controller
              control={form.control}
              name="fullName"
              render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <Input
                  label="Nama Lengkap"
                  placeholder="Nama lengkap Anda"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={error?.message}
                />
              )}
            />

            {/* Email */}
            <Controller
              control={form.control}
              name="email"
              render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <Input
                  label="Email"
                  placeholder="nama@contoh.com"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={error?.message}
                />
              )}
            />

            {/* Nomor Telepon */}
            <Controller
              control={form.control}
              name="phone"
              render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <Input
                  label="Nomor Telepon"
                  placeholder="Minimal 10 karakter"
                  keyboardType="phone-pad"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={error?.message}
                />
              )}
            />

            {/* Peran (Role Selector) */}
            <View className="gap-1.5">
              <Text className="text-sm font-medium text-gray-700">Peran</Text>
              <Controller
                control={form.control}
                name="role"
                render={({ field: { onChange, value } }) => (
                  <View className="flex-row border border-gray-200 rounded-xl overflow-hidden bg-white">
                    <Pressable
                      onPress={() => onChange('SANTRI')}
                      className={`flex-1 py-3 items-center justify-center ${
                        value === 'SANTRI' ? 'bg-slate-900' : 'bg-white'
                      }`}
                    >
                      <Text
                        className={`text-sm font-semibold ${
                          value === 'SANTRI' ? 'text-white' : 'text-slate-700'
                        }`}
                      >
                        Santri
                      </Text>
                    </Pressable>
                    <Pressable
                      onPress={() => onChange('WALI_SANTRI')}
                      className={`flex-1 py-3 items-center justify-center ${
                        value === 'WALI_SANTRI' ? 'bg-slate-900' : 'bg-white'
                      }`}
                    >
                      <Text
                        className={`text-sm font-semibold ${
                          value === 'WALI_SANTRI' ? 'text-white' : 'text-slate-700'
                        }`}
                      >
                        Wali Santri
                      </Text>
                    </Pressable>
                  </View>
                )}
              />
            </View>

            {/* Password */}
            <Controller
              control={form.control}
              name="password"
              render={({ field: { onChange, onBlur, value }, fieldState: { error } }) => (
                <Input
                  label="Password"
                  placeholder="Minimal 6 karakter"
                  secureTextEntry
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  error={error?.message}
                />
              )}
            />

            {/* Konfirmasi Password */}
            <Input
              label="Konfirmasi Password"
              placeholder="Ulangi password"
              secureTextEntry
              onChangeText={setConfirmPassword}
              value={confirmPassword}
              error={confirmPasswordError}
            />

            {/* Submit Button */}
            <Button
              variant="primary"
              size="lg"
              onPress={form.handleSubmit(handleRegister)}
              disabled={isLoading}
              className="bg-slate-900 rounded-xl mt-4 h-12"
              textClassName="text-white font-bold"
            >
              {isLoading ? 'Sedang Mendaftar...' : 'Daftar'}
            </Button>

            {/* Navigation back to login */}
            <View className="flex-row justify-center items-center mt-4 mb-6">
              <Text className="text-slate-500 text-sm">Sudah punya akun? </Text>
              <Pressable onPress={() => navigation.navigate('Login')}>
                <Text className="text-blue-600 font-bold text-sm">Masuk di sini</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
