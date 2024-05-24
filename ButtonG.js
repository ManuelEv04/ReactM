  import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';
import { TouchableOpacity } from 'react-native-web';


export default function button() {
    return (
     <TouchableOpacity style={styles.container}>   
    <SafeAreaView >
    <View>
      <Text style={styles.title}>
        Ingresa al login de Manuel Burbano
      </Text>
      <Button
        title="presiona aqui!"
        color="#0F5A16"
        onPress={() => Alert.alert('Bienvenido al primer login')}
      />
    </View>
    </SafeAreaView>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems:'center',
    width: 200,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button:{
    width:'80%',
    height:50,
    borderRadius:25,
    padding:10,
    alignItems:'center',
    justifyContent:'center',

  },
});
