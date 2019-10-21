import React, { Component } from "react";
import {
  StatusBar,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { Container } from "../components/container";
import { Logo } from "../components/logo";
import { InputWithButton } from "../components/textinput";
import { SwapButton } from "../components/buttons";
import { LastConverted } from "../components/text";
import { Header } from "../components/header";

const TEMP_BASE_CURRENCY = "USD";
const TEMP_QUOTE_CURRENCY = "GBP";
const TEMP_BASE_PRICE = "100";
const TEMP_QUOTE_PRICE = "79.74";
const TEMP_LAST_CONVERTED = new Date();
const TEMP_CONVERSION_RATE = 0.79739;

class Home extends Component {
  handleChangetext = () => {
    console.log("change text");
  };

  handlePressBaseCurrency = () => {
    console.log("press base currency");
  };
  handlePressQuoteCurrency = () => {
    console.log("press quote currency");
  };
  handleSwapCurrency = () => {
    console.log("handle swap currency");
  };
  handleOptionsPress = () => {
    console.log("handle options press");
  };
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessable={false}>
        <Container>
          <StatusBar
            translucent={false}
            barStyle="light-content"
            backgroundColor="blue"
          />
          <Header onPress={this.handleOptionsPress} />
          <KeyboardAvoidingView behavior="padding">
            <Logo />
            <InputWithButton
              buttonText={TEMP_BASE_CURRENCY}
              onPress={this.handlePressBaseCurrency}
              defaultValue={TEMP_BASE_PRICE}
              keyboardType="numeric"
              onChangeText={this.handleChangeText}
            />
            <InputWithButton
              editable={false}
              buttonText={TEMP_QUOTE_CURRENCY}
              onPress={this.handlePressQuoteCurrency}
              value={TEMP_QUOTE_PRICE}
            />
            <LastConverted
              date={TEMP_LAST_CONVERTED}
              base={TEMP_BASE_CURRENCY}
              quote={TEMP_QUOTE_CURRENCY}
              conversionRate={TEMP_CONVERSION_RATE}
            />
            <SwapButton
              onPress={this.handleSwapCurrency}
              text="Reverse Currencies"
            />
          </KeyboardAvoidingView>
        </Container>
      </TouchableWithoutFeedback>
    );
  }
}

export default Home;
