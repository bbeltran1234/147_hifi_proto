import React from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';

export default class AlertsScreen extends React.Component {
  static navigationOptions = {
    title: 'Alerts',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>[Alerts Screen]</Text>
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
