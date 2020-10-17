import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ColorBox from './components/ColorBox';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Here are some boxes of different colors
      </Text>
      <ColorBox colorName="Cyan" hexCode="#2aa198" />
      <ColorBox colorName="Blue" hexCode="#268bd2" />
      <ColorBox colorName="Magenta" hexCode="#d33678" />
      <ColorBox colorName="Orange" hexCode="#cb4b16" />
    </View>
  );
}
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
