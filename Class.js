import { Dimensions, StyleSheet, View, Text} from 'react-native';
import {useState} from 'react';
export default function Class(props) {
    const width = Dimensions.get('window').width
    const height = Dimensions.get('window').height
    var startTime = new Date();
    startTime.setHours(props.hour, props.minute, 0, 0)
    
    var endTime = new Date();
    endTime.setHours(props.hour, props.minute + props.length, 0, 0)

    if (endTime.getMinutes() < 10) {
        var endTimeReturn = endTime.getHours() + ":0" + endTime.getMinutes()

    } else {
        var endTimeReturn = endTime.getHours() + ":" + endTime.getMinutes()
    }
    return (
        <View style = {{width: "60%"}}>
            <Text>
                {startTime.getHours()}:{startTime.getMinutes()} - {endTimeReturn}
            </Text>
            <Text style = {{fontSize: height * 0.05}}>
                {props.class}
            </Text>
            <Text style = {{fontSize: height * 0.02, alignSelf: "flex-end"}}>
                {props.teacher}
            </Text>
            <Text style = {{fontSize: height * 0.02, alignSelf: "flex-end"}}>
                Period: {props.period}
            </Text>

            <View style={{
                borderBottomColor: 'black',
                borderBottomWidth: 1,
            }}/>
        </View>
    )
}