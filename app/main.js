import React from 'react';
import {  Text, View, StyleSheet} from 'react-native';
import Header from '../componenet/header';
import Search from '../componenet/search';
import List from '../componenet/list';
import {Constants} from 'expo';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
 
      <Header/>
      <View style={styles.paragraph}>
</View>
      <List/>
      </View>
    );
    
  }
}
    const styles = StyleSheet.create({
      container: {
        flex:1,
        marginTop:Constants.statusBarHeigh
      },
      paragraph: {
        height:1,
        backgroundColor:'#2C2C2C'
      },
    });


