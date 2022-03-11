import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import React from "react";
import { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs, addDoc } from "firebase/firestore";

const Homepage = () => {
  const [user, setUser] = useState([]);
  const userdata = collection(db, "userData");
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const data = await getDocs(userdata);
    console.log(data.docs);
    // setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const [name, setName] = useState("");
  const addData = async () => {
    await addDoc(userdata, { name: name });
  };
  return (
    <>
      <View>
        <Text>hi</Text>

        {user.map((user1) => (
          <>
            <Text>Name:{user1.name}</Text>
            <Text>Name:{user1.id}</Text>
          </>
        ))}

        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Button onPress={addData}></Button>
      </View>
    </>
  );
};

export default Homepage;

const styles = StyleSheet.create({});
