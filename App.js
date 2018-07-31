/**
 * Tran Hoang Luan
 */

import React, { Component } from "react";
import { View } from "react-native";
import { createStackNavigator,createBottomTabNavigator } from 'react-navigation';
import  Home  from "./src/components/Home";

import  Login from "./src/components/Login";
import  Start from "./src/components/Start";
import FavoritesScreen from "./src/components/FavoritesScreen";


const BottomTab = createBottomTabNavigator({
  Home: {
    screen: Home
  },

  Favorites: {
    screen: FavoritesScreen
  },
  Login: {
    screen: Login
  }
});

const Root = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    BottomTab: {
      screen: BottomTab
    }
  },
  {
    swipeEnabled: true,
    headerMode: "none"
  }
);

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { currentScreen: "Start" };
    console.log("Start doing some tasks for about 3 seconds");
    setTimeout(() => {
      console.log("Done some tasks for about 3 seconds");
      this.setState({ currentScreen: "Login" });
    }, 2000);
  }
  render() {
    const { currentScreen } = this.state;
    let mainScreen = currentScreen === "Start" ?<Start/>: <Login />;
    return mainScreen;
  }
}

export default class App extends Component {
  render() {
    return (
      <View>
        <Main />
        <Root />
      </View>
    );
  }
}
