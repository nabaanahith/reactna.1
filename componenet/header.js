import React,{Component} from 'react';
import { StyleSheet, Text, Image,View } from 'react-native';


export default class  Header extends Component{
render(){
return(
<View style={{flex:0.10,height:60,paddingTop:20,paddingLeft:20,paddingRight:20,justifyContent:'space-between',flexDirection:'row',backgroundColor:'white'}}>
<Image style={{height:60}} resizeMode='contain' source={require('../assets/list-menu.png')}>
</Image>

<Image style={{height:60}} resizeMode='contain' source={require('../assets/search.png')}>
</Image>
</View>






)



}



}