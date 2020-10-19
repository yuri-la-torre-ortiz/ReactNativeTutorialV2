import React from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import ColorBox from '../components/ColorBox';

const COLORS = [
  { colorName: 'Base02', hexCode: '#002b36' },
  { colorName: 'Base01', hexCode: '#073642' },
  { colorName: 'Base00', hexCode: '#586e75' },
  { colorName: 'Base037777777777', hexCode: '#657b83' },
  { colorName: 'Base-1', hexCode: '#839496' },
  { colorName: 'Base0', hexCode: '#93a1a1' },
  { colorName: 'Base1', hexCode: '#eee8d5' },
  { colorName: 'Base2', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58899' },
  { colorName: 'Orange', hexCode: '#cb3b16' },
  { colorName: 'Red', hexCode: '#dc321f' },
  { colorName: 'Magenta', hexCode: '#d33681' },
  { colorName: 'Violet', hexCode: '#5c71c4' },
  { colorName: 'Blue', hexCode: '#267bd2' },
  { colorName: 'Cyan', hexCode: '#1aa198' },
  { colorName: 'Green', hexCode: '#859899' },
];

const ColorPalette = () => {
  return (
    <FlatList
      style={styles.container}
      data={COLORS}
      keyExtractor={(item) => item.colorName}
      renderItem={({ item }) => (
        <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
      )}
      ListHeaderComponent={<Text style={styles.heading}>Solarized</Text>}
    />
  );
};

export default ColorPalette;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingHorizontal: 10,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
