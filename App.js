import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, SafeAreaView} from 'react-native';
import HomeScreen from './Screens/HomeScreen';

export default function App() {
  var base64Icon = 'data:image\/gif;base64,R0lGODlhBAAFAPQAABw\/Zhg\/aBRBaBZBahRCaxxBahxEahNIchZJcR9LdB9OdiZIZSBEbShLbjxRZyBPeipRcSpReUpWaitXgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH5BAAAAAAALAAAAAAEAAUAAAURoMJIDhJAywAcAlEkxhNNTQgAOw==';

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.Main}>
      <HomeScreen></HomeScreen>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
