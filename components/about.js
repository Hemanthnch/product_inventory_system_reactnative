import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios'
import Header from './header'

export default function AboutComponent(props) {
    // console.log(props)
    // const detail=props.route.params.item
    const detail = props.route.params.item

    const [product, setProducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/allProducts/' + detail)
            .then(res => {
                console.log(res.data)
                setProducts(res.data)
            })
    })
    return (
        <View style={mystyles.maincontainer}>
            <Header></Header>

            <ScrollView>
                {

                    <View key={product.id}>
                        <TouchableOpacity>
                            <Text style={mystyles.listitem}><img src={product.productImage}></img><br></br>Product Name : {product.productName}<br></br>Product Price : {product.productPrice}<br></br>Product Stock : {product.productStock}<br></br>Product Description : {product.productDescription}<br></br>Product Category : {product.productCategory}</Text>
                        </TouchableOpacity>
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
        //alignItems:'center',
        //justifyContent:'center'
    },
    listitem: {
        marginTop: 20,
        fontSize: 30,
        backgroundColor: 'cyan',
        padding: 20,
        color: 'purple'
    }
})
