import React from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import { Container, Content, Header, Left, Body , Right, Item, Input, Card, CardItem, Picker, Form, List, ListItem } from 'native-base';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Entypo';
import HeaderComponent from '../Components/HeaderComponent';
import CategoryComponent from '../Components/CategoryComponent';

var categoryData = [{key:"category1"}, {key:"category2"}, {key:"category3"}, {key:"category4"}, {key:"category5"}];

export default class CategoryScreen extends React.Component {
  render() {
    return (
      <Container>
        <Header style={{ height: 70, backgroundColor: '#788B91' }}>
          <Left style={{ marginLeft: 5 }}>
            <Icon name="menu" style={{ color: 'white', fontSize: 30 }} onPress={()=>this.props.navigation.openDrawer()} />
          </Left>
          <Body>
            <Text style={{ color: 'white', fontSize: 20 }}>
	      Category List
            </Text>
          </Body>
	  <Right>
	    <FAIcon name= "plus" style={{ color: 'white', fontSize: 25 }}/>
          </Right>
        </Header>
	<Content>
	  <FlatList
	    data ={categoryData}  
	    renderItem = {({item}) =>
	        <CategoryComponent categoryName={item.key} />
	    }
	  />
	</Content>
      </Container>
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
