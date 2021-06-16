/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './src/screens/Home'
import ExploreScreen from './src/screens/Explore'
import AddScreen from './src/screens/Add'
import ActivityScreen from './src/screens/Activity'
import ProfileScreen from './src/screens/Profile'

const profilePic = 'https://instagram.fgdl5-1.fna.fbcdn.net/v/t51.2885-19/s320x320/50995302_369364356947818_2584749990618333184_n.jpg?_nc_ht=instagram.fgdl5-1.fna.fbcdn.net&_nc_ohc=S6N5x1arNtUAX8_rSS2&oh=a3aae57be48b5e1b0df0faff576e09ce&oe=5E98432B'

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Explore: ExploreScreen,
    Add: AddScreen,
    Activity: ActivityScreen,
    Profile: ProfileScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'md-home'
        } else if (routeName === 'Explore') {
          iconName = 'ios-search';
        } else if (routeName === 'Add') {
          iconName = 'ios-add-circle-outline'
        } else if (routeName === 'Activity') {
          iconName = 'ios-heart-empty'
        } 

        if (routeName === 'Profile') {
          if (iconName = focused){
            return(
              <View style={styles.containerProfileSelected}>
                <Image style={styles.profileIcon} source={{uri: profilePic}}/>
              </View>
            )
          }else {
            return <Image style={styles.profileIcon} source={{uri: profilePic}}/>
          }
        } else {
          return <Ionicons name={iconName} size={28} color={tintColor} />;
        }
      },
    }),
    tabBarOptions: {
      activeTintColor: 'black',
      inactiveTintColor: 'grey',
      showLabel: false
    }
  }
)

export default createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  containerProfileSelected: {
    height: 26,
    width: 26,
    borderRadius: 13,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileIcon: {
    height: 22,
    width: 22,
    borderRadius: 11
  }
})