import React from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import { Container, Content, Header,Body, Left, Right, Icon, Item, Input, Card, CardItem, Form } from 'native-base';
import CategoryPickerComponent from "./CategoryPickerComponent"
import ADIcon from 'react-native-vector-icons/AntDesign';

var categoryData = [{key:"category1"}, {key:"category2"}, {key:"category3"}, {key:"category4"}, {key:"category5"}];

export default class IdeaSlotComponent extends React.Component {

  constructor(props){
    super(props);
     
    this.state = {
      pickerValue: props.pickerValue
    };
  }

  shuffle(){
    this.setState({
      pickerValue : Math.floor(Math.random() * 11),
    })
  } 

  render() {
    return (
      <View>
	<View style={{ alignItems:'center', justifyContent: 'center', paddingTop: 20}}>
	  <CategoryPickerComponent />
	</View>
	<View>
	  <Picker
            style={[styles.picker]} itemStyle={styles.pickerItem}
            selectedValue={this.state.pickerValue}
            onValueChange={(itemValue) => this.setState({job: itemValue})}
          >
            <Picker.Item label="word1" value={1} />
            <Picker.Item label="word2" value={2} />
            <Picker.Item label="word3" value={3} />
            <Picker.Item label="word4" value={4} />
            <Picker.Item label="word5" value={5} />
            <Picker.Item label="word6" value={6} />
            <Picker.Item label="word7" value={7} />
            <Picker.Item label="word8" value={8} />
            <Picker.Item label="word9" value={9} />
          </Picker>
	</View>
	<View style={{ alignItems:'center' }}>
	  <ADIcon name="playcircleo" style={{ fontSize:25 }} onPress={this.shuffle.bind(this)}/>
	</View>
      </View>
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
