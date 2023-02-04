import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
import React from 'react'
import Svgmap from "./Svgmap"
// import {Restart} from 'fiction-expo-restart';
// import RNRestart from 'react-native-restart';
import { useNavigation } from "@react-navigation/native";

const MapScreen = () => {
  // console.log(k)
 

  const update=()=>{}
  return (
      
      <Svgmap>
        
      </Svgmap>
      
      
   
  )
}

export default MapScreen

const styles = StyleSheet.create({
  
})
// import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'
// // import React from 'react'
// import React, { useEffect, useState } from "react";
// import Svgmap from "./Svgmap"
// import Svg, { G, Path, Defs, ClipPath ,Circle} from "react-native-svg"
// const MapScreen = () => {
//   let choosecolor=()=>{
//     fill="red";
//   }
//   return (
//     <View>
//       <Svg>
      // <Circle
      //     cx={40}
      //     cy={80}
      //     r={5}
      //     stroke="blue"
      //     strokeWidth="2.5"
      //     fill={"red"}
      //     onPress={() => {
      //       console.log("c6");
      //     }}
          
      //   />
//       </Svg>
// 	</View>
//   )
// }

// export default MapScreen

// const styles = StyleSheet.create({
//   con:{
//     // color:"red",
//   }
// })
// import React, { useState } from 'react';
// import { View, TouchableOpacity, Image } from 'react-native';

// function MyComponent() {
//   const [color, setColor] = useState('black');
//   const [c, setC] = useState('black');


//   return (
//     <View>
//     <TouchableOpacity onPress={() => setColor('red')} >
//     <Svg viewBox="0 0 100 100" width="100" height="100">
//   <Circle cx="50" cy="50" r="40" fill={color} />
// </Svg>
//     </TouchableOpacity>
//     <TouchableOpacity onPress={() => setC('blue')} >
//     <Svg >
//     <Circle
//           cx={40}
//           cy={80}
//           r={5}
//           // stroke="blue"
//           strokeWidth="2.5"
//           // fill={"red"}
//           fill={c}
//           onPress={() => {
//             console.log("c6");
//           }}
          
//         />
  
// </Svg>
//     </TouchableOpacity>
//   </View>
//   );
// }

// export default MyComponent;