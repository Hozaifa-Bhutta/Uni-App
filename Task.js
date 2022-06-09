import { Dimensions, View, Text } from 'react-native';
import { useState } from 'react';


export default function Task() {

    const width = Dimensions.get('window').width
    const height = Dimensions.get('window').height
    return <View style = {{width: "70%"}}>
        <Text style = {{fontSize: 0.03 * height}}>
            Math Homework
        </Text>
        <Text style = {{alignSelf: "center",fontSize: 0.03 * height }}>
            Math Homework
        </Text>
    </View>
}