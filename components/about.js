import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView,Button } from 'react-native';
import axios from 'axios'
import Header from './header'
import { useNavigation } from '@react-navigation/native';

export default function AboutComponent(props) {
    console.log(props)
    // const detail=props.route.params.item
    const detail = props.route.params.item
    const navigation =useNavigation();
    function productDelete(){
        axios.delete('http://localhost:3000/allProducts/'+detail)
        .then(response =>{
            console.log(response)
            navigation.navigate('Home')
        },error=>{
            console.error(error)
        })
    }
    const [product, setProducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/allProducts/' + detail)
            .then(res => {
                console.log(res.data)
                setProducts(res.data)
            })
    },[])
    return (
        <View style={mystyles.maincontainer}>
            <Header></Header>

            <ScrollView>
                {

                    <View key={product.id}>
                        
                            <Text style={mystyles.listitem}>
                                <img src={product.productImage}></img>
                                <br></br>
                                Product Name : {product.productName}
                                <br></br>
                                Product Price : {product.productPrice}
                                <br></br>
                                Product Stock : {product.productStock}
                                <br></br>
                                Product Description : {product.productDescription}
                                <br></br>
                                Product Category : {product.productCategory}
                                <br></br>
                                <Button style={mystyles.edit} title={"Edit"} color="green" onPress={() => { navigation.navigate('EditProduct', { item: product.id }) }}></Button>
                                &nbsp;
                                <Button title={"Delete"} color="red" onPress={productDelete}></Button></Text>
                    </View>

                }
            </ScrollView>
        </View>
    );
}
const mystyles = StyleSheet.create({
    maincontainer: {
        backgroundColor: 'white',
        flex: 1,
        // alignItems:'center',
        // justifyContent:'center'
    },
    listitem: {
        marginTop: 20,
        fontSize: 30,
        backgroundColor: 'cornflowerblue',
        padding: 20,
        color: 'black'
    },
    edit:{
        backgroundColor:'green'
    }
})
