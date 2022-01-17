import React from 'react'
import { View, Text,StyleSheet ,Image} from 'react-native'

const Header = () => {
    return (
        <View >
    <Image
      style={styles.image}
      source={require('../assets/Met-logo.png')}/>
        <Text style={styles.title}>THE MET</Text>

    </View>
    )
}
const styles = StyleSheet.create({

title:{
    alignSelf:'center',
    paddingTop:30,
    fontWeight:'bold',
    fontSize:35,
    paddingLeft:0,
    fontFamily: 'Times New Roman'
},
image:{
    width:100,
    height:100,
    position:'absolute'
}
})
export default Header
