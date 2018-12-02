import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../componenet/header';
import Search from '../componenet/search';
import List from '../componenet/list';
import {Constants} from 'expo';


export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1,marginTop:Constants.statusBarHeight}}>
      <Header/>
      <View style={{height:1,backgroundColor:'#2C2C2C'}}>
</View>
      <List/>
      </View>
    );
  }
}

