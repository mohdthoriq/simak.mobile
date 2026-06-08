import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { AppHeader } from '../../components'

export default function AssignmentScreen({ navigation }: any) {
  return (
    <View className="flex-1 bg-slate-50">
      <AppHeader title="Tugas Mandiri" onBack={() => navigation.goBack()} />
      <ScrollView className="flex-1 p-4">
        <View className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm mb-4">
          <Text className="text-slate-800 font-bold text-lg mb-1">Tugas Aktif</Text>
          <Text className="text-slate-500 text-sm">Ada 2 tugas aktif yang harus diselesaikan</Text>
        </View>

        <Text className="text-slate-800 font-bold text-base mb-3">Daftar Tugas Anda</Text>

        <View className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm mb-4">
          <View className="flex-row justify-between items-start mb-2">
            <View className="flex-1 mr-2">
              <Text className="text-slate-800 font-bold text-base">Matematika Wajib: Trigonometri</Text>
              <Text className="text-slate-400 text-xs mt-0.5">Diberikan oleh: Bpk. Bambang, M.Pd</Text>
            </View>
            <View className="bg-red-100 px-2.5 py-1 rounded-full">
              <Text className="text-red-700 text-[10px] font-bold">2 Hari Lagi</Text>
            </View>
          </View>
          <Text className="text-slate-600 text-sm mb-3">Selesaikan latihan soal halaman 112-115 pada buku paket Matematika.</Text>
          <View className="border-t border-slate-100 pt-3 flex-row justify-between items-center">
            <Text className="text-slate-400 text-xs">Deadline: 7 Juni 2026</Text>
            <Text className="text-blue-600 font-semibold text-xs">Kirim Tugas →</Text>
          </View>
        </View>

        <View className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
          <View className="flex-row justify-between items-start mb-2">
            <View className="flex-1 mr-2">
              <Text className="text-slate-800 font-bold text-base">Fisika: Hukum Termodinamika</Text>
              <Text className="text-slate-400 text-xs mt-0.5">Diberikan oleh: Ibu Laila, S.Si</Text>
            </View>
            <View className="bg-emerald-100 px-2.5 py-1 rounded-full">
              <Text className="text-emerald-700 text-[10px] font-bold">Selesai</Text>
            </View>
          </View>
          <Text className="text-slate-600 text-sm mb-3">Tulis resume tentang aplikasi hukum I dan II termodinamika dalam kehidupan sehari-hari.</Text>
          <View className="border-t border-slate-100 pt-3 flex-row justify-between items-center">
            <Text className="text-slate-400 text-xs">Dikirim: 4 Juni 2026</Text>
            <Text className="text-emerald-600 font-semibold text-xs">Sudah Dinilai (92/100)</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
