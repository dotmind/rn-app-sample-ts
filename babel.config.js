module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: true,
        },
      },
    ],
    '@babel/preset-typescript',
    'module:metro-react-native-babel-preset',
  ],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.ts', '.ios.js', '.android.js', '.png'],
        alias: {
          icons: './icons',
          images: './images',
          config: './src/config',
          containers: './src/containers',
          components: './src/components',
          navigators: './src/navigators',
          types: './src/types',
          actions: './src/actions',
          api: './src/api',
          reducers: './src/reducers',
          constants: './src/constants',
          sagas: './src/sagas',
          infrastructure: './src/infrastructure',
          selectors: './src/selectors',
          utils: './src/utils',
          translations: './src/translations',
          services: './src/services',
          forms: './src/forms',
          middlewares: './src/middlewares',
          generated: './src/generated',
          src: './src',
        },
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
