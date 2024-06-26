This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Step 4: Installing the App Permanently
To install the app on your physical device so it remains after disconnecting from the PC, follow these steps:

For Android
1. Connect your Android device to your computer via USB.

2. Ensure USB debugging is enabled on your Android device.

3. Run the following command from the root of your React Native project:

```bash 
# using npm
npm run android

# OR using Yarn
yarn android
```

4. Once the app is installed, you can disconnect the USB cable. The app should remain installed and accessible from your device's app drawer.

For iOS
1. Connect your iOS device to your computer.

2. Open the project in Xcode by running:

```bash
open ios/YourProjectName.xcworkspace
```
3. In Xcode, select your connected device as the target.

4. Click the "Run" button (or press <kbd>Cmd ⌘</kbd> + <kbd>R</kbd>) to build and install the app on your device.

5. Once the app is installed, you can disconnect the device. The app should remain installed and accessible from your device's home screen.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :🥳:

![currencyConvertor2](https://github.com/nitin1999n/CurrenctConvertor/assets/69898944/dcbbb089-f12e-4803-b7b2-be40314a659f)
![currencyConvertor](https://github.com/nitin1999n/CurrenctConvertor/assets/69898944/09179ad2-c02b-4646-9e9f-c2845b8fc27d)


### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
