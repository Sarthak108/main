import { View, StyleSheet, Text } from "react-native";
import UiHelperComponent from "../../../ui_helper/ui_helper_functions";
import VisionHomeHeader from "../widgets/vision_home_header";
import VisionHomeCurrentNews from "../widgets/vision_home_current_news";

const helper = new UiHelperComponent();

export default function VisionHomePage() {
  return (
    <View style={styles.OuterBox}>
      {helper.sizedBox({ height: 5 })}
      <VisionHomeHeader/>
      {helper.sizedBox({ height: 10 })}
      <VisionHomeCurrentNews/>

      {helper.sizedBox({ height: 10 })}

      
    </View>
  );
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
    justifyContent: "center",
    padding: 10,
  },
});
