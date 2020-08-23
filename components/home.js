import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView,TextInput } from 'react-native';
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
    // const search=(event)=>{
    //     let searchV=event
    //     if(searchV===''){

    //     }
    // }
    return (
        <View style={mystyles.maincontainer}>
            <Header>
            
            </Header>
            <br></br>
            <View style={mystyles.search}>
                <TextInput placeholder="Search Products Here" ></TextInput> 
            </View>
<br></br><br></br>

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
    },
    search:{
        backgroundColor:'gold',
        padding:10,
        fontSize:25,
        marginBottom:10,
        borderStartWidth : 2,
        borderEndWidth : 3,
        borderTopWidth : 1,
        boderLeftWidth: 2,
        borderRightWidth: 3,
        borderBottomWidth : 4,
        borderRadius:10,
        borderColor:'black',
        // borderRightWidth: 30,
        // borderLeftWidth: 30,
        height: 50,
        borderColor: "#FFFFFF",
    }
   
})
