import React ,{ useState, useEffect }from 'react';
import { View, StyleSheet, Text,Picker, TouchableOpacity,Button, ScrollView, TextInput } from 'react-native';
import axios from 'axios'
import {useNavigation} from '@react-navigation/native'
import Header from './header'

export default function AddProductComponent() {
    const navigation=useNavigation();
    let [products, setProducts] = useState({
        id:'',
        productName:'',
        productImage:'',
        productPrice:'',
        productDescription:'',
        productStock:'',
        productCategory:''

    })
    
    function getProductName(value){
        console.log(value)
        products['productName']=value
        setProducts(products)
    }
    function getProductImage(value){
        console.log(value)
        products['productImage']=value
        setProducts(products)
    }
    function getProductPrice(value){
        console.log(value)
        products['productPrice']=value
        setProducts(products)
    }
    function getProductStock(value){
        console.log(value)
        products['productStock']=value
        setProducts(products)
    }
    function getProductDescription(value){
        console.log(value)
        products['productDescription']=value
        setProducts(products)
    }
    function getProductCategory(value){
        console.log(value)
        products['productCategory']=value
        setProducts(products)
    }
    function addProduct() {
        let productRequestBody=products
            
        
        console.log(productRequestBody)
        axios.post('http://localhost:3000/allProducts/',productRequestBody)
            .then(res => {
                console.log(res.data)
                navigation.navigate('Home')
            },error=>{
                console.error(error)
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
            <Picker style={mystyles.listitem} placeholder="Enter Product Category"onValueChange={getProductCategory}>
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
        backgroundColor: 'cornflowerblue',
        padding: 2,
        color: 'black'
    },
    button:{
        borderRadius:8,
        paddingVertical:14,
        paddingHorizontal:10,
        backgroundColor:'green'
    },
    
})