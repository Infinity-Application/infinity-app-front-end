import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from '../contexts/auth'

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import Tabs from "./navigation/tabs";

const Stack = createStackNavigator();

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

const App = () => {
    return (
        <Provider store={store}>
            <AuthProvider>
        <Component {...pageProps} />
    
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
        </AuthProvider>
        </Provider>
    )
}

export default App;