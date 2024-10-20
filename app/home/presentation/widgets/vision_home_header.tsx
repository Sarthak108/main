import { View, StyleSheet, Text, Image } from "react-native";

var logo = require("../../../../assets/images/vision_logo.jpeg");


export default function VisionHomeHeader(){
    return  <View style={styles.HeaderBox}>
    <Text
      style={{
        fontSize: 24,
        fontWeight: "bold",
        shadowColor: "black",
        shadowOpacity: 0.3,
        shadowRadius: 10,
      }}
    >
      Vision
    </Text>

    <View style={{ width: 10 }} />

   
    <Image source={logo} style={{ width: 40, height: 40,alignItems: "center",  }} />
  

  </View>
}


const styles = StyleSheet.create({
    OuterBox: {
      flexDirection: "column",
      padding: 10,
      backgroundColor: "lightgrey",
      height: "100%",
      width: "100%",
    },
    HeaderBox: {
      backgroundColor: "white",
      height: "7%",
      width: "100%",
      alignContent: "center",
      justifyContent: "flex-start",
      alignItems: "center",
      padding: 10,
      flexDirection: "row",
    },
  });