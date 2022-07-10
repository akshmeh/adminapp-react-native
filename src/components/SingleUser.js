import { StyleSheet, Text, View,TouchableOpacity, Image, Alert,Modal ,TextInput} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import React,{useState} from 'react'

const SingleUser = ({name,email,phone,data,setData}) => {
  const [upname, setUpName] = useState('')
  const [upemail, setUpEmail] = useState('')
  const [upphone, setUpPhone] = useState('')


  const [modalVisible, setModalVisible] = useState(false);
  const dataPhone = data.map(item=>item.phone);
  function deleteUser(ele){
    const newData = [...data];
    const findItemIndex =  dataPhone.findIndex((item)=>{return item == ele})
    newData.splice(findItemIndex,1)
    setData(newData)
    handleDataStoreAfterDelete(newData)
    Alert.alert('User Deleted Successfully!')
  }
  const handleDataStoreAfterDelete = (newData)=>{
    AsyncStorage.setItem('@User_Data',JSON.stringify(newData)).then(()=>{
    }).catch(error => console.log(error))
  }
  function updateCurrentUserData(ele){
    const newData = [...data];
    const findItemIndex =  dataPhone.findIndex((item)=>{return item == ele})
    const currentItem = newData[findItemIndex]
    // console.log(currentItem);
    setUpName(currentItem.name)
    setUpEmail(currentItem.email)
    setUpPhone(currentItem.phone)
  }
  function updateNewData(ele){
    const newData = [...data];
    const findItemIndex =  dataPhone.findIndex((item)=>{return item == ele})
    const changeData = {
      name:upname,
      email:upemail,
      phone:upemail
    }
    newData.splice(findItemIndex,1,changeData)
    setData(newData)
    handleDataStoreAfterDelete(newData)
    Alert.alert('Data Successfully Updated!')
  }
  return (
    <View style={[styles.containerTwo,styles.shadowProp]}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <TouchableOpacity
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyleModal}>X</Text>
            </TouchableOpacity>
          <View>
      <Text style={styles.inputText}>Name</Text>
      <TextInput
        style={styles.inputTextField}
        onChangeText={(upname)=>{setUpName(upname)}}
        value={upname}
        secureTextEntry={false}
        autoCapitalize={'none'}
        keyboardType={'default'}
      />
    </View>
    <View>
      <Text style={styles.inputText}>Email Id</Text>
      <TextInput
        style={styles.inputTextField}
        onChangeText={(upemail)=>{setUpEmail(upemail)}}
        value={upemail}
        secureTextEntry={false}
        autoCapitalize={'none'}
        keyboardType={'email-address'}
      />
    </View>
    <View>
      <Text style={styles.inputText}>Phone No.</Text>
      <TextInput
        style={styles.inputTextField}
        onChangeText={(upphone)=>{setUpPhone(upphone)}}
        value={upphone}
        secureTextEntry={false}
        autoCapitalize={'none'}
        keyboardType={'default'}
      />
    </View>
    <TouchableOpacity style={styles.submitButton} onPress={()=>{updateNewData(phone)}}><Text style={styles.submitText}>Update</Text></TouchableOpacity>
          </View>
        </View>
      </Modal>
        <View style={{flex:1,justifyContent:'center',alignContent:'center'}}>

      <Text style={styles.textStyle}><Text style={styles.textHighlightStyle}>Name:</Text> {name}</Text>
      <Text style={styles.textStyle}><Text style={styles.textHighlightStyle}>Email Address:</Text> {email}</Text>
      <Text style={styles.textStyle}><Text style={styles.textHighlightStyle}>Phone No.</Text> {phone}</Text>
      <TouchableOpacity style={styles.submitButton} onPress={()=>{updateCurrentUserData(phone);setModalVisible(true);}}><Image style={styles.iconStyle} source={require('../Icons/update-user.png')}/><Text style={styles.submitText}>Update User</Text></TouchableOpacity>
      <TouchableOpacity style={styles.submitButton} onPress={()=>{deleteUser(phone)}}><Image style={styles.iconStyle} source={require('../Icons/delete-user.png')}/><Text style={styles.submitText}>Delete User</Text></TouchableOpacity>
        </View>
    </View>
  )
}

export default SingleUser

const styles = StyleSheet.create({
    containerTwo: {
        flex: 1,
        width:"98%",
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
        padding:70
      },
      textStyle:{
        marginVertical:10,
        marginHorizontal:10,
        fontSize:22,
        width:'100%',
      },
      shadowProp: {
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 1,
        shadowRadius: 4,
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
    },
      submitButton:{
        width:190,
        hegiht:50,
        backgroundColor:'rgba(89, 215, 255, 1)',
        borderWidth:1,
        borderStyle:'solid',
        borderColor:'rgba(0, 86, 114, 0.78)',
        textAlign:'center',
        paddingVertical:20,
        borderRadius:15,
        marginTop:20,
        flex:0,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
    },
    submitText:{
        textAlign:'center',
        color:'rgb(0, 72, 96)',
        fontSize:16,
        fontWeight:'600'
    },
    iconStyle:{
      width:24,
      height:24,
      aspectRatio:1,
      marginRight:5
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      alignSelf:'flex-end'
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyleModal: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
    textHighlightStyle:{
      fontWeight:'600'
    }
})