import React from 'react';
import { Button, Header, Image, View, ScrollView, StyleSheet, Text } from 'react-native';
import Veggies from '../assets/images/Veggies.png';
import Carousel from 'react-native-snap-carousel';
import SearchBar from 'react-native-search-bar'

const onPressLearnMore = () => false

export default class DiscoverScreen extends React.Component {
  
  static navigationOptions = {
    title: 'Discover',
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
        <Text>Discover Screen</Text>
        <Text>Sup</Text>
        <Button
          onPress={onPressLearnMore}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#f7efec',
  },
});
