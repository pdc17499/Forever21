import * as React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Image} from 'react-native';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faAppleAlt, faPlus, faTrash} from '@fortawesome/free-solid-svg-icons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function BagScreen() {
  return (
    <>
      <View>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 15,
            marginVertical: 15,
          }}>
          Black Dress Autumn New Season
        </Text>
        <View style={{flexDirection: 'row'}}>
          <View style={{flex: 1}}>
            <Image
              style={styles.picture}
              source={{
                uri: 'https://i.pinimg.com/564x/02/e6/ed/02e6eda6a6d64d484ccec92570f892b6.jpg',
              }}
            />
            <View style={styles.wishlist}>
              <Text>Move to Wishlist</Text>
            </View>
          </View>

          <View style={{flex: 1}}>
            <Text style={{fontSize: 16, marginLeft: 15, fontWeight: 'bold'}}>
              $ 99.99
            </Text>
            <Text style={styles.textStyle}>
              SKU#: <Text style={{fontWeight: 'bold'}}> 17652395</Text>
            </Text>
            <Text style={styles.textStyle}>
              Color: <Text style={{fontWeight: 'bold'}}> WHITE/MULTI </Text>
            </Text>
            <Text style={styles.textStyle}>
              Size: <Text style={{fontWeight: 'bold'}}> M </Text>
            </Text>

            <View style={{flexDirection: 'row', marginTop: 25, marginLeft: 15}}>
              <View
                style={{
                  borderWidth: 1,
                  height: 40,
                  borderRadius: 20,
                  width: 40,
                  alignItems: 'center',
                  justifyContent: 'center',

                  borderRadius: 20,
                }}>
                <FontAwesomeIcon
                  icon={faTrash}
                  style={{
                    alignSelf: 'center',
                  }}></FontAwesomeIcon>
              </View>
              <Text style={{alignSelf: 'center', marginHorizontal: 15}}>
                {' '}
                Qty: 1
              </Text>
              <View
                style={{
                  borderWidth: 1,
                  height: 40,
                  borderRadius: 20,
                  width: 40,
                  alignItems: 'center',
                  justifyContent: 'center',

                  borderRadius: 20,
                }}>
                <FontAwesomeIcon
                  icon={faPlus}
                  style={{
                    alignSelf: 'center',
                  }}></FontAwesomeIcon>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            borderBottomColor: '#99CCCC',
            borderBottomWidth: 1,
            marginVertical: 15,
          }}
        />

        <View style={{marginHorizontal: 15}}>
          <Text>*Have A Promo ?</Text>
          <View
            style={{
              borderWidth: 1,
              backgroundColor: 'white',
              height: 60,
              alignItems: 'flex-end',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            <View style={styles.apply}>
              <Text style={{alignSelf: 'center'}}>Apply</Text>
            </View>
          </View>
        </View>
      </View>

      <View
        style={{
          borderWidth: 1,
          backgroundColor: 'white',
          height: 60,
          alignItems: 'center',

          marginTop: 30,
          marginHorizontal: 15,
          flexDirection: 'row',
        }}>
        <Text style={{marginLeft: 30, flex: 1}}>Subtotal </Text>
        <View style={{flex: 1}}></View>
        <Text style={{marginLeft: 40, flex: 1}}>$99.99 </Text>
      </View>

      <View
        style={{
          borderWidth: 1,
          backgroundColor: 'yellow',
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
          marginHorizontal: 15,
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>Checkout </Text>
      </View>

      <View
        style={{
          borderWidth: 1,
          backgroundColor: 'white',
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 10,
          marginHorizontal: 15,
          flexDirection: 'row',
        }}>
        <FontAwesomeIcon
          icon={faAppleAlt}
          style={{
            alignSelf: 'center',
          }}
        />

        <Text style={{fontWeight: 'bold', fontSize: 18, marginLeft: 10}}>
          Pay
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  picture: {
    width: '85%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },

  textStyle: {
    fontSize: 16,
    marginLeft: 15,
  },

  wishlist: {
    backgroundColor: '#9999CC',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,

    marginVertical: 10,
    marginLeft: 15,
    marginRight: 15,
  },

  apply: {
    width: 55,
    height: 30,
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9999CC',
  },
});
