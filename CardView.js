
import React from 'react';
 
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text
} from 'react-native';
 
import { Card } from 'react-native-elements';
 
const CardView = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Card title="Local Modules">
    
          <Text style={styles.paragraph}>
            React Native Card View
            for Android and IOS using
            "react-native-elements"
          </Text>
        </Card>
      </View>
    </SafeAreaView>
  );
};
export default CardView;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'green',
  },
});
