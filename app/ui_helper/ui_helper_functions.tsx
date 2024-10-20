import React, { createContext, useContext, useEffect, useState } from "react";
import {
  View,
  Image,
  ScrollView,
  TextInput,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  DimensionValue,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import { styled } from "nativewind";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { SafeAreaView } from "react-native-safe-area-context";


export default class UiHelperComponent  {


    BottomNavBar = ({height, width}:{
    height?: DimensionValue;
    width?: DimensionValue;
  }) : JSX.Element => {
    return (
      <View style={this.styles.row}>
        <View style={this.styles.elevatedBox}>
           
        </View>
      </View>
    )
  }
  
  
  
   dataCard(): JSX.Element {
    return (
      <View
        style={{
          backgroundColor: "black",
          flexDirection: "column",
          padding: 10,
          borderRadius: 20,
        }}
      >
        <Text style={{ color: "white" }}>Get Your Eyes Tested</Text>
        {this.sizedBox({})}
        <View style={{ flexDirection: "row" }}>
          <View style={{ width: 100 }}>
            <Text style={{ color: "white" }}>
              {" "}
              hjsdbsbdosdifdsoioiisdifosdbjfsoidfosdnsdonfdsnfodsfodsfbdsofbos
              fghfghgfhgfhgfhgfhgf
            </Text>
          </View>
          {this.sizedBox({ width: 10 })}
          <View style={{ width: 100 }}>
            <Text style={{ color: "white" }}>
              {" "}
              hjsdbsbdosdifdsoioiisdifosdbjfsoidfosdnsdonfdsnfodsfodsfbdsofbos
              fghfghgfhgfhgfhgfhgf
            </Text>
          </View>
        </View>
      </View>
    );
  }
  
 sizedBox({
    height,
    width,
  }: {
    height?: DimensionValue;
    width?: DimensionValue;
  }) : JSX.Element {
    var result;
    if (height != null && width == null) {
      result = <View style={{ height: height }}></View>;
    } else if (height != null && width != null) {
      result = <View style={{ height: height, width: width }}></View>;
    } else if (height == null && width != null) {
      result = <View style={{ width: width }}></View>;
    } else {
      result = <View style={{ height: 10, width: 10 }}></View>;
    }
    return result;
  }
  
 header(): JSX.Element {
    return (
      <View style={this.styles.row}>
        <View style={this.styles.elevatedBox}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: "bold",
              shadowColor: "black",
              shadowOpacity: 0.3,
              shadowRadius: 10,
            }}
          >
            SightConnect
          </Text>
        </View>
  
        <TouchableOpacity onPress={this.handleSearchTap}>
          <Ionicons style={{}} name="search" size={40} color="black" />
        </TouchableOpacity>
      </View>
    );
  }
  
   handleSearchTap() {
    return Alert.alert("Search Icon Tapped");
  }
  
   makeTable(topName: string, bottomName: string): JSX.Element {
    return (
      <View style={this.tableStyles.table}>
        <Text style={this.tableStyles.tableCell}>{topName}</Text>
        <Text style={this.tableStyles.tableCell}>{bottomName}</Text>
      </View>
    );
  }
  
  // Styles specifically for the table
   tableStyles = StyleSheet.create({
    table: {
      flexDirection: "column",
      borderWidth: 1,
      borderColor: "black",
      marginTop: 20, // Add some spacing
    },
    tableCell: {
      padding: 5,
      borderWidth: 1,
      borderColor: "black",
    },
  });
  
   styles = StyleSheet.create({
    row: {
      flexDirection: "row", // This changes the layout to a row
      justifyContent: "space-between", // Align items across the row
      padding: 10,
    },
    elevatedBox: {
      backgroundColor: "white",
      padding: 5,
      borderRadius: 10,
      elevation: 5, // Adds elevation on Android
  
      // Shadow properties for iOS
      shadowColor: "rgba(173, 216, 230, 1)", // Light bluish shadow
      shadowOffset: { width: 10, height: 12 },
      shadowOpacity: 0.8,
      shadowRadius: 10,
    },
    box: {
      backgroundColor: "skyblue",
      padding: 20,
      margin: 5,
    },
    column: {
      flexDirection: "column", // This changes the layout to a column
      justifyContent: "space-around", // Align items across the column
      alignContent: "flex-start",
      padding: 16,
    },
    spacer: {
      width: 20, // Similar to giving width to a SizedBox in Flutter
    },
  });


}


