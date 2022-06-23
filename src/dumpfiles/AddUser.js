import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const AddUser = ({navigation}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [items, setItems] = useState([])
  const [prevItems, setPrevItems] = useState([])
  
         
  const storeData = async (items) => {
    try {
      const jsonValue = JSON.stringify(items)
      await AsyncStorage.setItem('@Storage_Key', jsonValue)
    } catch (e) {
      // saving error
      console.log(e)
    }
  }
  const prevData =  () =>{
    AsyncStorage.getItem('@Storage_Key').then(item =>{
     if(item!== null){
      setPrevItems(JSON.parse(item))
     }
   }).catch((e)=>console.log(e))
 }
  
  function checkValidation(){
    prevData()
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(name.length == 0 || email.length == 0 || phone.length == 0){
      Alert.alert('Please fill all the field')
    }else{
      // if(email.value.match(mailformat)){
      if(email){
        if(phone.length == 10){
          const item = {      
                        'name': name,
                        'email': email,
                        'phone': phone
                    }
          setItems([...prevItems,item])
          storeData(items)
          setPrevItems([])
          items.length == 0 ? Alert.alert('Something Went Worng!','Please Click Add User Button Again') : Alert.alert('Data Added Successfully!')
        }else{
          Alert.alert('Please Enter 10 Digit Phone Number')
        }
      }else{
        Alert.alert('Invalid Email Id!')
      }
    }
  }

  return (
    <View style={styles.container}>
    <View style={styles.container}>
    </View>
    <View style={[styles.containerTwo,styles.shadowProp]}>
      <View>
      <Text style={styles.inputText}>Name</Text>
      <TextInput
        style={styles.inputTextField}
        onChangeText={(name)=>{setName(name)}}
        value={name}
        secureTextEntry={false}
        autoCapitalize={'none'}
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
    <TouchableOpacity style={styles.submitButton} onPress={checkValidation}><Text style={styles.submitText}>Add User</Text></TouchableOpacity>
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
      flex: 8,
      width:"96%",
      backgroundColor: '#c2eafc',
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth:2,
      borderStyle:"solid",
      borderColor:"#074c6b",
      borderBottomColor:'transparent',
      borderRightColor:'transparent',
      borderTopLeftRadius:"180px",
      borderBottomRightRadius:"180px",
      marginBottom:50,
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
