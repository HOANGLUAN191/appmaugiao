/**
 * Tran Hoang Luan
 * 
 */


import React, { Component,PureComponent } from 'react'
import {
    Text,
    View,
    ScrollView,
    Image,
} from 'react-native'

import ic_Noti from './ic_Noti.png'

class FavoritesScreen extends PureComponent {
    static navigationOptions = {
        tabBarLabel : "Favorites",
        title : 'Favorites',
        header: null,
        tabBarIcon : <I mage source={ic_Noti } tyle={{width:25,height:25}}/>

     };

    render() {
      return (
        <Text>Favorites</Text>
      )
    };

}



export default FavoritesScreen


