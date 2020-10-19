import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const PalettePreview = ({ onPress, palette }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{palette.paletteName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
export default PalettePreview;
