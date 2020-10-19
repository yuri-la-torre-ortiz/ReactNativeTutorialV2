import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const COLORS = [
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

const RAINBOW = [
  { colorName: 'Red', hexCode: '#FF0000' },
  { colorName: 'Orange', hexCode: '#FF7F00' },
  { colorName: 'Yellow', hexCode: '#FFFF00' },
  { colorName: 'Green', hexCode: '#00FF00' },
  { colorName: 'Violet', hexCode: '#8B00FF' },
];

const FRONTEND_MASTERS = [
  { colorName: 'Red', hexCode: '#c02d28' },
  { colorName: 'Black', hexCode: '#3e3e3e' },
  { colorName: 'Grey', hexCode: '#8a8a8a' },
  { colorName: 'White', hexCode: '#ffffff' },
  { colorName: 'Orange', hexCode: '#e66225' },
];

const Home = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ColorPalette', {
            paletteName: 'Solarized',
            colors: COLORS,
          });
        }}
      >
        <Text>Solarized</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ColorPalette', {
            paletteName: 'Frontend Masters',
            colors: FRONTEND_MASTERS,
          });
        }}
      >
        <Text>Frontend Masters</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ColorPalette', {
            paletteName: 'Rainbow',
            colors: RAINBOW,
          });
        }}
      >
        <Text>Rainbow</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
