// In App.js in a new project

import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

const LoginScreen = () => {
  return (
    <View>
      <View>
        <Text style={styles.textStyle}>*Email address</Text>
        <TextInput style={styles.inputStyles}></TextInput>
        <Text style={styles.textStyle}>*Password</Text>
        <TextInput style={styles.inputStyles}></TextInput>
        <TouchableOpacity onPress={() => Alert.alert('Forgot Password ')}>
          <Text style={{margin: 15, fontWeight: 'bold'}}>
            Forgot Password ?
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <TouchableOpacity onPress={() => Alert.alert('HI')}>
          <View style={styles.signIn}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}> Sign in</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Alert.alert('HI')}>
          <View style={styles.joinNow}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}> Join now</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 16,
    marginHorizontal: 15,
    marginTop: 10,
  },

  inputStyles: {
    borderRadius: 10,
    fontSize: 16,
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginTop: 10,
  },

  signIn: {
    borderWidth: 1,
    height: 50,
    marginHorizontal: 10,
    marginVertical: 15,
    backgroundColor: 'yellow',
    alignItems: 'center',
    paddingTop: 10,
  },

  joinNow: {
    borderWidth: 1,
    height: 50,
    marginHorizontal: 10,
    marginVertical: 10,
    backgroundColor: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    alignItems: 'center',
    paddingTop: 10,
  },
});

export default LoginScreen;
