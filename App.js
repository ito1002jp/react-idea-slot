import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import WordScreen from './Screens/WordScreen';
import CategoryScreen from './Screens/CategoryScreen';
import IdeaListScreen from './Screens/IdeaListScreen';
import IdeaSlotScreen from './Screens/IdeaSlotScreen';
import HeaderComponent from './Components/HeaderComponent';
import { Container, Content, Header, Left, Body, Right, Icon, List, ListItem } from 'native-base';


var DrawerData = [{key:'Word List', screen: 'WordScreen'},
	          {key:'Category List', screen: 'CategoryScreen'},
	          {key:'Idea List', screen: 'IdeaListScreen'},
	          {key:'Idea Slot', screen: 'IdeaSlotScreen'}];

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

const CustomDrawerContentComponent = (props) => {
  return (
    <Container>
      <Header style={{ height: 70, backgroundColor: '#788B91' }}>
        <Left>
          <Text style={{ color: 'white', fontSize: 20, marginLeft: 10 }}>Menu</Text>
        </Left>
        <Right>
          <Icon name= "md-menu" style={{ color: 'white'}}/>
        </Right>
      </Header>
      <Content>
	<FlatList 
	  data = {DrawerData}  
	  renderItem = {({item}) =>
	    <ListItem onPress={()=>props.navigation.navigate(item.screen)}>
	      <Text>{item.key}</Text>
	    </ListItem>
	  }  
	/>
      </Content>
    </Container>
);
}

const AppDrawerNavigator = new createDrawerNavigator(
{
  WordScreen: { screen : WordScreen },
  CategoryScreen: { screen : CategoryScreen },
  IdeaListScreen: { screen : IdeaListScreen },
  IdeaSlotScreen: { screen : IdeaSlotScreen }
},
{
  contentComponent: CustomDrawerContentComponent,
  initialRouteName: "CategoryScreen"
}
)

const AppNavigator = createAppContainer(AppDrawerNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
