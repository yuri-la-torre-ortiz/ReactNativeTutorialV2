import React from 'react';
import { Text, View, StyleSheet, FlatList, SafeAreaView } from 'react-native';

const Food = (props) => {
  return (
    <View style={styles.food}>
      <Text style={styles.text}>{props.name}</Text>
    </View>
  );
};

const FOODS = ['Apples', 'Broccoli', 'Cookies', 'Doritos', 'Eclairs'];

const App = () => {
  return (
    <FlatList
      data={FOODS}
      keyExtractor={(item) => item}
      renderItem={({ item }) => <Food name={item} />}
    />
  );
};

const styles = StyleSheet.create({
  food: {
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'teal',
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
