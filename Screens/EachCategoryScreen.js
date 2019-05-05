import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Icon, Item, Input, Card, CardItem, Picker, Form } from 'native-base';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import HeaderComponent from '../Components/HeaderComponent';
import WordComponent from '../Components/WordComponent';
import CategoryPickerComponent from '../Components/CategoryPickerComponent';

var wordData = [{key:"word1"}, {key:"word2"}, {key:"word3"}, {key:"word4"}, {key:"word5"}];

export default class EachCategoryScreen extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      selected2 : undefined
    }
  
  }

  static navigationOptions= ({navigation}) => ({
    header: (
      <Header style={{ height: 70, backgroundColor: '#788B91' }}>
        <Left style={{ marginLeft: 5 }}>
          <Icon name="arrow-back" style={{ color: 'white' }} onPress={()=>navigation.goBack()} />
        </Left>
        <Body>
          <Text style={{ color: 'white', fontSize: 20 }}>{navigation.state.params.categoryName}</Text>
        </Body>
        <Right />
      </Header>
    )
  });

  render() {
    return (
    <Container>
      <Content>
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

