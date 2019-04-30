import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
import Card from './Card';
import initializeDeck from '../deck'

export const cardsNumber = 8
// const icons = ['md-brush', 'md-wifi', 'md-cloud', 'md-cafe']

export default class Board extends React.Component {

  componentDidMount() {
    this.reset()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.reset) {
      this.reset()
    }
  }

  state = {
    icons: initializeDeck(),
    toggledFirst: null,
    toggledSecond: null,
    toggledFirstIcon: '',
    solved: []
  }

  reset = () => {
    this.setState({
      icons: initializeDeck(),
      toggledFirst: null,
      toggledSecond: null,
      toggledFirstIcon: '',
      solved: []
    })
  }

  flipCard = (current) => {

    const id = current.id
    const icon = current.icon

    if (this.state.toggledFirst === null && this.state.toggledSecond === null) {
      this.setState({ 
        toggledFirst: id, 
        toggledFirstIcon: icon 
      })
    } else if (this.state.toggledSecond === null) { //click on second card
        this.setState({ toggledSecond: id }, () => {
          if (this.checkMatch(icon)) {
            const solved = [...this.state.solved]
            solved.push(icon)
            this.setState({
              solved
            })
          } else
            return
        })
    } else if (typeof this.state.toggledFirst == 'number' && typeof this.state.toggledSecond == 'number' ) {
        this.setState({
          toggledFirst: null,
          toggledSecond: null,
          toggledFirstIcon: '',
        }, () => this.setState({ toggledFirst: id, toggledFirstIcon: icon }))
    } else {
      return
    }

  }


  checkMatch = (icon) => {
    return this.state.toggledFirstIcon === icon
  }

  render() {
    
    
    // https://expo.github.io/vector-icons/
    var cards = [];
    const {toggledFirst, toggledSecond, solved, icons} = this.state

    for(let i = 0; i < cardsNumber; i++){
      const { icon, iconColor, fon } = icons[i]
      // const icon = 'md-wifi'
      // const iconColor = 'black'

      cards.push(
        <Card key={i} id={i+1} 
          toggledFirst={toggledFirst === i+1}
          toggledSecond={toggledSecond === i+1}
          blocked={toggledSecond === i+1 || toggledFirst === i+1}
          flipCard={this.flipCard}
          icon={icon}
          iconColor={iconColor}
          fon={fon}
          solved={solved.includes(icon)}
          // onClick={this.flipCard}
        />
      )
    }

    return (
      <View style={styles.board}>
        { cards }
      </View>
    );
  }

}

const styles = StyleSheet.create({
  board: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    height: '80%',
  },
});
