import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Profile from './Profile'

const Home = ({navigation}) => {

    handleNext = ()=>{
        navigation.navigate('Profile');
    }

  return (
    <View>
      <Text>Home Page</Text>
      
      {/* <TouchableOpacity onPress={() => navigation.navigate('Profile')}> */}
      {/* <TouchableOpacity onPress={naviagtion.navigate('profile')}> */}
        {/* <Text style={{alignItems:'center',marginTop:10}}>Home</Text> */}
        <Button title='Go to profile' onPress={() => navigation.navigate('Profile')} />
      {/* </TouchableOpacity> */}
      
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})