//import liraries
import React, { Component } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

// create a component
const TextInputCustomize = ({
  val,
  label,
  setval,
  title,
  type = "default",
  editable = true,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        editable={editable}
        value={val}
        onChangeText={(e) => setval(e)}
        placeholder={label}
        placeholderTextColor={"black"}
        style={styles.input}
        keyboardType={type}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: 350,

    alignSelf: "center",
    paddingHorizontal: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  input: {
    height: 50,
    width: 320,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "gray",
    color: "black",
    fontSize: 15,
    paddingLeft: 15,
    backgroundColor: "white",
  },
  title: {
    paddingBottom: 3,
    color: "black",
    fontSize: 15,
    fontWeight: "700",
  },
});

//make this component available to the app
export default TextInputCustomize;
