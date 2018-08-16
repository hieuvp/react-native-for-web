import React from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class AnimatedView extends React.Component {
  constructor(props) {
    super(props);
    this.springValue = new Animated.Value(0.3);
  }

  spring() {
    this.springValue.setValue(0.3);
    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        friction: 1,
        tension: 1
      }
    ).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ marginBottom: 100 }} onPress={this.spring.bind(this)}>Spring Animation</Text>

        <Animated.View style={[styles.animatedContainer, {transform: [{ scale: this.springValue }]}]}>
          <Text style={styles.heading}>ShopBack</Text>
          <Text style={styles.subheading}>The smarter way to shop</Text>
        </Animated.View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  animatedContainer: {
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
