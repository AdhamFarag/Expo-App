import React,{useState}from 'react'
import {  Text,StyleSheet, TextInput, View,FlatList, Button,TouchableHighlight } from 'react-native';
import ArtItem from '../Components/ArtItem';
import Header from '../Components/Header';
const HomeScreen = () => {

    const [searchQuery, setSearchQuery] = useState("");

    const [Art, setArt] = useState([
    ]);
    const getArtFromQuery = async () => {
        let response = await fetch(
          `https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${searchQuery}`
        );
        let json = await response.json();
        return json.objectIDs;
      };
      const getDetailsOfEach = async () => {
        let arrayOfObjects = await getArtFromQuery();
        arrayOfObjects = arrayOfObjects.slice(0, 9);
            for(let i=0;i<arrayOfObjects.length;i++){
                setTimeout(() => {
                console.log(i);
                fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${arrayOfObjects[i]}`)
                .then((response) => response.json())
                .then(booksList => {
                  setArt([...Art,{id:booksList.objectID,title:booksList.title,maker:booksList.artistAlphaSort,imageProp:booksList.primaryImage}]);
                });
                console.log(Art);
            }, 3000);
              } 


        };
      
    return (
        <View style={styles.MainContainer}>
        <Header></Header>

        <View style={styles.InputBar}>
        <TextInput
                style={styles.TextInputStyleClass}
                placeholder="Search for your Art"
                underlineColorAndroid='transparent'
                defaultValue={searchQuery}
                onSubmitEditing={getDetailsOfEach}
                onChangeText={searchQuery => setSearchQuery(searchQuery)} />
        </View>

        <View style={{paddingTop:60,}}>
            <FlatList
                contentContainerStyle={styles.items}
                data={Art}
                numColumns={2}
                keyExtractor={({ id }) => id.toString()}
                renderItem={({ item }) => <ArtItem props={item}/>}
            />
        </View>
        </View>
            
    )
}
const styles = StyleSheet.create({

    MainContainer :{
    margin: 10,
    flex:1
    },
    InputBar:{
        alignSelf:'center'
    },
    items:{
        flexDirection:'column',
        alignItems:'center',

       // flexWrap: "wrap",
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
