import React from 'react';
import { StyleSheet, Text, View, Alert, TouchableOpacity } from 'react-native';
import { Container, Content, Header,Body, Left, Right, Icon, Item, Input, Card, CardItem, Form, Picker} from 'native-base';

export default class CategoryComponent extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <TouchableOpacity>
	<Card>
          <CardItem>
           <Body style={{flexDirection:'row', justifyContent:'space-between'}}>
	     <Text style= {{ fontSize: 15 }}>{this.props.categoryName}</Text>
	     <Icon name="arrow-forward" style={{ color:'#CFD8DC', fontSize:22 }}/>
           </Body>
         </CardItem>
       </Card>
      </TouchableOpacity>
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
