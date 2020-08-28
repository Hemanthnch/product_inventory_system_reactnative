import React from 'react';


import { createStackNavigator } from "@react-navigation/stack";
import HomeComponent from "../components/home";
import AboutComponent from "../components/about";
import { NavigationContainer } from "@react-navigation/native";
// import ContactComponent from '../components/contact';
import AddProductComponent from "../components/addproduct";
import EditProductComponent from "../components/editproduct"
const Stack = createStackNavigator()


function MyStackNavigator(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Home' 
                            screenOptions={{
                                gestureEnabled:true,
                                headerStyle:{
                                    backgroundColor:'wheat',
                                    height:100
                                }
                                }} 
                                headerMode='float'>
                <Stack.Screen name="About" component={AboutComponent}></Stack.Screen>
                <Stack.Screen name="Home" component={HomeComponent}></Stack.Screen>
                <Stack.Screen name="AddProduct" component={AddProductComponent}></Stack.Screen>
                <Stack.Screen name="EditProduct" component={EditProductComponent}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MyStackNavigator