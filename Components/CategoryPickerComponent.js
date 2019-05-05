import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Header,Body, Left, Right, Icon, Item, Input, Card, CardItem,Picker, Form } from 'native-base';

export default class CategoryPickerComponent extends React.Component {

  constructor(props){
    super(props);
     
    this.state = {
      selected2 : undefined
    }
  }

  render() {
    return (
      <Form>
        <Item picker style={{ borderBottomColor:'white'}}>
          <Picker
            mode="dropdown"
            iosIcon={<Icon name="arrow-down" />}
            style={{ backgroundColor: '#CFD8DC', width: 160, height:30 }}
            placeholder="select a category"
            placeholderStyle={{ color: "#7B8D93" }}
            placeholderIconColor="#007aff"
            selectedValue={this.state.selected2}
            onValueChange={(value) => this.setState({ selected2 : value })}
          >
            <Picker.Item label="Wallet" value="key0" />
            <Picker.Item label="ATM Card" value="key1" />
            <Picker.Item label="Debit Card" value="key2" />
            <Picker.Item label="Credit Card" value="key3" />
            <Picker.Item label="Net Banking" value="key4" />
          </Picker>
        </Item>
      </Form> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
