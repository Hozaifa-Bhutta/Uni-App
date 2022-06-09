import { View } from 'react-native';
import { useState } from 'react';
import Task from "./Task"

export default function Tasks() {
    return <View style = {{flex: 1, alignItems: 'center' }}>
        <Task/>
    </View>
}