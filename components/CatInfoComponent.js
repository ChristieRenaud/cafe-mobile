import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Button, Card, Icon } from 'react-native-elements'
import { connect } from 'react-redux'
import { postFavorite } from '../redux/ActionCreators'
import { baseUrl } from '../shared/baseUrl'
import * as Animatable from 'react-native-animatable'

const mapStateToProps = (state) => {
  return {
    cats: state.cats,
    favorites: state.favorites,
  }
}

const mapDispatchToProps = {
  postFavorite: (catId) => postFavorite(catId),
}

const RenderCat = ({ cat, favorite, markFavorite }) => {
  if (cat) {
    return (
      <Card
        title={cat.name}
        titleStyle={{ fontSize: 36, textTransform: 'uppercase' }}
        image={{ uri: baseUrl + cat.image }}
        imageStyle={{ height: 350 }}
      >
        <Text style={{ fontSize: 24, textAlign: 'center', padding: 10 }}>
          {cat.type}, {cat.age}
        </Text>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            lineHeight: 26,
            marginBottom: 20,
          }}
        >
          {cat.longDescription}
        </Text>
        <View>
          <Button
            icon={
              <Icon name="heart" type="font-awesome" size={20} color="white" />
            }
            title="  Save to Favorites"
            onPress={() =>
              favorite
                ? console.log('Already set as a favorite')
                : markFavorite()
            }
            buttonStyle={{ backgroundColor: '#cf537a' }}
            raised
          />
        </View>
      </Card>
    )
  }
}
class CatInfo extends Component {
  markFavorite(catId) {
    this.props.postFavorite(catId)
  }

  static navigationOptions = {
    // title: 'Cat Information',
  }

  render() {
    const catId = this.props.navigation.getParam('catId')
    console.log({ catId })
    const cat = this.props.cats.cats.filter((cat) => cat.id === catId)[0]
    console.log({ cat })
    return (
      <Animatable.View animation="fadeIn" duration={1500} delay={250}>
        <ScrollView>
          <RenderCat
            cat={cat}
            favorite={this.props.favorites.includes(catId)}
            markFavorite={() => this.markFavorite(catId)}
          />
        </ScrollView>
      </Animatable.View>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CatInfo)
