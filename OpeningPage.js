import React from 'react'
import { View } from 'react-native';
import { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import HomeScreen from './HomeScreen';

export default function App() {
    const [newUser, setNewUser] = useState(false)
    const [loggedIn, setLoggedIn] = useState(false)

    if (loggedIn) {
        return (
            <View style = {{height: '100%', width: '100%', flex: 1}}>
                <HomeScreen/>
            </View>
        )
    }
    else if (!newUser) {
        return (
        <View style = {{height: '80%', width: "70%"}}>
            <Login setNewUser = {setNewUser} setLoggedIn = {setLoggedIn}/>
        </View>
        )
    }
    else {
        return (
            <View style = {{height: '80%', width: "70%"}}>
                <Signup setNewUser = {setNewUser}/>
            </View>
            )
    }
}