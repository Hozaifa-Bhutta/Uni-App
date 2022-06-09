import { View } from 'react-native';
import { WebView } from 'react-native-webview';
export default function News(props) {
    return (
                <View
        style={{
            flex: 1,
        }}>
            <WebView source={{ uri: 'https://reactnative.dev/' }} />
        </View>
    )
}