import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Icon, Item, Input, Card, CardItem, Picker, Form } from 'native-base';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import HeaderComponent from '../Components/HeaderComponent';
import WordComponent from '../Components/WordComponent';
import CategoryPickerComponent from '../Components/CategoryPickerComponent';

var wordData = [{key:"word1"}, {key:"word2"}, {key:"word3"}, {key:"word4"}, {key:"word5"}];

export default class WordScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selected2 : undefined
    }
  
  }

  render() {
    return (
    <Container>

      <Header style={{ height: 70, backgroundColor: '#788B91' }}>
        <Left style={{ marginLeft: 5 }}>
          <Icon name="md-menu" style={{ color: 'white' }} onPress={()=>this.props.navigation.openDrawer()} />
        </Left>
        <Body>
          <Text style={{ color: 'white', fontSize: 20 }}>Word List</Text>
        </Body>
        <Right />
      </Header>

      <View style={{ height: 40, backgroundColor: '#788B91'}}>
	<View style={{ marginLeft: 5, alignItems: 'center'}}>
          <Item style={{ backgroundColor: 'white', paddingHorizontal: 10, borderRadius: 4, width: 300, height: 30 }}>
	    <Icon name="search" style={{ fontSize: 20, paddingTop: 5}} />
	    <Input placeholder="Search"/>
	  </Item>
	</View>
      </View>

      <Content>
        <View style= {{ 
	      flexDirection: 'row', 
	      borderBottomWidth: 1,
    	      borderBottomColor:'#CFD8DC', 
	      height: 60, 
      	      marginLeft: 10, 
  	      marginRight: 10}}
        >
	  <Item style={{ flex: 1 }}>
	    <Input style={{ borderWidth: 1, borderColor: '#CFD8DC',  height:40 }}/>
	  </Item>
	  <View style={{ flex: 1, alignItems: 'center',justifyContent: 'center', marginLeft: 5 }}>
	    <CategoryPickerComponent />
       	  </View>
        </View>

        <FlatList
          data ={wordData}
          renderItem = {({item}) =>
            <WordComponent  word={item.key} />
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
