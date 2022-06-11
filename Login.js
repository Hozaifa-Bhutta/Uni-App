import { Image, Dimensions, StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import {useState} from 'react';

const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
export default function Login(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const launchSignUp = () => {
        props.setNewUser(true)
    }
    // Thing is here
    const onPress = () => {
        if (!(email.includes("@")) && false) {
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
        } else if (true) {
            props.setLoggedIn(true)

        }
    }
    return (
        <View style = {styles.container}>
              
            <View style = {{height: "30%", alignSelf:"center"}}>
                <Text style = {styles.titleText} >LOGIN</Text>
                <Text onPress={()=> launchSignUp()} style = {styles.subText}>Sign Up Instead</Text>
            </View>

            <View style = {{height: "20%"}}>
                <Text style = {styles.header}>Email</Text>
                <TextInput style = {styles.input}
                placeholder="Enter email"
                onChangeText={newEmail => setEmail(newEmail)}
                defaultValue={email}
                /> 
            </View>

            <View style = {{height: "20%"}}>
                <Text style = {styles.header}>Password</Text>
                <TextInput style = {styles.input}
                secureTextEntry = {true}
                placeholder="Enter Password"
                onChangeText={newPassword => setPassword(newPassword)}
                defaultValue={password}
                />
            </View>
            <Button title="Log In" onPress = {onPress}/>
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
  