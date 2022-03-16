import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState, useEffect } from "react";
import firebase from "firebase";
import TextInputCustomize from "../components/TextInput/TextInputCustomize";
import moment from "moment";
import * as ImagePicker from "expo-image-picker";
import Button from "../components/button/button";

const ViewInfo = ({ navigation, route }) => {
  console.log("====================================");
  console.log("route data ", route?.params?.item);
  console.log("====================================");
  useEffect(() => {
    setAllData();
  }, []);

  const setAllData = () => {
    var data = route?.params?.item;
    setgroomPhone(data?.groomPhone);
    setBridephone(data?.bridePhone);
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
    setremarksDate();
    setthirdAppointment1();
    setthirdAppointment2();
    setthirdAppointment3();
    setthirdAppointment4();
    setthirdAppointment5();
    setshowWeddingDate();
    setshowRemarksDate();
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
    setvgStartTime(data?.VideoGrapherStartTime);
    setvgEndTime(data?.VideoGrapherEndTime);
    setvgMorningVenue(data?.VideoGrapherMorningVenue);
    setvgEveningVenue(data?.VideoGrapherEveningVenue);
    setvgHours(data?.VideoGrapherTotalTime);
    setVGEveningEndTime(data?.VideoGrapherEveningStartTime);
    seVGEveningStartTime(data?.VideoGrapherEveningEndTime);

    setmuaName(data?.MUAName);
    setMoringTime(data?.moringTime);
    setreadyTime(data?.readyTime);
    setafterNoonStartTime(data?.afterNoonSTartTime);
    setphotoStartTime(data?.photoStartTime);
    setphotoEndTime(data?.photoEnDTime);
    setphotoMoringVenue(data?.photoMorningVenue);
    setphotoEveningVenue(data?.photoEveingVenue);
    setvgEveningTime(data?.VideoGraphyEveningTime);
    setvgEveningTime(data?.VideoGraphyEveningTime);
    setCollectionFlowerOutfitDate(data?.collectionOutfitDate);
    setCollectionFlowerDate(data?.collectionFlowerDate);
  };
  const [isloading, setisloading] = useState(false);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [image, setImage] = useState(null);
  const [showImageModal, setshowImageModal] = useState(false);
  const [tempImage, settempImage] = useState("");

  const [invoice, setInvoice] = useState("");
  const [bride, setbride] = useState("");
  const [groom, setgroom] = useState("");
  const [weddingDate, setweddingDate] = useState(new Date());
  const [phone, setphone] = useState("");
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
  const [vgStartTime, setvgStartTime] = useState("");
  const [vgEndTime, setvgEndTime] = useState("");
  const [vgMorningVenue, setvgMorningVenue] = useState("");
  const [vgEveningVenue, setvgEveningVenue] = useState("");
  const [vgHours, setvgHours] = useState("");
  const [vgEveningTime, setvgEveningTime] = useState("");
  const [vgEveningEndTime, setVGEveningEndTime] = useState("");
  const [vgEveningStartTime, seVGEveningStartTime] = useState("");

  ///////////////////////////// show date picker
  const [showWeddingDate, setshowWeddingDate] = useState(false);
  const [showRemarksDate, setshowRemarksDate] = useState(false);

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
            editable={false}
          />
          <TextInputCustomize
            val={groom}
            setval={setgroom}
            label="Enter groom name"
            title="Groom name "
            editable={false}
          />
          <TextInputCustomize
            val={bride}
            setval={setbride}
            label="Enter bride name"
            title="bride name "
            editable={false}
          />
          <TextInputCustomize
            val={bridephone}
            setval={setBridephone}
            label="Enter bride Phone Number"
            title="bride Phone Number"
            type="phone-pad"
            editable={false}
          />
          <TextInputCustomize
            val={groomPhone}
            setval={setgroomPhone}
            label="Enter groom Phone number"
            title="groom Phone Number "
            type="phone-pad"
            editable={false}
          />
          <TouchableOpacity>
            <Text style={styles.input}>
              Wedding date {moment(weddingDate).format("YYYY-MM-DD")}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              settempImage(image.uri);
              setshowImageModal(true);
            }}
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
          <Text style={{ ...styles.headingText, paddingVertical: 20 }}>
            outfit Reserved
          </Text>
          <View style={styles.allimageContainer}>
            <TouchableOpacity
              onPress={() => {
                settempImage(firstImage1.uri);
                setshowImageModal(true);
              }}
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
              onPress={() => {
                settempImage(firstImage2.uri);
                setshowImageModal(true);
              }}
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
              onPress={() => {
                settempImage(firstImage3.uri);
                setshowImageModal(true);
              }}
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
              onPress={() => {
                settempImage(firstImage4.uri);
                setshowImageModal(true);
              }}
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
              onPress={() => {
                settempImage(firstImage5.uri);
                setshowImageModal(true);
              }}
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
              onPress={() => {
                settempImage(firstImage6.uri);
                setshowImageModal(true);
              }}
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
              onPress={() => {
                settempImage(firstImage7.uri);
                setshowImageModal(true);
              }}
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
              onPress={() => {
                settempImage(firstImage8.uri);
                setshowImageModal(true);
              }}
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
              onPress={() => {
                settempImage(firstImage9.uri);
                setshowImageModal(true);
              }}
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
            onPress={() => {
              settempImage(secondAppointmentImage1.uri);
              setshowImageModal(true);
            }}
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
            onPress={() => {
              settempImage(secondAppointmentImage2.uri);
              setshowImageModal(true);
            }}
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
            onPress={() => {
              settempImage(secondAppointmentImage3.uri);
              setshowImageModal(true);
            }}
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
            onPress={() => {
              settempImage(secondAppointmentImage4.uri);
              setshowImageModal(true);
            }}
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
            onPress={() => {
              settempImage(secondAppointmentImage5.uri);
              setshowImageModal(true);
            }}
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
            onPress={() => {
              settempImage(secondAppointmentImage6.uri);
              setshowImageModal(true);
            }}
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
            onPress={() => {
              settempImage(secondAppointmentImage7.uri);
              setshowImageModal(true);
            }}
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
            onPress={() => {
              settempImage(secondAppointmentImage8.uri);
              setshowImageModal(true);
            }}
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
            editable={false}
          />
          <TextInputCustomize
            val={remark2}
            setval={setremark2}
            label="Enter Remarks"
            title="Remarks2"
            editable={false}
          />
          <TextInputCustomize
            val={remark3}
            setval={setremark3}
            label="Enter Remarks"
            title="Remarks3 "
            editable={false}
          />
          <TextInputCustomize
            val={remark4}
            setval={setremark4}
            label="Enter Remarks"
            title="Remarks4 "
            editable={false}
          />
          <TextInputCustomize
            val={remark5}
            setval={setremark5}
            label="Enter Remarks"
            title="Remarks5 "
            editable={false}
          />
          <TextInputCustomize
            val={remark6}
            setval={setremark6}
            label="Enter Remarks"
            title="Remarks6 "
            editable={false}
          />
          <TextInputCustomize
            val={remark7}
            setval={setremark7}
            label="Enter Remarks"
            title="Remarks7 "
            editable={false}
          />
          <TextInputCustomize
            val={remark8}
            setval={setremark8}
            label="Enter Remarks"
            title="Remarks8 "
            editable={false}
          />
        </View>
        <View style={{ ...styles.form, marginTop: 30 }}>
          <Text style={styles.headingText}>3rd appointment</Text>

          <TouchableOpacity
            onPress={() => {
              settempImage(veil.uri);
              setshowImageModal(true);
            }}
            style={styles.firstAppointmentIMageBox}
          >
            {veil ? (
              <Image
                style={styles.firstAppointmentImage}
                source={{ uri: veil.uri }}
              />
            ) : (
              <Image
                source={require("../assets/logo.png")}
                style={styles.firstAppointmentImage}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              settempImage(camCom.uri);
              setshowImageModal(true);
            }}
            style={styles.firstAppointmentIMageBox}
          >
            {camCom ? (
              <Image
                style={styles.firstAppointmentImage}
                source={{ uri: camCom.uri }}
              />
            ) : (
              <Image
                source={require("../assets/logo.png")}
                style={styles.firstAppointmentImage}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              settempImage(hairPeace.uri);
              setshowImageModal(true);
            }}
            style={styles.firstAppointmentIMageBox}
          >
            {hairPeace ? (
              <Image
                style={styles.firstAppointmentImage}
                source={{ uri: hairPeace.uri }}
              />
            ) : (
              <Image
                source={require("../assets/logo.png")}
                style={styles.firstAppointmentImage}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              settempImage(earRing.uri);
              setshowImageModal(true);
            }}
            style={styles.firstAppointmentIMageBox}
          >
            {earRing ? (
              <Image
                style={styles.firstAppointmentImage}
                source={{ uri: earRing.uri }}
              />
            ) : (
              <Image
                source={require("../assets/logo.png")}
                style={styles.firstAppointmentImage}
              />
            )}
          </TouchableOpacity>

          <TouchableOpacity style={styles.imageContainer}>
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
            val={flowerDes}
            setval={setflowerDes}
            label="Enter flower Des"
            title="flower Description "
            editable={false}
          />
          <TextInputCustomize
            val={thirdDes1}
            setval={setthirdDes1}
            label="Enter description"
            title="description "
            editable={false}
          />
          <TouchableOpacity style={styles.imageContainer}>
            <Text style={{ marginVertical: 5, color: "black" }}>Coursage</Text>
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
          <TouchableOpacity style={styles.imageContainer}>
            <Text style={{ marginVertical: 5, color: "black" }}>Coursage</Text>
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
          <TouchableOpacity style={styles.imageContainer}>
            <Text style={{ marginVertical: 5, color: "black" }}>Coursage</Text>
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
          <TouchableOpacity style={styles.imageContainer}>
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
            val={thirdDes2}
            setval={setthirdDes1}
            label="Enter description"
            title="description "
            editable={false}
          />
          <TextInputCustomize
            val={thirdDes3}
            setval={setthirdDes1}
            label="Enter Remarks"
            title="description "
            editable={false}
          />
          <TextInputCustomize
            val={collectionFlowerTime}
            setval={setCollectionFlowerTime}
            label="Select Collection flower  time"
            title="Select Collection flower time"
            editable={false}
          />

          <TextInputCustomize
            val={collectionFlowerOutfitTime}
            setval={setCollectionFlowerOutfitTime}
            label="Select Collection outfit  time"
            title="Select Collection outfit time"
            editable={false}
          />
        </View>
        <View style={{ ...styles.form, marginTop: 30 }}>
          <Text style={styles.headingText}>4rd appointment Photography</Text>

          <TextInputCustomize
            val={muaName}
            setval={setmuaName}
            label="Enter MUA NAME"
            title="MUA NAME "
            editable={false}
          />
          <TextInputCustomize
            val={moringTime}
            setval={setMoringTime}
            label="Enter Moring TIme"
            title="MoringTime"
            editable={false}
          />
          <TextInputCustomize
            val={venueAddress}
            setval={setvenueAddress}
            label="Venue Address"
            title="venue address  "
            editable={false}
          />
          <TextInputCustomize
            val={afterNoonStartTime}
            setval={setafterNoonStartTime}
            label="Enter time"
            title="after Noon Start Time "
            editable={false}
          />

          <TextInputCustomize
            val={readyTime}
            setval={setreadyTime}
            label="ready time "
            title="ready time "
            editable={false}
          />
          <TextInputCustomize
            val={afterNoonVenu}
            setval={setafterNoonVenu}
            label="Enter venue"
            title="Venue "
            editable={false}
          />

          <TextInputCustomize
            val={photgrapherName}
            setval={setphotgrapherName}
            label="name"
            title=" photgrapher Name"
            editable={false}
          />

          <TextInputCustomize
            val={photoStartTime}
            setval={setphotoStartTime}
            label="time"
            title=" photo start time "
            editable={false}
          />

          <TextInputCustomize
            val={photoEndTime}
            setval={setphotoEndTime}
            label="time"
            title=" photo end time  "
            editable={false}
          />

          <TextInputCustomize
            val={photoMoringVenue}
            setval={setphotoMoringVenue}
            label="time"
            title="photo  Moring Venue "
            editable={false}
          />

          <TextInputCustomize
            val={photoEveningVenue}
            setval={setphotoEveningVenue}
            label="time"
            title="photo  Evening Venue "
            editable={false}
          />
        </View>
        <View style={{ ...styles.form, marginTop: 30 }}>
          <Text style={styles.headingText}>5th appointment VideoGraphy</Text>

          <TextInputCustomize
            val={videographerName}
            setval={setvideographerName}
            label="Enter VideoGrapher Name"
            title="VideoGrapher Name"
            editable={false}
          />
          <TextInputCustomize
            val={vgMorningVenue}
            setval={setvgMorningVenue}
            label="VideoGraphy moring venue "
            title="VideoGraphy moring venue "
            editable={false}
          />
          <TextInputCustomize
            val={vgStartTime}
            setval={setvgStartTime}
            label="VideoGraphy Morning start Time"
            title="VideoGraphy Morning start Time"
            editable={false}
          />
          <TextInputCustomize
            val={vgEndTime}
            setval={vgEndTime}
            label="VideoGraphy Morning end  Time"
            title="VideoGraphy Morning end Time"
            editable={false}
          />

          <TextInputCustomize
            val={vgEveningVenue}
            setval={vgEveningVenue}
            label="VideoGraphy Evening venue "
            title="VideoGraphy EVening venue "
            editable={false}
          />
          <TextInputCustomize
            val={vgEveningStartTime}
            setval={seVGEveningStartTime}
            label="VideoGraphy evening Start time "
            title="VideoGraphy evening Start time  "
            editable={false}
          />
          <TextInputCustomize
            val={vgEveningEndTime}
            setval={setVGEveningEndTime}
            label="VideoGraphy evening End time "
            title="VideoGraphy evening End time  "
            editable={false}
          />

          <TextInputCustomize
            val={vgHours}
            setval={setvgHours}
            label="VideoGraphy hours"
            title="VideoGraphy hours"
            type="number-pad"
            editable={false}
          />
        </View>
        <Button
          disabled={isloading}
          label={"Go Back "}
          onpress={() => navigation.goBack()}
        />
      </ScrollView>
      <Modal
        style={{ margin: 0, alignItems: "center" }}
        visible={showImageModal}
      >
        <View style={styles.modalView}>
          <TouchableOpacity onPress={() => setshowImageModal(false)}>
            {tempImage ? (
              <Image source={{ uri: tempImage }} style={styles.modalImage} />
            ) : (
              <Image
                source={require("../assets/logo.png")}
                style={styles.modalImage}
              />
            )}
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default ViewInfo;

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
  modalView: {
    height: "100%",
    backgroundColor: "gray",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },

  modalImage: {
    width: 300,
    height: 300,
    borderRadius: 30,
    resizeMode: "cover",
  },
});
