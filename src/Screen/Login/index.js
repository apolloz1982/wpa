import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, TextInput, Dimensions, SafeAreaView, ScrollView, Alert } from 'react-native';
import Color from '../../Themes/Color';
import Fonts from '../../Themes/Fonts';

let width = Dimensions.get('window').width;

export default class index extends Component {
    constructor() {
        super();
        this.state = {
            email: 'apolloz1982@gmail.com',
            password: '1',
        };
    }

    loginPress = async () => {

        let authUser = 'apolloz1982@gmail.com';
        let authPass = '1';
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/;
        if (!this.state.email) {
            Alert.alert(
                'Alert',
                'Please Enter Email Address',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ]
            );
            return;
        } else if (!reg.test(this.state.email)) {
            Alert.alert(
                'Alert',
                'Please Enter a valid Email Address',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ]
            );
            return;
        } else if (!this.state.password) {
            Alert.alert(
                'Alert',
                'Please Enter Password',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ]
            );
            return;
        }
        else if ((this.state.email == authUser) && (this.state.password == authPass)) {
            this.props.navigation.navigate('Dashboard');
            return;
        }
        else {
            Alert.alert(
                'Alert',
                'Incorrect Username and Password',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ]
            );
            return;
        }

    }

    render() {
        return (
            <View style={styles.mainContainer}>
                <SafeAreaView style={{ flex: 1, marginHorizontal: Fonts.px_10, marginVertical: Fonts.px_20, }}>
                    <ScrollView style={{ flex: 1 }}
                        showsVerticalScrollIndicator={false}>

                        <View style={styles.loginView}>
                            <Text style={styles.loginText}>{'login'}</Text>
                            <Text style={styles.textStyle}>{'Enter your details below to continue'}</Text>
                        </View>

                        <View style={styles.textinputContainer}>
                            <TextInput style={styles.textInputStyle}
                                placeholder="Username"
                                value={this.state.email}
                                returnKeyType="next"
                                autoCapitalize="none"
                                keyboardType="email-address"
                                autoCorrect={false}
                                ref={(input) => { this.emailInputRef = input; }}
                                onSubmitEditing={() => { this.passwordInputRef.focus(); }}
                                onChangeText={(val) => this.setState({ email: val })} />

                            <TextInput style={styles.textInputStyle}
                                placeholder="Password"
                                value={this.state.password}
                                autoCapitalize="none"
                                returnKeyType="done"
                                keyboardType="default"
                                type="password"
                                secureTextEntry={true}
                                autoCorrect={false}
                                ref={(input) => { this.passwordInputRef = input; }}
                                onChangeText={(val) => this.setState({ password: val })} />

                            <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
                                <Text style={{ color: Color.gray, textAlign: 'right', marginTop: Fonts.px_5, fontSize: Fonts.txt_size_small_12, letterSpacing: 0.4, }}>Forgot password?</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => {
                                    this.loginPress();
                                }}
                                style={[styles.loginButtonStyle, { marginTop: Fonts.px_40, }]}>
                                <Text style={styles.buttonText}>{'login'}</Text>
                            </TouchableOpacity>

                            <View style={styles.signupView}>
                                <Text style={{ color: Color.gray, textAlign: 'center', marginTop: Fonts.px_5, fontSize: Fonts.txt_size_medium_14, }}>Don't have an account? </Text>
                                <TouchableOpacity>
                                    <Text style={{ textAlign: 'center', marginTop: Fonts.px_5, color: Color.PRIMARY, fontSize: Fonts.txt_size_medium_14, letterSpacing: 0.4 }}>Signup</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </ScrollView>
                </SafeAreaView>
            </View>


        );
    }
}
const styles = StyleSheet.create(
    {
        mainContainer: {
            flex: 1,
            width: width,
            backgroundColor: Color.white
        },
        loginView: {
            justifyContent: 'center',
            marginTop: '50%'
        },
        loginText: {
            color: Color.black,
            fontSize: Fonts.txt_size_large_extra,
            fontWeight: 'bold',
            textAlign: 'left',
            textTransform: 'uppercase'
        },
        textStyle: {
            color: Color.black,
            fontSize: Fonts.txt_size_medium_14,
            textAlign: 'left'
        },
        textinputContainer: {
            flex: 1,
            justifyContent: 'center',
            marginTop: '10%'
        },
        textInputStyle: {
            borderColor: Color.PRIMARY,
            backgroundColor: Color.white,
            borderWidth: Fonts.px_1,
            borderRadius: Fonts.px_4,
            paddingHorizontal: 16,
            paddingVertical: Fonts.px_8,
            fontSize: Fonts.txt_size_medium_14,
            marginVertical: Fonts.px_8,
        },
        loginButtonStyle: {
            borderRadius: Fonts.px_4,
            paddingHorizontal: Fonts.px_16,
            paddingVertical: Fonts.px_12,
            backgroundColor: Color.PRIMARY,
            justifyContent: 'center',
            alignItems: 'center',


        },
        buttonText: {
            color: Color.white,
            fontWeight: 'bold',
            fontSize: Fonts.txt_size_medium,
            letterSpacing: 0.4,
            alignSelf: "center",
            textTransform: 'uppercase'
        },
        signupView: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: Fonts.px_10,
        },

    });
