import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TextInput, Button } from 'react-native';
import Calculator from './calculator.js';

export default class NuevaBasicCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: 0,
      number2: 0,
      operator: '+',
    };
  }

  /* When the user provides new input,
   * this function will take the string they typed, convert it to an integer,
   * and then set EITHER this.state.number1 or this.state.number2 = the new integer.
   */
  setNumber(whichNumber, newText) {
    // Convert the string to a number
    var newNumber = parseInt(newText);

    if (whichNumber === 1) {
      this.setState({number1: newNumber});
    }
    else if (whichNumber === 2) {
      this.setState({number2: newNumber});
    }
  }

  setOperator(newOperator) {
    if (newOperator === '+') {
      this.setState({operator: '+'});
    }
    else if (newOperator === '-') {
      this.setState({operator: '-'});
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Basic Calculator
        </Text>
        <TextInput
          style={styles.numberInput}
          placeholder="Number 1"
          onChangeText={(newText) => this.setNumber(1, newText)}
        />
        <View style={styles.operators}>
          <Button
            title={'+'}
            onPress={() => this.setOperator('+')}
          />
          <Button
            title={'-'}
            onPress={() => this.setOperator('-')}
          />
        </View>
        <TextInput
          style={styles.numberInput}
          placeholder="Number 2"
          onChangeText={(newText) => this.setNumber(2, newText)}
        />
        <Calculator
          number1={this.state.number1}
          number2={this.state.number2}
          operator={this.state.operator}
        />
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
  title: {
    fontSize: 30,
    textAlign: 'center',
    margin: 20,
  },
  numberInput: {
    width: 100,
    height: 30,
    margin: 10,
    borderWidth: 1,
    borderColor: 'black',
    textAlign: 'center',
    alignSelf: 'center',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  operators: {
    flexDirection: 'row',
  }
});

AppRegistry.registerComponent('NuevaBasicCalculator', () => NuevaBasicCalculator);
