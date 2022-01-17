import React,{useState}from 'react'
import {  Text,StyleSheet, TextInput, View,FlatList } from 'react-native';
import ArtItem from '../Components/ArtItem';

const HomeScreen = () => {

    const [searchQuery, setSearchQuery] = useState("");

    const ArtPieces = [
        { id: 0, title: 'JavaScript & JQuery: Web Development' },
        { id: 1, title: 'To Sleep in a Cloud of Stars' },
        { id: 2, title: 'Dance on the Moon' },
        { id: 3, title: 'Best birthday party with enemies' },
        { id: 4, title: 'Second thought changed my life' },
        { id: 5, title: 'Master data science with deep neural network' },
        { id: 6, title: 'Rest Api with SpringBoot Data Rest Modified Title2' },
        { id: 7, title: 'Rest Api with Django rest framework' },
        { id: 8, title: 'Change life with Yoga' },
        { id: 9, title: 'How the mind works' },
        { id: 10, title: 'How to analyze people' }
    ];
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
        <View style={{paddingTop:60,}}>
            <FlatList
                contentContainerStyle={styles.items}
                data={ArtPieces}
                keyExtractor={({ id }) => id.toString()}
                renderItem={({ item }) => <ArtItem title={item.title}/>            }
            />
        </View>
        </View>
            
    )
}
const styles = StyleSheet.create({
    title:{
        alignSelf:'center',
        paddingTop:30,
        fontWeight:'bold',
        fontSize:35
    },
    MainContainer :{
    margin: 10,
    flex:1
    },
    InputBar:{
        alignSelf:'center'
    },
    items:{
        flexDirection:'row',
        flexWrap: "wrap",
        justifyContent: 'center'
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
