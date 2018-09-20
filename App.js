/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import HeaderTitleExample from './componets/HeaderTitleExample'



type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <HeaderTitleExample />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});
