import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Header,Body, Left, Right, Icon, Item, Input, Card, CardItem } from 'native-base';

export default class HeaderComponent extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <Header style={{ height: 70, backgroundColor: '#788B91' }}>
	<Left style={{ marginLeft: 5 }}>
	  <Icon name="md-menu" style={{ color: 'white' }} onPress={()=>this.props.yeah.openDrawer()} />
	</Left>
	<Body>
	  <Text style={{ color: 'white', fontSize: 20 }}>
	    {this.props.title}
	  </Text>
	</Body>
	{/* RightがないとBodyが真ん中にならない */}
	<Right />
      </Header>
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
