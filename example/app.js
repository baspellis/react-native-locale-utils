import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import LocaleUtils from 'react-native-locale-utils';

export default class LocaleUtilsExample extends Component {
  render() {
    const is24HourFormat = LocaleUtils.is24HourFormat();
    const usesMetricSystem = LocaleUtils.usesMetricSystem();
    const deviceCountry = LocaleUtils.deviceCountry();
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Your system uses {is24HourFormat ? '24 hours' : 'no 24 hours'} time format
        </Text>
        <Text style={styles.text}>
          Your system uses {usesMetricSystem ? 'Metric' : 'Imperial'} system
        </Text>
        <Text style={styles.text}>
          Your device country code is {deviceCountry}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    textAlign: 'center',
    color: '#333333',
    margin: 10,
  },
});
