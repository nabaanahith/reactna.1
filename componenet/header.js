import React,{Component} from 'react';
import { StyleSheet, Text, Image,View,TouchableOpacity,TextInput } from 'react-native';


export default class  Header extends Component{
    constructor(prop)
    {
super(prop);
this.state={
    value:''
}



    }
    search(text='iraq'){
if(!text){

    text='iraq'
}
this.setState({value:text})
this.props.searchfun(text)



    }
render(){

    
return(
<View style={styles.headercontaner}>
<Image style={styles.headerimg}  resizeMode='contain' source={require('../assets/list-menu.png')}>
</Image>
<View style={styles.searchSection}>
<TextInput
onChangeText={this.search.bind(this)}
value={this.state.value}

/>
<Image style={styles.headerimg}resizeMode='contain' source={require('../assets/search.png')}>

</Image>
</View>

</View>





)



}



}
const styles=StyleSheet.create({
    searchSection: {
       
        flexDirection: 'row',
      
   
       
    },


headercontaner:{
    flex:0.10,
    height:60,
    paddingTop:20,
    paddingLeft:20,
    paddingRight:20,
    justifyContent:'space-between',
    flexDirection:'row',
    backgroundColor:'white'},
headerimg:{
    height:60
}






})