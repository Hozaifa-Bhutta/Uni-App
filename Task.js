import { Dimensions, View, Text, Button, TextInput } from 'react-native';
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
        return <View style = {{height: "20%", width: "60%"}}>

                <Text style = {{fontSize: 0.03 * height}}>
                    {props.title}
                </Text>
                <TextInput style={{fontSize: 0.03 * height}}
                placeholder="Type here to translate!" />
                <Text style = {{alignSelf: "center",fontSize: 0.02 * height }}>
                    Description: {props.description}
                </Text>
                <Button title = "Complete" onPress= {() => onPress()}></Button>
                <View style = {{height: "10%"}}></View>
                

            </View>
    } 
    else {
        return <View></View>
    }
}
