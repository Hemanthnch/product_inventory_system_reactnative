import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios'
import Header from './header'

export default function HomeComponent({ navigation }) {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/allProducts')
            .then(res => {
                console.log(res.data)
                setProducts(res.data)
            })
    })

    return (
        <View style={mystyles.maincontainer}>
            <Header></Header>
<br></br><br></br><br></br>

            <ScrollView>
                {
                    products.map(product => {
                        return (
                            <View key={product.id}>
                                <TouchableOpacity onPress={() => navigation.navigate('About', { item: product.id })}>
                                    <Text style={mystyles.listitem}><img src={product.productImage}></img><br></br>{product.productName}</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    })
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
