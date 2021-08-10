import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert,
} from 'react-native';

import DetailScreen from './DetailScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faHeart,
  faHeartbeat,
  faHeartBroken,
  faSortAmountDown,
} from '@fortawesome/free-solid-svg-icons';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    image:
      'https://i.pinimg.com/236x/5b/9f/7e/5b9f7e4b27fdba587e9af51211d76825.jpg',
    name: 'Weekly Outfit New Season ',
    price: '$19.99',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    image:
      'https://i.pinimg.com/236x/85/58/2d/85582da20165131f70c855257ac07c63.jpg',
    name: 'Blonde Collection 2021',
    price: '$66.67',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    image:
      'https://i.pinimg.com/236x/63/af/6f/63af6fbd23cbff742936e6379a08d22d.jpg',
    name: 'T-shirt Amanda BST-V8',
    price: '$30.05',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Fourth Item',
    image:
      'https://i.pinimg.com/564x/44/a0/19/44a019e3d10bd98ff8868deb0e2d24af.jpg',
    name: 'Active Outfit Autumn Season',
    price: '$69.99',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Fifth Item',
    image:
      'https://i.pinimg.com/564x/2e/e2/0e/2ee20eb14b621753378d31173c82d38b.jpg',
    name: 'Vintage Collection New Release',
    price: '$50.05',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Sixth Item',
    image:
      'https://i.pinimg.com/564x/3d/9d/dc/3d9ddc77d5415451405deb38bb10a899.jpg',
    name: 'Weekly Black Outfit Season ',
    price: '$29.05',
  },
];

function listcreen({navigation}) {
  const {height, width} = Dimensions.get('window');
  const itemWidth = (width - 15) / 2;

  const renderItem = ({item}) => (
    <View style={{width: itemWidth, flex: 1, margin: 5}}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
          <Image
            style={{height: 300, width: '100%'}}
            source={{
              uri: item.image,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            alignItems: 'center',
            backgroundColor: '#F5F5F5',
            height: 45,
            width: 45,
            borderRadius: 45 / 2,
            justifyContent: 'center',
          }}>
          <FontAwesomeIcon icon={faHeart} />
        </View>
      </View>

      <View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              alignItems: 'center',
              marginTop: 10,
              borderWidth: 3,
              borderColor: 'black',
              backgroundColor: 'orange',
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
              backgroundColor: 'grey',
              height: 46,
              width: 46,
              borderRadius: 50 / 2,
              justifyContent: 'center',
            }}></View>
        </View>
        <Text style={{fontSize: 20, marginTop: 10}}>{item.name}</Text>
        <Text style={{fontSize: 20, marginTop: 10}}>{item.price}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <>
        <View style={{flexDirection: 'row'}}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              borderRightWidth: 1,
            }}>
            <Text style={{marginTop: 10}}>Sort By</Text>
            <Text style={{fontWeight: 'bold', fontSize: 18}}>Relevance</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <FontAwesomeIcon icon={faSortAmountDown}></FontAwesomeIcon>
            <Text style={{fontWeight: 'bold', fontSize: 18, marginLeft: 10}}>
              Filter
            </Text>
          </View>
        </View>
        <FlatList
          style={{marginTop: 20}}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </>
    </SafeAreaView>
  );
}

const Stack2 = createNativeStackNavigator();

const ListScreen = () => {
  return (
    <Stack2.Navigator>
      <Stack2.Screen name="Product" component={listcreen} />
      <Stack2.Screen name="Detail" component={DetailScreen} />
    </Stack2.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default ListScreen;
