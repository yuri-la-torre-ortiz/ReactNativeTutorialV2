import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={[styles.textContainer, styles.textContainer0]}>
        Here are some boxes of different colors
      </Text>
      <Text style={[styles.textContainer, styles.textContainer1]}>
        Hello, world!
      </Text>
      <Text style={[styles.textContainer, styles.textContainer2]}>
        Hello, world!
      </Text>
      <Text style={[styles.textContainer, styles.textContainer3]}>
        Hello, world!
      </Text>
      <Text style={[styles.textContainer, styles.textContainer4]}>
        Hello, world!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
    alignItems: 'stretch',
    justifyContent: 'center',
    flex: 0.5,
  },
  textContainer: {
    flex: 0.2,
    justifyContent: 'center',
    marginTop: 10,
    color: 'white',
    alignContent: 'center',
  },
  textContainer0: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
  },
  textContainer1: {
    backgroundColor: 'cyan',
  },
  textContainer2: {
    backgroundColor: '#268bd2',
  },
  textContainer3: {
    backgroundColor: 'magenta',
  },
  textContainer4: {
    backgroundColor: 'orange',
  },
});
