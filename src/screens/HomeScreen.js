import Icon from 'react-native-vector-icons/FontAwesome';

import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  StyleSheet,
  Dimensions,
} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#Dddddd',
        }}>
        <Icon
          name="search"
          size={20}
          color="black"
          style={{marginLeft: 20, flex: 1, alignSelf: 'center'}}
        />
        <TextInput
          placeholder="Search"
          style={{alignSelf: 'center', flex: 6, fontSize: 16}}></TextInput>
        <Icon
          name="microphone"
          size={25}
          color="grey"
          style={{marginLeft: 15, flex: 1}}
        />

        <Icon
          name="qrcode"
          size={25}
          color="grey"
          style={{marginRight: 2, flex: 1}}
        />
      </View>

      <ScrollView>
        <View>
          <Text
            style={{
              marginVertical: 15,
              alignSelf: 'center',
              fontWeight: 'bold',
              fontSize: 16,
              textDecorationLine: 'underline',
              color: '#666666',
            }}>
            All Special Offers (4)
          </Text>

          <Image
            style={styles.image}
            source={{
              uri: 'https://i.pinimg.com/564x/f6/17/a5/f617a5c1a11ab54c435ec33e946738a0.jpg',
            }}
          />
          <Image
            style={styles.image}
            source={{
              uri: 'https://i.pinimg.com/564x/fa/10/10/fa1010b0e5a288fd625c5aea2a24a2b5.jpg',
            }}
          />

          <Image
            style={styles.image}
            source={{
              uri: 'https://i.pinimg.com/564x/c2/e2/ec/c2e2ecf0160a2a42b8645a943296d96e.jpg',
            }}
          />

          <Image
            style={styles.image}
            source={{
              uri: 'https://i.pinimg.com/564x/fd/9b/5e/fd9b5ed9b9d99ca8b9eb52e7b6898a9e.jpg',
            }}
          />
        </View>

        <View>
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              alignSelf: 'center',
              marginTop: 15,
            }}>
            Shop the 'Gram
          </Text>
          <Text style={{fontSize: 14, marginTop: 5, alignSelf: 'center'}}>
            Upload your favorite F21 outfit on Instagram with
          </Text>
          <Text style={{fontSize: 14, marginBottom: 10, alignSelf: 'center'}}>
            #Forever21 Men for a chance to be featured !
          </Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: 15,
            }}>
            <Icon
              name="instagram"
              size={25}
              color="black"
              style={{alignSelf: 'center', marginRight: 10}}
            />
            <Text
              style={{
                fontFamily: 'cursive',
                fontSize: 18,
                fontWeight: 'bold',
              }}>
              @ Forever21 Men
            </Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.image2}
              source={{
                uri: 'https://i.pinimg.com/564x/45/8f/57/458f571361519948390220291b96c1f3.jpg',
              }}
            />
            <Image
              style={styles.image2}
              source={{
                uri: 'https://i.pinimg.com/564x/c2/e2/ec/c2e2ecf0160a2a42b8645a943296d96e.jpg',
              }}
            />
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image
              style={styles.image2}
              source={{
                uri: 'https://i.pinimg.com/564x/54/45/24/544524e2dc4484d1d02ef1219b221c20.jpg',
              }}
            />
            <Image
              style={styles.image2}
              source={{
                uri: 'https://i.pinimg.com/564x/61/70/1f/61701fb6d93c5b69402b572065302961.jpg',
              }}
            />
          </View>
        </View>

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              borderWidth: 1,
              height: 30,
              width: 80,
              alignSelf: 'center',
              marginVertical: 15,
              backgroundColor: '#Dddddd',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{fontWeight: 'bold', alignSelf: 'center', fontSize: 12}}>
              VIEW MORE
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const {height, width} = Dimensions.get('window');
const itemWidth = (width - 10) / 2;

const styles = StyleSheet.create({
  image: {
    height: 400,
    width: '100%',
    marginBottom: 15,
  },

  image2: {
    height: 200,
    width: itemWidth,
    marginHorizontal: 5,
    marginVertical: 5,
    flex: 1,
  },
});

export default HomeScreen;
