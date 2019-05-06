import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Header,Body, Left, Right, Icon, Item, Input, Card, CardItem,Picker, Form } from 'native-base';

var categoryData = [{key:"category1"}, {key:"category2"}, {key:"category3"}, {key:"category4"}, {key:"category5"}];

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
            style={{ backgroundColor: '#CFD8DC', width: 120, height:30 }}
            placeholder="select"
            placeholderStyle={{ color: "#7B8D93" }}
            placeholderIconColor="#007aff"
            selectedValue={this.state.selected2}
            onValueChange={(value) => this.setState({ selected2 : value })}
          >
            <Picker.Item label="category1" value="key0" />
            <Picker.Item label="category2" value="key1" />
            <Picker.Item label="category3" value="key2" />
            <Picker.Item label="category4" value="key3" />
            <Picker.Item label="category5" value="key4" />
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
