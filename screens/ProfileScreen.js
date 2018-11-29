import React from 'react';
import { View, Image, ScrollView, StyleSheet, Text } from 'react-native';
import Veggies from '../assets/images/Veggies.png';

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    title: 'Your Profile',
    titleStyle: 
    {
      color: '#FFFFFF',
      fontSize: '30',
    },
    headerTintColor: 'white',
    headerBackground: (         
      <Image
        source={Veggies}
        style={{ backgroundColor: 'transparent' , flex: 1, height: 70 }} blurRadius={5}
      />)
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text>[Profile Screen]</Text>
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
});
