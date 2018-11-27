import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class BarterScreen extends React.Component {
  static navigationOptions = {
    title: 'Barter',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>[Barter Screen]</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
