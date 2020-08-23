import React ,{ useState, useEffect }from 'react';
import { View, StyleSheet, Text,Picker, TouchableOpacity,Button, ScrollView, TextInput } from 'react-native';
import axios from 'axios'
import {useNavigation} from '@react-navigation/native'
import Header from './header'

export default function AddProductComponent() {
    const navigation=useNavigation();
    const [products, setProducts] = useState({
        products:'',
        productImage:'',
        productPrice:'',
        productDescription:'',
        productStock:'',
        productCategory:''

    })
    
    const getProductName=(value)=>{
        setProducts({productName:value})
    }
    const getProductImage=(value)=>{
        console.log(value)
        setProducts({productImage:value})
    }
    const getProductPrice=(value)=>{
        setProducts({productPrice:value})
    }
    const getProductStock=(value)=>{
        setProducts({productStock:value})
    }
    const getProductDescription=(value)=>{
        setProducts({productDescription:value})
    }
    const getProductCategory=(value)=>{
        setProducts({productCategory:value})
    }
    const addProduct=() => {
        const productRequestBody={
            "productName":products['productName'],
            "productImage":products['productImage'],
            "productPrice":products['productPrice'],
            "productStock":products['productStock'],
            "productDescription":products['productDescription'],
            "productCategory":products['productCategory']
        }
        console.log(productRequestBody)
        axios.post('http://localhost:3000/allProducts',productRequestBody)
            .then(res => {
                console.log(res.data)
                navigation.navigate('Home')
            })
    }
    return(
        <View style={mystyles.maincontainer}>
        <ScrollView>
        <View >
            <TextInput style={mystyles.listitem} placeholder="Enter Product Name" onChangeText={getProductName}></TextInput>
            <TextInput style={mystyles.listitem} placeholder="Enter Product Image URL" onChangeText={getProductImage}></TextInput>
            <TextInput style={mystyles.listitem} placeholder="Enter Product Price"onChangeText={getProductPrice}></TextInput>
            <TextInput style={mystyles.listitem} placeholder="Enter Product Stock"onChangeText={getProductStock}></TextInput>
            <TextInput style={mystyles.listitem} placeholder="Enter Product Description"onChangeText={getProductDescription}></TextInput>
            <Picker style={mystyles.listitem} placeholder="Enter Product Category"onChangeText={getProductCategory}>
                <Picker.Item label="Select Product Category"></Picker.Item>
                <Picker.Item label="Electronics" value="electronics"></Picker.Item>
                <Picker.Item label="Stationary" value="stationary"></Picker.Item>
                <Picker.Item label="Groceries" value="groceries"></Picker.Item>
                <Picker.Item label="Plumbing" value="plumbing"></Picker.Item>
            </Picker>
        </View>
        </ScrollView>
        <Button style={mystyles.button} onPress ={()=>addProduct()} title="Add Product"></Button>
        </View>
    );

}
const mystyles = StyleSheet.create({
    maincontainer: {
        backgroundColor: 'white',
        flex: 1,
        //alignItems:'center',
        //justifyContent:'center'
    },
    listitem: {
       // width:200,
        marginTop: 20,
        fontSize: 30,
        backgroundColor: 'cyan',
        padding: 2,
        color: 'purple'
    },
    button:{
        borderRadius:8,
        paddingVertical:14,
        paddingHorizontal:10,
        backgroundColor:'green'
    },
    
})