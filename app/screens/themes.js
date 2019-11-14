import PropTypes from "prop-types";
import React, { Component } from "react";
import { ScrollView, StatusBar } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";
import { ListItem, Separator } from "../components/list";

const styles = EStyleSheet.create({
  $blue: "$primaryBlue",
  $green: "$primaryGreen",
  $orange: "$primaryOrange",
  $purple: "$primaryPurple"
});

class Themes extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  handlePressTheme = color => {
    this.props.navigation.goBack();
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="defaults" />
        <ListItem
          text="Blue"
          onPress={() => this.handlePressTheme(styles.$blue)}
          checkMark={false}
          selected
          iconBackground={styles.$blue}
        />
        <Separator />
        <ListItem
          text="Green"
          onPress={() => this.handlePressTheme(styles.$green)}
          checkMark={false}
          selected
          iconBackground={styles.$green}
        />
        <Separator />
        <ListItem
          text="Orange"
          onPress={() => this.handlePressTheme(styles.$orange)}
          checkMark={false}
          selected
          iconBackground={styles.$orange}
        />
        <Separator />
        <ListItem
          text="Purple"
          onPress={() => this.handlePressTheme(styles.$purple)}
          checkMark={false}
          selected
          iconBackground={styles.$purple}
        />
        <Separator />
      </ScrollView>
    );
  }
}

export default Themes;
