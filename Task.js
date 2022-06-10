import { Dimensions, View, Text, Button } from 'react-native';
import { useState, useEffect } from 'react';


export default function Task(props) {
    const [isCompleted, setIsCompleted] = useState()
    const width = Dimensions.get('window').width
    const height = Dimensions.get('window').height
    const onPress = () => {
        console.log(isCompleted)
        setIsCompleted(true)
    }


    if (!isCompleted) {
        return <View style = {{width: "70%"}}>
            <Text style = {{fontSize: 0.03 * height}}>
                {props.title}
            </Text>
            <Text style = {{alignSelf: "center",fontSize: 0.02 * height }}>
                Description: {props.description}
            </Text>
            <Button title = "Complete" onPress= {() => onPress()}></Button>
        </View>
    } 
    else {
        return <View></View>
    }
}
