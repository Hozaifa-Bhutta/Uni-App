import { Image, Dimensions, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useState } from 'react';
import Task from "./Task"

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function Tasks() {
    const tasks = [<Task title = "Math HW" description = "Dr. Boca's Webassign #13" />, <Task title = "English HW" description = "Dr. Moffits's Essay" />]
    
    

    const onPress = () => {
        console.log("isCompleted")
    }   

    return (<View style = {{flex: 1, alignItems: 'center' }}>
        {tasks}
        <Image source={require('./images/Ultron.jpeg')} />
        <TouchableOpacity
            onPress={() => onPress()}
            style={styles.roundButton1}>
        </TouchableOpacity>

    </View>)
}

const styles = StyleSheet.create({
    roundButton1: {
        width: 0.12 * height,
        height: 0.12 * height,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        padding: 10,
        borderRadius: 100,
        backgroundColor: 'orange',
        alignSelf: 'flex-end',
        position: "absolute",
        bottom: 30,
        right: 5
      }
})
