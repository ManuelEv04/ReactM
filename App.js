import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import ButtonG from './ButtonG';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Inicio</Text>
      <Text style={styles.subTitle}>Ingresar</Text>
      <TextInput
        placeholder="manuel@gmail.com"
        style={styles.textInput}
        />
        <TextInput
          placeholder="password"
          style={styles.textInput}
          secureTextEntry={true}
        />
        <Text style={styles.forgotPassword}>olvido clave?</Text>
          <ButtonG/>
        <Text style={styles.forgotPassword}>No tiene cuenta</Text>
        <StatusBar style="auto"/>
        </View>
      );  
    }

    const styles = StyleSheet.create({
      container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
      },
      titulo:{
        fontSize:80,
        color:'#0F5A16',
        fontWeight:'bold',
      },
      subTitle:{
        fontSize:20,
        color:'gray',
      },
      textInput:{
        borderWidth:1,
        borderColor:'gray',
        padding:10,
        width:'80%',
        height:50,
        marginTop:20,
        borderRadius:30,
        backgroundColor:'#fff',
      },
    });
    
    