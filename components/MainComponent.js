import React, { Component } from 'react'
import { View } from 'react-native'
import Constants from 'expo-constants'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from './HomeComponent'
import Adopt from './AdoptComponent'
// import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#5637DD',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff',
      },
      // headerLeft: (
      //   // <Icon
      //   //   name="home"
      //   //   type="font-awesome"
      //   //   iconStyle={styles.stackIcon}
      //   //   // onPress={() => navigation.toggleDrawer()}
      //   // />
      // ),
    }),
  },
)

const AdoptNavigator = createStackNavigator(
  {
    Adopt: { screen: Adopt },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#5637DD',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff',
      },
      // headerLeft: (
      // <Icon
      //   name="home"
      //   type="font-awesome"
      //   iconStyle={styles.stackIcon}
      //   // onPress={() => navigation.toggleDrawer()}
      // />
      // ),
    }),
  },
)

const AppNavigator = createAppContainer(HomeNavigator)

class Main extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight,
        }}
      >
        <AppNavigator />
      </View>
    )
  }
}

export default Main
