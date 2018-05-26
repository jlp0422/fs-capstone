/* eslint-disable */
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class QuestionWaiting extends React.Component {
  constructor() {
    super()
    this.state = {
      timer: 10
    }
    this.countdown = this.countdown.bind(this)
  }

  componentDidMount() {
    this.setState({ timer: 10 })
    this.countdown()
  }

  countdown() {
    let { timer } = this.state
    if (timer) {
      this.setState({ timer: timer - 1 })
      setTimeout(() => this.countdown(), 1000);
    }
    else {
      this.props.navigation.push('QuestionActive')
    }
  }

  render() {
    const { timer } = this.state
    return (
      <View style={ styles.conatiner }>
        <Text style={[ styles.centerText, styles.h1 ]}>Question X</Text>
        <Text style={[ styles.centerText, styles.h2 ]}>Category: XX</Text>
        <Text style={[ styles.centerText, styles.h2 ]}>Staring in:</Text>
        <Text style={[ styles.centerText, styles.timer ]}>:{timer > 9 ? timer : `0${timer}`}</Text>
        <Text style={[ styles.centerText, styles.score ]}>Your Score: 3</Text>
        <Text style={[ styles.centerText, styles.score ]}>Top Score: 8</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 30
    // justifyContent: 'center'
  },
  h1: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 10
  },
  h2: {
    fontSize: 22,
    paddingBottom: 15
  },
  timer: {
    fontSize: 35,
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 25
  },
  score: {
    fontSize: 22,
    padding: 25
  },
  centerText: {
    textAlign: 'center'
  }
})

export default QuestionWaiting
