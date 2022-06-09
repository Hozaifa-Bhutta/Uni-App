import { View } from 'react-native';
import { WebView } from 'react-native-webview';
export default function News(props) {
    return (
        <WebView style = {{height: '100%', width: "100%"}} source={{ uri: 'https://reactnative.dev/' }} />
    )
}