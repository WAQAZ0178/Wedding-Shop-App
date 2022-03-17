import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import moment from "moment";
import firebase from "firebase";
const Booked = ({ navigation }) => {
  const [date, setdate] = useState(moment().format());
  const [flag, setflag] = useState(0);
  const [data, setdata] = useState({});
  useEffect(() => {
    setdata("");
    getData();
  }, []);

  const getData = async () => {
    var cunter = 0;
    firebase
      .firestore()
      .collection("userData")
      .onSnapshot((docs) => {
        let D = {};

        docs.forEach((doc) => {
          var day = doc.data();
          if (day?.weddingDate) {
            cunter = cunter + 1;

            D = {
              ...D,
              [moment(day.weddingDate).format("YYYY-MM-DD")]: {
                selected: true,
                marked: true,
                selectedColor: "blue",
                id: day?.id,
              },
            };
          }
          if (day?.collectionOutfitDate) {
            D = {
              ...D,
              [moment(day.collectionOutfitDate).format("YYYY-MM-DD")]: {
                selected: true,
                marked: true,
                selectedColor: "blue",
                id: day?.id,
              },
            };
          }
          if (day?.collectionFlowerDate) {
            D = {
              ...D,
              [moment(day.collectionFlowerDate).format("YYYY-MM-DD")]: {
                selected: true,
                marked: true,
                selectedColor: "blue",
                id: day?.id,
              },
            };
          }

          // var obj1 = {
          //   [day?.collectionOutfitDate]: {
          //     selected: true,
          //     marked: true,
          //     selectedColor: "blue",
          //     id:day?.id,
          //   },
          // };
        });
        // console.log("====================================");
        // console.log("counter data", cunter);
        // console.log("====================================");
        setsessionDates(D);
      });
  };
  const GetItemInfo = async (id) => {
    var data = "";
    await firebase
      .firestore()
      .collection("userData")
      .where("id", "==", id)
      .get()
      .then((querySnapshot) => {
        querySnapshot.docs.map((doc) => {
          data = doc.data();
        });
      });
    return data;
  };
  const addSession = async (day) => {
    // var d = moment(day).format("YYYY-MM-DD");
    // console.log("====================================", day.dateString);
    // console.log("session mardates", sessionDates);
    // console.log("====================================");

    var d = sessionDates[day.dateString];
    console.log("====================================", d);
    if (d) {
      console.log("if");
      var data = await GetItemInfo(d.id);
      console.log("==================================== result data ", data);
      setdata(data);
      // navigation.navigate("EditScreen", { item: data });
    } else if (!d) {
      console.log("else");
      alert("no data is found again this date ");
      setdata();
    }
  };

  // const [sessionDates, setsessionDates] = useState({
  //   "2022-03-16": {
  //     selected: true,
  //     marked: true,

  //     selectedColor: "blue",
  //   },

  //   "2022-03-17": {
  //     selected: true,
  //     marked: true,
  //     selectedColor: "blue",
  //   },

  //   "2022-03-18": {
  //     selected: true,
  //     marked: true,
  //     selectedColor: "blue",
  //   },

  //   "2022-03-19": {
  //     selected: true,
  //     marked: true,
  //     selectedColor: "blue",
  //   },
  // });
  const [sessionDates, setsessionDates] = useState({});

  return (
    <View style={styles.container}>
      <View style={{ width: "100%" }}>
        <Calendar
          pastScrollRange={0}
          scrollEnabled={false}
          showScrollIndicator={false}
          futureScrollRange={1}
          hideArrows={true}
          hideExtraDays={true}
          current={date}
          initialDate={date}
          showSixWeeks={false}
          firstDay={1}
          disabledDaysIndexes={[0, 15]}
          onDayPress={(day) => {
            addSession(day);
          }}
          enableSwipeMonths={true}
          theme={{
            textSectionTitleDisabledColor: "red",
            backgroundColor: "#313d41",
            calendarBackground: "#313d41",
            textSectionTitleColor: "#6A6E6A",
            textSectionTitleDisabledColor: "#d9e1e8",
            selectedDayBackgroundColor: "#00adf5",
            selectedDayTextColor: "#ffffff",
            todayTextColor: "#00adf5",
            dayTextColor: "#6A6E6A",
            textDisabledColor: "#d9e1e8",
            dotColor: "#00adf5",
            selectedDotColor: "#ffffff",
            arrowColor: "orange",
            disabledArrowColor: "#d9e1e8",
            monthTextColor: "gold",
            indicatorColor: "blue",
            textDayFontFamily: "monospace",
            textMonthFontFamily: "monospace",
            textDayHeaderFontFamily: "monospace",
            textDayFontWeight: "300",
            textMonthFontWeight: "bold",
            textDayHeaderFontWeight: "300",
            textDayFontSize: 14,
            textMonthFontSize: 14,
            textDayHeaderFontSize: 14,
            weekColumnTextStyle: {
              color: "red",
              fontSize: 13,
            },
          }}
          style={{
            height: 330,
            width: "100%",
          }}
          markedDates={sessionDates}
        />
      </View>
      <View style={{ flex: 1, width: "100%" }}>
        {data ? (
          <View style={{ flex: 1 }}>
            <Text style={styles.ShowTextBoxContainer}>
              Invoice No {"    :"} {data.invoice}
            </Text>
            <Text style={styles.ShowTextBoxContainer}>
              Groom {"    :"} {data.groomName}
            </Text>
            <Text style={styles.ShowTextBoxContainer}>
              Bride {"    :"} {data.brideNamr}
            </Text>
            <Text style={styles.ShowTextBoxContainer}>
              Wedding Date {"    :"} {data.weddingDate}
            </Text>
            <Text style={styles.ShowTextBoxContainer}>
              OutFit Date {"    :"} {data.collectionOutfitDate}
            </Text>
            <Text style={styles.ShowTextBoxContainer}>
              Flower Date {"    :"} {data.collectionFlowerDate}
            </Text>
          </View>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
  },
  ShowTextBoxContainer: {
    marginTop: 8,
    height: 50,
    width: "95%",
    alignSelf: "center",
    backgroundColor: "#fff",
    color: "black",
    borderRadius: 10,
    textAlignVertical: "center",
    fontSize: 15,
    paddingLeft: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
});

export default Booked;
