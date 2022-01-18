import React,{useState}from 'react'
import {  Text,StyleSheet, TextInput, View,FlatList, Button,TouchableHighlight } from 'react-native';
import ArtItem from '../Components/ArtItem';
import Header from '../Components/Header';
const HomeScreen = () => {

    const [searchQuery, setSearchQuery] = useState("");

    // const [art, setArt] = useState([{id:1231,title:"Gamme OF Shadows and the makers of and the lost ci owej ewoinew foiweoifiowef oiwe foew foiwe ty and there is more too cunlum",maker:"lio Davinci"}]);
    const [art, setArt] = useState([]);

    const getArtFromQuery = async () => {
        let response = await fetch(
          `https://collectionapi.metmuseum.org/public/collection/v1/search?hasImages=true&q=${searchQuery}`
        );
        let json = await response.json();
        return json.objectIDs;
      };
    

      const getDetailsOfEach = async () => {
          console.log('calling api');
        let arrayOfObjects = await getArtFromQuery();
        arrayOfObjects = arrayOfObjects.slice(0, 9);
        const dataToSet = []
            for(let i=0;i<arrayOfObjects.length;i++){
                console.log(i);
                const artPiece = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${arrayOfObjects[i]}`)
                const artPieceResult = await artPiece.json()
                dataToSet.push({id:artPieceResult.objectID,title:artPieceResult.title,maker:artPieceResult.artistAlphaSort,imageProp:artPieceResult.primaryImage})
              } 
        setArt([...art, ...dataToSet]);
        console.log(art)


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

        <View style={{paddingTop:20}}>
            <FlatList
                contentContainerStyle={styles.items}
                data={art}
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
        alignSelf:'center',
        paddingTop:20,
        paddingBottom:0,
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
