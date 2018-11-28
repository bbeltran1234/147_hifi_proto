import React from 'react';
import { View, Image, ScrollView, StyleSheet, Text } from 'react-native';
import Veggies from '../assets/images/Veggies.png';

export default class PendingScreen extends React.Component {
  static navigationOptions = {
    title: 'Pending',
  };

 render() {
    return (
      <ScrollView style={styles.container}>
        <Image source={Veggies} style={styles.image} blurRadius={5}/>
        <Text>[Pending]</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    backgroundColor: '#f7efec',
  },
  image: {
    width: 375,
    height: 89,
    backgroundColor: 'rgba(0,0,0,1)',
    opacity: 1,

  },
  header_blur: {
    width: 379,
    height: 98,
    backgroundColor: '#000000',
    opacity: 0.9,
  }
});
