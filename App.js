import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNavigator from "./src/navigations/BottomTabNavigator"; // Đảm bảo đúng đường dẫn
import HomeScreen from "./src/screens/HomeScreen"; // Import HomeScreen
import CartScreen from "./src/screens/CartScreen";// Import CartScreen
export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
