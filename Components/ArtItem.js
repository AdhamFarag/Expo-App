import React from 'react'
import { View, Text ,StyleSheet,Image} from 'react-native'

const ArtItem = () => {
    return (
        <View style={styles.item}>
      <Image
      style={styles.image}
      source={{
        uri: 'https://images.metmuseum.org/CRDImages/ep/original/DT1567.jpg',
      }}/>
          <Text style={styles.itemText}>Name of Art Peice</Text>
      </View>
    )
}

const styles = StyleSheet.create({
    item: {
        margin:10,
        width:'40%',
      backgroundColor: '#FFF',
      padding: 15,
      borderRadius: 10,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 20,
      borderColor:'grey',
      borderWidth:2
    },
    image:{
        width:100,
        height:100,
        borderWidth:2,
        borderColor:'grey'
    },
    itemText: {
    padding:10,
      maxWidth: '80%',
    },
  });

export default ArtItem
