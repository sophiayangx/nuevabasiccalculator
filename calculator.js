import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class Calculator extends Component {
  calculateResult() {
    var number1 = this.props.number1;
    var number2 = this.props.number2;
    var operator = this.props.operator;

    var result= 0;
    if (operator === '+') {
      result = number1 + number2;
    }
    else if (operator === '-') {
      result = number1 - number2;
    }
    return result;
  }

  render () {
    var number1 = this.props.number1;
    var number2 = this.props.number2;
    var operator = this.props.operator;

    var result = this.calculateResult();

    return (
      <View>
        <Text style={styles.formulaSummary}>
          {number1} {operator} {number2} = {result}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formulaSummary: {
    textAlign: 'center',
    margin: 10,
    fontWeight: 'bold',
    fontSize: 30,
  },
});
