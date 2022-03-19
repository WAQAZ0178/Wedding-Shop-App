import { StyleSheet } from "react-native";

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
export default styles;
