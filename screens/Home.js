import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const SOLARIZED = [
  { colorName: 'Base03', hexCode: '#002b36' },
  { colorName: 'Base02', hexCode: '#073642' },
  { colorName: 'Base01', hexCode: '#586e75' },
  { colorName: 'Base00', hexCode: '#657b83' },
  { colorName: 'Base0', hexCode: '#839496' },
  { colorName: 'Base1', hexCode: '#93a1a1' },
  { colorName: 'Base2', hexCode: '#eee8d5' },
  { colorName: 'Base3', hexCode: '#fdf6e3' },
  { colorName: 'Yellow', hexCode: '#b58900' },
  { colorName: 'Orange', hexCode: '#cb3b16' },
  { colorName: 'Red', hexCode: '#dc321f' },
  { colorName: 'Magenta', hexCode: '#d33681' },
  { colorName: 'Violet', hexCode: '#5c71c4' },
  { colorName: 'Blue', hexCode: '#267bd2' },
  { colorName: 'Cyan', hexCode: '#1aa198' },
  { colorName: 'Green', hexCode: '#859899' },
];

const COLOR_PALETTES = [
  { paletteName: 'Solarized', colors: SOLARIZED },
  { paletteName: 'Frontend Master', colors: FRONTEND_MASTERS },
  { paletteName: 'Rainbow', colors: RAINBOW },
];

const Home = ({ navigation }) => {
  return (
    <FlatList
      data={COLOR_PALETTES}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => navigation.push('ColorPalette', item)}>
          <Text>{item.paletteName}</Text>
        </TouchableOpacity>
      )}
    />
  );
};

export default Home;
