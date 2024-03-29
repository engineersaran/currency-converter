import PropTypes from "prop-types";
import React, { Component } from "react";
import { FlatList, StatusBar, View } from "react-native";
import Currencies from "../data/currencies";
import ListItem from "../components/list/listItem";
import Separator from "../components/list/separator";
const TEMP_CURRENT_CURRENCY = "CAD";

class CurrencyList extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };
  handlePress = () => {
    const { navigation } = this.props;
    navigation.goBack(null);
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="default" />
        <FlatList
          data={Currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === TEMP_CURRENT_CURRENCY}
              onPress={this.handlePress}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </View>
    );
  }
}
export default CurrencyList;
