# RN App Sample TS

<img
  src="logo.png"
  alt="logo"
  height="150"
  />

> v1.0.1

## Integrations

* TypeScript
* React Navigation
* Babel Module Resolver
* [React Native Rename](https://www.npmjs.com/package/react-native-rename)
* [React Native Make](https://github.com/bamlab/react-native-make)
* Workflows CI/CD Github
* Fastlane iOS & Android

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

## Configure Github Workflows

### Release Workflow

> Please configure your Fastlane config before to start here.

1- Create Github CI/CD environment variables for iOS:

* MATCH_PASSWORD
* FASTLANE_USER
* FASTLANE_PASSWORD
* FASTLANE_APPLE_APPLICATION_SPECIFIC_PASSWORD

2- Create Github CI/CD environment variables for Android:

* ANDROID_KEYSTORE_FILE
* APP_RELEASE_KEY_ALIAS
* APP_RELEASE_KEY_PASSWORD
* APP_RELEASE_STORE_PASSWORD


### Auto Labeler Workflow (Need Review --> GTG)

Auto Label your PR approvals to GTG.

1- Create Github CI/CD environment variables:

* GITHUB_TOKEN

## Configure Fastlane

### Fastlane Slack Notifications

> Generate your Slack API Bot URL with [https://api.slack.com/messaging/webhooks](https://api.slack.com/messaging/webhooks)

Make this changes in `ios/fastlane/Fastfile` & `android/fastlane/Fastfile`:
1- **slack_url**
2- **channel**

### Fastlane iOS

1- Configure Appfile

* app_identifier
* apple_id
* itc_team_id
* team_id

2- Configure Matchfile

* git_url
* username

### Fastlane Android

Configure Appfile

* json_key_file
* package_name
