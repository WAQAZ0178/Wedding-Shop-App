import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState, useEffect } from "react";
import firebase from "firebase";
import TextInputCustomize from "../components/TextInput/TextInputCustomize";
import moment from "moment";
import * as ImagePicker from "expo-image-picker";
import Button from "../components/button/button";

const EditScreen = ({ navigation, route }) => {
  console.log("====================================");
  console.log("route data ", route?.params?.item);
  console.log("====================================");
  useEffect(() => {
    setAllData();
  }, []);

  const setAllData = () => {
    var data = route?.params?.item;
    setInvoice(data?.invoice);
    setbride(data?.brideNamr);
    setgroom(data?.groomName);
    setDate(data?.todayDate);
    setgroomPhone(data?.groomPhone);
    setBridephone(data?.bridePhone);
    setImage({ uri: data?.image });
    setfirstImage1({ uri: data?.firstImage_1 });
    setfirstImage2({ uri: data?.firstImage_2 });
    setfirstImage3({ uri: data?.firstImage_3 });
    setfirstImage4({ uri: data?.firstImage_4 });
    setfirstImage5({ uri: data?.firstImage_5 });
    setfirstImage6({ uri: data?.firstImage_6 });
    setfirstImage7({ uri: data?.firstImage_7 });
    setfirstImage8({ uri: data?.firstImage_8 });
    setfirstImage9({ uri: data?.firstImage_9 });
    setsecondAppointmentImage1({ uri: data?.firstImage_1 });
    setsecondAppointmentImage2({ uri: data?.firstImage_2 });
    setsecondAppointmentImage3({ uri: data?.firstImage_3 });
    setsecondAppointmentImage4({ uri: data?.firstImage_4 });
    setsecondAppointmentImage5({ uri: data?.firstImage_5 });
    setsecondAppointmentImage6({ uri: data?.firstImage_6 });
    setsecondAppointmentImage7({ uri: data?.firstImage_7 });
    setsecondAppointmentImage8({ uri: data?.firstImage_8 });
    setremark1(data?.remarks1);
    setremark2(data?.remarks2);
    setremark3(data?.remarks3);
    setremark4(data?.remarks4);
    setremark5(data?.remarks5);
    setremark6(data?.remarks6);
    setremark7(data?.remarks7);
    setremark8(data?.remarks8);
    setthirdAppointment1(data?.thirdAppointment1);
    setthirdAppointment2(data?.thirdAppointment2);
    setthirdAppointment3(data?.thirdAppointment3);
    setthirdAppointment4(data?.thirdAppointment4);
    setthirdAppointment5(data?.thirdAppointment5);
    setVeil({ uri: data?.veil });
    setcamCom({ uri: data?.camcom });
    setEarRing({ uri: data?.earRing });
    setHairPeace({ uri: data?.hairPeace });
    setflowerDes(data?.flowerDescription);
    setCollectionFlowerOutfitDate(data?.collectionOutfitDate);
    setCollectionFlowerDate(data?.collectionFlowerDate);
    setCollectionFlowerOutfitTime(data?.collectionOutfitTime);
    setCollectionFlowerTime(data?.collectionFlowerTime);

    setvideographerName(data?.VideoGrapherName);
    setvgMorningVenue(data?.VideoGrapherMorningVenue);
    setvgEveningVenue(data?.VideoGrapherEveningVenue);
    setvgHours(data?.VideoGrapherTotalTime);
    setvgMorningStartTime(data?.VideoGrapherMorningStartTime);
    setvgMoringEndTime(data?.VideoGrapherMoringEndTime);
    seVGtEveningStartTime(data?.VideoGrapherEveningStartTime);
    setVGEveningEndTime(data?.VideoGrapherEveningEndTime);

    setmuaName(data?.MUAName);
    setMoringTime(data?.moringTime);
    setreadyTime(data?.readyTime);
    setafterNoonStartTime(data?.afterNoonSTartTime);
    setphotoStartTime(data?.photoStartTime);
    setphotoEndTime(data?.photoEnDTime);
    setphotoMoringVenue(data?.photoMorningVenue);
    setphotoEveningVenue(data?.photoEveingVenue);
  };
  const [isloading, setisloading] = useState(false);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [image, setImage] = useState(null);
  const [option, setOption] = useState("wedding_date");
  const [timeOption, settimeOption] = useState("fifthVGEndTime");
  const [todayDate, settodayDate] = useState(moment().format("YYYY-MM-DD"));
  const [pickerDates, setPickerDates] = React.useState({
    wedding_date: moment().format("YYYY-MM-DD"),
    mor_date: moment().format("YYYY-MM-DD"),
    collectionOutfit: moment().format("YYYY-MM-DD"),
    collectionflowerDate: moment().format("YYYY-MM-DD"),
  });
  const [timePicker, setTimePicker] = React.useState({
    fouthMoringTime: moment().format("HH:mm:ss"),
    fouthReadyTime: moment().format("HH:mm:ss"),
    foutafterNoonStartTime: moment().format("HH:mm:ss"),
    fouthPhotoStartTime: moment().format("HH:mm:ss"),
    fouthPhotoEndTime: moment().format("HH:mm:ss"),

    fifthVGStartTime: moment().format("HH:mm:ss"),
    fifthVGEndTime: moment().format("HH:mm:ss"),
    fifthVGEveningTime: moment().format("HH:mm:ss"),
  });

  const [invoice, setInvoice] = useState("");
  const [bride, setbride] = useState("");
  const [groom, setgroom] = useState("");
  const [weddingDate, setweddingDate] = useState(new Date());
  const [bridephone, setBridephone] = useState("");
  const [groomPhone, setgroomPhone] = useState("");

  /////////////////////////////////first
  const [firstImage1, setfirstImage1] = useState("");
  const [firstImage2, setfirstImage2] = useState("");
  const [firstImage3, setfirstImage3] = useState("");
  const [firstImage4, setfirstImage4] = useState("");
  const [firstImage5, setfirstImage5] = useState("");
  const [firstImage6, setfirstImage6] = useState("");
  const [firstImage7, setfirstImage7] = useState("");
  const [firstImage8, setfirstImage8] = useState("");
  const [firstImage9, setfirstImage9] = useState("");

  /////////////////////////////////2nd oppointment
  const [secondAppointmentImage1, setsecondAppointmentImage1] = useState("");
  const [secondAppointmentImage2, setsecondAppointmentImage2] = useState("");
  const [secondAppointmentImage3, setsecondAppointmentImage3] = useState("");
  const [secondAppointmentImage4, setsecondAppointmentImage4] = useState("");
  const [secondAppointmentImage5, setsecondAppointmentImage5] = useState("");
  const [secondAppointmentImage6, setsecondAppointmentImage6] = useState("");
  const [secondAppointmentImage7, setsecondAppointmentImage7] = useState("");
  const [secondAppointmentImage8, setsecondAppointmentImage8] = useState("");
  //////////////////////////////2nd appontment remarks
  const [remark1, setremark1] = useState("");
  const [remark2, setremark2] = useState("");
  const [remark3, setremark3] = useState("");
  const [remark4, setremark4] = useState("");
  const [remark5, setremark5] = useState("");
  const [remark6, setremark6] = useState("");
  const [remark7, setremark7] = useState("");
  const [remark8, setremark8] = useState("");
  const [remarksDate, setremarksDate] = useState(new Date());
  const [seamStressComments, setseamStressComments] = useState("");
  const [completedBefore, setcompletedBefore] = useState(
    moment().format("YYYY-MM-DD")
  );

  ///////////////////////////////////3rd appoint ment
  const [veil, setVeil] = useState("");
  const [camCom, setcamCom] = useState("");
  const [earRing, setEarRing] = useState("");
  const [hairPeace, setHairPeace] = useState("");
  const [flowerDes, setflowerDes] = useState("");
  const [thirdAppointment1, setthirdAppointment1] = useState("");
  const [thirdAppointment2, setthirdAppointment2] = useState("");
  const [thirdAppointment3, setthirdAppointment3] = useState("");
  const [thirdAppointment4, setthirdAppointment4] = useState("");
  const [thirdAppointment5, setthirdAppointment5] = useState("");
  const [thirdDes1, setthirdDes1] = useState("");
  const [thirdDes2, setthirdDes2] = useState("");
  const [thirdDes3, setthirdDes3] = useState("");
  const [thirdDes4, setthirdDes4] = useState("");
  const [thirdDes5, setthirdDes5] = useState("");
  const [collectionFlowerDate, setCollectionFlowerDate] = useState(
    moment().format("L")
  );
  const [collectionFlowerOutfitDate, setCollectionFlowerOutfitDate] = useState(
    moment().format("L")
  );
  const [collectionFlowerTime, setCollectionFlowerTime] = useState(
    moment().format("LT")
  );
  const [collectionFlowerOutfitTime, setCollectionFlowerOutfitTime] = useState(
    moment().format("LT")
  );

  //////////////////////////////////////4th appointment
  const [muaName, setmuaName] = useState("");
  const [moringTime, setMoringTime] = useState("");
  const [readyTime, setreadyTime] = useState("");
  const [venueAddress, setvenueAddress] = useState("");
  const [touchupTime, settouchupTime] = useState("");
  const [afterNoonStartTime, setafterNoonStartTime] = useState("");
  const [afterNoonReady, setafterNoonReady] = useState("");
  const [afterNoonVenu, setafterNoonVenu] = useState("");
  const [photgrapherName, setphotgrapherName] = useState("");
  const [photoStartTime, setphotoStartTime] = useState("");
  const [photoEndTime, setphotoEndTime] = useState("");
  const [photoMoringVenue, setphotoMoringVenue] = useState("");
  const [photoEveningVenue, setphotoEveningVenue] = useState("");

  //////////////////////////////////////5th appointment
  const [videographerName, setvideographerName] = useState("");
  const [vgMorningStartTime, setvgMorningStartTime] = useState("");
  const [vgMoringEndTime, setvgMoringEndTime] = useState("");
  const [vgEndTime, setvgEndTime] = useState("");
  const [vgMorningVenue, setvgMorningVenue] = useState("");
  const [vgEveningVenue, setvgEveningVenue] = useState("");
  const [vgHours, setvgHours] = useState("");
  const [vgEveningEndTime, setVGEveningEndTime] = useState("");
  const [vgEveningStartTime, seVGtEveningStartTime] = useState("");

  ///////////////////////////// show date picker
  const [showWeddingDate, setshowWeddingDate] = useState(false);
  const [showRemarksDate, setshowRemarksDate] = useState(false);

  const uploadImage = async (uri, path) => {
    try {
      const response = await fetch(uri);
      const blob = await response.blob();
      const ref = firebase.storage().ref(path);
      const task = ref.put(blob);
      return new Promise((resolve, reject) => {
        task.on(
          "state_changed",
          (taskSnapshot) => {
            console.log(
              `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`
            );
          },
          (err) => {
            reject(err);
          },
          async () => {
            const url = await task.snapshot.ref.getDownloadURL();
            resolve(url);
            return url;
          }
        );
      });
    } catch (err) {
      console.log("uploadImage error: " + err);
    }
  };
  const uploadInformation = async () => {
    var data = route?.params?.item;
    var vl = "",
      cmcm = "",
      hr = "",
      ear = "";
    var first_1 = "",
      first_2 = "",
      first_3 = "",
      first_4 = "",
      first_5 = "",
      first_6 = "",
      first_7 = "",
      first_8 = "",
      first_9 = "",
      url = "";

    var send1 = "",
      send2 = "",
      send3 = "",
      send4 = "",
      send5 = "",
      send6 = "",
      send6 = "",
      send7 = "",
      send8 = "";
    if (!invoice) {
      alert("please enter invoice number ");
    } else {
      setisloading(true);
      if (image?.uri?.includes("?alt=media")) {
        url = image.uri;
      } else if (!image?.uri) {
        url: "";
      } else {
        const ref = firebase.firestore().collection("userData").doc().id;
        url = await uploadImage(image.uri, "userData/" + ref);
      }
      if (firstImage1?.uri?.includes("?alt=media")) {
        first_1 = firstImage1.uri;
      } else if (!firstImage1?.uri) {
        first_1 = "";
      } else {
        const ref = firebase.firestore().collection("userData").doc().id;
        first_1 = await uploadImage(firstImage1.uri, "userData/" + ref);
      }
      if (firstImage2?.uri?.includes("?alt=media")) {
        first_2 = firstImage2.uri;
      } else if (!firstImage2?.uri) {
        first_2 = "";
      } else {
        const ref = firebase.firestore().collection("userData").doc().id;
        first_3 = await uploadImage(firstImage2.uri, "userData/" + ref);
      }
      if (firstImage3?.uri?.includes("?alt=media")) {
        first_3 = firstImage3.uri;
      } else if (!firstImage3?.uri) {
        first_3 = "";
      } else {
        const ref = firebase.firestore().collection("userData").doc().id;
        first_3 = await uploadImage(firstImage3.uri, "userData/" + ref);
      }
      if (firstImage4?.uri?.includes("?alt=media")) {
        first_4 = firstImage4.uri;
      } else if (!firstImage4?.uri) {
        first_4 = "";
      } else {
        const ref = firebase.firestore().collection("userData").doc().id;
        first_4 = await uploadImage(firstImage4.uri, "userData/" + ref);
      }
      if (firstImage5?.uri?.includes("?alt=media")) {
        first_5 = firstImage5;
      } else if (!firstImage5?.uri) {
        first_5 = "";
      } else {
        const ref = firebase.firestore().collection("userData").doc().id;
        first_5 = await uploadImage(firstImage5.uri, "userData/" + ref);
      }
      if (firstImage6?.uri?.includes("?alt=media")) {
        first_6 = firstImage6.uri;
      } else if (!firstImage6?.uri) {
        first_6 = "";
      } else {
        const ref = firebase.firestore().collection("userData").doc().id;
        first_6 = await uploadImage(firstImage6.uri, "userData/" + ref);
      }
      if (firstImage7?.uri?.includes("?alt=media")) {
        first_7 = firstImage7.uri;
      } else if (!firstImage7?.uri) {
        first_7 = "";
      } else {
        const ref = firebase.firestore().collection("userData").doc().id;
        first_7 = await uploadImage(firstImage7.uri, "userData/" + ref);
      }
      if (firstImage8?.uri?.includes("?alt=media")) {
        first_8 = firstImage8.uri;
      } else if (!firstImage8?.uri) {
        first_8 = "";
      } else {
        const ref = firebase.firestore().collection("userData").doc().id;
        first_8 = await uploadImage(firstImage8.uri, "userData/" + ref);
      }
      if (firstImage9?.uri?.includes("?alt=media")) {
        first_9 = firstImage9.uri;
      }
      if (!firstImage9?.uri) {
        first_9 = "";
      } else {
        const ref = firebase.firestore().collection("userData").doc().id;
        first_9 = await uploadImage(firstImage9.uri, "userData/" + ref);
      }

      if (!veil?.uri) {
        vl = "";
      } else {
        const ref = firebase.firestore().collection("userData").doc().id;
        vl = await uploadImage(veil.uri, "userData/" + ref);
      }
      if (!hairPeace?.uri) {
        hr = "";
      } else {
        const ref = firebase.firestore().collection("userData").doc().id;
        hr = await uploadImage(hairPeace.uri, "userData/" + ref);
      }
      if (!camCom?.uri) {
        cmcm = "";
      } else {
        const ref = firebase.firestore().collection("userData").doc().id;
        cmcm = await uploadImage(camCom.uri, "userData/" + ref);
      }
      if (!earRing?.uri) {
        ear = "";
      } else {
        const ref = firebase.firestore().collection("userData").doc().id;
        ear = await uploadImage(earRing.uri, "userData/" + ref);
      }

      if (secondAppointmentImage1?.uri?.includes("?alt=media")) {
        send1 = secondAppointmentImage1.uri;
      } else if (!secondAppointmentImage1?.uri) {
        send1: "";
      } else {
        const ref = firebase.firestore().collection("userData").doc().id;
        send1 = await uploadImage(image.uri, "userData/" + ref);
      }
      if (secondAppointmentImage2?.uri?.includes("?alt=media")) {
        send2 = secondAppointmentImage2.uri;
      } else if (!secondAppointmentImage2?.uri) {
        send2: "";
      } else {
        const ref = firebase.firestore().collection("userData").doc().id;
        send2 = await uploadImage(image.uri, "userData/" + ref);
      }
      if (secondAppointmentImage3?.uri?.includes("?alt=media")) {
        send3 = secondAppointmentImage3.uri;
      } else if (!secondAppointmentImage3?.uri) {
        send3: "";
      } else {
        const ref = firebase.firestore().collection("userData").doc().id;
        send3 = await uploadImage(image.uri, "userData/" + ref);
      }
      if (secondAppointmentImage4?.uri?.includes("?alt=media")) {
        send4 = secondAppointmentImage4.uri;
      } else if (!secondAppointmentImage4?.uri) {
        send4: "";
      } else {
        const ref = firebase.firestore().collection("userData").doc().id;
        send4 = await uploadImage(image.uri, "userData/" + ref);
      }
      if (secondAppointmentImage5?.uri?.includes("?alt=media")) {
        send5 = secondAppointmentImage5.uri;
      } else if (!secondAppointmentImage5?.uri) {
        send5: "";
      } else {
        const ref = firebase.firestore().collection("userData").doc().id;
        send5 = await uploadImage(image.uri, "userData/" + ref);
      }
      if (secondAppointmentImage6?.uri?.includes("?alt=media")) {
        send6 = secondAppointmentImage6.uri;
      } else if (!secondAppointmentImage6?.uri) {
        send6: "";
      } else {
        const ref = firebase.firestore().collection("userData").doc().id;
        send6 = await uploadImage(image.uri, "userData/" + ref);
      }
      if (secondAppointmentImage7?.uri?.includes("?alt=media")) {
        send7 = secondAppointmentImage7.uri;
      } else if (!secondAppointmentImage7?.uri) {
        send7: "";
      } else {
        const ref = firebase.firestore().collection("userData").doc().id;
        send7 = await uploadImage(image.uri, "userData/" + ref);
      }
      if (secondAppointmentImage8?.uri?.includes("?alt=media")) {
        send8 = secondAppointmentImage8.uri;
      } else if (!secondAppointmentImage8?.uri) {
        send8: "";
      } else {
        const ref = firebase.firestore().collection("userData").doc().id;
        send8 = await uploadImage(image.uri, "userData/" + ref);
      }

      console.log(url);
      var id = moment().format("YYY-MM-DD-HH:mm:ss");
      await firebase
        .firestore()
        .collection("userData")
        .doc(data.id)
        .set({
          id: data.id,
          image: url,
          groomName: groom,
          brideNamr: bride,
          weddingDate: weddingDate,
          invoice: invoice,
          todayDate: moment().format("YYYY-MM-DD"),
          firstImage_1: first_1,
          firstImage_2: first_2,
          firstImage_3: first_3,
          firstImage_4: first_4,
          firstImage_5: first_5,
          firstImage_6: first_6,
          firstImage_7: first_7,
          firstImage_8: first_8,
          firstImage_9: first_9,

          remarks1: remark1,
          remarks2: remark2,
          remarks3: remark3,
          remarks4: remark4,
          remarks5: remark5,
          remarks6: remark6,
          remarks7: remark7,
          remarks8: remark8,

          secondImag1: send1,
          secondImag2: send2,
          secondImag3: send3,
          secondImag4: send4,
          secondImag5: send5,
          secondImag6: send6,
          secondImag7: send7,
          secondImag8: send8,

          veil: vl,
          camcom: cmcm,
          hairPeace: hr,
          earRing: ear,
          flowerDescription: flowerDes,
          collectionFlowerDate: collectionFlowerDate,
          collectionOutfitDate: collectionFlowerOutfitDate,
          collectionFlowerTime: collectionFlowerTime,
          collectionOutfitTime: collectionFlowerOutfitTime,
          description1: thirdDes1,
          description2: thirdDes2,
          description3: thirdDes3,

          thirdAppointment1: thirdAppointment1,
          thirdAppointment2: thirdAppointment2,
          thirdAppointment3: thirdAppointment3,
          thirdAppointment4: thirdAppointment4,
          thirdAppointment5: thirdAppointment5,

          MUAName: muaName,
          moringTime: moringTime,
          venueAddress: venueAddress,
          afterNoonSTartTime: afterNoonStartTime,
          readyTime: readyTime,
          venue: afterNoonVenu,
          photoStartTime: photoStartTime,
          photoEnDTime: photoEndTime,
          photoMorningVenue: photoMoringVenue,
          photoEveingVenue: photoEveningVenue,

          VideoGrapherName: videographerName,
          VideoGrapherMorningStartTime: vgMorningStartTime,
          VideoGrapherMoringEndTime: vgMoringEndTime,
          VideoGrapherEveningStartTime: vgEveningStartTime,
          VideoGrapherEveningEndTime: vgEveningEndTime,
          VideoGrapherEveningVenue: vgEveningVenue,
          VideoGrapherMorningVenue: vgMorningVenue,
          VideoGrapherTotalTime: vgHours,
        });
      setisloading(false);
      navigation.goBack();
    }
  };
  const changeWeddingDate = (e, selectedDate) => {
    const currentDate = selectedDate || date;
    setshowWeddingDate(Platform.OS === "ios");
    setTimePicker({
      ...timePicker,
      [timeOption]: moment(currentDate).format("HH:mm:ss"),
    });
    console.log("====================================");
    console.log("current time", currentDate);
    console.log("====================================");
    if (timeOption == "fourthMorningTime") {
      setMoringTime(moment().format("LT"));
    } else if (timeOption == "fouthReadyTime") {
      setreadyTime(moment(currentDate).format("LT"));
    } else if (timeOption == "foutafterNoonStartTime") {
      setafterNoonStartTime(moment(currentDate).format("LT"));
    } else if (timeOption == "fouthPhotoStartTime") {
      setphotoStartTime(moment(currentDate).format("LT"));
    } else if (timeOption == "fouthPhotoEndTime") {
      setphotoEndTime(moment(currentDate).format("LT"));
    } else if (timeOption == "fifthVGMorningStartTime") {
      setvgMorningStartTime(moment(currentDate).format("LT"));
    } else if (timeOption == "fifthEveningStartTime") {
      seVGtEveningStartTime(moment(currentDate).format("LT"));
    } else if (timeOption == "fifthEveningEndTime") {
      setVGEveningEndTime(moment(currentDate).format("LT"));
    } else if (timeOption == "collectionFlowerTime") {
      setCollectionFlowerTime(moment(currentDate).format("LT"));
    } else if (timeOption == "collectionFlowerOutfitTime") {
      setCollectionFlowerOutfitTime(moment(currentDate).format("LT"));
    } else if (timeOption == "fifthVGMorningEndTime") {
      setvgMoringEndTime(moment(currentDate).format("LT"));
    } else if (timeOption == "fourthMorningTime") {
      setMoringTime(moment(currentDate).format("LT"));
    }
  };
  const onChange = (e, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    // setDate(currentDate);
    setPickerDates({
      ...pickerDates,
      [option]: moment(currentDate).format("YYYY-MM-DD"),
    });
    if (option == "wedding_date") {
      setweddingDate(moment(currentDate).format("YYYY-MM-DD"));
    } else if (option == "collectionOutfit") {
      setCollectionFlowerOutfitDate(moment(currentDate).format("YYYY-MM-DD"));
    } else if (option == "collectionflowerDate") {
      setCollectionFlowerDate(moment(currentDate).format("YYYY-MM-DD"));
    } else if (option == "today_Date") {
      settodayDate(moment(currentDate).format("YYYY-MM-DD"));
    } else if (option == "seamStressComments") {
      setcompletedBefore(moment(currentDate).format("YYYY-MM-DD"));
    }
  };
  const pickImage = async (setItem) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      quality: 1,
    });

    if (!result.cancelled) {
      setItem(result);
      console.log("====================================");
      console.log(result);
      console.log("====================================");
      // uploadImage(result.uri, "test-image")
      //   .then(() => {
      //     setItem(result);
      //     console.log("it work");
      //   })
      //   .catch((error) => {
      //     console.log("it does not work");
      //     console.error(error);
      //   });
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          marginTop: 30,
          paddingBottom: 100,
        }}
      >
        <View style={styles.form}>
          <Text style={styles.headingText}>1st appointment</Text>
          <TextInputCustomize
            val={invoice}
            setval={setInvoice}
            label="Enter Invoice Number"
            title="invoice "
          />
          <TextInputCustomize
            val={groom}
            setval={setgroom}
            label="Enter groom name"
            title="Groom name "
          />
          <TextInputCustomize
            val={bride}
            setval={setbride}
            label="Enter bride name"
            title="bride name "
          />
          <TextInputCustomize
            val={bridephone}
            setval={setBridephone}
            label="Enter bride Phone Number"
            title="bride Phone Number"
            type="phone-pad"
          />
          <TextInputCustomize
            val={groomPhone}
            setval={setgroomPhone}
            label="Enter groom Phone number"
            title="groom Phone Number "
            type="phone-pad"
          />

          <TouchableOpacity
            onPress={() => {
              setOption("today_Date");
              setShow(true);
            }}
          >
            <Text style={styles.input}>
              Today date {moment(todayDate).format("YYYY-MM-DD")}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setOption("wedding_date");
              setShow(true);
            }}
          >
            <Text style={styles.input}>
              Wedding date {moment(weddingDate).format("YYYY-MM-DD")}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => pickImage(setImage)}
            style={styles.imageContainer}
          >
            <Text style={{ marginVertical: 5, color: "black" }}>
              weeding Image
            </Text>
            {image ? (
              <Image style={styles.imageBox} source={{ uri: image.uri }} />
            ) : (
              <Image
                source={require("../assets/logo.png")}
                style={styles.imageBox}
              />
            )}
          </TouchableOpacity>

          {showWeddingDate && (
            <DateTimePicker
              testID="datetimepicker"
              value={date}
              mode={"time"}
              display="default"
              onChange={changeWeddingDate}
            />
          )}

          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              display="default"
              onChange={onChange}
            />
          )}
          <Text style={{ ...styles.headingText, paddingVertical: 20 }}>
            outfit Reserved
          </Text>
          <View style={styles.allimageContainer}>
            <TouchableOpacity
              onPress={() => pickImage(setfirstImage1)}
              style={styles.firstAppointmentIMageBox}
            >
              {firstImage1 ? (
                <Image
                  style={styles.firstAppointmentImage}
                  source={{ uri: firstImage1.uri }}
                />
              ) : (
                <Image
                  source={require("../assets/logo.png")}
                  style={styles.firstAppointmentImage}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => pickImage(setfirstImage2)}
              style={styles.firstAppointmentIMageBox}
            >
              {firstImage2 ? (
                <Image
                  style={styles.firstAppointmentImage}
                  source={{ uri: firstImage2.uri }}
                />
              ) : (
                <Image
                  source={require("../assets/logo.png")}
                  style={styles.firstAppointmentImage}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => pickImage(setfirstImage3)}
              style={styles.firstAppointmentIMageBox}
            >
              {firstImage3 ? (
                <Image
                  style={styles.firstAppointmentImage}
                  source={{ uri: firstImage3.uri }}
                />
              ) : (
                <Image
                  source={require("../assets/logo.png")}
                  style={styles.firstAppointmentImage}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => pickImage(setfirstImage4)}
              style={styles.firstAppointmentIMageBox}
            >
              {firstImage4 ? (
                <Image
                  style={styles.firstAppointmentImage}
                  source={{ uri: firstImage4.uri }}
                />
              ) : (
                <Image
                  source={require("../assets/logo.png")}
                  style={styles.firstAppointmentImage}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => pickImage(setfirstImage5)}
              style={styles.firstAppointmentIMageBox}
            >
              {firstImage5 ? (
                <Image
                  style={styles.firstAppointmentImage}
                  source={{ uri: firstImage5.uri }}
                />
              ) : (
                <Image
                  source={require("../assets/logo.png")}
                  style={styles.firstAppointmentImage}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => pickImage(setfirstImage6)}
              style={styles.firstAppointmentIMageBox}
            >
              {firstImage6 ? (
                <Image
                  style={styles.firstAppointmentImage}
                  source={{ uri: firstImage6.uri }}
                />
              ) : (
                <Image
                  source={require("../assets/logo.png")}
                  style={styles.firstAppointmentImage}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => pickImage(setfirstImage7)}
              style={styles.firstAppointmentIMageBox}
            >
              {firstImage7 ? (
                <Image
                  style={styles.firstAppointmentImage}
                  source={{ uri: firstImage7.uri }}
                />
              ) : (
                <Image
                  source={require("../assets/logo.png")}
                  style={styles.firstAppointmentImage}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => pickImage(setfirstImage8)}
              style={styles.firstAppointmentIMageBox}
            >
              {firstImage8 ? (
                <Image
                  style={styles.firstAppointmentImage}
                  source={{ uri: firstImage8.uri }}
                />
              ) : (
                <Image
                  source={require("../assets/logo.png")}
                  style={styles.firstAppointmentImage}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => pickImage(setfirstImage9)}
              style={styles.firstAppointmentIMageBox}
            >
              {firstImage9 ? (
                <Image
                  style={styles.firstAppointmentImage}
                  source={{ uri: firstImage9.uri }}
                />
              ) : (
                <Image
                  source={require("../assets/logo.png")}
                  style={styles.firstAppointmentImage}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ ...styles.form, marginTop: 30 }}>
          <Text style={styles.headingText}>2nd appointment</Text>
          <TouchableOpacity
            onPress={() => pickImage(setsecondAppointmentImage1)}
            style={styles.imageContainer}
          >
            <Text style={{ marginVertical: 5, color: "black" }}>
              weeding Image
            </Text>
            {secondAppointmentImage1 ? (
              <Image
                style={styles.imageBox}
                source={{ uri: secondAppointmentImage1.uri }}
              />
            ) : (
              <Image
                source={require("../assets/logo.png")}
                style={styles.imageBox}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => pickImage(setsecondAppointmentImage2)}
            style={styles.imageContainer}
          >
            <Text style={{ marginVertical: 5, color: "black" }}>
              weeding Image
            </Text>
            {secondAppointmentImage2 ? (
              <Image
                style={styles.imageBox}
                source={{ uri: secondAppointmentImage2.uri }}
              />
            ) : (
              <Image
                source={require("../assets/logo.png")}
                style={styles.imageBox}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => pickImage(setsecondAppointmentImage3)}
            style={styles.imageContainer}
          >
            <Text style={{ marginVertical: 5, color: "black" }}>
              weeding Image
            </Text>
            {secondAppointmentImage3 ? (
              <Image
                style={styles.imageBox}
                source={{ uri: secondAppointmentImage3.uri }}
              />
            ) : (
              <Image
                source={require("../assets/logo.png")}
                style={styles.imageBox}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => pickImage(setsecondAppointmentImage4)}
            style={styles.imageContainer}
          >
            <Text style={{ marginVertical: 5, color: "black" }}>
              weeding Image
            </Text>
            {secondAppointmentImage4 ? (
              <Image
                style={styles.imageBox}
                source={{ uri: secondAppointmentImage4.uri }}
              />
            ) : (
              <Image
                source={require("../assets/logo.png")}
                style={styles.imageBox}
              />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => pickImage(setsecondAppointmentImage5)}
            style={styles.imageContainer}
          >
            <Text style={{ marginVertical: 5, color: "black" }}>
              weeding Image
            </Text>
            {secondAppointmentImage5 ? (
              <Image
                style={styles.imageBox}
                source={{ uri: secondAppointmentImage5.uri }}
              />
            ) : (
              <Image
                source={require("../assets/logo.png")}
                style={styles.imageBox}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => pickImage(setsecondAppointmentImage6)}
            style={styles.imageContainer}
          >
            <Text style={{ marginVertical: 5, color: "black" }}>
              weeding Image
            </Text>
            {secondAppointmentImage6 ? (
              <Image
                style={styles.imageBox}
                source={{ uri: secondAppointmentImage6.uri }}
              />
            ) : (
              <Image
                source={require("../assets/logo.png")}
                style={styles.imageBox}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => pickImage(setsecondAppointmentImage7)}
            style={styles.imageContainer}
          >
            <Text style={{ marginVertical: 5, color: "black" }}>
              weeding Image
            </Text>
            {secondAppointmentImage7 ? (
              <Image
                style={styles.imageBox}
                source={{ uri: secondAppointmentImage7.uri }}
              />
            ) : (
              <Image
                source={require("../assets/logo.png")}
                style={styles.imageBox}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => pickImage(setsecondAppointmentImage8)}
            style={styles.imageContainer}
          >
            <Text style={{ marginVertical: 5, color: "black" }}>
              weeding Image
            </Text>
            {secondAppointmentImage8 ? (
              <Image
                style={styles.imageBox}
                source={{ uri: secondAppointmentImage8.uri }}
              />
            ) : (
              <Image
                source={require("../assets/logo.png")}
                style={styles.imageBox}
              />
            )}
          </TouchableOpacity>
          <TextInputCustomize
            val={remark1}
            setval={setremark1}
            label="Enter Remarks"
            title="Remarks1 "
          />
          <TextInputCustomize
            val={remark2}
            setval={setremark2}
            label="Enter Remarks"
            title="Remarks2"
          />
          <TextInputCustomize
            val={remark3}
            setval={setremark3}
            label="Enter Remarks"
            title="Remarks3 "
          />
          <TextInputCustomize
            val={remark4}
            setval={setremark4}
            label="Enter Remarks"
            title="Remarks4 "
          />
          <TextInputCustomize
            val={remark5}
            setval={setremark5}
            label="Enter Remarks"
            title="Remarks5 "
          />
          <TextInputCustomize
            val={remark6}
            setval={setremark6}
            label="Enter Remarks"
            title="Remarks6 "
          />
          <TextInputCustomize
            val={remark7}
            setval={setremark7}
            label="Enter Remarks"
            title="Remarks7 "
          />
          <TextInputCustomize
            val={remark8}
            setval={setremark8}
            label="Enter Remarks"
            title="Remarks8 "
          />

          <TextInputCustomize
            val={seamStressComments}
            setval={setseamStressComments}
            label=" Enter SeamStress Comments"
            title="SeamStress Comments "
          />
          <TouchableOpacity
            onPress={() => {
              setShow(true);
              setOption("seamStressComments");
            }}
          >
            <TextInputCustomize
              val={completedBefore}
              setval={setcompletedBefore}
              label="Select Collection outfit Date"
              title="Select completed before Date"
              editable={false}
            />
          </TouchableOpacity>
        </View>
        <View style={{ ...styles.form, marginTop: 30 }}>
          <Text style={styles.headingText}>3rd appointment</Text>
          <TextInputCustomize
            val={flowerDes}
            setval={setflowerDes}
            label="Enter flower Des"
            title="flower Description "
          />
          <TouchableOpacity
            onPress={() => {
              setShow(true);
              setOption("collectionOutfit");
            }}
          >
            <TextInputCustomize
              val={collectionFlowerOutfitDate}
              setval={setCollectionFlowerOutfitDate}
              label="Select Collection outfit Date"
              title="Select Collection outfit Date"
              editable={false}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setshowWeddingDate(true);
              settimeOption("collectionFlowerOutfitTime");
            }}
          >
            <TextInputCustomize
              val={collectionFlowerOutfitTime}
              setval={setCollectionFlowerOutfitTime}
              label="Select Collection outfit  time"
              title="Select Collection outfit time"
              editable={false}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setShow(true);
              setOption("collectionflowerDate");
            }}
          >
            <TextInputCustomize
              val={collectionFlowerDate}
              setval={setCollectionFlowerDate}
              label="Select Collection flower  Date"
              title="Select Collection flower Date"
              editable={false}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setshowWeddingDate(true);
              settimeOption("collectionFlowerTime");
            }}
          >
            <TextInputCustomize
              val={collectionFlowerTime}
              setval={setCollectionFlowerTime}
              label="Select Collection flower  time"
              title="Select Collection flower time"
              editable={false}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => pickImage(setVeil)}
            style={styles.imageContainer}
          >
            <Text style={{ marginVertical: 5, color: "black" }}>Veil</Text>
            {veil ? (
              <Image style={styles.imageBox} source={{ uri: veil.uri }} />
            ) : (
              <Image
                source={require("../assets/logo.png")}
                style={styles.imageBox}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => pickImage(setcamCom)}
            style={styles.imageContainer}
          >
            <Text style={{ marginVertical: 5, color: "black" }}>CamCom</Text>
            {camCom ? (
              <Image style={styles.imageBox} source={{ uri: camCom.uri }} />
            ) : (
              <Image
                source={require("../assets/logo.png")}
                style={styles.imageBox}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => pickImage(setHairPeace)}
            style={styles.imageContainer}
          >
            <Text style={{ marginVertical: 5, color: "black" }}>
              Hair Piece
            </Text>
            {hairPeace ? (
              <Image style={styles.imageBox} source={{ uri: hairPeace.uri }} />
            ) : (
              <Image
                source={require("../assets/logo.png")}
                style={styles.imageBox}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => pickImage(setEarRing)}
            style={styles.imageContainer}
          >
            <Text style={{ marginVertical: 5, color: "black" }}>Ear Ring</Text>
            {earRing ? (
              <Image style={styles.imageBox} source={{ uri: earRing.uri }} />
            ) : (
              <Image
                source={require("../assets/logo.png")}
                style={styles.imageBox}
              />
            )}
          </TouchableOpacity>
          {/* //////////////////////////////////////////////// */}

          <TouchableOpacity
            onPress={() => pickImage(setthirdAppointment1)}
            style={styles.imageContainer}
          >
            <Text style={{ marginVertical: 5, color: "black" }}>Banquet</Text>
            {thirdAppointment1 ? (
              <Image
                style={styles.imageBox}
                source={{ uri: thirdAppointment1.uri }}
              />
            ) : (
              <Image
                source={require("../assets/logo.png")}
                style={styles.imageBox}
              />
            )}
          </TouchableOpacity>
          <TextInputCustomize
            val={thirdDes1}
            setval={setthirdDes1}
            label="Enter description"
            title="description "
          />

          <TouchableOpacity
            onPress={() => pickImage(setthirdAppointment2)}
            style={styles.imageContainer}
          >
            <Text style={{ marginVertical: 5, color: "black" }}>Corsage</Text>
            {thirdAppointment2 ? (
              <Image
                style={styles.imageBox}
                source={{ uri: thirdAppointment2.uri }}
              />
            ) : (
              <Image
                source={require("../assets/logo.png")}
                style={styles.imageBox}
              />
            )}
          </TouchableOpacity>
          <TextInputCustomize
            val={thirdDes2}
            setval={setthirdDes2}
            label="Enter description"
            title="description "
          />

          <TouchableOpacity
            onPress={() => pickImage(setthirdAppointment3)}
            style={styles.imageContainer}
          >
            <Text style={{ marginVertical: 5, color: "black" }}>corsage</Text>
            {thirdAppointment3 ? (
              <Image
                style={styles.imageBox}
                source={{ uri: thirdAppointment3.uri }}
              />
            ) : (
              <Image
                source={require("../assets/logo.png")}
                style={styles.imageBox}
              />
            )}
          </TouchableOpacity>
          <TextInputCustomize
            val={thirdDes3}
            setval={setthirdDes3}
            label="Enter Description"
            title="description "
          />

          <TouchableOpacity
            onPress={() => pickImage(setthirdAppointment4)}
            style={styles.imageContainer}
          >
            <Text style={{ marginVertical: 5, color: "black" }}>corsage</Text>
            {thirdAppointment4 ? (
              <Image
                style={styles.imageBox}
                source={{ uri: thirdAppointment4.uri }}
              />
            ) : (
              <Image
                source={require("../assets/logo.png")}
                style={styles.imageBox}
              />
            )}
          </TouchableOpacity>

          <TextInputCustomize
            val={thirdDes4}
            setval={setthirdDes4}
            label="Enter description"
            title="description "
          />

          <TouchableOpacity
            onPress={() => pickImage(setthirdAppointment5)}
            style={styles.imageContainer}
          >
            <Text style={{ marginVertical: 5, color: "black" }}>
              Wedding car design
            </Text>
            {thirdAppointment5 ? (
              <Image
                style={styles.imageBox}
                source={{ uri: thirdAppointment5.uri }}
              />
            ) : (
              <Image
                source={require("../assets/logo.png")}
                style={styles.imageBox}
              />
            )}
          </TouchableOpacity>
          <TextInputCustomize
            val={thirdDes5}
            setval={setthirdDes5}
            label="Enter Description"
            title=" Description "
          />
        </View>
        <View style={{ ...styles.form, marginTop: 30 }}>
          <Text style={styles.headingText}>4rd appointment Photography</Text>

          <TextInputCustomize
            val={muaName}
            setval={setmuaName}
            label="Enter MUA NAME"
            title="MUA NAME "
          />
          <TouchableOpacity
            onPress={() => {
              setshowWeddingDate(true);
              settimeOption("fourthMorningTime");
            }}
          >
            <TextInputCustomize
              val={moringTime}
              setval={setMoringTime}
              label="Enter Moring TIme"
              title="Morning Time"
              editable={false}
            />
          </TouchableOpacity>

          <TextInputCustomize
            val={venueAddress}
            setval={setvenueAddress}
            label="Venue Address"
            title="venue address  "
          />

          <TouchableOpacity
            onPress={() => {
              setshowWeddingDate(true);
              settimeOption("foutafterNoonStartTime");
            }}
          >
            <TextInputCustomize
              val={afterNoonStartTime}
              setval={setafterNoonStartTime}
              label="Enter time"
              title="after Noon Start Time "
              editable={false}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setshowWeddingDate(true);
              settimeOption("fouthReadyTime");
            }}
          >
            <TextInputCustomize
              val={readyTime}
              setval={setreadyTime}
              label="ready time "
              title="ready time "
              editable={false}
            />
          </TouchableOpacity>
          <TextInputCustomize
            val={afterNoonVenu}
            setval={setafterNoonVenu}
            label="Enter venue"
            title="Venue "
          />

          <TextInputCustomize
            val={photgrapherName}
            setval={setphotgrapherName}
            label=" photgrapher Name"
            title=" photgrapher Name"
          />

          <TouchableOpacity
            onPress={() => {
              setshowWeddingDate(true);
              settimeOption("fouthPhotoStartTime");
            }}
          >
            <TextInputCustomize
              val={photoStartTime}
              setval={setphotoStartTime}
              label="photo start time"
              title=" photo start time "
              editable={false}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setshowWeddingDate(true);
              settimeOption("fouthPhotoEndTime");
            }}
          >
            <TextInputCustomize
              val={photoEndTime}
              setval={setphotoEndTime}
              label="photo end time "
              title=" photo end time  "
              editable={false}
            />
          </TouchableOpacity>

          <TextInputCustomize
            val={photoMoringVenue}
            setval={setphotoMoringVenue}
            label="photo  Moring Venue"
            title="photo  Moring Venue "
          />

          <TextInputCustomize
            val={photoEveningVenue}
            setval={setphotoEveningVenue}
            label="photo evening Venue"
            title="photo  Evening Venue "
          />
        </View>
        <View style={{ ...styles.form, marginTop: 30 }}>
          <Text style={styles.headingText}>5th appointment VideoGraphy</Text>
          <TextInputCustomize
            val={videographerName}
            setval={setvideographerName}
            label="Enter VideoGrapher Name"
            title="VideoGrapher Name"
          />
          <TouchableOpacity
            onPress={() => {
              setshowWeddingDate(true);
              settimeOption("fifthVGMorningStartTime");
            }}
          >
            <TextInputCustomize
              val={vgMorningStartTime}
              setval={setvgMorningStartTime}
              label="VideoGraphy Morning Start Time"
              title="VideoGraphy Morning Start Time"
              editable={false}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setshowWeddingDate(true);
              settimeOption("fifthVGMorningEndTime");
            }}
          >
            <TextInputCustomize
              val={vgMoringEndTime}
              setval={setvgMoringEndTime}
              label="VideoGraphy Morning End  Time"
              title="VideoGraphy Morning End Time"
              editable={false}
            />
          </TouchableOpacity>
          <TextInputCustomize
            val={vgMorningVenue}
            setval={setvgMorningVenue}
            label="VideoGraphy morning venue "
            title="VideoGraphy Morning venue "
          />

          <TouchableOpacity
            onPress={() => {
              setshowWeddingDate(true);
              settimeOption("fifthEveningStartTime");
            }}
          >
            <TextInputCustomize
              val={vgEveningStartTime}
              setval={seVGtEveningStartTime}
              label="VideoGraphy Evening Start Time"
              title="VideoGraphy Evening Start Time"
              editable={false}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setshowWeddingDate(true);
              settimeOption("fifthEveningEndTime");
            }}
          >
            <TextInputCustomize
              val={vgEveningEndTime}
              setval={setVGEveningEndTime}
              label="VideoGraphy Evening End  Time"
              title="VideoGraphy Evening End Time"
              editable={false}
            />
          </TouchableOpacity>
          <TextInputCustomize
            val={vgEveningVenue}
            setval={setvgEveningVenue}
            label="VideoGraphy evening venue "
            title="VideoGraphy Evening venue "
          />

          <TextInputCustomize
            val={vgHours}
            setval={setvgHours}
            label="VideoGraphy hours"
            title="VideoGraphy hours"
            type="number-pad"
          />
        </View>
        <Button
          disabled={isloading}
          label={"Save "}
          onpress={() => uploadInformation()}
        />
      </ScrollView>
    </View>
  );
};

export default EditScreen;

const styles = StyleSheet.create({
  conatiner: {
    flex: 9,
    //justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  headingText: {
    paddingTop: 5,
    textAlign: "center",
    color: "black",
    fontSize: 18,
    fontWeight: "700",
  },
  form: {
    backgroundColor: "#e6e6e6",
    borderRadius: 20,
  },
  form_format: {
    width: "100%",
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 5,
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
  imageBox: {
    width: 150,
    height: 150,
    borderRadius: 20,
    resizeMode: "cover",
  },
  allimageContainer: {
    flexDirection: "row",
    flexGrow: 1,
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  firstAppointmentImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
    marginHorizontal: 20,
    resizeMode: "cover",
  },
  firstAppointmentIMageBox: {
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 10,
  },
});
