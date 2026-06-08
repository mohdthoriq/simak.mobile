import React from 'react'
import { View, Text, ScrollView } from 'react-native'
import { AppHeader } from '../../components'

export default function EvaluationScreen({ navigation }: any) {
  return (
    <View className="flex-1 bg-slate-50">
      <AppHeader title="Hasil Evaluasi & Nilai" onBack={() => navigation.goBack()} />
      <ScrollView className="flex-1 p-4">
        <View className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm mb-4">
          <Text className="text-slate-800 font-bold text-lg mb-1">Rata-Rata Rapor Sementara</Text>
          <Text className="text-4xl font-extrabold text-indigo-600">89.4</Text>
          <Text className="text-slate-500 text-xs mt-1">Berdasarkan 8 mata pelajaran terdaftar</Text>
        </View>

        <Text className="text-slate-800 font-bold text-base mb-3">Detail Nilai Mata Pelajaran</Text>

        <View className="bg-white rounded-2xl border border-slate-100 shadow-sm divide-y divide-slate-100">
          <View className="p-4 flex-row justify-between items-center">
            <View>
              <Text className="text-slate-800 font-bold">Matematika Wajib</Text>
              <Text className="text-slate-400 text-xs">KKM: 75 • Guru: Bpk. Bambang</Text>
            </View>
            <View className="items-end">
              <Text className="text-indigo-600 font-bold text-lg">92</Text>
              <Text className="text-emerald-600 text-[10px] font-semibold">Sangat Baik (A)</Text>
            </View>
          </View>

          <View className="p-4 flex-row justify-between items-center">
            <View>
              <Text className="text-slate-800 font-bold">Fisika</Text>
              <Text className="text-slate-400 text-xs">KKM: 75 • Guru: Ibu Laila</Text>
            </View>
            <View className="items-end">
              <Text className="text-indigo-600 font-bold text-lg">88</Text>
              <Text className="text-emerald-600 text-[10px] font-semibold">Baik (B)</Text>
            </View>
          </View>

          <View className="p-4 flex-row justify-between items-center">
            <View>
              <Text className="text-slate-800 font-bold">Bahasa Inggris</Text>
              <Text className="text-slate-400 text-xs">KKM: 70 • Guru: Ibu Sarah</Text>
            </View>
            <View className="items-end">
              <Text className="text-indigo-600 font-bold text-lg">94</Text>
              <Text className="text-emerald-600 text-[10px] font-semibold">Sangat Baik (A)</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
