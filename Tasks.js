import { View } from 'react-native';
import { useState } from 'react';
import Task from "./Task"

export default function Tasks() {
    const tasks = [<Task title = "Math HW" description = "Dr. Boca's Webassign #13" />, <Task title = "English HW" description = "Dr. Moffits's Essay" />]
    return <View style = {{flex: 1, alignItems: 'center' }}>
        {tasks}
    </View>
}