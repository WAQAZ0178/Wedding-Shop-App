//import liraries
import React, { Component } from "react";
import {
  ActivityIndicator,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

// create a component
const Button = ({ onpress, label, style, disabled }) => {
  return (
    <TouchableOpacity onPress={onpress} style={styles.container}>
      {disabled ? (
        <ActivityIndicator size={"small"} color="white" />
      ) : (
        <Text style={styles.buttonText}>{label}</Text>
      )}
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    height: 50,
    width: 300,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "dodgerblue",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});

//make this component available to the app
export default Button;
