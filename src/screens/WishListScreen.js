import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';
import {block} from 'react-native-reanimated';

const WishListScreen = () => {
  return (
    <ScrollView>
      <View>
        <Text style={styles.brandText}>Ribbed Notched Blazer</Text>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://i.pinimg.com/564x/86/8a/4e/868a4eefc894e52defdeab6ee2d04c45.jpg',
            }}
          />
          <View style={styles.info}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>$39.99</Text>
            <Text style={{fontSize: 16, marginTop: 5, marginBottom: 5}}>
              SKU#: 200003468912
            </Text>
            <View style={styles.block}>
              <Text style={{fontWeight: 'bold'}}>Add To Cart</Text>
            </View>
            <View style={styles.block}>
              <Text style={{fontWeight: 'bold'}}>Remove from WishList</Text>
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

      <View>
        <Text style={styles.brandText}>Blue Suit Jacket 2021</Text>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://images.unsplash.com/photo-1578996953841-b187dbe4bc8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
            }}
          />
          <View style={styles.info}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>$88.88</Text>
            <Text style={{fontSize: 16, marginTop: 5, marginBottom: 5}}>
              SKU#: 200003468003
            </Text>
            <View style={styles.block}>
              <Text style={{fontWeight: 'bold'}}>Add To Cart</Text>
            </View>
            <View style={styles.block}>
              <Text style={{fontWeight: 'bold'}}>Remove from WishList</Text>
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

      <View>
        <Text style={styles.brandText}>New Autumn Dress</Text>
        <View style={styles.container}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://i.pinimg.com/564x/07/e5/cb/07e5cb57f7d9f7861c40af86241449f7.jpg',
            }}
          />
          <View style={styles.info}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>$88.88</Text>
            <Text style={{fontSize: 16, marginTop: 5, marginBottom: 5}}>
              SKU#: 200003468003
            </Text>
            <View style={styles.block}>
              <Text style={{fontWeight: 'bold'}}>Add To Cart</Text>
            </View>
            <View style={styles.block}>
              <Text style={{fontWeight: 'bold'}}>Remove from WishList</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  brandText: {
    fontSize: 18,
    fontWeight: '700',
    marginLeft: 15,
    marginTop: 15,
    marginBottom: 10,
  },

  info: {
    flex: 1,
    marginLeft: 5,
  },

  container: {
    flexDirection: 'row',
    marginHorizontal: 15,
    marginBottom: 15,
  },

  block: {
    borderWidth: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#9999CC',
  },
  image: {
    marginRight: 15,
    marginVertical: 5,
    flex: 1,
    height: 230,
  },
});

export default WishListScreen;
