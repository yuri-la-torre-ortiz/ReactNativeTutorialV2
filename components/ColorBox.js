import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ colorName, hexCode }) => {
  const boxColor = {
    backgroundColor: hexCode,
  };

  const textColor = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };

  return (
    <View style={[styles.box, boxColor]}>
      <Text style={(styles.boxText, textColor)}>
        {colorName}: {hexCode}
      </Text>
    </View>
  );
};

export default ColorBox;

const styles = StyleSheet.create({
  box: {
    padding: 10,
    justifyContent: 'center',
    borderRadius: 3,
    alignItems: 'center',
    marginBottom: 10,
  },
  color: {
    backgroundColor: 'pink',
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
