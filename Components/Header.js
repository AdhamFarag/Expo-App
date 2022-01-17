import React from 'react'
import { View, Text,StyleSheet } from 'react-native'

const Header = () => {
    return (
        <View>
        <Text style={styles.title}> Welcome to Arter</Text>

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
})
export default Header
