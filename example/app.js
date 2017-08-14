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
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          Your system uses {is24HourFormat ? '24 hours' : 'no 24 hours'} time format
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
