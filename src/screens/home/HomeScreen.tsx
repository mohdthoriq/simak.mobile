import React from 'react'
import { View, Text, ScrollView, Pressable } from 'react-native'
import { useAuthStore } from '../../store/auth.store'
import { AppHeader, AppAvatar } from '../../components'

export default function HomeScreen({ navigation }: any) {
  const { user } = useAuthStore();
  const roleName = 
    user?.role === 'MENTOR' ? 'Guru' :
    user?.role === 'SANTRI' ? 'Siswa' : 'Orang Tua';

  const colorScheme = 
    user?.role === 'MENTOR' ? 'bg-blue-600' :
    user?.role === 'SANTRI' ? 'bg-emerald-600' : 'bg-amber-600';

  const roleDesc =
    user?.role === 'MENTOR' ? 'SMP N 1 Harapan Bangsa' :
    user?.role === 'SANTRI' ? 'Kelas XI-A IPA' : 'Wali dari: Andi Saputra';

  return (
    <View className="flex-1 bg-slate-50">
      <AppHeader 
        title="Dashboard Utama" 
        rightComponent={
          <Pressable onPress={() => navigation.navigate('Profile')}>
            <AppAvatar fallbackText={user?.name || 'US'} size="sm" />
          </Pressable>
        }
      />
      
      <ScrollView className="flex-1 px-4 py-4">
        {/* Welcome card */}
        <View className={`${colorScheme} p-6 rounded-3xl shadow-lg shadow-slate-200 mb-6`}>
          <Text className="text-white/80 font-medium text-sm">Selamat Datang,</Text>
          <Text className="text-white text-2xl font-bold mt-1">{user?.name}</Text>
          <View className="flex-row items-center mt-3 bg-white/20 self-start px-3 py-1 rounded-full">
            <Text className="text-white text-xs font-semibold uppercase tracking-wide">
              {roleName} • {roleDesc}
            </Text>
          </View>
        </View>

        {/* Feature section */}
        <Text className="text-slate-800 font-bold text-lg mb-4">Layanan Akademik</Text>
        
        {user?.role === 'MENTOR' && (
          <View className="flex-row flex-wrap justify-between">
            <Pressable 
              onPress={() => navigation.navigate('Attendance')}
              className="bg-white p-5 rounded-2xl w-[48%] mb-4 border border-slate-100 shadow-sm"
            >
              <Text className="text-3xl mb-2">📅</Text>
              <Text className="text-slate-800 font-bold">Absensi Kelas</Text>
              <Text className="text-slate-400 text-xs mt-1">Isi & rekap kehadiran siswa</Text>
            </Pressable>

            <Pressable 
              onPress={() => navigation.navigate('Journal')}
              className="bg-white p-5 rounded-2xl w-[48%] mb-4 border border-slate-100 shadow-sm"
            >
              <Text className="text-3xl mb-2">📝</Text>
              <Text className="text-slate-800 font-bold">Jurnal Harian</Text>
              <Text className="text-slate-400 text-xs mt-1">Catat agenda mengajar harian</Text>
            </Pressable>

            <Pressable 
              onPress={() => navigation.navigate('Assignment')}
              className="bg-white p-5 rounded-2xl w-[48%] mb-4 border border-slate-100 shadow-sm"
            >
              <Text className="text-3xl mb-2">🎒</Text>
              <Text className="text-slate-800 font-bold">Tugas Mandiri</Text>
              <Text className="text-slate-400 text-xs mt-1">Berikan & koreksi tugas</Text>
            </Pressable>

            <Pressable 
              onPress={() => navigation.navigate('Evaluation')}
              className="bg-white p-5 rounded-2xl w-[48%] mb-4 border border-slate-100 shadow-sm"
            >
              <Text className="text-3xl mb-2">📊</Text>
              <Text className="text-slate-800 font-bold">Penilaian</Text>
              <Text className="text-slate-400 text-xs mt-1">Input nilai ulangan & rapor</Text>
            </Pressable>
          </View>
        )}

        {user?.role === 'SANTRI' && (
          <View className="flex-row flex-wrap justify-between">
            <Pressable 
              onPress={() => navigation.navigate('Attendance')}
              className="bg-white p-5 rounded-2xl w-[48%] mb-4 border border-slate-100 shadow-sm"
            >
              <Text className="text-3xl mb-2">📅</Text>
              <Text className="text-slate-800 font-bold">Kehadiran Saya</Text>
              <Text className="text-slate-400 text-xs mt-1">Persentase absen: 98%</Text>
            </Pressable>

            <Pressable 
              onPress={() => navigation.navigate('Assignment')}
              className="bg-white p-5 rounded-2xl w-[48%] mb-4 border border-slate-100 shadow-sm"
            >
              <Text className="text-3xl mb-2">🎒</Text>
              <Text className="text-slate-800 font-bold">Tugas & PR</Text>
              <Text className="text-slate-400 text-xs mt-1">2 Tugas aktif belum selesai</Text>
            </Pressable>

            <Pressable 
              onPress={() => navigation.navigate('Evaluation')}
              className="bg-white p-5 rounded-2xl w-[48%] mb-4 border border-slate-100 shadow-sm"
            >
              <Text className="text-3xl mb-2">📊</Text>
              <Text className="text-slate-800 font-bold">Hasil Belajar</Text>
              <Text className="text-slate-400 text-xs mt-1">Nilai ulangan & rapor UTS</Text>
            </Pressable>

            <Pressable 
              onPress={() => navigation.navigate('Profile')}
              className="bg-white p-5 rounded-2xl w-[48%] mb-4 border border-slate-100 shadow-sm"
            >
              <Text className="text-3xl mb-2">👤</Text>
              <Text className="text-slate-800 font-bold">Biodata Siswa</Text>
              <Text className="text-slate-400 text-xs mt-1">Kelola data profil lengkap</Text>
            </Pressable>
          </View>
        )}

        {user?.role === 'WALI_SANTRI' && (
          <View className="flex-row flex-wrap justify-between">
            <Pressable 
              onPress={() => navigation.navigate('Attendance')}
              className="bg-white p-5 rounded-2xl w-[48%] mb-4 border border-slate-100 shadow-sm"
            >
              <Text className="text-3xl mb-2">📅</Text>
              <Text className="text-slate-800 font-bold">Absensi Anak</Text>
              <Text className="text-slate-400 text-xs mt-1">Andi Saputra hari ini: Hadir</Text>
            </Pressable>

            <Pressable 
              onPress={() => navigation.navigate('Assignment')}
              className="bg-white p-5 rounded-2xl w-[48%] mb-4 border border-slate-100 shadow-sm"
            >
              <Text className="text-3xl mb-2">🎒</Text>
              <Text className="text-slate-800 font-bold">Tugas Anak</Text>
              <Text className="text-slate-400 text-xs mt-1">Pantau progres pengerjaan PR</Text>
            </Pressable>

            <Pressable 
              onPress={() => navigation.navigate('Evaluation')}
              className="bg-white p-5 rounded-2xl w-[48%] mb-4 border border-slate-100 shadow-sm"
            >
              <Text className="text-3xl mb-2">📊</Text>
              <Text className="text-slate-800 font-bold">Nilai Akademik</Text>
              <Text className="text-slate-400 text-xs mt-1">Grafik perkembangan nilai Andi</Text>
            </Pressable>

            <Pressable 
              onPress={() => navigation.navigate('Profile')}
              className="bg-white p-5 rounded-2xl w-[48%] mb-4 border border-slate-100 shadow-sm"
            >
              <Text className="text-3xl mb-2">👤</Text>
              <Text className="text-slate-800 font-bold">Kontak Wali</Text>
              <Text className="text-slate-400 text-xs mt-1">Hubungi wali kelas</Text>
            </Pressable>
          </View>
        )}
      </ScrollView>
    </View>
  )
}
