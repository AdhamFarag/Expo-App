import React from 'react'
import { View, Text ,StyleSheet,Image} from 'react-native'

const ArtItem = (props) => {
    return (
        <View style={styles.item}>
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
      borderColor:'grey',
      borderWidth:2
    },
    image:{
        width:"90%",
        height:"50%",
        alignSelf:'center',
        borderWidth:2,
        borderColor:'grey'
    },
    itemText: {
    alignItems: 'center',
    alignSelf:'center',
    padding:10,
    maxWidth: '80%',
    },
    Author:{
        textAlign:'right',
        fontSize:10,
        fontWeight:'200'
    }
  });

export default ArtItem
