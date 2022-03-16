import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  StatusBar,
  Button,
  TouchableOpacity,
  Image,
  SafeAreaView,
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
    <SafeAreaView style={{ backgroundColor: "#e0f0ea", flex: 1 }}>
      <StatusBar barStyle="dark-content" backgroundColor={"white"} />
      <TouchableOpacity
        onPress={() => navigation.navigate("Booked")}
        style={styles.ViewBookedButton}
      >
        <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
          View Schedule
        </Text>
      </TouchableOpacity>
      <FlatList
        contentContainerStyle={{ marginTop: 10 }}
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
          <Text style={{ fontSize: 25, fontWeight: "bold" }}>+</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Mainpage;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "blue",
  },
  ViewBookedButton: {
    width: 330,
    height: 70,
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#313d41",
  },
  container: {
    alignItems: "center",
    flex: 1,
  },
  buttonText: {
    width: 50,
    height: 50,
    backgroundColor: "#526DBD",
    borderRadius: 100,
    bottom: 15,
    right: 15,
    position: "absolute",
    backgroundColor: "#f7f7f7",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
    borderWidth: 0.5,
    borderColor: "gray",
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
