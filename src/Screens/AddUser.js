import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert,KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddUser = ({navigation}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [items, setItems] = useState([])

  const handleDataStore = (item)=>{
    const newItems =  [...items,item]
    AsyncStorage.setItem('@User_Data',JSON.stringify(newItems)).then(()=>{
      items.length !== 0 ? setItems(newItems) : setItems([item])
    }).catch(error => console.log(error))
  }
  const prevData = () =>{
    loadData
    if(!name || !email || !phone){

      Alert.alert('Please Fill All the Field!')
    }else{
      handleDataStore({
        name: name,
        email:email,
        phone:phone
      })
      setName('');
      setEmail('');
      setPhone('');
      Alert.alert('User Added Successfully!')
    }
  }
  const loadData = () =>{
    AsyncStorage.getItem('@User_Data').then(data =>{
      if(data !== null){

        setItems(JSON.parse(data))
      }
    }).catch(error => console.log(error))
  }

  return (
    <View style={styles.container}>
    {/* <View style={styles.container}>
    </View> */}
    <View style={[styles.containerTwo,styles.shadowProp]}>
    <KeyboardAvoidingView behavior={'padding'} enabled={false}>
      <View>
      <Text style={styles.inputText}>Name</Text>
      <TextInput
        style={styles.inputTextField}
        onChangeText={(name)=>{setName(name)}}
        value={name}
        secureTextEntry={false}
        autoCapitalize={'none'}
        keyboardType={'default'}
      />
    </View>
    <View>
      <Text style={styles.inputText}>Email Id</Text>
      <TextInput
        style={styles.inputTextField}
        onChangeText={(email)=>{setEmail(email)}}
        value={email}
        secureTextEntry={false}
        autoCapitalize={'none'}
        keyboardType={'email-address'}
      />
    </View>
    <View>
      <Text style={styles.inputText}>Phone No.</Text>
      <TextInput
        style={styles.inputTextField}
        onChangeText={(phone)=>{setPhone(phone)}}
        value={phone}
        secureTextEntry={false}
        autoCapitalize={'none'}
        keyboardType={'default'}
      />
    </View>
    </KeyboardAvoidingView>
    <TouchableOpacity style={styles.submitButton} onPress={prevData}><Text style={styles.submitText}>Add User</Text></TouchableOpacity>
    <TouchableOpacity style={styles.submitButton} onPress={()=>{navigation.navigate('ShowUser')}}><Text style={styles.submitText}>Show Users List</Text></TouchableOpacity>
    </View>
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
      flex: 1,
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
      marginVertical:50,
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
        borderRadius:15,
        marginTop:20
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

export default AddUser
