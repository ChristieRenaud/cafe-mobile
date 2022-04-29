import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Visit extends Component {
  static navigationOptions = {
    title: 'Visit',
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Visit</Text>
      </View>
    )
  }
}

export default Visit
