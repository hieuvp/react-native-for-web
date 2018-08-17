# React Native for Web

## Cross-Platform React

![React](screenshots/2011-2013.png)

> [React](https://reactjs.org/)

![React](screenshots/2013-03.png)

> [React Native](https://facebook.github.io/react-native/)

![React Native](screenshots/2015-03.png)

> [React Native for Web](https://github.com/necolas/react-native-web)

![React Native for Web](screenshots/2016-02.png)

> [React Native for macOS](https://github.com/ptmt/react-native-macos)

![React Native for macOS](screenshots/2016-03.png)

> [React Native for Windows](https://github.com/Microsoft/react-native-windows)

![React Native for Windows](screenshots/2016-04.png)

> [React Native for Ubuntu](https://github.com/CanonicalLtd/react-native/blob/ubuntu/README-ubuntu.md)

![React Native for Ubuntu](screenshots/2016-08.png)

> [React VR](https://facebook.github.io/react-360/)

![React VR](screenshots/2017-04.png)

## Introduction

- Why React Native for Web?
	- Makes it possible to run [`React Native components`](https://facebook.github.io/react-native/docs/components-and-apis.html) and APIs on the web using React DOM
	- `<View />` = `<div />`
	- `<Text />` = `<span />`

- [`GitHub`](https://github.com/necolas/react-native-web#react-native-for-web)

- Who is using React Native in production web apps?

- [`React Native Components and APIs`](https://facebook.github.io/react-native/docs/components-and-apis.html)

- [`Compatibility with React Native`](https://github.com/necolas/react-native-web#compatibility-with-react-native)

- [`Examples`](http://necolas.github.io/react-native-web/examples/)

## Installation

- [`Starter Kits`](https://github.com/necolas/react-native-web/blob/master/packages/website/guides/getting-started.md#starter-kits)

- [`Custom Setup`](https://github.com/necolas/react-native-web/blob/master/packages/website/guides/getting-started.md#configuring-a-module-bundler)

- `webpack.config.js`

```javascript
alias: {
  './assets/images/expo-icon.png': './assets/images/expo-icon@2x.png',
  './assets/images/slack-icon.png': './assets/images/slack-icon@2x.png',
  '@expo/vector-icons': 'expo-web',
  expo: 'expo-web',
  'react-native': 'react-native-web',
},
```

- `React Native Scripts`

```json
"android": "react-native-scripts android",
"ios": "react-native-scripts ios",
"web": "webpack-dev-server -d --config ./webpack.config.js  --inline --hot --colors --content-base public/ --history-api-fallback",
```

## Simple View

- Inspect elements

- [`Multi-platform Applications`](https://github.com/necolas/react-native-web/blob/master/packages/website/guides/getting-started.md#multi-platform-applications)

- File Extension: `*.ios`, `*.android`, `*.web`

## Animated View

- [`Animated API`](http://necolas.github.io/react-native-web/examples/)

## Game - TicTacToe

## Q&A
