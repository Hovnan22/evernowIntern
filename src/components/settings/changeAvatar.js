import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
} from "react-native";
import avatar from "../../assets/images/avatar.png";
import { AppButton } from "../ui";


const AppChangeAvatar = ({closeHandler}) => (
  <View style={styles.container}>
    <View style={styles.button}>
      <AppButton
        textStyle={styles.registrationButtonsText}
        style={styles.close}
        name={"Close"}
        press={closeHandler}
        type="border"
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  close: {
    width: 300,
    height: 50,
    alignItems: "center",
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 2,
    zIndex: 3,
    bottom: 0,
    backgroundColor: "#fff",
  },
  button: {
    bottom: 10,
    position: "absolute",
  },
  container: {
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 1,
    backgroundColor: "rgba(0,0,0,.5)",
    top: 0,
    right: 0,
    left: 0,
    alignItems: "center"
  },
  avatarBlock: {
    borderRadius: 25,
    overflow: "hidden",
    width: 50,
    height: 50,
  },
});

export default AppChangeAvatar;
