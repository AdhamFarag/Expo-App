import React from 'react'
import { View, Text ,StyleSheet,Image, TouchableOpacity} from 'react-native'

const ArtItem = ({props}) => {
    return (
      <TouchableOpacity>
          <View style={[styles.item,styles.shadowProp]}>
            <Image
            style={styles.image}
            source={{
              uri: `${props.primaryImage}`,
            }}/>
          <Text numberOfLines={3} style={styles.itemText}>{props.title || "unknown artist"}</Text>
          <Text style={styles.Author}>{props.artistDisplayName}</Text>
          </View>
      </TouchableOpacity>
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
      alignItems: 'center', //Centered vertically
      height:'80%'
    },

    Author:{
        textAlign:'right',
        justifyContent:'center',
        alignSelf:'flex-end',
        bottom:10,
        right:10,
        fontSize:10,
        fontWeight:'200',
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        elevation: 5
      },
  });

export default ArtItem
