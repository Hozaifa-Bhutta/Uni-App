import {View, StyleSheet, Text} from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import News from './News';
import Schedule from './Schedule';
import Tasks from './Tasks'


const Tab = createBottomTabNavigator();

export default function HomeScreen() {
 
    return (
        <View
        style={{
            flex: 1,
        }}>
            <NavigationContainer style = {styles.container}>
                <Tab.Navigator>
                    <Tab.Screen name = "News" component = {News}/>
                    <Tab.Screen name = "Schedule" component = {Schedule}/>
                    <Tab.Screen name = "Homework" component = {Tasks}/>

                </Tab.Navigator>
            
            </NavigationContainer>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "100%",
      flex: 1, 
      backgroundColor: "#0000FF",
      color: "#0000FF",
    },
  });
  