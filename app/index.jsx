import React from 'react';
import {View, Text, Image, ScrollView, TextInput, StyleSheet } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import { styled } from 'nativewind';



export default function App() {
  return ( 
    <View style={styles.column} >   
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
        }}
        style={{width: 200, height: 200, alignItems : 'center', justifyContent: 'center', alignSelf: 'center'}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row', // This changes the layout to a row
    justifyContent: 'space-around', // Align items across the row
    padding: 10,
  },
  box: {
    backgroundColor: 'skyblue',
    padding: 20,
    margin: 5,
  },
  column: {
    flexDirection: 'column', // This changes the layout to a column
    justifyContent: 'space-around', // Align items across the column
    padding: 10,
  },

});