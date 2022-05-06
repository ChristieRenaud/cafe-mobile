import React, { Component } from 'react'
import { FlatList, View, Text, StyleSheet } from 'react-native'
import { ListItem } from 'react-native-elements'
import { connect } from 'react-redux'
import { baseUrl } from '../shared/baseUrl'

const mapStateToProps = (state) => {
  return {
    cats: state.cats,
    favorites: state.favorites,
  }
}

class Favorites extends Component {
  static navigationOptions = {
    title: 'Favorites',
  }

  render() {
    const { navigate } = this.props.navigation
    const renderFavoriteItem = ({ item }) => {
      return (
        <View>
          <ListItem
            title={item.name}
            subtitle={
              <View>
                <Text>
                  {item.type}, {item.age}
                </Text>
              </View>
            }
            bottomDivider
            leftAvatar={{ source: { uri: baseUrl + item.image } }}
            onPress={() => navigate('CatInfo', { catId: item.id })}
          />
        </View>
      )
    }
    return (
      <View>
        <FlatList
          data={this.props.cats.cats.filter((cat) =>
            this.props.favorites.includes(cat.id),
          )}
          renderItem={renderFavoriteItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    )
  }
}

export default connect(mapStateToProps)(Favorites)
