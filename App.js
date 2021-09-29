import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import rootReducer from "./stores/rootReducer";


import Tabs from "./navigation/tabs";

const Stack = createStackNavigator();

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)
import LoginScreen from "react-native-login-screen";
import { View, Text } from 'react-native';

const App = () => {
    const x = true
    return (

        <Provider store={store}>

            {x ? <LoginScreen
                spinnerEnable
                // spinnerVisibility={spinnerVisibility}
                labelTextStyle={{
                    color: "#adadad",
                    fontFamily: "Now-Bold",

                }}
                logoTextStyle={{
                    fontSize: 27,
                    color: "#fdfdfd",
                    fontFamily: "Now-Black",
                }}
                loginButtonTextStyle={{
                    color: "#fdfdfd",
                    fontFamily: "Now-Bold",
                }}
                textStyle={{
                    color: "#757575",
                    fontFamily: "Now-Regular",
                }}
                signupStyle={{
                    color: "#fdfdfd",
                    fontFamily: "Now-Bold",
                }}
                usernameOnChangeText={(username) => console.log("Username: ", username)}
                onPressSettings={() => alert("Settings Button is pressed")}
                passwordOnChangeText={(password) => console.log("Password: ", password)}
                onPressLogin={() => {
                    setSpinnerVisibility(true);
                    setTimeout(() => {
                        setSpinnerVisibility(false);
                    }, 2000);
                }}
                onPressSignup={() => {
                    console.log("onPressSignUp is pressed");
                }}
            >
                <View
                    style={{
                        position: "relative",
                        alignSelf: "center",
                        marginTop: 64,

                    }}
                >
                    <Text style={{ color: "white", fontSize: 30 }}>
                        Inside Login Screen Component
                    </Text>
                </View>
            </LoginScreen> :
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerShown: false
                        }}
                        initialRouteName={'MainLayout'}
                    >
                        <Stack.Screen
                            name="MainLayout"
                            component={Tabs}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            }

        </Provider>
    )
}

export default App;