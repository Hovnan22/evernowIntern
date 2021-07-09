import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from "react-native";
import LinearGradient from 'react-native-linear-gradient';

import {
    AppImage,
    AppButton,
} from '../../components/ui';
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
                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#9AD1FF', '#0075C8']} style={styles.gradientButton}>
                            <AppButton
                                name={'Login'}
                                style={styles.login}
                                press={() => { console.log(987) }}
                            />
                        </LinearGradient>

                            <AppButton
                                name={'registration'}
                                style={styles.registration}
                                press={() => { console.log(999) }}
                            />
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
    gradientButton: {
        borderRadius: 10,
    },
    login: {
        width: 260,
        borderRadius: 10,
        height: 50,
        backgroundColor: 'rgba(0,0,0,0)',
        flex: 1,
        alignItems: "center",
        justifyContent: 'center',
    },
    registration: {
        backgroundColor: 'rgba(0,0,0,0)',
        width: 260,
        height: 50,
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        borderRadius: 10,
        // borderColor:
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
