import React, { createContext, useContext, useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import UiHelperComponent from "./ui_helper/ui_helper_functions";
import VisionHomePage from "./home/presentation/pages/vision_home_page";

const uiHelper = new UiHelperComponent();

export default function App() {
  return (
    <SafeAreaView style={{ backgroundColor: "black"  }}>
      <VisionHomePage />
    </SafeAreaView>
  );
}
