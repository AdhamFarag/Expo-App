import React from 'react'
import { View, Text ,StyleSheet,Image} from 'react-native'

const ArtItem = (props) => {
    return (
        <View style={[styles.item,styles.shadowProp]}>
      <Image
      style={styles.image}
      source={{
        uri: 'https://images.metmuseum.org/CRDImages/ep/original/DT1567.jpg',
      }}/>
    <Text style={styles.itemText}>{props.title}</Text>
    <Text style={styles.Author}>Lio Divinci</Text>

      </View>
    )
}

const styles = StyleSheet.create({
    item: {
        margin:10,
        width:150,
        height:250,
        backgroundColor: '#E8EAED',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'column',
        justifyContent: 'space-between',
        marginBottom: 20,
        borderColor:'lightgray',
        borderWidth:.5
    },
    image:{
        width:"90%",
        height:"50%",
        alignSelf:'center',
        borderWidth:2,
        borderColor:'grey',
        borderRadius:5,
    },
    itemText: {
        alignItems: 'center',
        alignSelf:'center',
        padding:10,
        textAlign:'center',
        paddingTop:140,
        maxWidth: '100%',
        maxHeight:'60%',
        position:'absolute',
    
    },
    Author:{
        textAlign:'right',
        justifyContent:'center',
        alignSelf:'flex-end',
        bottom:10,
        right:10,
        fontSize:10,
        fontWeight:'200',
        position:'absolute'
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
  });

export default ArtItem
