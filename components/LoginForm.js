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

    }
}