import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { Tile, Card, Icon } from 'react-native-elements'

export default class Home extends Component {
  static navigationOptions = {
    title: 'Home',
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Tile
          title="Calico Cafe"
          titleStyle={{ fontSize: 54, fontWeight: 'bold' }}
          caption="Relax with Coffee and Cats"
          captionStyle={{ fontSize: 24 }}
          featured
          // onPress={() => navigate('CampsiteInfo', { campsiteId: item.id })}
          imageSrc={require('../assets/images/relaxing-cat.jpg')}
        />
        <ScrollView style={{ backgroundColor: '#ebebeb' }}>
          <Text style={styles.textStyle}>
            The Calico Cafe is one of Michigan's oldest cat cafes. Located in
            the heart of Grosse Pointe, we offer customers a chance to enjoy a
            finely crafted beverage and interact with our playful, friendly
            cats. Sit back and watch their antics, or grab a toy and engage in a
            play session. If you are looking to add a pet to your family, our
            sweet cats are available for adoption.
          </Text>

          <Card
            title="Our Location"
            image={require('../assets/images/map.jpg')}
            wrapperStyle={{ marginHorizontal: 10 }}
          >
            <Text style={{ marginTop: 20 }}>1234 Main Street</Text>
            <Text style={{ marginBottom: 20 }}>Grosse Pointe, MI 48236</Text>
            <Text>Telephone: 248-XXX-XXXX</Text>
            <Text style={{ marginBottom: 20 }}>CalicoCafe@gmail.com</Text>
          </Card>
          <View
            style={{
              marginHorizontal: 20,
              marginVertical: 50,
              alignItems: 'center',
            }}
          >
            <Text
              style={{
                fontWeight: 'bold',
                color: '#383838',
                marginBottom: 10,
                fontSize: 18,
              }}
            >
              HOURS
            </Text>
            <Text style={styles.hoursStyle}>Monday - Friday: 10AM - 6PM</Text>
            <Text style={styles.hoursStyle}>Saturday: 10AM - 6PM</Text>
            <Text style={styles.hoursStyle}>Sunday: 10AM - 6PM</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              flex: 1,
              justifyContent: 'center',
              marginBottom: 20,
            }}
          >
            <Icon
              name="instagram"
              type="font-awesome"
              style={styles.iconStyle}
            ></Icon>
            <Icon
              name="pinterest"
              type="font-awesome"
              style={styles.iconStyle}
            ></Icon>
            <Icon
              name="facebook"
              type="font-awesome"
              style={styles.iconStyle}
            ></Icon>
            <Icon
              name="twitter"
              type="font-awesome"
              style={styles.iconStyle}
            ></Icon>
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
  hoursStyle: {
    fontSize: 16,
    lineHeight: 24,
  },
  iconStyle: {
    marginHorizontal: 15,
    color: `gray`,
  },
})
