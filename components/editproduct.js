import React ,{ useState, useEffect }from 'react';
import { View, StyleSheet, Text,Picker, TouchableOpacity,Button, ScrollView, TextInput } from 'react-native';
import axios from 'axios'
import {useNavigation} from '@react-navigation/native'
import Header from './header'

export default function EditProductComponent(props){
    let detail = props.route.params.item
     console.log(props)
    console.log(detail)
    const navigation=useNavigation();
    let [newproduct, setProducts] = useState({
        id:'',
        productName:'',
        productImage:'',
        productPrice:'',
        productDescription:'',
        productStock:'',
        productCategory:''

    });
    
    useEffect(() => {
        axios.get('http://localhost:3000/allProducts/' + detail)
            .then(res => {
                console.log(res.data)
                setProducts(res.data)
            })
    },[])
    function getProductName(value){
        let productName = 'productName';
        let event = value;
        newproduct[productName]=event
        console.log(newproduct)
        setProducts(newproduct)
    }
    function getProductImage(value){
        let productImage = 'productImage';
        let event = value;
        newproduct[productImage]=event
        console.log(newproduct)
        setProducts(newproduct)
    }
    function getProductPrice(value){
        let productPrice = 'productPrice';
        let event = value;
        newproduct[productPrice]=event
        console.log(newproduct)
        setProducts(newproduct)
    }
    function getProductStock(value){
        let productStock = 'productStock';
        let event = value;
        newproduct[productStock]=event
        console.log(newproduct)
        setProducts(newproduct)
    }
    function getProductDescription(value){
        let productDescription = 'productDescription';
        let event = value;
        newproduct[productDescription]=event
        console.log(newproduct)
        setProducts(newproduct)
    }
    function getProductCategory(value){
        let productCategory = 'productCategory';
        let event = value;
        newproduct[productCategory]=event
        console.log(newproduct)
        setProducts(newproduct)
    }
    function editProduct() {
        let productRequestBody=newproduct
            
        
        console.log(productRequestBody)
        axios.put('http://localhost:3000/allProducts/'+newproduct['id'],productRequestBody)
            .then(res => {
                console.log(res.data)
                navigation.navigate('Home')
            },error=>{
                console.error(error)
            })
    }
    return(
        <View style={mystyles.maincontainer}>
        <Header></Header>
    <ScrollView>
    <View >
        <TextInput style={mystyles.listitem} name="productName" placeholder="Enter Product Name" value={newproduct['productName']} onChangeText={getProductName}></TextInput>
        <TextInput style={mystyles.listitem} name="productImage" placeholder="Enter Product Image URL" value={newproduct['productImage']} onChangeText={getProductImage}></TextInput>
        <TextInput style={mystyles.listitem} name="productPrice" keyboardType={'number-pad'} placeholder="Enter Product Price" value={newproduct['productPrice']} onChangeText={getProductPrice}></TextInput>
        <TextInput style={mystyles.listitem} name="productStock" keyboardType={'number-pad'} placeholder="Enter Product Stock"value={newproduct['productStock']} onChangeText={getProductStock}></TextInput>
        <TextInput style={mystyles.listitem} name="productDescription" placeholder="Enter Product Description" value={newproduct['productDescription']} onChangeText={getProductDescription}></TextInput>
        <Picker style={mystyles.listitem} name="productCategory" placeholder="Enter Product Category" value={newproduct['productCategory']} onValueChange={getProductCategory}>
            <Picker.Item label="Select Product Category"></Picker.Item>
            <Picker.Item label="Electronics" value="electronics"></Picker.Item>
            <Picker.Item label="Stationary" value="stationary"></Picker.Item>
            <Picker.Item label="Groceries" value="groceries"></Picker.Item>
            <Picker.Item label="Plumbing" value="plumbing"></Picker.Item>
        </Picker>
    </View>
    </ScrollView>
    <Button style={mystyles.button} onPress ={()=>editProduct()} title="Edit Product"></Button>
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


