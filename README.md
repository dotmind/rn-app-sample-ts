<img src="logo.png" alt="logo" height="150"/>

# RN App Sample TS

> v1.0.1

## Integrations

* TypeScript
* React Navigation
* Babel Module Resolver
* [React Native Rename](https://www.npmjs.com/package/react-native-rename)
* [React Native Make](https://github.com/bamlab/react-native-make/blob/master/docs/set-icon.md)

## Init project

1- Install node_modules

`yarn`

2- Install Pods (iOS)

`npx pod-install`

3- Set App Name with [React Native Rename](https://www.npmjs.com/package/react-native-rename)

`npm run rename newName`

4- Set App Icons assets with with [React Native Make](https://github.com/bamlab/react-native-make/blob/master/docs/set-icon.md)

> You can build a quick icon with [Android Asssets Studio](https://romannurik.github.io/AndroidAssetStudio/icons-launcher.html#foreground.type=clipart&foreground.clipart=android&foreground.space.trim=1&foreground.space.pad=0.25&foreColor=rgba(96%2C%20125%2C%20139%2C%200)&backColor=rgb(68%2C%20138%2C%20255)&crop=0&backgroundShape=square&effects=none&name=ic_launcher)

`npm run set:splashscreen -- --path "logo.png"`

5- Set App SplashScreen assets with with [React Native Make](https://github.com/bamlab/react-native-make/blob/master/docs/set-splash.md)

`npm run set:splashscreen -- --path "splashscreen-logo.png" --resize "center" --background "#E91E63"`

***Dont forget to delete & re-run your app to watch assets changes***
