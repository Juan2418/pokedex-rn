<p align="center"><a href="https://lightit.io" target="_blank"><img src="https://lightit.io/images/Logo_purple.svg" width="400"></a></p>

<!-- <p align="center">
<a href="https://travis-ci.org/laravel/framework"><img src="https://travis-ci.org/laravel/framework.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p> -->

We help digital health startups, clinics, and medtech companies ideate, design, and develop custom web & mobile applications that transform the future of healthcare.

Requirements:

- Node >= 18

- yarn >= 4

### Enviroment Setup

1. React native website

   [Getting started](https://reactnative.dev/docs/environment-setup)
   [Getting started](https://docs.expo.dev/build/setup/)

2. Install/Update Cocoapods
   ```
   sudo gem install cocoapods
   ```

### Installation

1. Clone GitHub repo for this project locally:

   ```
   git clone [REPO_URL]
   ```

2. cd into your project and create a copy of your .env file

   ```
   cd folder_name
   cp .env.example .env
   ```

3. Install modules

   ```
   yarn install
   ```

4. Install dependecies and first build

   ```
   yarn prebuild
   ```

### Run the app

#### Without prebuild

```
yarn start
```

Select "i" for iOS or "a" for Android

#### With prebuild

For Android

```
yarn run android
```

For iOS

```
yarn run android
```

### Builds

You can follow this doc: [eas setup](https://docs.expo.dev/build/setup/)

#### Install eas

```
npm install -g eas-cli
```

#### Create an expo/eas account

Cloud deployments won't be neccesarry, just use your credentials for login

```
npm install -g eas login
```

#### Setup

Now the configure script. After running this one a "eas.json" file will be created.

```
eas build:configure
```

Notice that the boilerplate already has a **eas.json** file, this file contains "schemas" which are used on the package.json script seccion. So, if you renamed those schemas, you will have to modifie the package json.

The schemas created on this boilerplate are to build and "apk" and an "aab" file for deployments.

#### debug.keystore

**This is important**
After running the last command, a "debug.keystore" file will be created on the "android/app" folder. Save this script in a cloud, it will be neccesarry for Play Console and testing/production deployments.

#### Build for Android

```
eas build --local --platform android
```

or

```
yarn android:staging-apk
```

Notice that the **--local** flag is imporant. If you don't add it the deployment will be done in the eas/expo cloud system. It is faster doing it in our local enviroment.

The generate file will be added to our root folder.
