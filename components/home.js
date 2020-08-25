import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, TextInput,Button } from 'react-native';
import axios from 'axios'
import Header from './header'

export default function HomeComponent({ navigation }) {


    const [products, setProducts] = useState([])
    const [permenantusers, setpermenantUsers] = useState([])



    useEffect(() => {
        axios.get('http://localhost:3000/allProducts')
            .then(res => {
                console.log(res.data)
                setProducts(res.data)
                setpermenantUsers(res.data)
            })

    }, [])

    function getSearch(event) {
        let product = permenantusers.filter((fproduct) => {
            return fproduct.productName.toLowerCase().includes(event.toLowerCase())
        })
        setProducts(product)
    }

    return (
        <View style={mystyles.maincontainer}>
            <Header></Header>
            <br></br>
            <View style={mystyles.search}>
                <TextInput placeholder="Search Products Here" onChangeText={getSearch} ></TextInput>
            </View>
            <View style={mystyles.buttons}>
                <Button onPress={() => navigation.navigate('AddProduct')} title="Add Product"></Button>
            </View>
           

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
        backgroundColor: 'cornflowerblue',
        padding: 20,
        color: 'black'
    },
    search: {
        backgroundColor: 'gold',
        padding: 7,
        fontSize: 10,
        marginBottom: 10,
        borderStartWidth: 2,
        borderEndWidth: 3,
        borderTopWidth: 1,
        boderLeftWidth: 2,
        borderRightWidth: 0,
        borderBottomWidth: 2,
        borderRadius: 10,
        borderColor: 'black',
        // borderRightWidth: 30,
        // borderLeftWidth: 30,
        height: 35,
        borderColor: "#FFFFFF",
    },
    buttons:{
        padding:12,
        marginTop:1
        
    }

})
