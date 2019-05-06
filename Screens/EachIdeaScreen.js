import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Header, Left, Body , Right, Icon, Input, Card, CardItem, Picker, Form, List, ListItem } from 'native-base';
import ADIcon from 'react-native-vector-icons/AntDesign';

export default class EachIdeaScreen extends React.Component {

  static navigationOptions = ({navigation}) => ({
    header: (
      <Header style={{ height: 70, backgroundColor: '#788B91' }}>
        <Left style={{ marginLeft: 5 }}>
          <Icon name="arrow-back" style={{ color: 'white', fontSize: 30 }} onPress={()=>navigation.goBack()} />
        </Left>
        <Body>
          <Text style={{ color: 'white', fontSize: 20 }}>{navigation.state.params.ideaName}</Text>
        </Body>
        <Right/>
      </Header>
    )
  });

  render() {
    return (
    <Container style={{ flex: 1, flexDirection:'column'}}>
      <View style={{flex:1, flexDirection: 'column'}} >
	<View style={{flex: 2, alignItems:'center', justifyContent:'center' }}>
	  <View style= {{width:350}}>
	    <Text style= {{fontSize: 28, color:"#7B8D93", marginBottom: 10 }}>Title :</Text>
	  </View>
	  <View style={{backgroundColor: '#F3F3F3', width:300, height: 50,
			justifyContent:'center', paddingLeft: 10, borderRadius: 10}}>
	    <Text style= {{fontSize: 28}}>{this.props.navigation.state.params.ideaName}</Text>
	  </View>
	</View>
	<View style={{flex: 2, alignItems:'center', justifyContent:'center' }}>
	  <View style={{width: 350}}>
	    <Text style={{fontSize: 28, color:"#7B8D93", marginBottom: 10 }}>Word Combination :</Text>
	  </View>
	  <View style={{ flexDirection: 'row'}}>
	    <View style={{backgroundColor: '#CFD8DC', width: 80, height:40,
			    alignItems:'center', justifyContent: 'center', borderRadius: 4}}>
	      <Text style= {{fontSize: 20, color:'#7B8D93'}}>word</Text>
	    </View>
	    <Text style= {{fontSize: 25, color:'#CFD8DC' , paddingLeft: 10, paddingRight:10}}>+</Text>
	    <View style={{backgroundColor: '#CFD8DC', width: 80, height:40,
			    alignItems:'center', justifyContent: 'center', borderRadius: 4}}>
	      <Text style= {{fontSize: 20, color:'#7B8D93'}}>word</Text>
	    </View>
	    <Text style= {{fontSize: 25, color: '#CFD8DC', paddingLeft: 10, paddingRight:10}}>+</Text>
	    <View style={{backgroundColor: '#CFD8DC', width: 80, height:40,
			    alignItems:'center', justifyContent: 'center', borderRadius: 4}}>
	      <Text style= {{fontSize: 20, color:'#7B8D93'}}>word</Text>
	    </View>

	  </View>
	</View>
      	<View style={{flex: 6}}>
	  <View style={{width: 350, flexDirection:'row', justifyContent: 'space-between'}}>
	    <Text style={{fontSize: 28, color:"#7B8D93", marginBottom: 10, marginLeft: 13 }}>Details:</Text>
	    <ADIcon name="checkcircleo" style={{ fontSize:30, color:'#7B8D93', marginRight: 10, marginTop: 5 }} />
	  </View>
	  <View style={{flex:8, backgroundColor: '#E5E5E5'}}>
	    <View style={{flex:1 ,backgroundColor: 'white', margin: 20}}>
	    <Text>Regular</Text>
	    </View>
	  </View>
  	</View>
      </View>
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
