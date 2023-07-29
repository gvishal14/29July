import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Home';
import Profile from './src/Profile';
import ProductList from './src/ProductList';
import AddProduct from './src/AddProduct';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
   
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name='Profile' component={Profile}/>
          <Stack.Screen name="Products" component={ProductList}/>
          <Stack.Screen name="AddProduct" component={AddProduct}/>
          
        </Stack.Navigator>
      </NavigationContainer>
    
    
       
  )
}

export default App

const styles = StyleSheet.create({})