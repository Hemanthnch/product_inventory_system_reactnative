import React from 'react';
import {useNavigation} from '@react-navigation/native' 
import { StyleSheet, Text, View, Button, TouchableOpacity,TextInput } from "react-native";

export default function Header( ){
    const navigation=useNavigation();
    return (
        <View style={mystyles.header}>
            <Text style={mystyles.heading}>Product Inventory System</Text>  
           
            
        <View style={mystyles.buttons}>
            <Button onPress ={()=>navigation.navigate('AddProduct')} title="Add Product"></Button>
         
   
        
            
        </View>
        </View>   
    )
}

const mystyles = StyleSheet.create({
    header:{
        height:80,
        backgroundColor:'lightblue'
    },
    heading:{
        fontWeight:'bold',
        textAlign:'center',
        paddingTop:35,
        fontSize:30
    },
    buttons:{
        padding:12,
        marginTop:60
        
    },
    
})

