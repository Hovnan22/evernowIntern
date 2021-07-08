import React from 'react';
import {
    View,
    Text,
    Image,
    Button,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { AppImage } from '../../components/ui';
import icon from "../../../src/assets/images/logo.png";
import whiteBg from "../../../src/assets/images/wilcomeWhiteBg.png";
import gradientBg from "../../../src/assets/images/welcomeBg.png";



const WelcomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.gradienBg}>
                <AppImage width={'100%'} height={430} url={gradientBg} />
            </View>
            <View style={styles.logo}>
                <AppImage width={200} height={200} url={icon} />
            </View>
            <View style={styles.buttonBlock}>
                <View style={styles.buttonBg}>
                    <AppImage width={320} height={340} url={whiteBg} />
                    <View style={styles.buttons}>
                        <TouchableOpacity onPress={() => navigation.navigate("RecoveryPassword")}>
                            <Text >
                                common.forgetPassword
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    buttons: {
        zIndex: 20,
        position: "absolute",
        bottom: 0
    },

    container: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f2f2f2'
    },
    logo: {
        flex: 1,
        alignItems: 'center',
        top: 145
    },
    buttonBg: {
        alignItems: 'center',
        bottom: 40
    },
    gradienBg: {
        position: 'absolute',
        bottom: -15,
        // top: 0,
        right: 0,
        left: 0,
    }
})

export default WelcomeScreen;
