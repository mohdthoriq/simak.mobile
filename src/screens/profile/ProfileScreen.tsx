import React from 'react'
import { View, Text, Pressable } from 'react-native'
import { useAuthStore } from '../../store/auth.store'
import { AppHeader, AppAvatar } from '../../components'

export default function ProfileScreen({ navigation }: any) {
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
  };

  const getRoleName = () => {
    switch (user?.role) {
      case 'MENTOR': return 'Guru';
      case 'SANTRI': return 'Siswa';
      case 'WALI_SANTRI': return 'Orang Tua / Wali';
      default: return 'User';
    }
  };

  return (
    <View className="flex-1 bg-slate-50">
      <AppHeader title="Profil Saya" onBack={navigation.canGoBack() ? () => navigation.goBack() : undefined} />
      
      <View className="flex-1 p-6 justify-between">
        <View className="items-center bg-white p-6 rounded-3xl border border-slate-100 shadow-sm mt-4">
          <AppAvatar fallbackText={user?.name || 'US'} size="lg" className="mb-4" />
          <Text className="text-xl font-bold text-slate-800">{user?.name}</Text>
          <Text className="text-slate-400 text-xs mt-1">{user?.email}</Text>

          <View className="bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mt-4">
            <Text className="text-blue-700 font-semibold text-xs uppercase tracking-wide">
              {getRoleName()}
            </Text>
          </View>

          <View className="w-full border-t border-slate-100 mt-6 pt-6 gap-y-4">
            <View className="flex-row justify-between items-center">
              <Text className="text-slate-400 text-sm">Sekolah</Text>
              <Text className="text-slate-800 font-medium text-sm">SMA N 1 Harapan Bangsa</Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text className="text-slate-400 text-sm">Tahun Ajaran</Text>
              <Text className="text-slate-800 font-medium text-sm">2025/2026 - Genap</Text>
            </View>
            <View className="flex-row justify-between items-center">
              <Text className="text-slate-400 text-sm">Status Akun</Text>
              <Text className="text-emerald-600 font-bold text-sm">Aktif</Text>
            </View>
          </View>
        </View>

        <Pressable
          onPress={handleLogout}
          className="bg-red-500 active:bg-red-600 py-4 rounded-2xl items-center justify-center shadow-lg shadow-red-500/20 mb-6"
        >
          <Text className="text-white font-bold text-base">Keluar Aplikasi</Text>
        </Pressable>
      </View>
    </View>
  )
}
