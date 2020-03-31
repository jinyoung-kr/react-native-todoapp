import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Platform
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const Header = ({show}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titls}>할 일 목록</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={show}
        style={styles.plus}>
        <Ionicons name="ios-add" color="#ffffff" size={24} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop : 56,
    marginLeft : 16,
    marginBottom : 16,
    marginRight : 16,
    flexDirection : 'row',
    alignItems : 'center',
    justifyContent : 'space-between'
  },
  titls : {
    fontSize : 32,
    fontWeight : '600',
    color : '#212121'
  },
  plus : {
    width : 28,
    height : 28,
    borderRadius : 14,
    backgroundColor : '#212121',
    justifyContent : 'center',
    alignItems : 'center',
    paddingTop : Platform.select({
      ios : 2,
      android : 0
    }),
    paddingLeft : Platform.select({
      ios : 1,
      android : 0
    })
  }
});

export default Header;
