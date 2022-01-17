import React,{useState}from 'react'
import {  Text,StyleSheet, TextInput, View } from 'react-native';
import ArtItem from '../Components/ArtItem';
const HomeScreen = () => {

    const [searchQuery, setSearchQuery] = useState("");
    return (
        <View style={styles.MainContainer}>
            <View>
                <Text style={styles.title}> Welcome to Arter</Text>

            </View>
        <View style={styles.InputBar}>
        <TextInput
                style={styles.TextInputStyleClass}
                placeholder="Search for your Art"
                underlineColorAndroid='transparent'
                defaultValue={searchQuery}
                onChangeText={searchQuery => setSearchQuery(searchQuery)} />
        </View>
        <View style={styles.items}>
            <ArtItem/>
            <ArtItem/>
            <ArtItem/>
            <ArtItem/>

        </View>
        </View>
            
    )
}
const styles = StyleSheet.create({
    title:{
        paddingTop:30,
        fontWeight:'bold',
        fontSize:35
    },
    MainContainer :{
    margin: 10,
    flex:1
    },
    InputBar:{},
    items:{
        flexDirection:'row',
        paddingTop:60,
        paddingLeft:25,
        flexWrap: "wrap",

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
