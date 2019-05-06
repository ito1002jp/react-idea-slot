import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Container, Content, Header, Left, Body, Right, Icon, Item, Input, Button } from 'native-base';
import ADIcon from 'react-native-vector-icons/AntDesign';
import IdeaSlotComponent from '../Components/IdeaSlotComponent';

export default class IdeaSlotScreen extends React.Component {

  constructor(props){
    super(props);

    this.state= {
      pickerValue1 : undefined,
      pickerValue2 : undefined
    };
  }

  shuffleAll(){
    this.setState({
      pickerValue1 : Math.floor(Math.random() * 11),
      pickerValue2 : Math.floor(Math.random() * 11)
    })
  }

  render() {
    return (
     <Container style={{flex:1, flexDirection: 'column'}}>
       <Header style={{ height: 70, backgroundColor: '#788B91'}}>
         <Left style={{ marginLeft: 5 }}>
           <Icon name="md-menu" style={{ color: 'white' }} onPress={()=>this.props.navigation.openDrawer()} />
         </Left>
         <Body>
           <Text style={{ color: 'white', fontSize: 20 }}>Idea Slot</Text>
         </Body>
         <Right />
       </Header>
       <View style={{flex:2, flexDirection: 'column'}}>

	 <View style={{flex:1}}>
	   <View style={{flex:1, flexDirection: 'row'}}>
       	      <View style={{flex:1}}>
	        <IdeaSlotComponent pickerValue={this.state.pickerValue1} />
	      </View>
	      <View>
	        <ADIcon name="pluscircleo" style={{ fontSize: 25, marginTop: 150 }} />
	      </View>
	      <View style={{flex:1}}>
	        <IdeaSlotComponent pickerValue={this.state.pickerValue2}/>
	      </View>
	   </View>
	   <View style={{flexDirection:'row', justifyContent:'center'}}>
	     <Button style= {{ width: 250, justifyContent:'center', backgroundColor:'#7B8D93' }}
	       onPress={this.shuffleAll.bind(this)}
	     >
	       <Text style={{ color:'white', fontSize:20 }}>Shuffle All</Text>
	     </Button>
	   </View>
	 </View>

	 <View style={{flex:1, marginTop: 10}}>
           <View style={{flex: 1}}>
             <View style={{width: 350, flexDirection:'row', justifyContent: 'space-between'}}>
	       <View style={{ flexDirection: 'row' }}>
                 <Text style={{fontSize: 28, color:"#7B8D93", marginBottom: 10, marginLeft: 13 }}>Title :</Text>
	         <View style={{ backgroundColor: '#F3F3F3', width: 200, height: 30, margin: 6, borderRadius: 4,
				 paddingLeft: 10, justifyContent: 'center'}}>
	            <Text style={{fontSize: 20}}>title</Text>
	         </View>
	       </View>
               <ADIcon name="checkcircleo" style={{ fontSize:30, color:'#7B8D93', marginRight: 10, marginTop: 5 }} />
             </View>
             <View style={{flex:8, backgroundColor: '#E5E5E5'}}>
               <View style={{flex:1 ,backgroundColor: 'white', margin: 20}}>
               <Text>Regular</Text>
               </View>
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
