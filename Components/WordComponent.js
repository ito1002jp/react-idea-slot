import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Header,Body, Left, Right, Icon, Item, Input, Card, CardItem, Form, Picker } from 'native-base';
import CategoryPickerComponent from '../Components/CategoryPickerComponent'

export default class WordComponent extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <Card>
        <CardItem style={{height: 40}}>
         <Body style={{ flexDirection: 'row'}}>
          <View style={{ flex: 1, justifyContent: 'center' }}>
	    <Text style={{ fontSize: 15 }}>{this.props.word}</Text>
          </View>
          <View style={{ flex: 1, alignItems: 'center',justifyContent: 'center', marginLeft: 5 }}>
            <CategoryPickerComponent />
          </View>
         </Body>
       </CardItem>
     </Card>
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
