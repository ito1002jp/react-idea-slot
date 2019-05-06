import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Container, Content, Header, Left, Body , Right, Item, Input, Card, CardItem, Picker, Form, List, ListItem } from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Entypo';
import CategoryComponent from '../Components/CategoryComponent';
import EachIdeaScreen from '../Screens/EachIdeaScreen';

var ideaData = [{key:"idea1"}, {key:"idea2"}, {key:"idea3"}, {key:"idea4"}, {key:"idea5"}];

class IdeaListScreen extends React.Component {

static navigationOptions = ({navigation}) => ({
  header: (
    <Header style={{ height: 70, backgroundColor: '#788B91' }}>
      <Left style={{ marginLeft: 5 }}>
        <Icon name="menu" style={{ color: 'white', fontSize: 30 }} onPress={()=>navigation.openDrawer()} />
      </Left>
      <Body>
        <Text style={{ color: 'white', fontSize: 20 }}>
          Idea List
        </Text>
      </Body>
      <Right/>
    </Header>
  )
});

  render() {
    return (
      <Container>
        <Content>
	  <FlatList
	    data ={ideaData}  
	    renderItem = {({item}) =>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("EachIdeaScreen",{ideaName: item.key})}>
	        <CategoryComponent categoryName={item.key} />
  	      </TouchableOpacity>
	    }
	  />
	</Content>
      </Container>
    );
  }
}

const RootStack = createStackNavigator(
  {
    IdeaListScreen: IdeaListScreen,
    EachIdeaScreen: EachIdeaScreen,
  },
  {
    initialRouteName: 'IdeaListScreen',
  }
);

export default AppContainer = createAppContainer(RootStack);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
