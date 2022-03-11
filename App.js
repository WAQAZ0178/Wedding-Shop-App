import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screen/Login";
import Homepage from "./screen/Homepage";
import Mainpage from "./screen/Mainpage";
import Form from "./screen/Form";
import firebase from "firebase";
import firebaseConfig from "./firebaseConfig";
import EditScreen from "./screen/editScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Mainpage"
          component={Mainpage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="EditScreen"
          component={EditScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Form"
          component={Form}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Homepage"
          component={Homepage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
