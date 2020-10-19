import React from 'react';
import { TouchableOpacity, Text, StyleSheet, FlatList, View } from 'react-native';
import ColorPalette from '../screens/ColorPalette';

const PalettePreview = ({ onPress, palette }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{palette.paletteName}</Text>
      <FlatList
        horizontal={true}
        data={palette.colors.slice(0, 5)}
        keyExtractor={(item) => item.colorName}
        renderItem={({ item }) => <View style={[{backgroundColor: }]> </View>}
      />
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
