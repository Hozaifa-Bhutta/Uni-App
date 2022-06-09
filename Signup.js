import { Dimensions, StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import {useState} from 'react';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export default function Signup(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassowrd] = useState('');


    const launchLogIn = () => {
        props.setNewUser(false)
    }
    const onPress = () => {
        if (!(email.includes("@"))) {
            Alert.alert(
                'Cannot proceed',
                'Invalid email entered',
                [
                  { text: 'OK', 
                  onPress: () => console.log('OK Pressed') 
                }
                ],
                { cancelable: true }
              );
        } else if (password != confirmPassword) {
            Alert.alert(
                'Cannot proceed',
                'Passwords do not match',
                [
                  { text: 'OK', 
                  onPress: () => console.log('OK Pressed') 
                }
                ],
                { cancelable: true }
              );
        }
    }
    return (
        <View style = {styles.container}>
              
            <View style = {{height: "30%", alignSelf:"center"}}>
                <Text style = {styles.titleText} >SIGN UP</Text>
                <Text onPress={()=> launchLogIn()} style = {styles.subText}>Log In Instead</Text>
            </View>

            <View style = {{height: "20%"}}>
                <Text style = {styles.header}>Email</Text>
                <TextInput style = {styles.input}
                placeholder="Enter email"
                onChangeText={newEmail => setEmail(newEmail)}
                defaultValue={email}
                /> 
            </View>

            <View style = {{height: "23%"}}>
                <Text style = {styles.header}>Password</Text>
                <TextInput style = {styles.input}
                secureTextEntry = {true}
                placeholder="Enter Password"
                onChangeText={newPassword => setPassword(newPassword)}
                defaultValue={password}
                />
                <View style = {{height: "10%"}}></View>
                 <Text style = {styles.header}>Confirm Password</Text>
                <TextInput style = {styles.input}
                secureTextEntry = {true}
                placeholder="Confirm Password"
                onChangeText={newPassword => setConfirmPassowrd(newPassword)}
                defaultValue={confirmPassword}
                />
                <Button title="Sign Up" onPress = {onPress}/>
            </View>


          </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      padding: 12,
    },
    titleText: {
        fontSize: 0.05 * height,
        fontWeight: "bold",
        
    },
    subText: {
        fontSize: 0.02 * height,
        color: "#0000EE",
        textDecorationLine: 'underline',
        marginBottom: 20 
    }, 
    header: {
        fontSize: 0.04 * height,
        alignSelf: "flex-start"
    }, 
    input: {
        fontSize: 0.025 * height,
        alignItems: "flex-start"}, 
   

  });
  