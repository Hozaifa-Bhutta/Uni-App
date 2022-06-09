import { Dimensions, StyleSheet, View, Text} from 'react-native';
import {React, useState, useCallback} from 'react';
import Class from './Class'



export default function Schedule(props) {
    const [activeDate, setActiveDate] = useState(new Date())
    const [testState, setTestState] = useState(0)
    const months = ["January", "February", "March", "April", 
    "May", "June", "July", "August", "September", "October", 
    "November", "December"];

    const [date, setDate] = useState(1)


    const width = Dimensions.get('window').width
    const height = Dimensions.get('window').height

   
    const weekDays = [
        "Sun","Mon","Tue","Wed","Thu","Fri","Sat"
    ]; 

    var year = activeDate.getFullYear();
    var month = activeDate.getMonth();




    return (
        <View style = {styles.container}>
            <Text style={{
            fontWeight: 'bold',
            fontSize: 0.03 * height}}>
                {months[activeDate.getMonth()]} {activeDate.getFullYear()}
            </Text>
            <Class class = "Math" teacher = "Boca" period = "1" length = {45} hour = {8} minute = {30}/>
            <Class class = "English" teacher = "Moffit" period = "2" length = {45} hour = {9} minute = {20}/>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
  });
  