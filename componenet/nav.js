
import * as React from 'react';
import { Text, View, StyleSheet,Image } from 'react-native';
import { Constants } from 'expo';

import {RkButton,RkTabView,RkText} from 'react-native-ui-kitten';
import {Icon} from 'native-base'

// You can import from local files


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class Nav extends React.Component {

  render() {
    return (

<RkTabView>

  <RkTabView.Tab title={'Home'} >
  
   
    
  </RkTabView.Tab>
  <RkTabView.Tab title={'Tab 1'}>
 

  </RkTabView.Tab>
  <RkTabView.Tab title={'Tab 2'}>
   
  </RkTabView.Tab>
  <RkTabView.Tab title={'Tab 3'}>
    
  </RkTabView.Tab>
</RkTabView>)
  }
}