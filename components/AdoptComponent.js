import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native'
import { Tile, Card } from 'react-native-elements'
import { connect } from 'react-redux'

import { baseUrl } from '../shared/baseUrl'

const mapStateToProps = (state) => {
  return {
    cats: state.cats,
  }
}

class Adopt extends Component {
  static navigationOptions = {
    title: 'Adopt',
  }

  render() {
    const { navigate } = this.props.navigation
    const RenderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{ width: '40%', margin: 10 }}
          onPress={() => {
            navigate('CatInfo', { catId: item.id })
            console.log(`Pressed ${item.id}`)
          }}
        >
          <Card
            image={{ uri: baseUrl + item.image }}
            wrapperStyle={{
              marginHorizontal: 10,
              paddingVertical: 10,
            }}
            containerStyle={{
              width: '100%',
              height: 260,
            }}
          >
            <Text
              style={{ fontSize: 18, textAlign: 'center', fontWeight: 'bold' }}
            >
              {item.name}
            </Text>
            <Text style={{ textAlign: 'center' }}>{item.shortDescription}</Text>
          </Card>
        </TouchableOpacity>
      )
    }

    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#ebebeb',
        }}
      >
        <ScrollView>
          <Tile
            title="Meet our Cats"
            titleStyle={{ fontSize: 40, fontWeight: '500' }}
            height={200}
            featured
            imageSrc={{ uri: baseUrl + '/images/adopt-cover.jpg' }}
          />
          <Text style={styles.textStyle}>
            If you are interested in adding a new pet to your family, we invite
            you to view the cats currently available for adoption. For more
            information about a specific cat click on their photo.
          </Text>

          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
              justifyContent: 'flex-start',
            }}
          >
            {this.props.cats.cats.map((cat) => (
              <RenderItem item={cat} />
            ))}
          </View>
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  textStyle: {
    margin: 20,
    marginTop: 30,
    lineHeight: 20,
  },
})

export default connect(mapStateToProps)(Adopt)
