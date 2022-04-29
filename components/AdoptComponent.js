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
import { CATS } from '../shared/cats'

class Adopt extends Component {
  constructor(props) {
    super(props)
    this.state = {
      catList: CATS,
    }
  }
  static navigationOptions = {
    title: 'Adopt',
  }

  render() {
    const { navigate } = this.props.navigation
    const RenderItem = ({ item }) => {
      return (
        <TouchableOpacity
          onPress={() => {
            navigate('CatInfo', { catId: item.id })
            console.log(`Pressed ${item.id}`)
          }}
        >
          <Card
            title={item.name}
            image={require('../assets/images/cat-head-1.jpg')}
            imageStyle={{ height: 250 }}
            wrapperStyle={{ marginHorizontal: 20 }}
          >
            <Text>{item.shortDescription}</Text>
          </Card>
        </TouchableOpacity>
      )
    }

    return (
      <View
        style={{
          flex: 1,
          // justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: '#ebebeb',
        }}
      >
        <Tile
          title="Adoption"
          titleStyle={{ fontSize: 54 }}
          caption="Meet our friendly cats"
          captionStyle={{ fontSize: 24 }}
          height={200}
          featured
          // onPress={() => navigate('CampsiteInfo', { campsiteId: item.id })}
          imageSrc={require('../assets/images/main-cats3.jpg')}
        />
        <ScrollView>
          <Text style={styles.textStyle}>
            If you are interested in adding a new pet to your family, we invite
            you to view the cats currently available for adoption. For more
            information about a specific cat click on their photo.
          </Text>
          <View style={{ margin: 30 }}>
            {this.state.catList.map((cat) => (
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

export default Adopt
