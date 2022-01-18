import React,{useState}from 'react'
import {  Text,StyleSheet, TextInput, View,FlatList, Button,TouchableHighlight } from 'react-native';
import ArtItem from '../Components/ArtItem';
import Header from '../Components/Header';
const HomeScreen = () => {

    const [searchQuery, setSearchQuery] = useState("");
    ///const [art, setArt] = useState([]);
    const [art, setArt] = useState([{
        "objectID": 384580,
        "isHighlight": false,
        "accessionNumber": "17.3.703",
        "accessionYear": "1917",
        "isPublicDomain": true,
        "primaryImage": "https://images.metmuseum.org/CRDImages/dp/original/DP878420.jpg",
        "primaryImageSmall": "https://images.metmuseum.org/CRDImages/dp/web-large/DP878420.jpg",
        "additionalImages": [],
        "constituents": [
            {
                "constituentID": 162786,
                "role": "Artist",
                "name": "Anders Zorn",
                "constituentULAN_URL": "http://vocab.getty.edu/page/ulan/500002927",
                "constituentWikidata_URL": "https://www.wikidata.org/wiki/Q206820",
                "gender": ""
            }
        ],
        "department": "Drawings and Prints",
        "objectName": "Print",
        "title": "Mona",
        "culture": "",
        "period": "",
        "dynasty": "",
        "reign": "",
        "portfolio": "",
        "artistRole": "Artist",
        "artistPrefix": "",
        "artistDisplayName": "Anders Zorn",
        "artistDisplayBio": "Swedish, Mora 1860–1920 Mora",
        "artistSuffix": "",
        "artistAlphaSort": "Zorn, Anders",
        "artistNationality": "Swedish",
        "artistBeginDate": "1860",
        "artistEndDate": "1920",
        "artistGender": "",
        "artistWikidata_URL": "https://www.wikidata.org/wiki/Q206820",
        "artistULAN_URL": "http://vocab.getty.edu/page/ulan/500002927",
        "objectDate": "1911",
        "objectBeginDate": 1911,
        "objectEndDate": 1911,
        "medium": "Etching; third state of three",
        "dimensions": "Plate: 9 3/4 × 6 15/16 in. (24.8 × 17.7 cm)\r\nSheet: 14 9/16 × 11 5/8 in. (37 × 29.5 cm)",
        "measurements": [
            {
                "elementName": "Plate",
                "elementDescription": null,
                "elementMeasurements": {
                    "Height": 24.8,
                    "Width": 17.7
                }
            },
            {
                "elementName": "Sheet",
                "elementDescription": null,
                "elementMeasurements": {
                    "Height": 37,
                    "Width": 29.5
                }
            }
        ],
        "creditLine": "Harris Brisbane Dick Fund, 1917",
        "geographyType": "",
        "city": "",
        "state": "",
        "county": "",
        "country": "",
        "region": "",
        "subregion": "",
        "locale": "",
        "locus": "",
        "excavation": "",
        "river": "",
        "classification": "Prints",
        "rightsAndReproduction": "",
        "linkResource": "",
        "metadataDate": "2021-08-20T04:36:13.79Z",
        "repository": "Metropolitan Museum of Art, New York, NY",
        "objectURL": "https://www.metmuseum.org/art/collection/search/384580",
        "tags": [
            {
                "term": "Portraits",
                "AAT_URL": "http://vocab.getty.edu/page/aat/300015637",
                "Wikidata_URL": "https://www.wikidata.org/wiki/Q134307"
            },
            {
                "term": "Women",
                "AAT_URL": "http://vocab.getty.edu/page/aat/300025943",
                "Wikidata_URL": "https://www.wikidata.org/wiki/Q467"
            }
        ],
        "objectWikidata_URL": "",
        "isTimelineWork": false,
        "GalleryNumber": ""
    }]);

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
        arrayOfObjects = arrayOfObjects.slice(0, 4);
        const dataToSet = []
            for(let i=0;i<arrayOfObjects.length;i++){
                console.log(i);
                const artPiece = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${arrayOfObjects[i]}`)
                const artPieceResult = await artPiece.json()
                dataToSet.push(artPieceResult);
              } 
        setArt([...art, ...dataToSet]);

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
                keyExtractor={({ objectID }) => objectID.toString()}
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
