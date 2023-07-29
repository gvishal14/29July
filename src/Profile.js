import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProductList from './ProductList'
const Profile = ({navigation}) => {

    // Registration(formData).then(response => {  
    //     console.log('formData',formData)
    //     console.log('response',response)
       
    //     if(response.status == 'Success'){
    //       // setData(response.data.token)
         
  
    //       console.log('token1--->', response.data.token)
    //       navigation.navigate('otp',{token:response.data.token,email:email,password:password,type:'register'})
    //     }
    //     else{
    //       Alert.alert("Registration Failed Please Try again later")
  
    //     }
    //   }).finally(e => { setLoading(false) })
      
  return (
    <View>
      <Text>Profile</Text>
      <Button  title={'Go To Product section'} onPress={() => navigation.navigate('Products')}/>
      
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({})