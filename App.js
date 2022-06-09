import { StyleSheet, TextInput, View } from 'react-native';
import OpeningPage from "./OpeningPage"
export default function App() {
  return (
      <View style={styles.container}>

          <OpeningPage></OpeningPage>
        
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
