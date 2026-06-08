import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { AppHeader } from '../../components'

export default function JournalScreen({ navigation }: any) {
  return (
    <View className="flex-1 bg-slate-50">
      <AppHeader title="Jurnal Mengajar" onBack={() => navigation.goBack()} />
      <ScrollView className="flex-1 p-4">
        <View className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm mb-4">
          <Text className="text-slate-800 font-bold text-lg mb-1">Log Mengajar</Text>
          <Text className="text-slate-500 text-sm">Rekapitulasi agenda mengajar harian guru</Text>
        </View>

        <Text className="text-slate-800 font-bold text-base mb-3">Daftar Agenda Mengajar</Text>

        <View className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm mb-4">
          <Text className="text-blue-600 font-bold text-xs">Jumat, 5 Juni 2026</Text>
          <Text className="text-slate-800 font-bold text-base mt-1">Kelas XI-A IPA • Matematika</Text>
          <Text className="text-slate-600 text-sm mt-2">Membahas penyelesaian persamaan kuadrat dan latihan soal halaman 45.</Text>
          <View className="border-t border-slate-100 pt-3 mt-3 flex-row justify-between items-center">
            <Text className="text-slate-400 text-xs">Jam Ke: 1 - 2 (07:15 - 08:45)</Text>
            <View className="bg-blue-100 px-2 py-0.5 rounded-md">
              <Text className="text-blue-700 text-[10px] font-bold">Terisi</Text>
            </View>
          </View>
        </View>

        <View className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
          <Text className="text-blue-600 font-bold text-xs">Kamis, 4 Juni 2026</Text>
          <Text className="text-slate-800 font-bold text-base mt-1">Kelas XI-B IPS • Matematika</Text>
          <Text className="text-slate-600 text-sm mt-2">Ulangan harian bab program linier kelas XI-B IPS berjalan dengan tertib.</Text>
          <View className="border-t border-slate-100 pt-3 mt-3 flex-row justify-between items-center">
            <Text className="text-slate-400 text-xs">Jam Ke: 3 - 4 (09:00 - 10:30)</Text>
            <View className="bg-blue-100 px-2 py-0.5 rounded-md">
              <Text className="text-blue-700 text-[10px] font-bold">Terisi</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
