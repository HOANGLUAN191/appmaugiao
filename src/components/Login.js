import React, { Component } from "react";
import { View } from "react-native";
import firebase from "firebase";
import { Spinner } from "./common";
import { Header } from "./common";
import { Button } from "./common";
import { Home } from "./ScreenName";
import LoginForm from "./LoginForm";
import firebase from "firebase";

class Login extends Component {
  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyDZ_ZlvlzB7TTzSVuTxllYdaOJLXKQ_idA",
      authDomain: "kindergartenapp-6570b.firebaseapp.com",
      databaseURL: "https://kindergartenapp-6570b.firebaseio.com",
      projectId: "kindergartenapp-6570b",
      storageBucket: "kindergartenapp-6570b.appspot.com",
      messagingSenderId: "854262292630"
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return;
        <Home />;
      case false:
        return <LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }

  render() {
    return <View>{this.renderContent()}</View>;
  }
}

export default Login;
