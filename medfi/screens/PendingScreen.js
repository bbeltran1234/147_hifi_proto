import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class PendingScreen extends React.Component {
  static navigationOptions = {
    title: 'Pending',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>[Pending Screen]</Text>
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
