import React, {Component} from 'react'

import Start from "./src/components/Page/Start";
import { LoginComponent } from './ScreenName';


export default class Splash extends Component {
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
    let mainScreen = currentScreen === "Start" ? <Start /> : <LoginComponent/>;
    return mainScreen;
  }
}
