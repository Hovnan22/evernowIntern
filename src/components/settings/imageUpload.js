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
    backgroundColor: "#dadadb",
  },

});

export default AppChangeAvatar;
