# react-native-locale-utils

[![npm version](https://badge.fury.io/js/react-native-locale-utils.svg)](http://badge.fury.io/js/react-native-locale-utils)

Locale utilities for React Native

## Install

```shell
npm install --save react-native-device-info
```

## Automatically link

#### With React Native 0.27+

```shell
react-native link react-native-device-info
```

#### With older versions of React Native

You need [`rnpm`](https://github.com/rnpm/rnpm) (`npm install -g rnpm`)

```shell
rnpm link react-native-device-info
```

## Usage

```js
import LocaleUtils from 'react-native-locale-utils';
```

| Name                       | Method                           | Return                           | Notes                                                                            |
| :------------------------- | :------------------------------- | :------------------------------- | :------------------------------------------------------------------------------- |
| 24 Hour format             | `is24HourFormat()`               | Boolean                          | Returns if system time settings uses 12 hour or 24 hour system                   |
| Metric System              | `usesMetricSystem()`             | Boolean                          | Returns if system locale uses metric system or not                               |
| Device Country Code        | `deviceCountry()`                | String                           | Returns the two letter country code for the system                               |
