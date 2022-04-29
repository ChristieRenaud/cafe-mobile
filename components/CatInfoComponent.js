import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Tile, Card, Icon } from 'react-native-elements'
import { CATS } from '../shared/cats'
import * as Animatable from 'react-native-animatable'

const RenderCat = ({ cat }) => {
  if (cat) {
    return (
      <Card
        title={cat.name}
        titleStyle={{ fontSize: 36, textTransform: 'uppercase' }}
        image={require('../assets/images/cat-head-2.jpg')}
        imageStyle={{ height: 350 }}
      >
        <Text style={{ fontSize: 24, textAlign: 'center', padding: 10 }}>
          {cat.type}, {cat.age}
        </Text>
        <Text style={{ fontSize: 18, textAlign: 'center', lineHeight: 26 }}>
          {cat.longDescription}
        </Text>
      </Card>
    )
  }
}
class CatInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      catList: CATS,
    }
  }

  static navigationOptions = {
    // title: 'Cat Information',
  }

  render() {
    const catId = this.props.navigation.getParam('catId')
    console.log({ catId })
    const cat = this.state.catList.filter((cat) => cat.id === catId)[0]
    console.log({ cat })
    return (
      <Animatable.View animation="fadeIn" duration={1500} delay={250}>
        <ScrollView>
          <RenderCat cat={cat} />
        </ScrollView>
      </Animatable.View>
    )
  }
}

export default CatInfo
