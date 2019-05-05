import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { Container, Content, Header, Left, Body , Right, Item, Input, Card, CardItem, Picker, Form, List, ListItem } from 'native-base';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Entypo';
import HeaderComponent from '../Components/HeaderComponent';
import CategoryComponent from '../Components/CategoryComponent';
import EachCategoryScreen from '../Screens/EachCategoryScreen';

var categoryData = [{key:"category1"}, {key:"category2"}, {key:"category3"}, {key:"category4"}, {key:"category5"}];

class CategoryScreen extends React.Component {

  static navigationOptions = ({navigation}) => ({
    header: (
        <Header style={{ height: 70, backgroundColor: '#788B91' }}>
          <Left style={{ marginLeft: 5 }}>
            <Icon name="menu" style={{ color: 'white', fontSize: 30 }} onPress={()=>navigation.openDrawer()} />
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
    )
  });
	
  render() {
    return (
      <Container>
        <Content>
	  <FlatList
	    data ={categoryData}  
	    renderItem = {({item}) =>
              <TouchableOpacity onPress={() => this.props.navigation.navigate("EachCategoryScreen",{categoryName: item.key})}>
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
    CategoryScreen: CategoryScreen,
    EachCategoryScreen: EachCategoryScreen,
  },
  {
    initialRouteName: 'CategoryScreen',
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
