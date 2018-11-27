import React from 'react';
import { Image, ScrollView, StyleSheet, Text } from 'react-native';
import Veggies from '../assets/images/Veggies.png';

export default class PendingScreen extends React.Component {
  static navigationOptions = {
    title: 'Pending',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image source={Veggies} style={styles.image} />
        <Text>[Pending]</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#f7efec',
  },
  image: {
    width: 375,
    height: 89,
  },
});
