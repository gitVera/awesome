import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { LinearGradient } from 'expo';
import Board from './Board';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Awesome memory',
  };

  state = {
    reset: false
  }

  reset = () => {
    this.setState({
      reset: true
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#b9c3fa', '#b9c3fa']}
          style={styles.contentContainer}>
            <Board reset={this.state.reset} />
        </LinearGradient>
        <TouchableOpacity style={styles.start} onPress={this.reset}>
          <Text style={styles.text}>New game</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  contentContainer: {
    padding: 20,
    flex: 1,
    alignItems: 'center',
  },
  start: {
    position: 'absolute',
    bottom: -10,
    right: 10,
    width: 70,
    height: 70,
    backgroundColor: 'yellow',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    borderRadius: 60,
    elevation: 8,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
    fontWeight: 'bold',
  }
});
