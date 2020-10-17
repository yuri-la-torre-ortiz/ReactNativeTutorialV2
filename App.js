import React from 'react';
import { Text, View, StyleSheet, SectionList } from 'react-native';

const Food = props => {
  return (
    <View style={styles.food}>
      <Text style={styles.text}>{props.name}</Text>
    </View>
  );
}

const FOODS = [
  { title: 'Healthy', data: ['Apples', 'Broccoli']},
  { title: 'Not so Healthy', data: ['Cookies', 'Doritos', 'Eclairs']},
];

const App = () => {
  return (
    <SectionList
      sections={FOODS}
      keyExtractor={item => item}
      renderItem={data => <Food name={data.item} />}
      renderSectionHeader={({ section }) => (
        <Text style={styles.header}>{section.title}</Text>
      )}
    />
  );
}

const styles = StyleSheet.create({
  food: {
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'teal',
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontWeight: 'bold'
  },
  header: {
    fontSize: 18,
    marginBottom: 5
  }
});

export default App;