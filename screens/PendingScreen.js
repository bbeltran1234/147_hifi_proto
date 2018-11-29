import React from 'react';
import { View, Image, ScrollView, StyleSheet, Text } from 'react-native';
import Veggies from '../assets/images/Veggies.png';


class HeaderBar extends React.Component {
  render() {
    return (
      <Image
        source={Veggies}
        style={StyleSheet.absoluteFill, { backgroundColor: 'transparent' }} blurRadius={5}
      />
    );
  }
}

// const ImageHeader = props => (

// );

export default class PendingScreen extends React.Component {
  static navigationOptions = {
    title: 'Pending',
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

// const ImageHeader = props => (
//   <View style={{ backgroundColor: '#eee' }}>
//     <Image
//       style={StyleSheet.absoluteFill}
//       source={Veggies}
//     />
//     <Header {...props} style={{ backgroundColor: 'transparent' }}/>
//   </View>
// );
