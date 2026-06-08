module.exports = {
  presets: [
    [
      'module:@react-native/babel-preset',
      {
        unstable_transformImportMeta: true,
      },
    ],
    'nativewind/babel',
  ],
  plugins: [
    '@babel/plugin-transform-export-namespace-from',
    'react-native-reanimated/plugin',
  ],
};
