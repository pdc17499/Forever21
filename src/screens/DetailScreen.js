import * as React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faRulerHorizontal} from '@fortawesome/free-solid-svg-icons';
import {SliderBox} from 'react-native-image-slider-box';

export default function DetailScreen() {
  return (
    <ScrollView>
      <SliderBox
        images={[
          'https://i.pinimg.com/236x/5b/9f/7e/5b9f7e4b27fdba587e9af51211d76825.jpg',
          'https://i.pinimg.com/564x/3c/7e/ba/3c7ebaba01919d85e9942efc35192101.jpg',
          'https://i.pinimg.com/564x/36/8b/e0/368be09944cbb10457f67c64260a41e8.jpg',
        ]}
        sliderBoxHeight={200}
        dotColor="#FFEE58"
        dotStyle={{
          width: 15,
          height: 15,
          borderRadius: 15,
          marginHorizontal: 10,
          padding: 0,
          margin: 0,
        }}
      />

      <View style={{marginTop: 5}}>
        <Text style={styles.textStyle0}>Weekly Outfit New Season</Text>
        <Text style={styles.textStyle0}>$ 19.99</Text>
      </View>

      <View
        style={{
          borderBottomColor: 'gray',
          borderBottomWidth: 1,
          marginVertical: 15,
        }}
      />
      <Text style={styles.textStyle}>
        Color
        <Text style={{fontWeight: 'bold'}}> CAMEL</Text>
      </Text>

      <View style={{flexDirection: 'row', marginLeft: 15, marginTop: 15}}>
        <View
          style={{
            alignItems: 'center',
            marginTop: 10,
            borderWidth: 3,
            borderColor: 'black',
            backgroundColor: '#996666',
            height: 50,
            width: 50,
            borderRadius: 50 / 2,
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: 'orange',
              borderWidth: 3,
              borderColor: 'white',
              height: 46,
              width: 46,
              borderRadius: 46 / 2,
            }}></View>
        </View>

        <View
          style={{
            alignItems: 'center',
            marginTop: 10,
            marginLeft: 10,
            backgroundColor: '#996666',
            height: 46,
            width: 46,
            borderRadius: 50 / 2,
            justifyContent: 'center',
          }}></View>
      </View>

      <View style={{flexDirection: 'row', marginVertical: 15}}>
        <View style={{flex: 1}}>
          <Text style={styles.textStyle}>
            Size:
            <Text style={{fontWeight: 'bold'}}> XS</Text>
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            backgroundColor: '#6699cc',
            marginRight: 15,
            marginLeft: 85,
          }}>
          <FontAwesomeIcon
            icon={faRulerHorizontal}
            style={{marginHorizontal: 5}}></FontAwesomeIcon>
          <Text style={{fontSize: 16, marginLeft: 5}}>Size Chart</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row', marginLeft: 15, marginTop: 10}}>
        <View style={styles.block1}>
          <Text style={{fontWeight: 'bold'}}>XS</Text>
        </View>

        <View style={styles.block}>
          <Text>S</Text>
        </View>
        <View style={styles.block}>
          <Text>M</Text>
        </View>
        <View style={styles.block}>
          <Text>L</Text>
        </View>
      </View>

      <View style={styles.cart}>
        <Text style={{fontSize: 17, fontWeight: 'bold'}}>Add To Cart</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  picture: {
    height: 200,
    width: '100%',
    marginBottom: 10,
  },

  textStyle0: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 15,
  },

  textStyle: {
    fontSize: 16,
    marginTop: 5,
    marginLeft: 15,
  },

  block: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    height: 50,
    width: '100%',
    marginRight: 15,
    flex: 1,
  },

  block1: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'yellow',
    height: 50,
    width: '100%',
    marginRight: 15,
    flex: 1,
  },

  cart: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'white',
    marginVertical: 15,
    height: 55,

    backgroundColor: 'yellow',
    marginHorizontal: 15,
  },
});
