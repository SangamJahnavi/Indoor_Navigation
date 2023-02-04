import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity, Image, ImageBackground
} from "react-native";
import React, { useEffect, useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { auth } from "../firebase";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigation = useNavigation();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.navigate("HomeScreen");
      }
    });
    return unsubscribe;
  }, []);

  const handlesignup = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((usercredentials) => {
        const user = usercredentials.user;
        console.log("registered with:", user.email);
      })
      .catch((error) => alert(error.message));
  };
  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((usercredentials) => {
        const user = usercredentials.user;
        console.log("logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
  };
  return (
   
<View style={styles.container}>
<Image
        style={styles.tinyLogo}
        source={{uri:'https://endlessicons.com/wp-content/uploads/2012/12/pin-map-icon-614x460.png'}}
       
       />
        
    <Text style={{color:"white" ,fontSize:30 ,paddingBottom:30}}>LOGIN/REGISTER</Text>
    {/* <View style={{backgroundColor:"gray",padding:80}}> */}
      <View style={styles.inputcontainer}>
        <TextInput
          placeholder="EMAIL"
          value={email}
          onChangeText={(text) => setemail(text)}
          style={styles.input}
        />
      </View>
      <View style={styles.inputcontainerr}>
        <TextInput
          placeholder="PASSWORD"
          value={password}
          onChangeText={(text) => setpassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <View style={styles.buttoncontainer}>
        <TouchableOpacity 
        onPress={handleLogin} 
        style={styles.button}>
          <Text style={styles.buttontext}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handlesignup}
          style={[styles.button, styles.buttonoutline]}
        >
          <Text style={styles.buttonoutlinetext}>REGISTER</Text>
        </TouchableOpacity>
        {/* </View> */}
      </View>
      
      {/* </ImageBackground> */}
      </View>

      
      
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  
  container: {
    justifyContent: "center",
    alignItems: "center",
    // marginTop:50,
    flex: 1,
    // backgroundColor:"#00A36C",

    backgroundColor:"#09AFAF",
   
    // backgroundColor:"#85AA6F",
    
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  
  inputcontainer: {
    width: "80%",
    paddingBottom:15,
    backgroundColor: "white",
    borderRadius:10,
    
  },
  inputcontainerr: {
    marginTop:10,
    width: "80%",
    paddingBottom:15,
    backgroundColor: "white",
    borderRadius:10,
    
  },
  
  input: {
    borderRadius: 10,
    marginTop: 5,
  },
  buttoncontainer: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#C70039",
    width: "100%",
    padding: 15,
    borderRadius: 10,
  },
  buttonoutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "white",
    borderWidth: 2,
  },
  buttonoutlinetext: {
    color: "#C70039",
    fontWeight: "700",
    fontSize: 16,
  },
  buttontext: {
    color: "white",
    fontWeight: "700",
    fontSize:16,
},
tinyLogo: {
  width: "60%",
  height: "20%",
  
},
})
