import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,PixelRatio} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import * as React from 'react';
import MapScreen from './screens/MapScreen';

// import data from './screens/DataMap';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={ {headerShown: false}} name="Login" component={LoginScreen} />
        <Stack.Screen options={ {headerShown: false}} name="HomeScreen" component={HomeScreen} />
        <Stack.Screen options={ {headerShown: false}} name="MapScreen" component={MapScreen} />
        
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    innerText:{
      fontSize:500,
    }
  },
});
