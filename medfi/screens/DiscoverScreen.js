import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class DiscoverScreen extends React.Component {
  static navigationOptions = {
    title: 'Discover',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>[Discover Screen]</Text>
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
