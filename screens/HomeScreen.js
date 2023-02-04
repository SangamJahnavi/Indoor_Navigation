import { StyleSheet, Text, View, Button , TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";


const HomeScreen = () => {
  const navigation = useNavigation();
    let mapp=()=>{
      navigation.navigate('MapScreen'); 
      console.log("map")}
    let handlesignout=()=>{
      auth
      .signOut()
      .then(()=>{
        navigation.replace("Login")
      })
      .catch(error=>alert(error.message))
    }
    
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        source={{
          uri: 'http://cdn.onlinewebfonts.com/svg/img_465542.png',
        }}
      />
      <Text style={{color:'white',fontSize:25,fontStyle:"normal"} }>Hello  {auth.currentUser?.email.replace("@gmail.com","")}!</Text>
      <TouchableOpacity 
        onPress={mapp} 
        style={styles.button}>
          <Text style={styles.buttontext}>MAP</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={handlesignout} 
        style={styles.button1}>
          <Text style={styles.buttontext}>LOGOUT</Text>
        </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor:"#09AFAF",
    // backgroundColor:"#9C6488",
  },
  button: {
    backgroundColor: "#C70039",
    // backgroundColor:"#C0F5AB",
    width: "50%",
    padding: 15,
    borderRadius: 10,
    marginTop:20,
  },
  button1: {
    backgroundColor: "#C70039",
    width: "50%",
    padding: 15,
    borderRadius: 10,
    marginTop:20,
  },
  buttontext: {
    color: "white",
    fontWeight: "700",
    fontSize:16,
    textAlign:"center",
},
tinyLogo: {
  width: "92%",
  height: "60%",
},
})