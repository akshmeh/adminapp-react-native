import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Admin App</Text>
    </View>
   <View style={[styles.containerTwo,styles.shadowProp]}>
    <TouchableOpacity style={styles.submitButton} onPress={()=>{navigation.navigate('AddUser')}}><Image style={styles.iconStyle} source={require('../Icons/add-user.png')}/><Text style={styles.submitText}> Add User</Text></TouchableOpacity>
    <TouchableOpacity style={styles.submitButton} onPress={()=>{navigation.navigate('ShowUser')}}><Image style={styles.iconStyle} source={require('../Icons/show-user.png')}/><Text style={styles.submitText}> Show Users</Text></TouchableOpacity>
    </View>
    <StatusBar style='light'/>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#84d9ff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      containerTwo: {
        flex: 2,
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
          width:250,
          hegiht:40,
          backgroundColor:'rgba(89, 215, 255, 1)',
          borderWidth:1,
          borderStyle:'solid',
          borderColor:'rgba(0, 86, 114, 0.78)',
          textAlign:'center',
          paddingVertical:15,
          borderRadius:15,
          marginVertical:20,
          flex:0,
          justifyContent:'center',
          alignItems:'center',
          flexDirection:'row'
      },
      submitText:{
          textAlign:'center',
          color:'rgb(0, 72, 96)',
          fontSize:16,
          fontWeight:'900',
      },
      iconStyle:{
        width:24,
        height:24,
        aspectRatio:1,
        marginRight:5
      }
})