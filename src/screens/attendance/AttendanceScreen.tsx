import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { AppHeader } from '../../components'

export default function AttendanceScreen({ navigation }: any) {
  return (
    <View className="flex-1 bg-slate-50">
      <AppHeader title="Absensi Kehadiran" onBack={() => navigation.goBack()} />
      <ScrollView className="flex-1 p-4">
        <View className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm mb-4">
          <Text className="text-slate-800 font-bold text-lg mb-2">Persentase Kehadiran</Text>
          <Text className="text-4xl font-extrabold text-blue-600">98.5%</Text>
          <Text className="text-slate-500 text-xs mt-1">Semester Genap • 65 Hari Sekolah</Text>
        </View>

        <Text className="text-slate-800 font-bold text-base mb-3">Daftar Kehadiran Terbaru</Text>

        <View className="bg-white rounded-2xl border border-slate-100 shadow-sm divide-y divide-slate-100">
          <View className="p-4 flex-row justify-between items-center">
            <View>
              <Text className="text-slate-800 font-semibold">Jumat, 5 Juni 2026</Text>
              <Text className="text-slate-500 text-xs">Jam Masuk: 07:00</Text>
            </View>
            <View className="bg-emerald-100 px-3 py-1 rounded-full">
              <Text className="text-emerald-700 text-xs font-bold">Hadir</Text>
            </View>
          </View>

          <View className="p-4 flex-row justify-between items-center">
            <View>
              <Text className="text-slate-800 font-semibold">Kamis, 4 Juni 2026</Text>
              <Text className="text-slate-500 text-xs">Jam Masuk: 06:55</Text>
            </View>
            <View className="bg-emerald-100 px-3 py-1 rounded-full">
              <Text className="text-emerald-700 text-xs font-bold">Hadir</Text>
            </View>
          </View>

          <View className="p-4 flex-row justify-between items-center">
            <View>
              <Text className="text-slate-800 font-semibold">Rabu, 3 Juni 2026</Text>
              <Text className="text-slate-500 text-xs">Keterangan: Sakit (Ada Surat)</Text>
            </View>
            <View className="bg-amber-100 px-3 py-1 rounded-full">
              <Text className="text-amber-700 text-xs font-bold">Sakit</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
