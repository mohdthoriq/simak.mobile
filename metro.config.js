const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */

// 1. Ambil konfigurasi bawaan React Native
const defaultConfig = getDefaultConfig(__dirname);

// 2. Tambahkan custom config Anda di sini (jika ada)
const customConfig = {}; 

// 3. Gabungkan keduanya
const mergedConfig = mergeConfig(defaultConfig, customConfig);

// 4. Bungkus hasil akhirnya dengan withNativeWind
module.exports = withNativeWind(mergedConfig, { input: './global.css' });
