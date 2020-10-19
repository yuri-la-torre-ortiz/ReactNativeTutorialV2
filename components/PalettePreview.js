import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const PalettePreview = ({ onPress, palette }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{palette.paletteName}</Text>
    </TouchableOpacity>
  );
};

export default PalettePreview;
