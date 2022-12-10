import React, { Component } from "react";
import { Platform, StyleSheet, Text, View,TouchableOpacity } from "react-native";
import DynamicTabView from "react-native-dynamic-tab-view";

const instructions = Platform.select({
  ios: "Press Cmd+R to reload,\n" + "Cmd+D or shake for dev menu",
  android:
    "Double tap R on your keyboard to reload,\n" +
    "Shake or press menu button for dev menu"
});
export default class GasTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      defaultIndex: 0,
      selectedIndex:0,
      data:[]
    };
  }

  _renderItem = (item, index) => {
    console.log("renderItem", index);
    return (
      <View
        key={item["key"]}
        style={{  flex: 1, }}>
            <View style={styles.setView}>
                <Text style={styles.setText}>Set1</Text>
                <Text style={styles.setText}>Set2</Text>
                <Text style={styles.setText}>Set3</Text>
                <Text style={styles.setText}>Set4</Text>
                <Text style={styles.setText}>Set5</Text>
                <Text style={styles.setText}>Set6</Text>
            </View>
            <Text ellipsizeMode="clip" numberOfLines={1}>
      - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
      - - - - - - - - - - - - - - - - -
    </Text>
            <View style={styles.timerView}>
                <View style={styles.timerTextView}>
                <Text style={styles.timerText}>30:00</Text>
                </View>
                
                <View style={styles.timerTextView}>
                <Text style={styles.timerText}>30:00</Text>
                </View>
                <View style={styles.timerTextView}>
                <Text style={styles.timerText}>30:00</Text>
                </View>
                <View style={styles.timerTextView}>
                <Text style={styles.timerText}>30:00</Text>
                </View>
                <View style={styles.timerTextView}>
                <Text style={styles.timerText}>30:00</Text>
                </View>
                <View style={styles.timerTextView}>
                <Text style={styles.timerText}>30:00</Text>
                </View>
            </View>
            <View style={styles.timerView}>
                <View style={styles.timerTextView}>
                <Text style={styles.timerText}>30:00</Text>
                </View>
                
                <View style={styles.timerTextView}>
                <Text style={styles.timerText}>30:00</Text>
                </View>
                <View style={styles.timerTextView}>
                <Text style={styles.timerText}>30:00</Text>
                </View>
                <View style={styles.timerTextView}>
                <Text style={styles.timerText}>30:00</Text>
                </View>
                <View style={styles.timerTextView}>
                <Text style={styles.timerText}>30:00</Text>
                </View>
                <View style={styles.timerTextView}>
                <Text style={styles.timerText}>30:00</Text>
                </View>
            </View>
            
            
        </View>
    );
  };

  addNewTab=()=>{
    const {data}=this.state;
    const dataLength=data.length+1;

    data.push( { title: "DECK"+dataLength, key: "item"+dataLength, });

    this.setState({data:data,selectedIndex:dataLength});
  
    
  }

  onChangeTab = index => {
    this.setState({selectedIndex:index})
  };

  render() {
    return (
        <>
        <DynamicTabView
        data={this.state.data}
        renderTab={this._renderItem}
        defaultIndex={this.state.selectedIndex}
        containerStyle={styles.container}
        headerBackgroundColor={'white'}
        headerTextStyle={styles.headerText}
        onChangeTab={this.onChangeTab}
        headerUnderlayColor={'transparent'}
       
      />
      <TouchableOpacity
        style={{
            position:'absolute',
            bottom:40,
            right:20,
            alignItems: "center",
            backgroundColor:'green',
            
            padding: 10,
            width:80,
            height:80,
            borderRadius:40,
            justifyContent:'center'
          }}

          onPress={this.addNewTab}
       
      >
        <Text style={{fontSize:28,textAlign:'center',color:'white',fontWeight:'800',}}>+</Text>
      </TouchableOpacity>
        </>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
   
    flex: 1,

  },
  headerText: {
    
    color:'black',
    fontSize:20,
   
  },
  setText:{color:'black',width:60,textAlign:'center',fontSize:18},
  setView:{marginTop:20,marginBottom:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center'},
  timerView:{marginTop:10,marginBottom:10,marginLeft:10,marginRight:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center'},
  timerTextView:{height:60,width:60,backgroundColor:'black',borderRadius:30,justifyContent:'center',alignItems:'center'},
  timerText:{color:'white',textAlign:'center'},
  tabItemContainer: {
    backgroundColor: "#000"
  }
});