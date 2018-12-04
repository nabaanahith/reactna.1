import React,{Component} from 'react';
import { StyleSheet, Text, View,TextInput,Image,ScrollView } from 'react-native';


import { Constants } from 'expo';



// You can import from local files


// or any pure javascript modules available in npm



import { Card } from 'react-native-paper';

export default class  Items extends Component{
render(){
    let {item}=this.props;
    const{description,publishedAt,title,urlToImage}=item;
    console.log("item",item)
    console.log("des,pub,title,uti",description,publishedAt,title,urlToImage)

    return (
        <View style={styles.container}>
        
          <Card style={styles.stylecard}>
                 
  <Image source={{uri: urlToImage
  }} style={styles.img}
  
  
  />
          <Text style={styles.styletitle}>{title}</Text>
             <Text  style={styles.styledescription}>{description}</Text>
                <Text  style={styles.stylepublishedAt}>{publishedAt}</Text>
          
          </Card>
  
        </View>
      );
    }
  }
  
  
  
  
  
  
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
     
     
      backgroundColor: '#ecf0f1',
      padding: 8,
    },
    img:{
  marginTop:15,
  
   height: 190,
  
    },
  
   styledescription: {
  marginTop:20,
  
  fontSize:10,
    },
    styletitle: {
        fontSize:15,
        fontWeight: 'bold',
        marginTop:20
        
        
          },
          stylepublishedAt: {
            fontSize:8,
          
            marginTop:20
            
            
              },
              stylecard: {
        paddingTop:0,
  padding:20
  
  
    },
  });