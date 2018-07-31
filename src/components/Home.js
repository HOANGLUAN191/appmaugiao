import React, { Component } from 'react'
import {View, Text, ScrollView,Image} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import TabNavigator from 'react-navigation';

import KindergartenList from './KindergartenList';
import reducers from '../reducers';

import ic_Home from './ic_Home.png'




export default class Home extends Component{
  static navigationOptions={
    
    tabBarLabel: "Home",
    title: 'Home',
    header: null,
    tabBarIcon: <Image source={ic_Home} style={{width:25,height:25}}/>
  }
    reder(){
      return(
        <Provider store={createStore(reducers)}>
          <View style={{flex:1}}>
            <Headers headerText="APP"/>
            <KindergartenList/>
          </View>
        </Provider>
      );
    }
  
    }