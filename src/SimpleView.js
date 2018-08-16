import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class SimpleView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>ShopBack</Text>
        <Text style={styles.subheading}>The smarter way to shop</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 200,
    backgroundColor: '#ff4e4e',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4
  },
  heading: {
    fontSize: 32,
    color: 'white',
    marginBottom: 8,
  },
  subheading: {
    fontSize: 20,
    color: 'white',
    marginTop: 8
  }
});
