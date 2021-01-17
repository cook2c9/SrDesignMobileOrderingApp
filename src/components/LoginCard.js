import React from 'react'
import { StyleSheet, View } from 'react-native'

import { HeaderComp } from '../components/HeaderComp';
import { EmailComp } from '../components/EmailComp';
import { PasswordComp } from '../components/PasswordComp';
import { LoginButton, SignUpButton } from '../components/Button'
import { TitleComp } from '../components/TitleComp'

const LoginCard = () =>{
    return(
        <View style ={styles.card}>
            <TitleComp />
            <HeaderComp />
            <EmailComp />
            <PasswordComp />
            <LoginButton />
            <SignUpButton />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        marginTop: 100,
        alignSelf: 'center',
        backgroundColor: '#ffffff',
        width: '80%',
        height: '50%',
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 5,
        },
        shadowOpacity: 0.36,
        shadowRadius: 8,
        elevation: 11,
        borderRadius:10,
        borderWidth: 1,
        borderColor: '#fff'
    }
});

export default LoginCard;