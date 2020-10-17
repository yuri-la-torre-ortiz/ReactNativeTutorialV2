import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        Here are some boxes of different colors
      </Text>
      <View style={[styles.box, styles.cyan]}>
        <Text style={styles.boxText}>Cyan #2aa198</Text>
      </View>
      <View style={[styles.box, styles.blue]}>
        <Text style={styles.boxText}>Blue: #268bd2</Text>
      </View>
      <View style={[styles.box, styles.magenta]}>
        <Text style={styles.boxText}>Magenta: #d33678</Text>
      </View>
      <View style={[styles.box, styles.orange]}>
        <Text style={styles.boxText}>Orange: #cb4b16</Text>
      </View>
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
  box: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  cyan: {
    backgroundColor: '#2aa198',
  },
  blue: {
    backgroundColor: '#268bd2',
  },
  magenta: {
    backgroundColor: '#d33678',
  },
  orange: {
    backgroundColor: '#cb4b16',
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
