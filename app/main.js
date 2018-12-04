import React from 'react';
import {  Text, View, StyleSheet} from 'react-native';
import Header from '../componenet/header';
import Search from '../componenet/search';
import List from '../componenet/list';
import {Constants} from 'expo';
import Nav from '../componenet/nav'

export default class App extends React.Component {
  constructor(props){
super(props);
this.state={

news:[]

}
  }
  componentDidMount(){
    this.search('iraq')
   

  }
search(q){
  fetch(`https://newsapi.org/v2/everything?q=${q}&apiKey=978d6c3818ff431b8c210ae86550fb1f`)
.then(res=>
  res.json()).then((data)=>{
    console.log('data :', data)
    
    this.setState({
news:data.articles



})

  console.log("news",data.articles)



  })
}
  updateparent(data){
    this.setState(data)
  
}
  
  render() {
    return (
      
      <View style={styles.container}>
 
      <Header searchfun={this.search.bind(this)}/>
      <View style={styles.paragraph}>
</View>
<List news={this.state.news}/>

      </View>
    );
    
  }
}
    const styles = StyleSheet.create({
      container: {
       
        backgroundColor:'#ecf0f1',
        flex:1,
        marginTop:Constants.statusBarHeigh
      },
      paragraph: {
        height:1,
        backgroundColor:'#2C2C2C'
      },
    })


