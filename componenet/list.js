import React,{Component} from 'react';
import { StyleSheet, Text, View,TextInput ,ScrollView} from 'react-native';
import Items from './item'

export default class  Search extends Component{


    
    
render(){
    const {news}=this.props;
    const newslist=news.map((newsitem,i)=>(
        <Items key={i} item={newsitem}/>
    )

    
)
return(

<ScrollView style={styles.liststyle}>

{newslist}
</ScrollView>




)



}



}



const styles = StyleSheet.create({

liststyle:
{
    flex:1,
    padding:0,
    backgroundColor:'white'
},



})