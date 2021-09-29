import React from 'react';
import {
    StyleSheet, Text, View, Image, TextInput, Dimensions, ScrollView,
    CheckBox, TouchableOpacity
} from 'react-native';
import logo from './Logo.png'

const { width: WIDTH } = Dimensions.get('window')

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            check: false,
            email: '',
        };
        this.validates = this.validates.bind(this);
    }

    CheckBoxText() {
        this.setState({
            check: !this.state.check,
        })
    }


    validates = () => {

        let text = this.state.email;
        let emailError = this.state.emails;
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            console.warn("Invalid email")
            this.setState({ email: text })
            return false;
        }
        else {
            this.setState({ email: text })
            console.log("Email is Correct");
        }
    }

    render() {
        return (

            <View>
                <View style={styles.container}>
                    <Image source={logo} style={styles.logo} />
                </View>

                <View style={styles.container2}>
                    <Text style={styles.emailAdd}>
                        Email
                    </Text>
                    <TextInput
                        onChangeText={(text) => this.setState({ email: text })}
                        type='email'
                        value={this.state.email}
                        keyboardType='email-address'
                        style={styles.emailInput}
                        placeholder={'Input Email Address'}
                        underlineColorAndroid='transparent' />

                </View>

                <View style={styles.container3}>
                    <Text style={styles.password}>
                        Password
                    </Text>
                    <TextInput
                        style={styles.passwordInput}
                        placeholder={'Input Password'}
                        secureTextEntry={true}
                        underlineColorAndroid='transparent' />

                </View>

                <View style={styles.container4}>

                    <View>
                        <CheckBox value={this.state.check} onChange={() => this.CheckBoxText()} style={styles.rememberMe} />
                    </View>
                    <View>
                        <Text style={styles.remember}>Remember me</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.btnLogin} onPress={this.validates} >
                    <Text style={styles.txtLogin}>Sign In</Text>
                </TouchableOpacity>


            </View>

        );
    }
}