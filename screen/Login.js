import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
// import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSignin = async () => {
  //   try {
  //     const user = await signInWithEmailAndPassword(auth, email, password);
  //     alert("Done");
  //     setEmail("");
  //     setPassword("");
  //     navigation.push("Homepage");
  //   } catch (error) {
  //     alert(error.message);
  //   }
  // };
  // const logout = async () => {
  //   alert("Sign out!!");

  //   await signOut(auth);
  // };

  return (
    <>
      <View style={styles.img}>
        <Image
          style={styles.img_under}
          source={require("../assets/logo.png")}
        />
      </View>
      <KeyboardAvoidingView style={styles.container}>
        <View style={styles.inputContaniner}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={handleSignin} style={styles.button}>
            <Text style={styles.buttonOutlineText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={logout} style={styles.button}>
            <Text style={styles.buttonOutlineText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#A0AED8",
  },
  input: {
    backgroundColor: "#CDD4EA",
    padding: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#0E40D7",
    margin: 5,
    textAlign: "center",
    fontSize: 16,
  },
  inputContaniner: {
    width: "90%",

    // backgroundColor: "red",
  },

  button: {
    backgroundColor: "#526DBD",
    width: "100%",
    borderWidth: 2,
    borderColor: "#0E40D7",
    borderRadius: 10,
    margin: 5,
    padding: 5,
  },

  buttonOutlineText: { textAlign: "center", fontSize: 16 },
  buttonContainer: {
    width: "50%",

    //justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    // backgroundColor: "white",
  },
  img: {
    width: "100%",
    height: "45%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#A0AED8",
    // backgroundColor: "yellow",
  },
  img_under: {
    width: 200,
    height: 200,
  },
});
