import React from 'react'
import { Platform } from 'react-native'
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'

import ProfileScreen from '../screens/ProfileScreen'
import AlertsScreen from '../screens/AlertsScreen'
import PendingScreen from '../screens/PendingScreen'
import DiscoverScreen from '../screens/DiscoverScreen'

// Icons: https://oblador.github.io/react-native-vector-icons/

const MeStack = createStackNavigator({ Me: ProfileScreen })
MeStack.navigationOptions = {
  tabBarLabel: 'Me',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  )
}

const AlertsStack = createStackNavigator({ Alerts: AlertsScreen })
AlertsStack.navigationOptions = {
  tabBarLabel: 'Alerts',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-mail' : 'md-mail'}
    />
  )
}

const PendingStack = createStackNavigator({ Pending: PendingScreen })
PendingStack.navigationOptions = {
  tabBarLabel: 'Pending',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'}
    />
  )
}

const DiscoverStack = createStackNavigator({ Discover: DiscoverScreen })
DiscoverStack.navigationOptions = {
  tabBarLabel: 'Discover',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-search' : 'md-search'}
    />
  )
}

export default createBottomTabNavigator({
  MeStack,
  AlertsStack,
  PendingStack,
  DiscoverStack
})
