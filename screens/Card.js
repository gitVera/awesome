import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View, TouchableHighlight, Image,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import FlipCard from 'react-native-flip-card'
// import {cardsNumber} from './Board';

const cardsNumber = 8
const NumberInRow = 3;
const CardWidth = (100 - 2*NumberInRow)/NumberInRow
const NumberInColumn = Math.ceil(cardsNumber/NumberInRow)
const CardHeight = (100 - 2*NumberInColumn)/NumberInColumn

export default class Card extends React.Component {

  render() {
    // const { toggledFirst, toggledSecond } = this.state
    const { id, flipCard, toggledFirst, toggledSecond, solved, icon, iconColor, fon } = this.props
    return (
      <TouchableOpacity id={id} 
      onPress={() => flipCard({id, icon})} 
      underlayColor="white" style={styles.card}>
        <>
        {
          toggledFirst || toggledSecond || solved ?
            <View style={[styles.face, {backgroundColor: fon}]}>
              <Ionicons name={icon} size={42} color={iconColor} />
            </View> :
            <View style={styles.back}>
              <Image source={require('../images/back.jpg')} style={styles.backImage}/>
            </View>
        }
        </>
      </TouchableOpacity>
      
    );
  }

}

const styles = StyleSheet.create({
  card: {
    width: `${CardWidth}%`,
    height: `${CardWidth}%`,
    margin: '1%',
    position: 'relative',
  },
  back: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e17f9b',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    elevation: 5,
  },
  backImage: {
    resizeMode: "cover",
    width: '100%',
    height: '100%',
  },
  face: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    elevation: 5,
    borderWidth: 7,
    borderColor: 'white',
  },
});
