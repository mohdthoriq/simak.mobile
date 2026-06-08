import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { useAuthStore } from '../../store/auth.store';
import { AppHeader } from '../../components';

export default function AdminDashboard() {
  const { user, logout } = useAuthStore();

  return (
    <View className="flex-1 bg-slate-50">
      <AppHeader 
        title="Admin Panel" 
        rightComponent={
          <Pressable 
            onPress={logout}
            className="bg-red-50 px-3 py-1.5 rounded-full border border-red-100 active:bg-red-100"
          >
            <Text className="text-red-600 text-xs font-semibold">Keluar</Text>
          </Pressable>
        }
      />
      
      <ScrollView className="flex-1 px-4 py-6">
        {/* Welcome Admin Card */}
        <View className="bg-slate-900 p-6 rounded-3xl shadow-lg mb-6">
          <Text className="text-white/70 font-medium text-sm">Administrator</Text>
          <Text className="text-white text-2xl font-bold mt-1">{user?.fullName || user?.email || 'Admin'}</Text>
          <View className="flex-row items-center mt-3 bg-white/10 self-start px-3 py-1 rounded-full">
            <Text className="text-white text-xs font-semibold uppercase tracking-wide">
              Sistem Kontrol Utama
            </Text>
          </View>
        </View>

        {/* Quick Stats */}
        <Text className="text-slate-800 font-bold text-lg mb-4">Statistik Sistem</Text>
        <View className="flex-row flex-wrap justify-between mb-6">
          <View className="bg-white p-5 rounded-2xl w-[48%] mb-4 border border-slate-100 shadow-sm">
            <Text className="text-2xl mb-1">👥</Text>
            <Text className="text-slate-500 text-xs font-semibold uppercase">Total Pengguna</Text>
            <Text className="text-slate-800 text-2xl font-extrabold mt-1">124</Text>
          </View>

          <View className="bg-white p-5 rounded-2xl w-[48%] mb-4 border border-slate-100 shadow-sm">
            <Text className="text-2xl mb-1">🟢</Text>
            <Text className="text-slate-500 text-xs font-semibold uppercase">Status Server</Text>
            <Text className="text-emerald-600 text-lg font-extrabold mt-2">AKTIF</Text>
          </View>
        </View>

        {/* Administration Actions */}
        <Text className="text-slate-800 font-bold text-lg mb-4">Aktivitas Admin</Text>
        <View className="bg-white rounded-2xl border border-slate-100 shadow-sm p-2 mb-6">
          <Pressable className="flex-row items-center justify-between p-4 border-b border-slate-50 active:bg-slate-50 rounded-t-xl">
            <View className="flex-row items-center">
              <Text className="text-xl mr-3">👤</Text>
              <View>
                <Text className="text-slate-800 font-bold">Kelola Pengguna</Text>
                <Text className="text-slate-400 text-xs">Tambah, ubah, atau hapus user</Text>
              </View>
            </View>
            <Text className="text-slate-400 font-bold">→</Text>
          </Pressable>

          <Pressable className="flex-row items-center justify-between p-4 border-b border-slate-50 active:bg-slate-50">
            <View className="flex-row items-center">
              <Text className="text-xl mr-3">⚙️</Text>
              <View>
                <Text className="text-slate-800 font-bold">Pengaturan Aplikasi</Text>
                <Text className="text-slate-400 text-xs">Konfigurasi sistem & server</Text>
              </View>
            </View>
            <Text className="text-slate-400 font-bold">→</Text>
          </Pressable>

          <Pressable className="flex-row items-center justify-between p-4 active:bg-slate-50 rounded-b-xl">
            <View className="flex-row items-center">
              <Text className="text-xl mr-3">📊</Text>
              <View>
                <Text className="text-slate-800 font-bold">Log Aktivitas</Text>
                <Text className="text-slate-400 text-xs">Pantau riwayat aksi pengguna</Text>
              </View>
            </View>
            <Text className="text-slate-400 font-bold">→</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}
