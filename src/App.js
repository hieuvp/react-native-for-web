import React from 'react';
import {
  StyleSheet,
  View
} from 'react-native';

import TicTacToe from './TicTacToe';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TicTacToe />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
