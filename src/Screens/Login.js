import { StyleSheet, View, Text,TouchableOpacity,TextInput, Alert, KeyboardAvoidingView } from 'react-native' 
import { StatusBar } from 'expo-status-bar'
import React, { useState } from 'react'

const Login = ({ navigation }) => {
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")

    function checkUser(){
        // Alert.alert(userName,password)
        if(!userName || !password){
           
            Alert.alert('Please fill all the field!')
        }else{
            if(userName == 'admin' && password == '1234'){
                Alert.alert('Login Successed')
                navigation.navigate('Home')
            }else{
                Alert.alert('Username or Password Wrong!')
            }
        }
    }
  return (
    <View style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Login</Text>
    </View>
    <KeyboardAvoidingView style={[styles.containerTwo,styles.shadowProp]} behavior={'position'} enabled={false}>
      <View>
      <Text style={[styles.inputText,{marginTop:20}]}>Username</Text>
      <TextInput
        style={styles.inputTextField}
        onChangeText={(userName)=>{setUserName(userName)}}
        value={userName}
        secureTextEntry={false}
        autoCapitalize={'none'}
      />
    </View>
    <View>
      <Text style={styles.inputText}>Password</Text>
      <TextInput
        style={styles.inputTextField}
        onChangeText={(password)=>{setPassword(password)}}
        value={password}
        secureTextEntry={true}
        autoCapitalize={'none'}
      />
    </View>
    <TouchableOpacity style={styles.submitButton} onPress={checkUser}><Text style={styles.submitText}>Login</Text></TouchableOpacity>
    <Text style={styles.textInfo}>If you forgot your username or password please contact to your admin</Text>
    </KeyboardAvoidingView>
    <StatusBar style='light'/>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#84d9ff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerTwo: {
      flex: 3,
      width:"96%",
      backgroundColor: '#c2eafc',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth:2,
      borderStyle:"solid",
      borderColor:"#074c6b",
      borderBottomColor:'transparent',
      borderRightColor:'transparent',
      borderTopLeftRadius:75,
      borderBottomRightRadius:75,
      marginBottom:10,
    },
    mainTitle:{
      fontSize:42,
      fontWeight:'600',
      color:'rgba(0, 86, 114, 1)',
      textTransform:'uppercase'
    },
    shadowProp: {
      shadowColor: 'rgba(0, 0, 0, 0.25)',
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 1,
      shadowRadius: 4,
    },
    shadowPropTwo: {
      shadowColor: 'rgba(85, 85, 85, 0.25)',
      shadowOffset: {width: -4, height: -2},
      shadowOpacity: 1,
      shadowRadius: 2,
    },
    textInfo:{
      fontSize:12,
      fontWeight:"600",
      color:'rgba(122, 122, 122, 1)',
      width:290,
      marginTop:15
    },
    submitButton:{
        width:190,
        hegiht:50,
        backgroundColor:'rgba(89, 215, 255, 1)',
        borderWidth:1,
        borderStyle:'solid',
        borderColor:'rgba(0, 86, 114, 0.78)',
        textAlign:'center',
        paddingVertical:10,
        borderRadius:15
    },
    submitText:{
        textAlign:'center',
        color:'rgb(0, 72, 96)',
        fontSize:16,
        fontWeight:'600'
    },
    inputText:{
        fontSize:22,
        fontWeight:"500",
        color:'rgba(0, 72, 96, 1)'
    },
    inputTextField:{
        width:290,
        height:43,
        borderRadius:17,
        borderWidth:1,
        borderStyle:'solid',
        borderColor:'rgba(0, 72, 96, 1)',
        backgroundColor:'#fff',
        marginVertical:20,
        paddingHorizontal:10
    }
  });
  
export default Login