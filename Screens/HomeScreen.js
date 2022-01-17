import React,{useState}from 'react'
import {  Text,StyleSheet, TextInput, View } from 'react-native';
const HomeScreen = () => {

    const [searchQuery, setSearchQuery] = useState("");
    return (
        <View>
        <View style={styles.MainContainer}>
        <TextInput
                style={styles.TextInputStyleClass}
                placeholder="Search for your Art"
                underlineColorAndroid='transparent'
                defaultValue={searchQuery}
                onChangeText={searchQuery => setSearchQuery(searchQuery)} />
        </View>
        </View>
            
    )
}
const styles = StyleSheet.create({

    MainContainer :{
    margin: 10,
    flex:1
    },
    
    TextInputStyleClass:{
    height: 50,
    top:30,
    width:350,
    paddingLeft:20,
    borderWidth: 2,
    borderColor: 'grey',
    borderRadius: 20 ,
    backgroundColor : "#FFFFFF",
    
    }
    
    });
export default HomeScreen
