import React, { Component } from 'react'
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Constants from 'expo-constants'
import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from './HomeComponent'
import Visit from './VisitComponent'
import Adopt from './AdoptComponent'
import Favorites from './FavoritesComponent'
import CatInfo from './CatInfoComponent'
import { baseUrl } from '../shared/baseUrl'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux'
import { fetchCats } from '../redux/ActionCreators'

const mapDispatchToProps = {
  fetchCats,
}

const HomeNavigator = createStackNavigator(
  {
    Home: { screen: Home },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#383838',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff',
      },
      headerRight: (
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={{ uri: baseUrl + '/images/white_silhouette.png' }}
            style={{ height: 25, width: 25, marginLeft: 10 }}
          />
          <Text style={styles.logoTextStyle}>Calico Cafe</Text>
        </View>
      ),
    }),
  },
)

const AdoptNavigator = createStackNavigator(
  {
    Adopt: { screen: Adopt },
    CatInfo: { screen: CatInfo },
  },
  {
    initialRouteName: 'Adopt',
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#383838',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff',
      },
      headerRight: (
        <TouchableOpacity
          style={{ flexDirection: 'row' }}
          onPress={() => navigation.navigate('Home')}
        >
          <Image
            source={{ uri: baseUrl + '/images/white_silhouette.png' }}
            style={{ height: 25, width: 25, marginLeft: 10 }}
          />
          <Text style={styles.logoTextStyle}>Calico Cafe</Text>
        </TouchableOpacity>
      ),
    }),
  },
)

const VisitNavigator = createStackNavigator(
  {
    Visit: { screen: Visit },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#383838',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff',
      },
      headerRight: (
        <TouchableOpacity
          style={{ flexDirection: 'row' }}
          onPress={() => navigation.navigate('Home')}
        >
          <Image
            source={{ uri: baseUrl + '/images/white_silhouette.png' }}
            style={{ height: 25, width: 25, marginLeft: 10 }}
          />
          <Text style={styles.logoTextStyle}>Calico Cafe</Text>
        </TouchableOpacity>
      ),
    }),
  },
)

const FavoritesNavigator = createStackNavigator(
  {
    Favorites: { screen: Favorites },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#383838',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        color: '#fff',
      },
      headerRight: (
        <TouchableOpacity
          style={{ flexDirection: 'row' }}
          onPress={() => navigation.navigate('Home')}
        >
          <Image
            source={{ uri: baseUrl + '/images/white_silhouette.png' }}
            style={{ height: 25, width: 25, marginLeft: 10 }}
          />
          <Text style={styles.logoTextStyle}>Calico Cafe</Text>
        </TouchableOpacity>
      ),
    }),
  },
)

const TabNavigator = createBottomTabNavigator(
  {
    Home: { screen: HomeNavigator },
    Adopt: { screen: AdoptNavigator },
    Favorites: { screen: FavoritesNavigator },
    Visit: { screen: VisitNavigator },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state

        if (routeName === 'Home') {
          return (
            <Icon
              name="home"
              type="font-awesome"
              fontSize={25}
              color={tintColor}
            />
          )
        } else if (routeName === 'Adopt') {
          return (
            <Icon
              name="paw"
              type="font-awesome"
              fontSize={25}
              color={tintColor}
            />
          )
        } else if (routeName === 'Visit') {
          return (
            <Icon
              name="eye"
              type="font-awesome"
              fontSize={25}
              color={tintColor}
            />
          )
        } else if (routeName === 'Favorites') {
          return (
            <Icon
              name="heart"
              type="font-awesome"
              fontSize={25}
              color={tintColor}
            />
          )
        }
      },
    }),

    tabBarOptions: {
      activeTintColor: 'pink',
      inactiveTintColor: 'white',
      style: {
        backgroundColor: '#2e2d2e',
      },
      tabStyle: { marginTop: 10 },
    },
  },
)
const AppNavigator = createAppContainer(TabNavigator)

class Main extends Component {
  componentDidMount() {
    this.props.fetchCats()
  }
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

styles = StyleSheet.create({
  logoTextStyle: {
    fontSize: 20,
    color: 'white',
    paddingHorizontal: 10,
  },
})

export default connect(null, mapDispatchToProps)(Main)
