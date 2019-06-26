import React, { Component } from "react";
import { ScrollView, StyleSheet } from "react-native";
import {
  Provider as PaperProvider,
  DefaultTheme,
  Appbar
} from "react-native-paper";
import Card from "./Card";
import { remoteConfig } from "./firebase";

const REMOTE_CONFIG_CACHE_DURATION = 0;

remoteConfig.setDefaults({
  primaryColor: "#ffffff"
});

class App extends Component {
  state = {
    primaryColor: "#ffffff"
  };

  componentDidMount() {
    remoteConfig
      .fetch(REMOTE_CONFIG_CACHE_DURATION)
      .then(() => remoteConfig.activateFetched())
      .then(activated => {
        if (!activated) console.log("Fetched data not activated.");
        return remoteConfig.getValues(["primaryColor"]);
      })
      .then(({ primaryColor }) => {
        this.setState({
          primaryColor: primaryColor.val()
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    const theme = {
      ...DefaultTheme,
      colors: {
        ...DefaultTheme.colors,
        primary: this.state.primaryColor
      }
    };

    return (
      <PaperProvider theme={theme}>
        <Appbar.Header>
          <Appbar.Content title="Title" subtitle="Subtitle" />
        </Appbar.Header>
        <ScrollView style={styles.content}>
          <Card />
          <Card />
        </ScrollView>
      </PaperProvider>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    padding: 15
  }
});

export default App;
