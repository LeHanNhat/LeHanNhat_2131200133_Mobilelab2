import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

const App = () => {
  // State variables
  const [displayValue, setDisplayValue] = useState('0');
  const [operator, setOperator] = useState<string | null>(null);
  const [firstValue, setFirstValue] = useState('');

  // Function to handle number inputs
  const handleNumberInput = (num: string) => {
    if (displayValue === '0') {
      setDisplayValue(num.toString());
    } else {
      setDisplayValue(displayValue + num);
    }
  };

  // Function to handle operator inputs
  const handleOperatorInput = (op: string) => {
    setOperator(op);
    setFirstValue(displayValue);
    setDisplayValue('0');
  };

  // Function to handle equal button press
  const handleEqual = () => {
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(displayValue);

    if (operator === '+') {
      setDisplayValue((num1 + num2).toString());
    } else if (operator === '-') {
      setDisplayValue((num1 - num2).toString());
    } else if (operator === '×') {
      setDisplayValue((num1 * num2).toString());
    } else if (operator === '÷') {
      setDisplayValue((num1 / num2).toString());
    }
    setOperator(null);
    setFirstValue('');
  };

  // Function to handle clear button press
  const handleClear = () => {
    setDisplayValue('0');
    setOperator(null);
    setFirstValue('');
  };

  const renderButton = (item: string) => {
    const isZero = item === '0';
    const isEquals = item === '=';
    const isNumber = !isNaN(Number(item));
    const isOperator = ['÷', '×', '-', '+'].includes(item);

    const handlePress = () => {
      if (isNumber) {
        handleNumberInput(item);
      } else if (isOperator) {
        handleOperatorInput(item);
      } else if (isEquals) {
        handleEqual();
      } else if (item === 'C') {
        handleClear();
      }
    };

    return (
      <TouchableOpacity
        style={[
          styles.button,
          isZero && styles.zeroButton,
          isEquals && styles.equalsButton
        ]}
        onPress={handlePress}
      >
        <Text style={[
          styles.buttonText,
          isEquals && styles.equalsText
        ]}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  const buttons = [
    ['7', '8', '9', '÷'],
    ['4', '5', '6', '×'],
    ['1', '2', '3', '-'],
    ['0', 'C', '+', '=']
  ];

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{displayValue}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {buttons.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((button, buttonIndex) => (
              <React.Fragment key={buttonIndex}>
                {renderButton(button)}
              </React.Fragment>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

export default App;