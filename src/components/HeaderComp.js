import React from 'react'
import { StyleSheet, Text } from 'react-native'

export const HeaderComp = () =>{
    return(<Text style ={styles.signintxt} title = "Sign In">Sign In</Text>)
}

const styles = StyleSheet.create({
    signintxt: {
        paddingBottom: 50,
        fontWeight: 'bold',
        fontSize: 24,
        alignSelf: 'center'
    }
});