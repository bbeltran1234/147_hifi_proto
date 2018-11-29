import React, { Component } from 'react';
import {Button, Header, Image, View, ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Veggies from '../assets/images/Veggies.png';
import Market from '../assets/images/MarketsHighlight.png'
import Farmers from '../assets/images/FarmerUnhighlight.png'
import Carousel from 'react-native-snap-carousel';
import { SearchBar } from 'react-native-elements'

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

        <SearchBar
          lightTheme
          onChangeText={onPressLearnMore}
          onClearText={onPressLearnMore}
          placeholder='Type Here...' 
        />

        <TouchableOpacity 
          style={styles.button} onPress={()=>{alert("you clicked me")}}>
          <Image 
           source={Market}
           />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.buttonTwo} onPress={()=>{alert("you clicked me")}} hitSlop={{top: 20, bottom: 20, left: 50, right: 50}}>
          <Image 
           source={Farmers}
           />
        </TouchableOpacity>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingTop: 30,
    backgroundColor: '#f7efec',
//     alignItems: 'center',
//     justifyContent: 'center',
  },
  button: {
    height: 10,
    width: 10,
    backgroundColor: '#859a9b',
    borderRadius: 0,
    padding: 0,
    marginBottom: 0,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 0,
    shadowOpacity: 0.35,
    position: 'absolute',
    bottom: -40,
    right: 170,
  },
  buttonTwo: {
    height: 10, 
    width: 10,
    backgroundColor: '#859a9b',
    borderRadius: 0,
    padding: 0,
    marginBottom: 0,
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 0,
    shadowOpacity: 0.35,
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: -40,
    right: 230,
  },

});
