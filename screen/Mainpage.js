import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Button,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React, { useState, useEffect } from "react";
import firebase from "firebase";
const Mainpage = ({ navigation }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    firebase
      .firestore()
      .collection("userData")
      .onSnapshot((docs) => {
        let D = [];
        docs.forEach((doc) => {
          D.push(doc.data());
        });
        setUser(D);
      });
  };

  const deleteItem = async (item) => {
    await firebase.firestore().collection("userData").doc(item.id).delete();
    await getData();
  };
  const renderItem = (item) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("ViewInfo", { item: item })}
        style={styles.item}
      >
        <Text style={styles.itemName}>{item.groomName}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("EditScreen", { item: item })}
            style={{ ...styles.itemButton }}
          >
            <Text style={{ color: "white" }}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => deleteItem(item)}
            style={{ ...styles.itemButton, backgroundColor: "#b30000" }}
          >
            <Text style={{ color: "white" }}>Delete</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ backgroundColor: "#e0f0ea", flex: 1 }}>
      <FlatList
        contentContainerStyle={{ marginTop: 30 }}
        data={user}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item, index) => index.toString()}
      />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonText}
          onPress={() => {
            navigation.push("Form");
          }}
        >
          <Text style={{ fontSize: 25 }}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Mainpage;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "blue",
  },
  container: {
    alignItems: "center",
    flex: 1,
  },
  buttonText: {
    borderWidth: 1,
    paddingLeft: 8,
    paddingRight: 8,

    borderColor: "black",
    backgroundColor: "#526DBD",
    borderRadius: 50,
    bottom: 15,
    right: 15,

    position: "absolute",
  },
  item: {
    width: 340,
    backgroundColor: "#f7f7f7",
    height: 80,
    borderRadius: 10,
    flexDirection: "row",
    marginVertical: 10,
    alignSelf: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  itemButton: {
    width: 90,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#313d41",
    marginHorizontal: 5,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    marginLeft: 50,
  },
  itemName: {
    paddingLeft: 20,
    width: 80,
    fontSize: 15,
    color: "black",
    textAlign: "left",
  },
});
