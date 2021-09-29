import { createContext, useContext, useState } from 'react';
import axios from 'axios'
import jwt from 'jsonwebtoken';

const baseUrl = 'https://infinity-app-api-1.herokuapp.com/';
const tokenUrl = baseUrl + '/api/token/';
const AuthContext = createContext();

export function useAuth() {
    const auth = useContext(AuthContext);
    if (!auth) throw new Error('You forgot AuthProvider!');
    return auth;
}

export function AuthProvider(props) {
    const [state, setState] = useState({ tokens: null, user: null, login, logout });

    async function login(username, password) {
        const response = await axios.post(tokenUrl, { username, password });
        const Access = jwt.decode(response.data.access);
        const State = {
            tokens: response.data,
            user: {
                username: Access.username,
                email: Access.email,
                id: Access.user_id
            },
        }

        setState(prevState => ({ ...prevState, ...State }));
    }

    function logout() {
        const State = {
            tokens: null,
            user: null,
        }
        setState(prevState => ({ ...prevState, ...State }));
    }

    return (
        <AuthContext.Provider value={state}>
            {props.children}
        </AuthContext.Provider>
    );
}